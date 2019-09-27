import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const Thumbnail = styled.div`
  width: 200px;
  height: 150px;
  background-image: url(${prop => prop.imgUrl});
  background-size: cover;
  background-position: center center;
`;

const Title = styled.span``;

const Video = ({ thumbnail, title }) => (
  <Container>
    <Thumbnail
      imgUrl={`https://img.youtube.com/vi/${thumbnail}/hqdefault.jpg`}
    />
    <Title>{title}</Title>
  </Container>
);

export default Video;
