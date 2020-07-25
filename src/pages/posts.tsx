import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import styled from 'styled-components';
import { requestPostList } from '../redux/actions/post-action'
import Post from '../components/post.component';

interface PostType  {
    id: number;
    title: string;
    body: string;
};


const posts = (): JSX.Element => {

    const postList = useSelector(state => state.postList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestPostList())
    }, []);

 
    return (
      <PostsWrapper>
          {
        postList.loading? (<h2>...Loading</h2>):
            postList.posts.map( (post: PostType): JSX.Element => (
            <Post key={post.id} {...post} />
          ))
        }
      </PostsWrapper>
    );
};

export default posts;

const PostsWrapper = styled.div`
width: 90%;
margin: 60px auto;
display: flex;
flex-wrap: wrap;
felx-gap: 20px;
`