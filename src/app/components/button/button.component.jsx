import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: #e0e0e0;
  box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2);
  border-radius: 6px;
  color: #3f3f3f;
  padding: 8px 16px;
  border: none;
  font-size: 1.4rem;
`;

export const Button = ({ children }) => <StyledButton>{children}</StyledButton>;
