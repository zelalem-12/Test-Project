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
              <PostDetailData>
                <h4>{postDetail.post.title.toLocaleUpperCase()}</h4>
                <p>{postDetail.post.body}</p>
                <h5> author: {postDetail.post.userId}</h5>
              </PostDetailData>
              <div style={{ margin: "2rem" }}>
                {postDelete.loading ? (
                  <span style={{ fontSize: "1.5rem" }}>..deleting post</span>
                ) : postDelete.error ? (
                  <span style={{ fontSize: "1rem", color: "red" }}>
                    Ops unable to delete this post
                  </span>
                ) : (
                  postDelete.deleted && (
                    <span style={{ fontSize: "2rem", color: "green" }}>
                      post deleted successfully
                    </span>
                  )
                )}
              </div>
              <ButtonWrapper>
                <Button onClick={authorHandleCLick}>Author</Button>
                <Button onClick={commentHandleCLick}>load comments</Button>
                <Button
                  onClick={(event) =>
                    deleteHandleCLick(event, postDetail.post.id)
                  }
                >
                  Delete Post
                </Button>
              </ButtonWrapper>
            </>
          )
        )}
      </PostDetailWrapper>
    );
}

export default PostDetail;


const PostDetailWrapper = styled.div`
width: 100%;
margin: 100px auto;
display: flex;
flex-direction: column;
align-items: center;
justify-conten: center;
padding: 8px;
`

const ButtonWrapper = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  & * {
      margin: 1rem
  }
`;
const Button = styled.button`
  height: 2rem;
  width: 20%;
  background-color: #0a6783;
  color: white;
  text-transform: uppercase;
  fon-size: 0.5rem;
  font-weight: bolder;
  border: none;
  cursor: pointer;
 text-align: center;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const PostDetailData = styled.div`
   width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-conten: center;
    padding: 1rem;
  j
`;