import React, {useEffect} from 'react';
import {useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components';

import { requestPostDetail } from '../redux/actions/post-action'


interface PostDetailProps {
    match: any
}

interface PostType {
    userId: number,
    id: number;
    title: string;
    body: string
}
interface PostDetailStateType {
    loading?: boolean,
    post?: PostType,
    error?: string
}

const PostDetail: React.FC<PostDetailProps> = ({ match }) => {

    const dispatch = useDispatch();
    const postDetail: PostDetailStateType = useSelector(state => state.postDetail);

    const handleCLick = (e: React.FormEvent<HTMLInputElement>): void => {
        e.preventDefault();
    }
    useEffect(() =>{
        dispatch(requestPostDetail(Number(match.params.id)));
    }, [])
    


    return (
             <PostDetailWrapper>
                 {
                postDetail.loading ? (<h2>...Loading</h2>) :
                postDetail.post && (
                <>
                    <h4>{postDetail.post.title}</h4>
                    <p>{postDetail.post.body}</p>
                    <h5> author: {postDetail.post.userId}</h5>
                </>
                )
                }
        </PostDetailWrapper >
    )
}

export default PostDetail;


const PostDetailWrapper = styled.div`

width: 55%;
margin: 100px auto;
border: solid black 1px;
display: flex;
flex-direction: column;
align-items: center;
justify-conten: center;
padding: 8px;
`