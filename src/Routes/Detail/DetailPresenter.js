import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "Components/Loader";
import Message from "Components/Message";
import TabBlock from "Components/TabBlock";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const Contents = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
`;

const Cover = styled.div`
  width: 402px;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
`;

const Info = styled.div`
  width: 70%;
  margin-left: 20px;
`;

const Title = styled.h3`
  font-size: 40px;
  font-weight: 700;
`;

const ItemContainer = styled.div`
  margin: 20px 0;
  height: 20px;
  display: flex;
  align-items: center;
`;

const Item = styled.span``;

const Imdb = styled.div`
  width: 40px;
  height: 20px;
  background-image: url(${props => props.logoImg});
  background-position: center center;
  background-size: cover;
  border-radius: 2px;
  display: inline-block;
`;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  font-size: 15px;
  opacity: 0.7;
  line-height: 1.5;
  width: 100%;
`;

const DetailPresenter = ({ result, collection, error, loading, isMovie }) =>
  loading ? (
    <Loader />
  ) : (
    <>
      <Helmet>
        <title>{result.original_title || result.original_name} │ Nomflix</title>
      </Helmet>
      <Container>
        <Backdrop
          bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
        ></Backdrop>
        <Contents>
          <Cover
            bgImage={
              `https://image.tmdb.org/t/p/original${result.poster_path}` ||
              require("../../assets/noPosterSmall.png")
            }
          />
          <Info>
            <Title>{result.original_title || result.original_name}</Title>
            <ItemContainer>
              <Item>
                {(result.release_date || result.first_air_date).substring(0, 4)}
              </Item>
              <Divider>●</Divider>
              <Item>
                {(result.runtime && result.runtime) ||
                  (result.episode_run_time && result.episode_run_time[0])}{" "}
                min
              </Item>
              <Divider>●</Divider>
              <Item>
                {result.genres &&
                  result.genres.map((genre, idx) =>
                    idx < result.genres.length - 1
                      ? `${genre.name} / `
                      : genre.name
                  )}
              </Item>
              {isMovie && (
                <>
                  <Divider>●</Divider>
                  <a
                    href={`https://www.imdb.com/title/${result.imdb_id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Imdb logoImg={require("../../assets/imdb.jpg")} />
                  </a>
                </>
              )}
            </ItemContainer>
            <Overview>{result.overview}</Overview>
            <TabBlock
              videos={result.videos.results}
              series={collection}
              production={result.production_companies}
              isMovie={isMovie}
            />
          </Info>
        </Contents>
        {error && <Message color="#b71540" text={error} />}
      </Container>
    </>
  );

DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default DetailPresenter;
