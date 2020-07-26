import React, { MouseEvent } from 'react';
import styled from 'styled-components';
import { withRouter, RouteComponentProps} from 'react-router-dom'


interface CommentType{
  postId?: number,
  id: number,
  name:  string,
  email: string,
  body: string,
}


const Comment: React.FC<CommentType> = ({name, email, body}) => {

    return (
      <CommentWrapper>
        <h4>{name.toLocaleUpperCase()}</h4>
        <p>{email}</p>
        <p>{body}</p>
      </CommentWrapper>
    );
}

export default Comment;

const CommentWrapper = styled.div`
  width: 100%;
  margin: 0 10px 30px;
  border: solid black 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-conten: center;
  padding: 8px;
`;