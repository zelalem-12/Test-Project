import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import styled from 'styled-components';
import { layout, flexbox, typography } from 'styled-system'
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
      <PostsWrapper
        width={0.9}
        display='flex'
        flexWrap='wrap'
      >
          {
          postList.loading ?
            <h2
              textAlign='center'
              letterSpacing='0.1em'
            >Loading...</h2> :
            postList.error ?
              <h2
                textAlign='center'
                letterSpacing='0.1em'
                color='red'
              >Opps something has gone wrong</h2> :
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
    ${flexbox}
    ${layout}
    ${typography}
    margin: 60px auto;
`
