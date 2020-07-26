import { put, call, takeLatest, takeEvery} from 'redux-saga/effects';

import * as API from '../../api'
import * as postAction from '../actions/post-action';
import * as POSTCONSTANT from '../constants/post-constant';
import { getErrorMessage } from '../../services';

interface PostType {
  id?: number;
  userId: number,
  title: string;
  body: string
}
function* fetchPosts(): IterableIterator<Object> {
  try {
    const posts: PostType[] = yield call(API.fetchData, "posts");
    yield put(postAction.setPostList(posts));
  } 
  catch (error) {
    yield put(postAction.setPostListError(getErrorMessage(error)));
  }
}
export function* watchFetchPosts(): IterableIterator <Object> {
         yield takeLatest(POSTCONSTANT.POST_LIST_REQUEST, fetchPosts);
       }



function* fetchPost({ payload }): IterableIterator<Object> {
  try {
    const post: PostType = yield call(API.fetchData, `posts/${payload}`);
    yield put(postAction.setPostDetail(post));
  }
  catch (error) {
    yield put(postAction.setPostDetailError(getErrorMessage(error)));
  }
}

export function* watchFetchPost(): IterableIterator<Object> {
  yield takeLatest(POSTCONSTANT.POST_DETAILS_REQUEST, fetchPost);
}


function* addPost({ payload }): IterableIterator<Object> {
  try {
    const post: PostType = yield call(API.addData, "posts", payload, );
    yield put(postAction.setAddPost(post));
  }
  catch (error) {
    yield put(postAction.setAddPostError(getErrorMessage(error)));
  }
}

export function* watchAddPost(): IterableIterator<Object> {
  yield takeLatest(POSTCONSTANT.POST_ADD_REQUEST, addPost);
}