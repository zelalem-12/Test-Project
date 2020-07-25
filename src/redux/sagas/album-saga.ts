import { put, call, takeEvery } from "redux-saga/effects";

import * as API from "../../api";
import * as albumAction from "../actions/album-action";
import * as ALBUMCONSTANT from "../constants/album.constant";

function* fetchAlbums(): any {
  try {
    const albums = yield call(API.fetchData, "albums");
    yield put(albumAction.setAlbumList(albums));
  } catch (error) {
    yield put(albumAction.setAlbumListError(error));
  }
}

export function* watchFetchAlbums() {
  yield takeEvery(ALBUMCONSTANT.ALBUM_LIST_REQUEST, fetchAlbums);
}
