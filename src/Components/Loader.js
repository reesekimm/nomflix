import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  padding-top: 50px;
  font-size: 30px;
`;

export default () => (
  <Container>
    <span role="img" aria-label="Loading">
      {"\u23F0"}
    </span>
  </Container>
);
