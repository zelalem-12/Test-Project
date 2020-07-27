import React, { useState} from 'react';
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';
import {color, fontSize, space} from 'styled-system';


const Header: React.FC = () => {

  const [color, setColor] = useState<string>("#000000");
    window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
      if (scrolled > 0 && color === "#000000"){
        document.getElementsByTagName("nav")[0].style.backgroundColor = "#9FA5A3";
      setColor("#ffffff");
    }
      if (scrolled === 0 && color === "#ffffff"){
        document.getElementsByTagName("nav")[0].style.backgroundColor = "transparent";
        setColor("#000000");
      }
  });
    return (
      <Wrapper color={color} fontSize={18} mb={20}>
        <div>Test Project</div>
        <NavLink color={color} activeStyle={{
          fontWeight: "bold",
          color: "#07e4d5"
        }} to="/add-post">Add Post</NavLink>
        <NavLink color={color} exact activeStyle={{
          fontWeight: "bold",
          color: "#07e4d5"
        }} to="/posts">Posts</NavLink>
        
        <NavLink color={color} activeStyle={{
          fontWeight: "bold",   
          color: "#07e4d5"
        }} to="/albums">Albums</NavLink>

        <NavLink color={color} activeStyle={{
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