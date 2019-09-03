import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Poster from "Components/Poster";
import Loader from "Components/Loader";
import Message from "Components/Message";

const Container = styled.div`
  padding: 20px;
`;

const TVPresenter = ({ topRated, popular, airingToday, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {topRated && topRated.length > 0 && (
        <Section title="Top Rated">
          {topRated.map(show => (
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
      {popular && popular.length > 0 && (
        <Section title="Popular">
          {popular.map(show => (
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
      {airingToday && airingToday.length > 0 && (
        <Section title="Airing Today">
          {airingToday.map(show => (
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
    </Container>
  );

TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default TVPresenter;
