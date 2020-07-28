import React, { useState} from 'react';
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';
import { 
  layout, color, flexbox, position, shadow,  space, typography
    } from 'styled-system'


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
      <Wrapper 
        bg='#ffffff'
        width={1}
        height={40}
        display='flex'
        alignItems='center'
        justifyContent='center'
        position='fixed'
        top='0'
        right='0'
        bottom='0'
        left='0'
        boxShadow="medium"
        zIndex={100}
       >
        <NavLink 
          color='#000000' 
          activeStyle={{ fontWeight: "bold", color: "#07e4d5" }}
        to="/add-post">Add Post</NavLink>
        <NavLink color='#000000' 
          activeStyle={{ fontWeight: "bold", color: "#07e4d5" }}
        to="/posts">Posts</NavLink>
        
        <NavLink color='#000000' 
          activeStyle={{ fontWeight: "bold", color: "#07e4d5" }}
         to="/albums">Albums</NavLink>

        <NavLink color='#000000' 
        activeStyle={{fontWeight: "bold", color: "#07e4d5"}}
         to="/todos">Todos</NavLink>
      </Wrapper>
    );
};

export default Header;

const Wrapper = styled.nav`
  ${layout}
  ${color}
  ${flexbox}
  ${position}
  ${shadow}
  ${space}
  ${typography}
  * {
    margin: 0 0.5rem;
    text-decoration: none;
  }
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  & a:hover{
      color: #07e4d5;
      cursor: pointer;
  }
`;