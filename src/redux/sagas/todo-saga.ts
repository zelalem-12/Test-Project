import { put, call, takeEvery } from 'redux-saga/effects';

import * as API from '../../api'
import * as todoAction from '../actions/todo-action';
import * as TODOCONSTANT from '../constants/todo-constant';
import { getErrorMessage } from '../../services';

interface TodoType {
    userId: number,
    id: number,
    title: string,
}

function* fetchTodos(): IterableIterator<Object> {
    try {
        const todos: TodoType[] = yield call(API.fetchData, "todos");
        yield put(todoAction.setTodoList(todos));
    }
    catch (error) {
        yield put(todoAction.setTodoListError(getErrorMessage(error)));
    }
}

export function* watchFetchTodos(): IterableIterator<Object> {
    yield takeEvery(TODOCONSTANT.TODO_LIST_REQUEST, fetchTodos);
}