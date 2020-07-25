import * as ALBUMCONSTANT from '../constants/album.constant';
import { type } from 'os';

interface AlbumType {
  userId: number,
  id: number,
  title: string
}

interface RequestType {
  type: string,
}
interface ErrorType {
  type: string,
  payload: string
}


interface AlbumListActionType  {
  type: string,
  payload: AlbumType[]
}


const requestAlbumList = (): RequestType => ({
  type: ALBUMCONSTANT.ALBUM_LIST_REQUEST,
});
const setAlbumList = (posts: AlbumType[]): AlbumListActionType => ({
  type: ALBUMCONSTANT.ALBUM_LIST_SUCCESS,
  payload: posts,
});
const setAlbumListError = (error: string): ErrorType => ({
  type: ALBUMCONSTANT.ALBUM_LIST_FAIL,
  payload: error,
});


// const requestPostDetail = () => ({
//   type: ALBUMCONSTANT.ALB,
// });
// const setPostDetail = (post) => ({
//   type: ALBUMCONSTANT.POST_DETAILS_REQUEST,
//   payload: post,
// });
// const setPostDetailError = (error) => ({
//   type: ALBUMCONSTANT.POST_DETAILS_REQUEST,
//   payload: error,
// });


// const requestAddPost = () => ({
//   type: ALBUMCONSTANT.POST_ADD_REQUEST,
// });
// const setAddPost = (post) => ({
//   type: ALBUMCONSTANT.POST_ADD_SUCCESS,
//   payload: post,
// });
// const setAddPostError = (error) => ({
//   type: ALBUMCONSTANT.POST_ADD_FAIL,
//   payload: error,
// });

// const requestPostDelete = () => ({
//   type: ALBUMCONSTANT.POST_DELETE_REQUEST,
// });
// const setPostDelete = (post) => ({
//   type: ALBUMCONSTANT.POST_DELETE_SUCCESS,
//   payload: post,
// });
// const setPostDeleteError = (error) => ({
//   type: ALBUMCONSTANT.POST_DELETE_FAIL,
//   payload: error,
// });



export {
requestAlbumList,
setAlbumList,
setAlbumListError
};
