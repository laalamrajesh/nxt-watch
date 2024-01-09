
import React from 'react';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; 
  text-align: center;
`;

const ErrorComponent = ({ message, retry }: any) => (
  <ErrorContainer>
    <div>
      <h2>Oops! Something Went Wrong</h2>
      <p>{message}</p>
      <button onClick={retry}>Retry</button>
    </div>
  </ErrorContainer>
);

export default ErrorComponent;
