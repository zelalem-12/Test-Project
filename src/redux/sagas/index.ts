import { all } from 'redux-saga/effects';

import { watchFetchPosts } from "./post-saga";
import { watchFetchAlbums} from './album-saga'


export default function* rootSaga() {
    yield all([
        watchFetchPosts(),
        watchFetchAlbums()
    ]);
}