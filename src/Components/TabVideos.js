import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 10px;
  width: 218px;
  cursor: pointer;
`;

const Thumbnail = styled.div`
  width: 100%;
  height: 122px;
  background-image: url(${prop => prop.imgUrl});
  background-size: cover;
  background-position: center center;
  margin-bottom: 5px;
`;

const Title = styled.span`
  display: block;
  width: 100%;
`;

const Video = ({ thumbnail, title, handleShow }) => (
  <Container id={thumbnail} title={title} onClick={handleShow}>
    <Thumbnail
      imgUrl={`https://img.youtube.com/vi/${thumbnail}/hqdefault.jpg`}
    />
    <Title>{title}</Title>
  </Container>
);

export default Video;
