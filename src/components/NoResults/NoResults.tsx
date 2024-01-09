
import React from 'react';
import styled from 'styled-components';

const NoResultsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; 
  text-align: center;
`;

const NoResults = () => (
  <NoResultsContainer>
    <div>
      <h2>No Search Results Found</h2>
      <p>Try different keywords or remove search filters.</p>
    </div>
  </NoResultsContainer>
);

export default NoResults;
