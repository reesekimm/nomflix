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

    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push("/");
    }

    let result = null;
    try {
      isMovie
        ? ({ data: result } = await movieApi.movieDetail(parsedId))
        : ({ data: result } = await tvApi.tvDetail(parsedId));
    } catch {
      this.setState({ error: "Oops! Something went wrong." });
    } finally {
      this.setState({ loading: false, result });
    }
  }

  render() {
    const { result, error, loading, isMovie } = this.state;
    return (
      <DetailPresenter
        result={result}
        error={error}
        loading={loading}
        isMovie={isMovie}
      />
    );
  }
}
