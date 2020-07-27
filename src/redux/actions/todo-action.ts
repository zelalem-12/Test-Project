import * as TODOCONSTANT from '../constants/todo-constant';

interface TodoType {
    userId: number,
    id: number,
    title: string,
}

interface RequestType {
    type: string,
}
interface ErrorType {
    type: string,
    payload: string
}
interface TodoListType {
    type: string,
    payload: TodoType[]
}


const requestTodoList = (): RequestType => ({
    type: TODOCONSTANT.TODO_LIST_REQUEST,
});
const setTodoList = (todos: TodoType[]): TodoListType => ({
    type: TODOCONSTANT.TODO_LIST_SUCCESS,
    payload: todos,
});
const setTodoListError = (error: string): ErrorType => ({
    type: TODOCONSTANT.TODO_LIST_FAIL,
    payload: error
});


export {
    requestTodoList,
    setTodoList,
    setTodoListError
}