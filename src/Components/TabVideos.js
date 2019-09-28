import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 10px;
`;

const Thumbnail = styled.div`
  width: 218px;
  height: 122px;
  background-image: url(${prop => prop.imgUrl});
  background-size: cover;
  background-position: center center;
  margin-bottom: 10px;
`;

const Title = styled.span`
  display: block;
  width: 200px;
`;

const Video = ({ thumbnail, title }) => (
  <Container>
    <Thumbnail
      imgUrl={`https://img.youtube.com/vi/${thumbnail}/hqdefault.jpg`}
    />
    <Title>{title}</Title>
  </Container>
);

export default Video;
