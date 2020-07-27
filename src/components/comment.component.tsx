import React, { MouseEvent } from 'react';
import styled from 'styled-components';


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
        <p><strong>Comment Title:</strong>{name}</p>
        <p><strong>Commenter Email:</strong>{email}</p>
        <p><strong>Comment Body:</strong>{body}</p>
      </CommentWrapper>
    );
}

export default Comment;

const CommentWrapper = styled.div`
  width: 100%;
  margin: 0 10px 30px;
  border-bottom: solid black 1px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 8px;
`;