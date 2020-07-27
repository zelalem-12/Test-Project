import * as ALBUMCONSTANT from "../constants/album.constant";

interface AlbumType {
  userId: number,
  id: number,
  title: string
}

interface AlbumListStateType {
  loading?: boolean,
  albums?: AlbumType[],
  error?: string
}
interface AlbumImageType {
  albumId?: number,
  id: number,
  title: string,
  url: string,
  thumbnailUrl: string
};
interface AlbumImageStateType {
  loading?: boolean,
  images?: AlbumImageType[],
  error?: string
}

const listAlbums = (state: AlbumListStateType = { albums: [], }, action): AlbumListStateType => {
  switch (action.type) {
    case ALBUMCONSTANT.ALBUM_LIST_REQUEST:
      return { 
        ...state,
        loading: true 
      };
    case ALBUMCONSTANT.ALBUM_LIST_SUCCESS:
      return { 
          ...state,
          loading: false,
          albums: action.payload 
      };
    case ALBUMCONSTANT.ALBUM_LIST_FAIL:
      return {
          ...state,
            loading: false,
            error: action.payload
         };
    default:
      return state;
  }
};


 export { 
     listAlbums
  };