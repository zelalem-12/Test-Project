import React, {useState, MouseEvent} from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components'

import FormInput from './FormInput';
import CustomButton from './CustomButton';
import { requestPostUpdate } from "../redux/actions/post-action";


interface PropTypes{
  userId?: number,
  id?: number;
  title: string,
  body: string,
  open: boolean
}

interface postUpdateStateType{
  loading?: boolean,
  post: PropTypes,
  error: string
  
}
const Modal: React.FC<RouteComponentProps<{}> & PropTypes> = ({open,id, title, body, history}) =>{
       const [post, setPost] = useState<PropTypes>({title: title, body: body, open: open});
       const dispatch = useDispatch();

      const updatePost: postUpdateStateType = useSelector(state => state.updatePost)
      const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
        event.preventDefault();
        setPost((post) => {
          return { ...post, title: "", body: "" };
        });
        event.persist();
        setPost((post) => {
          return { ...post, [event.target.name]: [event.target.value] };
        });
      };
      console.log(updatePost)

      const submitHandler = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        event.preventDefault(); 
        dispatch(requestPostUpdate({id, post}));
        setPost((post) => {
          return { ...post, title: "", body: "", open: false };
        });
      };
  updatePost.post && setTimeout(() => history.push(`/`), 1000);
  return (
    <ModalWrapper>
     <div>
        {
          updatePost.loading ? <span style={{ fontSize: "1.5rem" }}>...Updating the Post </span> :
            updatePost.error ? <span style={{ fontSize: "1rem", color: "red" }}>
              Ops unable to delete this post
            </span> :
              updatePost.post && <span style={{ fontSize: "1rem", color: "red" }}>
                POst Updated Successfully
            </span>
        }
     </div>
      <form onSubmit={submitHandler} className="form">
        <FormInput
          type="text"
          name="title"
          value={post.title}
          handleChange={handleChange}
          label="Title"
          required
        />
        <FormInput
          type="text"
          name="body"
          value={post.body}
          handleChange={handleChange}
          label="Body"
          required
        />
        <CustomButton type="submit"> Update Post </CustomButton>
      </form>
    </ModalWrapper>
  );
}

export default withRouter(Modal);


const ModalWrapper = styled.div`
  width: 90%;
  background: white;
  position: fixed;
  top: 20vh;
  left: 5%;
  z-index: 100;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  & > *{
    width: 75%;
  }
`;