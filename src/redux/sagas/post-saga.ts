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
interface CommentType{
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string
}

interface Geo{
  lat: string,
  lng: string
}
interface Address{
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: Geo
}

interface Company{
  name: string,
  catchPhrase: string,
  bs: string
}
interface UserType{
  id: number,
  name: string,
  username: string,
  email: string,
  address: Address,
  phone: string,
  website: string,
  company: Company
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


function* deletePost({ payload }): IterableIterator<Object> {
  try {
    yield call(API.deleteData, `posts/${payload}`);
    yield put(postAction.setPostDelete());
  }
  catch (error) {
    yield put(postAction.setPostDeleteError(getErrorMessage(error)));
  }
}

export function* watchDeletePost(): IterableIterator<Object> {
  yield takeLatest(POSTCONSTANT.POST_DELETE_REQUEST, deletePost);
}



function* loadComments({ payload }): IterableIterator<Object> {
  try {
    const comments: CommentType[] = yield call(API.fetchData, `comments?postId=${payload}`);
    yield put(postAction.setLoadComment(comments));
  } catch (error) {
    yield put(postAction.setLoadCommentError(getErrorMessage(error)));
  }
}

export function* watchLoadComments(): IterableIterator<Object> {
  yield takeLatest(POSTCONSTANT.LOAD_COMMENT_REQUEST, loadComments);
}


function* loadAuthor({ payload }): IterableIterator<Object>{
  try{
    const author: UserType = yield call(API.fetchData, `users/${payload}`);
    yield put(postAction.setLoadAuthor(author));
  }catch(error){
    yield put(postAction.setLoadAuthorError(getErrorMessage(error)));
  }
}

export function* watchLoadAuthor(): IterableIterator<Object>{
  yield takeLatest(POSTCONSTANT.LOAD_AUTHOR_REQUEST, loadAuthor);
}