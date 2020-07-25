import React from 'react';
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';
import {color, fontSize, space} from 'styled-system';


const Header: React.FC = () => {
    return (
      <Wrapper color="black" fontSize={18} mb={20}>
        <div>Test Project</div>
        <NavLink exact activeStyle={{
          fontWeight: "bold",
          color: "#07e4d5"
        }} to="/posts">Posts</NavLink>
        
        <NavLink activeStyle={{
          fontWeight: "bold",   
          color: "#07e4d5"
        }} to="/albums">Albums</NavLink>

        <NavLink activeStyle={{
          fontWeight: "bold",
          color: "#07e4d5"
        }} to="/todos">Todos</NavLink>
      </Wrapper>
    );
};

export default Header;

const Wrapper = styled.nav`
  ${color}
  ${fontSize}
  ${space}
  z-index: 1000;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  & * {
    margin: 0 5px;
    text-decoration: none;
    color: black;
  }
  & div:first-child {
    margin-right: auto;
  }
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  & a:hover{
      color: #07e4d5;
      cursor: pointer;
  }
`;