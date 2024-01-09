import React, { useState } from 'react';
import styled from 'styled-components';


const Logo = styled.img`
  display: block;
  margin: 0 auto 20px;
  width: 150px; 
`;


const LoginContainer = styled.div<{ theme: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${props => props.theme === 'light' ? '#f9f9f9' : '#181818'};
`;

const LoginForm = styled.form<{ theme: string }>`
  background-color: ${props => props.theme === 'light' ? '#fff' : '#0f0f0f'};
  border-radius: 8px;
  padding: 40px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #4f46e5;
  color: white;
  cursor: pointer;
`;

const ErrorMsg = styled.p`
  color: #ff0b37;
  font-size: 0.875rem;
`;


export { LoginContainer, LoginForm, Input, Button, ErrorMsg, Logo };