import * as ALBUMCONSTANT from '../constants/album.constant';
import { type } from 'os';

interface AlbumType {
  userId: number,
  id: number,
  title: string
}

interface RequestType {
  type: string,
  payload?: number
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






export {
requestAlbumList,
setAlbumList,
setAlbumListError,

};
