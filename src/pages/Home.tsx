import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <>
      <TemporaryHeader>this is the home page</TemporaryHeader>
    </>
  );
};

export default Home;

const TemporaryHeader = styled.h1`
  color: red;
  font-size: 2rem;
`;
