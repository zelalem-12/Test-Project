import { put, call, takeEvery} from 'redux-saga/effects';

import * as API from '../../api'
import * as postAction from '../actions/post-action';
import * as POSTCONSTANT from '../constants/post-constant';


function* fetchPosts(): any {
  try {
    const posts = yield call(API.fetchData, "posts");
    yield put(postAction.setPostList(posts));
  } catch (error) {
    yield put(postAction.setAddPostError(error));
  }
}


export function* watchFetchPosts() {
         yield takeEvery(POSTCONSTANT.POST_LIST_REQUEST, fetchPosts);
       }