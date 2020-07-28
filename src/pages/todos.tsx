import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styled from 'styled-components';
import {
    flexbox, layout, typography
} from 'styled-system'
import { requestTodoList } from '../redux/actions/todo-action'
import Todo from '../components/todo.component';

interface TodoType {
    userId: number,
    id: number,
    title: string,
};
interface TodoListStateType {
    loading?: boolean,
    todos?: TodoType[],
    error?: string

};



const Todos: React.FC = () => {

    const todoList: TodoListStateType  = useSelector(state => state.todoList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestTodoList())
    }, []);


    return (
        <TodosWrapper
            width={0.9}
            display='flex'
            flexWrap='wrap'
        >
            {
                todoList.loading ? 
                <h2
                    textAlign='center'
                    letterSpacing='0.1em'
                >Loading...</h2>:
                todoList.error ?
                    <h2
                        textAlign='center'
                        letterSpacing='0.1em'
                        color='red'
                    >Opps something has gone wrong</h2>:
                    
                    todoList.todos.map((todo: TodoType): React.ReactNode => (
                        <Todo key={todo.id} {...todo} />
                    ))
            }
        </TodosWrapper>
    );
};

export default Todos;

const TodosWrapper = styled.div`
    ${flexbox}
    ${layout}
    ${typography}
    margin: 60px auto;
`