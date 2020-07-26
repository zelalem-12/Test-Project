import React, {useEffect, MouseEvent} from 'react';
import {useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components';

import CustomButton from '../components/CustomButton';
import { requestPostDetail, requestPostDelete } from '../redux/actions/post-action'


interface PostDetailProps {
    match: any,
    history: any
    
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
interface PostDeleteStateType {
    loading?: boolean,
    deleted?: boolean,
    error?: string
}
const PostDetail: React.FC<PostDetailProps> = ({ match, history }) => {

    const dispatch = useDispatch();
    const postDetail: PostDetailStateType = useSelector(state => state.postDetail);

    const postDelete: PostDeleteStateType = useSelector(state => state.postDelete);

    const authorHandleCLick = (e: React.MouseEvent<HTMLButtonElement>): void => {
      e.preventDefault();
    };

     const deleteHandleCLick = (e: React.MouseEvent<HTMLButtonElement>, postId: number): void => {
          e.preventDefault();
          dispatch(requestPostDelete(postId));
        };

    const commentHandleCLick = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        };
   const onDeleteRedirect = () =>{

   }

    useEffect(() =>{
        dispatch(requestPostDetail(match.params.id));
    }, [])
    
   postDelete.deleted &&  setTimeout(() =>  history.push("/"), 1000);

    return (
      <PostDetailWrapper>
        {postDetail.loading ? (
          <h2>...Loading</h2>
        ) : (
          postDetail.post && (
            <>
              <h4>{postDetail.post.title}</h4>
              <p>{postDetail.post.body}</p>
              <h5> author: {postDetail.post.userId}</h5>
              <div style={{margin: '2rem'}}>
                  {
                  postDelete.loading? 
                  <span style={{fontSize: '1.5rem'}}>..deleting post</span>:
                    postDelete.error?
                    <span style={{fontSize: '1rem', color: 'red'}}>Ops unable to delete this post</span>:
                    postDelete.deleted && <span style={{fontSize: '2rem', color: 'green'}}>post deleted successfully</span>                    
                  }
              </div>
              <div>
                <button onClick={authorHandleCLick}>Author</button>
                <button onClick={commentHandleCLick }>load comments</button>
                <button onClick={event => deleteHandleCLick(event, postDetail.post.id)}>Delete Post</button>
              </div>
            </>
          )
        )}
      </PostDetailWrapper>
    );
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

const  buttonWrapper = styled.div`
width: 100%;
display: flex;
`