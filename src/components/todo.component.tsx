import React from 'react';
import styled from 'styled-components';


interface TodoType {
    userId: number,
    id?: number;
    title: string;
};

const Todo: React.FC<TodoType> = ({ userId, title }) => {

    return (
        <TodoWrapper>
            <div className="todo-data">
                <span className="title">{title}</span>
                <span className="Owner"><strong>Done By:</strong>{userId}</span>
            </div>
        </TodoWrapper>
    )
}

export default Todo;;


const TodoWrapper = styled.div`
    width: 25%;
  display: flex;
  flex-direction: column;
  height: 200px;
  align-items: center;
  justify-conten: center;
  position: relative;
  border: solid black 1px;
  padding: 1rem;
  margin: 1rem;
  & * {
    font-family: "Times New Roman", Times, serif;
  }
  & .todo-data{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-conten: center;
      .title{
        text-transform: uppercase;
        margin: 1rem 0;
        font-family: bold;
      }
  }
   }
`