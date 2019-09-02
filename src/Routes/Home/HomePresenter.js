import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Poster from "Components/Poster";
import Loader from "Components/Loader";
import Message from "Components/Message";

const Container = styled.div`
  padding: 0 20px;
`;

const HomePresenter = ({ nowPlaying, upcoming, popular, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now Playing">
          {nowPlaying.map(movie => (
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
      {popular && popular.length > 0 && (
        <Section title="Popular">
          {popular.map(movie => (
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
      {upcoming && upcoming.length > 0 && (
        <Section title="Upcoming">
          {upcoming.map(movie => (
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
      {error && <Message color="#b71540" text={error} />}
    </Container>
  );

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default HomePresenter;
