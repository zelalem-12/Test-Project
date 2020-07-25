import React from 'react';
import styled from 'styled-components';


interface TodoType {
    userId: number,
    id: number;
    title: string;
    completed: boolean
};

const Todo: React.FC<TodoType> = ({userId, id, title, completed}) => {

    const handleCLick = (e: React.FormEvent<HTMLInputElement>): void => {
        e.preventDefault();
        console.log(`I am moving to the this post detail, ${id}`)

    }
    return (
       <TodoWrapper>
        <h3>{title}</h3>
        <h4>status: <strong>{completed}</strong></h4>
        <h4>Done By: <strong>{userId}</strong></h4>
       </TodoWrapper>
    )
}

export default Todo;


const TodoWrapper = styled.div`
width: 30%;
margin: 0 10px 30px;
border: solid black 1px;
display: flex;
flex-direction: column;
align-items: center;
justify-conten: center;
padding: 8px;
`