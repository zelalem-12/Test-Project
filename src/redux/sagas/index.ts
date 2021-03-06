import { all } from 'redux-saga/effects';

import { 
  watchFetchPosts, 
  watchFetchPost, 
  watchAddPost, 
  watchDeletePost, 
  watchLoadComments, 
  watchLoadAuthor,
  watchUpdatePost
} from "./post-saga";
import { watchFetchAlbums} from './album-saga'
import { watchFetchTodos } from './todo-saga';



export default function* rootSaga(): IterableIterator<Object> {
    yield all([
      watchFetchPosts(),
      watchFetchAlbums(),
      watchFetchTodos(),
      watchFetchPost(),
      watchAddPost(),
      watchDeletePost(),
      watchLoadComments(),
      watchLoadAuthor(),
      watchUpdatePost()
    ]);
}