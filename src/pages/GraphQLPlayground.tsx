import React from "react";
import styled from "styled-components";
import { useQuery, gql } from "@apollo/client";

const GET_ALL_TASKS = gql`
  query tasks {
    tasks {
      id
      description
    }
  }
`;
const GraphQLPlayground = () => {
  const { loading, error, data } = useQuery(GET_ALL_TASKS);

  console.log(data);
  return (
    <>
      <MainWrapper>
        <MainContainer>
          <MainPageTitleContainer>
            Welcome to the GraphQL Playground
          </MainPageTitleContainer>
          <MainPageBodyContainer>
            This is the MainContainer
          </MainPageBodyContainer>
        </MainContainer>
      </MainWrapper>
    </>
  );
};

export default GraphQLPlayground;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MainContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  border: 1px solid red;
`;

const MainPageTitleContainer = styled.div`
  font-size: 1.5rem;
  color: white;
  background-color: black;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainPageBodyContainer = styled.div`
  background-color: grey;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;
