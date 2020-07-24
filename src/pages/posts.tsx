import React, {useState, useEffect} from 'react';
import Post from '../components/post.component';
import styled from 'styled-components';

interface PostType  {
    id: number;
    title: string;
    body: string;
};


const posts = (): JSX.Element => {
    const [posts, setPosts] = useState<PostType[]>([])


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => setPosts(posts))
    }, []);
    return (
        <PostsWrapper>
            {
                posts.map((post: PostType): JSX.Element => (
                    <Post key={post.id}   {...post} />)
                )
            }

        </PostsWrapper>
    )
};

export default posts;

const PostsWrapper = styled.div`
width: 90%;
margin: 60px auto;
display: flex;
flex-wrap: wrap;
felx-gap: 20px;
`