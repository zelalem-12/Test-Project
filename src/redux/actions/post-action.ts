import * as POSTCONSTANT from '../constants/post-constant';

interface PostType {
  id?: number;
  userId?: number,
  title: string;
  body: string
}
interface RequestType {
  type: string,
  payload?: number | PostType | CommentType
}
interface ErrorType {
  type: string,
  payload: string
}
interface PostListActionType {
  type: string,
  payload: PostType[]
}
interface PostActionType {
  type: string,
  payload: PostType
}

interface CommentType{
  postId: number,
  id: number,
  name:  string,
  email: string,
  body: string,
}

interface PostCommentActionType {
  type: string,
  payload: CommentType[]
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
interface UserActionType{
  type: string,
  payload: UserType
}
interface updatePostType{
  id: number,
  post: PostType
}
interface PostUpdateRequestType{
  type: string,
  payload: updatePostType
}

const requestPostList = (): RequestType => ({
  type: POSTCONSTANT.POST_LIST_REQUEST,
});
const setPostList = (posts: PostType[]): PostListActionType => ({
  type: POSTCONSTANT.POST_LIST_SUCCESS,
  payload: posts,
});
const setPostListError = (error: string): ErrorType => ({
  type: POSTCONSTANT.POST_LIST_FAIL,
  payload : error
});

const requestPostDetail = (postId: number): RequestType => ({
  type: POSTCONSTANT.POST_DETAILS_REQUEST,
  payload: postId
})
const setPostDetail = (post: PostType):  PostActionType => ({
  type: POSTCONSTANT.POST_DETAILS_SUCCESS,
  payload: post,
});
const setPostDetailError = (error: string): ErrorType => ({
  type: POSTCONSTANT.POST_DETAILS_FAIL,
  payload: error,
});

const requestAddPost = (post: PostType): RequestType =>({
  type: POSTCONSTANT.POST_ADD_REQUEST,
  payload: post
});
const setAddPost = (post: PostType) => ({
  type: POSTCONSTANT.POST_ADD_SUCCESS,
  payload: post,
});
const setAddPostError = (error: string): ErrorType => ({
  type: POSTCONSTANT.POST_ADD_FAIL,
  payload: error,
});

const requestPostDelete = (postId: number): RequestType => ({
  type: POSTCONSTANT.POST_DELETE_REQUEST,
  payload: postId,
});
const setPostDelete = (): RequestType => ({
  type: POSTCONSTANT.POST_DELETE_SUCCESS,
});
const setPostDeleteError = (error: string): ErrorType => ({
   type: POSTCONSTANT.POST_DELETE_FAIL,
   payload: error,
});

const requestLoadComment = (postId: number): RequestType => ({
  type: POSTCONSTANT.LOAD_COMMENT_REQUEST,
  payload: postId
});
const setLoadComment = (comments: CommentType[]): PostCommentActionType => ({
  type: POSTCONSTANT.LOAD_COMMENT_SUCCESS,
  payload: comments,
});
const setLoadCommentError = (error: string): ErrorType => ({
  type: POSTCONSTANT.LOAD_COMMENT_FAIL,
  payload: error,
});

const requestLoadAuthor = (userId: number): RequestType => ({
  type: POSTCONSTANT.LOAD_AUTHOR_REQUEST,
  payload: userId,
});
const setLoadAuthor = (user: UserType): UserActionType => ({
  type: POSTCONSTANT.LOAD_AUTHOR_SUCCESS,
  payload: user,
});
const setLoadAuthorError = (error: string): ErrorType => ({
  type: POSTCONSTANT.LOAD_AUTHOR_FAIL,
  payload: error,
});


const requestPostUpdate = (data: updatePostType): PostUpdateRequestType => ({
  type: POSTCONSTANT.POST_UPDATE_REQUEST,
  payload: data,
});

const setPostUpdate = (post: PostType): PostActionType => ({
  type: POSTCONSTANT.POST_UPDATE_SUCCESS,
  payload: post,
});

const setPostUpdateError = (error: string): ErrorType => ({
  type: POSTCONSTANT.POST_UPDATE_FAIL,
  payload: error
});

export {
  requestPostList,
  setPostList,
  setPostListError,

  requestPostDetail,
  setPostDetail,
  setPostDetailError,

  requestAddPost,
  setAddPost,
  setAddPostError,

  requestPostDelete,
  setPostDelete,
  setPostDeleteError,

  requestLoadComment,
  setLoadComment,
  setLoadCommentError,

  requestLoadAuthor,
  setLoadAuthor,
  setLoadAuthorError,

  requestPostUpdate,
  setPostUpdate,
  setPostUpdateError
};
