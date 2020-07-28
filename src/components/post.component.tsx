import React, { MouseEvent } from 'react';
import styled from 'styled-components';
import {
  layout, space, border, typography, flexbox
} from 'styled-system';
import { withRouter, RouteComponentProps} from 'react-router-dom';
import CustomButton from './CustomButton';


interface PostType{
    id: number;
    title: string;
    body: string,
}



const Post: React.FC<RouteComponentProps<{}> &  PostType> = ({id, title, body,history}) => {

    const handleCLick = (e: React.MouseEvent<HTMLInputElement>): void => {
        e.preventDefault();
         history.push(`/posts/${id}`)
    }

    return (
      <PostWrapper 
        width={[1, 1 / 2, 1 / 4]}
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='space-between'
        border='1px solid'
        p='0.5em'
        m='2em'
        p={[2, 3]}
        m={[2, 3]}
        fontFamily='Times New Roman'
       >
        <div 
          display='flex'
          flexDirection='column'
          justifyContent='space-between'
        >
          <Title
          >{title}</Title>
          <Body  >{body}</Body>
        </div>
        <CustomButton 
        onClick={handleCLick} >
              See more
        </CustomButton>
    </PostWrapper>
    );
}

export default withRouter(Post);


const PostWrapper = styled.h4`
${layout}
${border}
${space}
${typography}
${flexbox}
   &:hover{
    button {
      background-color:black;  
      color: white;
    }
   }
`

const Title = styled.span`
text-transform: uppercase;
margin: 0 1rem;
`

const Body = styled.p`
&::first-letter{
  font-size: 2rem;
  text-transform: uppercase;
}

`



  