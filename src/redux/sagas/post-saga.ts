import { put, call, takeEvery} from 'redux-saga/effects';

import * as API from '../../api'
import * as postAction from '../actions/post-action';
import * as POSTCONSTANT from '../constants/post-constant';
import { getErrorMessage } from '../../services';

interface PostType {
  id: number;
  title: string;
  body: string
}
function* fetchPosts(): IterableIterator<Object> {
  try {
    const posts: [PostType] = yield call(API.fetchData, "posts");
    yield put(postAction.setPostList(posts));
  } 
  catch (error) {
    yield put(postAction.setAddPostError(getErrorMessage(error)));
  }
}

export function* watchFetchPosts(): IterableIterator <Object> {
         yield takeEvery(POSTCONSTANT.POST_LIST_REQUEST, fetchPosts);
       }