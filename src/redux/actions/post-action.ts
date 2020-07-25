import * as POSTCONSTANT from '../constants/post-constant';

interface PostType {
  id: number;
  userId: number,
  title: string;
  body: string
}
interface RequestType {
  type: string,
  payload?: number
}
interface ErrorType {
  type: string,
  payload: string
}
interface PostListActionType {
  type: string,
  payload: PostType[]
}
interface PostDetailActionType {
  type: string,
  payload: PostType
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
const setPostDetail = (post: PostType): PostDetailActionType => ({
  type: POSTCONSTANT.POST_DETAILS_SUCCESS,
  payload: post,
});
const setPostDetailError = (error: string): ErrorType => ({
  type: POSTCONSTANT.POST_DETAILS_FAIL,
  payload: error,
});







const requestAddPost = () =>({
  type: POSTCONSTANT.POST_ADD_REQUEST
});
const setAddPost = (post) => ({
  type: POSTCONSTANT.POST_ADD_SUCCESS,
  payload: post,
});
const setAddPostError = (error) => ({
  type: POSTCONSTANT.POST_ADD_FAIL,
  payload: error,
});

const requestPostDelete = () => ({
  type: POSTCONSTANT.POST_DELETE_REQUEST
});
const setPostDelete = post => ({
  type: POSTCONSTANT.POST_DELETE_SUCCESS,
   payload: post
});
const setPostDeleteError = (error) => ({
  type: POSTCONSTANT.POST_DELETE_FAIL,
   payload: error,
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
  setPostDeleteError

};
