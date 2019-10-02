import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 10px;
  width: 118px;
`;

const Thumbnail = styled.div`
  width: 100%;
  height: 150px;
  background-image: url(${prop => prop.posUrl});
  background-size: cover;
  background-position: center center;
  margin-bottom: 5px;
`;

const Title = styled.span`
  display: block;
  width: 100%;
`;

const TabSeries = ({ isMovie, id, posUrl, title }) => (
  <Link to={isMovie ? `/movie/${id}` : "#"}>
    <Container>
      <Thumbnail
        posUrl={
          posUrl
            ? `https://image.tmdb.org/t/p/w300${posUrl}`
            : require("../assets/noPosterSmall.png")
        }
      />
      <Title>{title}</Title>
    </Container>
  </Link>
);

export default TabSeries;
