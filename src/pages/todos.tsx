import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styled from 'styled-components';
import { requestTodoList } from '../redux/actions/todo-action'
import Todo from '../components/todo.component';

interface TodoType {
    userId: number,
    id: number;
    title: string;
    completed: boolean
};
interface TodoListStateType {
    loading?: boolean,
    todos?: TodoType[],
    error?: string

};



const Todos: React.FC = () => {

    const todoList: TodoListStateType  = useSelector(state => state.todoList);
    console.log(todoList)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestTodoList())
    }, []);


    return (
        <TodosWrapper>
            {
                todoList.loading ? (<h2>...Loading</h2>) :
                    todoList.todos.map((todo: TodoType): React.ReactNode => (
                        <Todo key={todo.id} {...todo} />
                    ))
            }
        </TodosWrapper>
    );
};

export default Todos;

const TodosWrapper = styled.div`
width: 90%;
margin: 60px auto;
display: flex;
flex-wrap: wrap;
felx-gap: 20px;
`