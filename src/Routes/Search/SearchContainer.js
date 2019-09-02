import React from "react";
import SearchPresenter from "./SearchPresenter";
import { movieApi, tvApi } from "api";

export default class extends React.Component {
  state = {
    movieResults: null,
    tvResults: null,
    searchTerm: "",
    notFound: "",
    error: null,
    loading: false // 사용자가 검색하기 전에는 결과를 로딩하지 않음
  };

  handleSubmit = event => {
    event.preventDefault();
    const { searchTerm } = this.state;
    if (searchTerm) {
      this.searchByTerm();
    }
  };

  updateTerm = event => {
    const {
      target: { value }
    } = event;
    this.setState({
      searchTerm: value
    });
  };

  searchByTerm = async () => {
    const { searchTerm, notFound } = this.state;
    this.setState({ loading: true });
    try {
      const {
        data: { results: movieResults }
      } = await movieApi.search(searchTerm);
      const {
        data: { results: tvResults }
      } = await tvApi.search(searchTerm);
      this.setState({ movieResults, tvResults });
      if (!movieResults.length && !tvResults.length) {
        this.setState({ notFound: searchTerm });
      }
    } catch {
      this.setState({ error: "Oops! Something went wrong." });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const {
      movieResults,
      tvResults,
      searchTerm,
      notFound,
      error,
      loading,
      handleSubmit,
      updateTerm
    } = this.state;
    return (
      <SearchPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        searchTerm={searchTerm}
        notFound={notFound}
        error={error}
        loading={loading}
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
      />
    );
  }
}
