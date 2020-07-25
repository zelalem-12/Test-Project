import * as ALBUMCONSTANT from "../constants/album.constant";

const listAlbums = (state = { albums: [] }, action) => {
  switch (action.type) {
    case ALBUMCONSTANT.ALBUM_LIST_REQUEST:
      return { loading: true };
    case ALBUMCONSTANT.ALBUM_LIST_SUCCESS:
      return { loading: false, albums: action.payload };
    case ALBUMCONSTANT.ALBUM_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

 export { 
     listAlbums
  };