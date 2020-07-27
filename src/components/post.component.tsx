import React, { MouseEvent } from 'react';
import styled from 'styled-components';
import { withRouter, RouteComponentProps} from 'react-router-dom';
import CustomButton from '../components/CustomButton';


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
      <PostWrapper >
          <div className="post-data">
              <span className="title">{title}</span>
              <span className="body">{body}</span>
        </div>
        <CustomButton className="custom-button" onClick={handleCLick} >
              See more
        </CustomButton>
    </PostWrapper>
    );
}

export default withRouter(Post);


const PostWrapper = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  height: 300px;
  align-items: center;
  justify-conten: center;
  position: relative;
  border: solid black 1px;
  padding: 1rem;
  margin: 1rem;
  & * {
    font-family: "Times New Roman", Times, serif;
  }
  & .post-data{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-conten: center;
      .title{
        text-transform: uppercase;
        margin: 1rem 0;
        font-family: bold;
      }
        .body{
        text-transform: capitalize;
      }
  }
  & .custom-button{
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 220px;
    background-color:white;                     
  }
   &:hover{
    .custom-button {
      display: flex;
      background-color:black;  
      color: white;
    }
   }
`





  