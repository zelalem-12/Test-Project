import * as ALBUMCONSTANT from "../constants/album.constant";

interface TodoType {
    userId: number,
    id: number;
    title: string;
    completed: boolean
}

interface TodoListStateType {
    loading?: boolean,
    todos?: TodoType[],
    error?: string
}

const listTodos = (state: TodoListStateType = { todos: [], }, action): TodoListStateType => {
    switch (action.type) {
        case ALBUMCONSTANT.ALBUM_LIST_REQUEST:
            return {
                ...state,
                loading: true
            };
        case ALBUMCONSTANT.ALBUM_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                todos: action.payload
            };
        case ALBUMCONSTANT.ALBUM_LIST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export {
    listTodos
};