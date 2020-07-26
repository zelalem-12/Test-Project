import React, { useState, useEffect, MouseEvent } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import styled from 'styled-components';

import CustomButton from '../components/CustomButton';
import FormInput from '../components/FormInput';
import { requestAddPost } from '../redux/actions/post-action';


interface PostType {
    id?: number,
    userId: number,
    title: string;
    body: string
}

interface PostAddType {
    loading?: boolean,
    post?: PostType,
    error?: string
}

const AddPost = () => {
    const dispatch = useDispatch()
    const [post, setPost] = useState<PostType>({userId: 1, title: "", body: ""});
    const postAdd: PostAddType = useSelector(state => state.postAdd);

    const handleChange = (event: React.FormEvent<HTMLInputElement>):void => {
        event.preventDefault();
        event.persist()
        setPost(post => {
            return { ...post, [event.target.name]: [event.target.value] }
        })
    }

    const submitHandler = (event): void => {
        event.preventDefault();
        dispatch(requestAddPost(post));
        setPost(post => {
            return { ...post, userId: 1, title: "", body: "" }
        });
    }
    return (
        <PostAdd  className="createProduct">
            {
                postAdd.loading? <h1>...Loading</h1> :
                    postAdd.error ? <h1 style={{ color: 'red' }}>Ops! Something has gon rong</h1>:
                    <>
                     {
                     postAdd.post && <span style={{color: 'green'}}>Post added successfully!</span>
                     }
                    <form onSubmit={submitHandler} className="form">
                        <FormInput
                            type='text'
                            name='title'
                            value={post.title}
                            handleChange={handleChange}
                            label='Title'
                            required
                        />
                        <FormInput
                            type='text'
                            name='body'
                            value={post.body}
                            handleChange={handleChange}
                            label='Body'
                            required
                        />
                        <CustomButton type="submit"> add post </CustomButton>
                    </form>
                    </>
            }
            
        </PostAdd >
    )
}

export default AddPost


const PostAdd = styled.div`
width: 50%;
margin: 100px auto;


`