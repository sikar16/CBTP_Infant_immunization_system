import React from 'react';
import styled from 'styled-components';
// import { useHistory } from 'react-router-dom';

// Styled component for the unauthorized page container
const UnauthorizedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

// Styled component for the title
const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

// Styled component for the message
const Message = styled.p`
  font-size: 1.2rem;
`;

// Styled component for the back button
const BackButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

// UnauthorizedPage component
const UnauthorizedPage = () => {
  // const history = useHistory();

  const handleBack = () => {
    history.goBack();
  };

  return (
    <UnauthorizedContainer>
      <Title>Unauthorized Access</Title>
      <Message>
        Sorry, you do not have permission to access this page.
      </Message>
      <BackButton onClick={handleBack}>Back</BackButton>
    </UnauthorizedContainer>
  );
};

export default UnauthorizedPage;
