import { put, call, takeLatest } from "redux-saga/effects";

import * as API from "../../api";
import * as albumAction from "../actions/album-action";
import * as ALBUMCONSTANT from "../constants/album.constant";
import { getErrorMessage } from '../../services';

interface AlbumType {
  userId: number,
  id: number,
  title: string
};

function* fetchAlbums(): IterableIterator<Object> {
  try {
    
    const albums:[AlbumType] = yield call(API.fetchData, "albums");
    yield put(albumAction.setAlbumList(albums));
  } catch (error) {
    yield put(albumAction.setAlbumListError(getErrorMessage(error)));
  }
}

export function* watchFetchAlbums(): IterableIterator<Object> {
  yield takeLatest(ALBUMCONSTANT.ALBUM_LIST_REQUEST, fetchAlbums);
}

