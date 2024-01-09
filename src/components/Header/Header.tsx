
import React from 'react';
import styled from 'styled-components';



import lightLogo from '../../assets/nxt-watch-logo-light-theme-img.png';
import darkLogo from '../../assets/nxt-watch-logo-dark-theme-img.png';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  background-color: #f9f9f9; 
  padding: 10px 20px;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.1);
`;

const LogoContainer = styled.div`
  flex-grow: 1;
`;

const ThemeToggle = styled.button`
  margin-right: 20px;
  background: none;
  border: none;
  cursor: pointer;
`;

const LogoutButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const Header = ({ onThemeToggle, onLogout, theme }: any) => (
  <HeaderContainer>
    <LogoContainer>
    <img src={theme === 'light' ? lightLogo : darkLogo} alt="NXT Watch" />
    </LogoContainer>
    <ThemeToggle onClick={onThemeToggle}>
      <img src="" alt="Theme" />
    </ThemeToggle>
    <LogoutButton onClick={onLogout}>
      <button>Logout</button>
    </LogoutButton>
  </HeaderContainer>
);

export default Header;
