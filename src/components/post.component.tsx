import React, { MouseEvent } from 'react';
import styled from 'styled-components';
import { withRouter, RouteComponentProps} from 'react-router-dom'
import posts from '../pages/posts';


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
        <PostWrapper onClick={handleCLick} >
            <h4>{title}</h4>
            <p>{body}</p>
        </PostWrapper >
    )
}

export default withRouter(Post);


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