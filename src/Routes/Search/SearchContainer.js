import React from 'react';
import SearchPresenter from './SearchPresenter';

export default class extends React.Component {
  state = {
    movieResults: null,
    tvResults: null,
    searchTerm: '',
    error: null,
    loading: false // 사용자가 검색하기 전에는 결과를 로딩하지 않음
  };

  render() {
    const { movieResults, tvResults, searchTerm, error, loading } = this.state;
    return (
      <SearchPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        searchTerm={searchTerm}
        error={error}
        loading={loading}
      />
    );
  }
}
