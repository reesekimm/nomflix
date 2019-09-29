import React from "react";
import styled from "styled-components";

const Title = styled.div`
  &::before {
    content: "\\1F3A5";
  }
  font-size: 17px;
  padding: 10px 0;
`;

const TabProd = ({ title }) => <Title>　{title}</Title>;

export default TabProd;
