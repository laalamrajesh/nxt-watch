
import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #ffffff; 
  padding: 20px;
`;

const Link = styled(NavLink)`
  display: block;
  color: #000000;
  text-decoration: none;
  margin: 10px 0;

  &.active {
    color: #4f46e5;
  }

  &:hover {
    color: #3b82f6;
  }
`;

const Sidebar = (props: any) => (
  <SidebarContainer>
    <Link to="/home" exact activeClassName="active">Home</Link>
    <Link to="/trending" activeClassName="active">Trending</Link>
    <Link to="/gaming" activeClassName="active">Gaming</Link>
    <Link to="/saved-videos" activeClassName="active">Saved Videos</Link>
  </SidebarContainer>
);

export default Sidebar;
    