import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 150px;
  font-size: 20px;
`;

export default () => (
  <Container>
    <span role="img" aria-label="Loading">
      Loading...
    </span>
  </Container>
);
