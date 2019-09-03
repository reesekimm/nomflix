import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Message from "Components/Message";

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
`;

const Item = styled.span``;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  font-size: 15px;
  opacity: 0.7;
  line-height: 1.5;
  width: 50%;
`;

const DetailPresenter = ({ result, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <Backdrop
        bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
      ></Backdrop>
      <Contents>
        <Cover
          bgImage={
            `https://image.tmdb.org/t/p/original${result.poster_path}` ||
            require("../../asset/noPosterSmall.png")
          }
        />
        <Info>
          <Title>{result.original_title || result.original_name}</Title>
          <ItemContainer>
            <Item>
              {(result.release_date || result.first_air_date).substring(0, 4)}
            </Item>
            <Divider>●</Divider>
            <Item>{result.runtime || result.episode_run_time[0]} min</Item>
            <Divider>●</Divider>
            <Item>
              {result.genres &&
                result.genres.map((genre, idx) =>
                  idx < result.genres.length - 1
                    ? `${genre.name} / `
                    : genre.name
                )}
            </Item>
          </ItemContainer>
          <Overview>{result.overview}</Overview>
        </Info>
      </Contents>
      {error && <Message color="#b71540" text={error} />}
    </Container>
  );

DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default DetailPresenter;
