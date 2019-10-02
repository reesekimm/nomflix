import React from "react";
import DetailPresenter from "./DetailPresenter";
import { movieApi, tvApi } from "api";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname }
    } = props;
    this.state = {
      result: null,
      collection: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/")
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id }
      },
      history: { push }
    } = this.props;

    const { isMovie } = this.state;

    const parsedId = parseInt(id, 10);
    if (isNaN(parsedId)) {
      return push("/");
    }

    let result = null;
    let collection = null;
    try {
      if (isMovie) {
        ({ data: result } = await movieApi.movieDetail(parsedId));
        if (result.belongs_to_collection) {
          ({ data: collection } = await movieApi.collection(
            result.belongs_to_collection.id
          ));
          collection = collection.parts;
        }
      } else {
        ({ data: result } = await tvApi.tvDetail(parsedId));
        collection = result.seasons;
      }
    } catch {
      this.setState({ error: "Oops! Something went wrong." });
    } finally {
      this.setState({ loading: false, result, collection });
    }
  }

  async componentWillReceiveProps(nextProps) {
    let newResult = null;
    let newId = parseInt(nextProps.location.pathname.slice(7), 10);
    ({ data: newResult } = await movieApi.movieDetail(newId));
    this.setState({ result: newResult });
  }

  render() {
    const { result, collection, error, loading, isMovie } = this.state;
    return (
      <DetailPresenter
        result={result}
        collection={collection}
        error={error}
        loading={loading}
        isMovie={isMovie}
      />
    );
  }
}
