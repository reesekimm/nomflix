import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "Components/Loader";
import Section from "Components/Section";
import Poster from "Components/Poster";
import Message from "Components/Message";

const Container = styled.div`
  padding: 20px;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`;

const SearchPresenter = ({
  movieResults,
  tvResults,
  searchTerm,
  notFound,
  error,
  loading,
  handleSubmit,
  updateTerm
}) => (
  <>
    <Helmet>
      <title>Search │ Nomflix</title>
    </Helmet>
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          autoFocus
          placeholder="Search Movies or TV Shows..."
          value={searchTerm}
          onChange={updateTerm}
        ></Input>
      </Form>
      {loading ? (
        <Loader />
      ) : (
        <>
          {movieResults && movieResults.length > 0 && (
            <Section title="Movie Results">
              {movieResults.map(movie => (
                <Poster
                  key={movie.id}
                  isMovie={true}
                  id={movie.id}
                  imgUrl={movie.poster_path}
                  title={movie.original_title}
                  rating={movie.vote_average}
                  year={movie.release_date}
                />
              ))}
            </Section>
          )}
          {tvResults && tvResults.length > 0 && (
            <Section title="TV Results">
              {tvResults.map(show => (
                <Poster
                  key={show.id}
                  isMovie={false}
                  id={show.id}
                  imgUrl={show.poster_path}
                  title={show.original_name}
                  rating={show.vote_average}
                  year={show.first_air_date}
                />
              ))}
            </Section>
          )}
          {error && <Message color="#b71540" text={error} />}
          {movieResults &&
            tvResults &&
            !movieResults.length &&
            !tvResults.length && (
              <Message
                color="#dcdde1"
                text={`No results match '${notFound}'`}
              />
            )}
        </>
      )}
    </Container>
  </>
);

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  searchTerm: PropTypes.string,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired
};

export default SearchPresenter;
