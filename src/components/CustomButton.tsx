import React from 'react';
import styled from 'styled-components';
import {
    layout, typography, color, space, flexbox
} from 'styled-system'


const CustomButton = ({ children, ...otherProps }) => (
    <Button {...otherProps}
    minWidth={[100, 120, 150, 180]}
    width={[1/2, 1/3, 1/4]}
    height= {50}
   lineheight='50px'
   padding= {[2,3]}
   fontSize={[10, 12, 14, 16]} 
   display='flex'  
   justifyContent='center'
    fontFamily='open'
    bg='#ffffff'
    color ='black'
    >
        {children}
    </Button>
);

export default CustomButton;


const Button = styled.button`
  ${layout}
  ${typography}
  ${color}
  ${space}
  ${flexbox}
    text-transform: uppercase;
    cursor: pointer;
    &:hover {
      background-color: black;
      color: white;
      border: 1px solid black;
    }
    `