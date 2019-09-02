import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  font-size: 13px;
`;

const Image = styled.div`
  height: 180px;
  background-image: url(${prop => prop.imgUrl});
  background-size: cover;
  background-position: center center;
  border-radius: 4px;
  position: relative;
  transition: all 0.1s linear;
`;

const Rating = styled.span`
  position: absolute;
  right: 7px;
  bottom: 7px;
  opacity: 0;
`;

const ImgContainer = styled.div`
  position: relative;
  margin-bottom: 5px;
  &:hover {
    ${Image} {
      opacity: 0.2;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;

const Title = styled.span`
  display: block;
  margin-bottom: 3px;
`;

const Year = styled.span`
  color: rgba(225, 225, 225, 0.5);
`;

const Poster = ({ isMovie = false, id, imgUrl, title, rating, year }) => (
  <Link to={isMovie ? `/movie/${id}` : `tvshow/${id}`}>
    <Container>
      <ImgContainer>
        <Image
          imgUrl={
            imgUrl
              ? `https://image.tmdb.org/t/p/w300${imgUrl}`
              : require("../assets/noPosterSmall.png")
          }
        />
        <Rating>
          <span role="img" aria-label="rating">
            ⭐
          </span>
          {rating}/10
        </Rating>
      </ImgContainer>
      <Title>{title}</Title>
      <Year>{year && year.substring(0, 4)}</Year>
    </Container>
  </Link>
);

Poster.propTypes = {
  isMovie: PropTypes.bool,
  id: PropTypes.number.isRequired,
  imgUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string
};

export default Poster;
