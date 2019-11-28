import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  cursor: ${props => (props.ismovie ? "cursor" : "default")};
`;

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
  <StyledLink to={isMovie ? `/movie/${id}` : "#"} ismovie={isMovie ? 1 : 0}>
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
  </StyledLink>
);

export default TabSeries;
