import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";
import { fetchPostFailur, fetchPostSuccess } from "../posts/postActions";
import { FETCH_POSTS_REQUEST } from "../posts/postTypes";

function* fetchPost(action) {
  try {
    const apiEndPoint = `https://jsonplaceholder.typicode.com/posts/${action.payload}`;
    const response = yield call(()=>axios.get(apiEndPoint));
    yield put(fetchPostSuccess(response.data))
  } catch (error) {
    yield put(fetchPostFailur(error.message))
  }
}

export function* watchFetchPost() {
  yield takeEvery(FETCH_POSTS_REQUEST, fetchPost);
}