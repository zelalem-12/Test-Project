
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import * as postReducer from "./reducers/post-reducer";
import * as albumReducer from "./reducers/album-reducer";
import * as todoReducer from "./reducers/todo-reducer";

import rootSaga from "./sagas";

const rootReducer = combineReducers({
  postList: postReducer.listPosts,
  postDetail: postReducer.postDetail,
  postAdd: postReducer.addPost,
  postDelete: postReducer.deletePost,
  postAuthor: postReducer.loadAuthor,
  loadedComments: postReducer.loadComments,
  albumList: albumReducer.listAlbums,
  todoList: todoReducer.listTodos,
});


const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? compose(
          applyMiddleware(sagaMiddleware),
          window.__REDUX_DEVTOOLS_EXTENSION__()
        )
      : applyMiddleware(sagaMiddleware)
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;