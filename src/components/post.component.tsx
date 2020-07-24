import React from 'react';
import styled from 'styled-components';


interface Post{
    id: number;
    title: string;
    body: string
}

const Post =(props: Post) => {

    const handleCLick =(e: any): void => {
        e.preventDefault();
        console.log(`I am moving to the this post detail, ${props.id}`)

    }
    return (
        <PostWrapper onClick={handleCLick} >
            <h4>{props.title}</h4>
            <p>{props.body}</p>
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