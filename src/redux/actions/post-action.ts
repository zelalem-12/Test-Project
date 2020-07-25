import * as POSTCONSTANT from '../constants/post-constant';

const requestPostList = () => ({
  type: POSTCONSTANT.POST_LIST_REQUEST,
});
const setPostList = posts => ({
  type: POSTCONSTANT.POST_LIST_SUCCESS,
  payload: posts,
});
const setPostListError = error => ({
  type: POSTCONSTANT.POST_LIST_FAIL,
  payload : error
});


const requestPostDetail = () => ({
  type: POSTCONSTANT.POST_DETAILS_REQUEST
})
const setPostDetail = (post) => ({
  type: POSTCONSTANT.POST_DETAILS_REQUEST,
  payload: post,
});
const setPostDetailError = (error) => ({
  type: POSTCONSTANT.POST_DETAILS_REQUEST,
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
