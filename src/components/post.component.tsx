import React from 'react';
import styled from 'styled-components';


interface PostType{
    id: number;
    title: string;
    body: string
}

const Post: React.FC<PostType> = ({id, title, body}) => {

    const handleCLick = (e: React.FormEvent<HTMLInputElement>): void => {
        e.preventDefault();
        console.log(`I am moving to the this post detail, ${id}`)

    }
    return (
        <PostWrapper onClick={handleCLick} >
            <h4>{title}</h4>
            <p>{body}</p>
        </PostWrapper >
    )
}

export default Post;


const PostWrapper = styled.div`
width: 30%;
margin: 0 10px 30px;
border: solid black 1px;
display: flex;
flex-direction: column;
align-items: center;
justify-conten: center;
padding: 8px;
`