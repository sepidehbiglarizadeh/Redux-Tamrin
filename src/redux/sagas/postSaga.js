import {takeEvery, call, put } from "@redux-saga/core/effects";
import axios from "axios";
import { fetchPostFailur, fetchPostSuccess } from "../posts/postActions";
import { FETCH_POSTS_REQUEST } from "../posts/postTypes";

function* fetchPost(action) {
  try {
    const apiEndPoint = `https://jsonplaceholder.typicode.com/posts/${action.payload}/`;
    const response = yield call(() => axios.get(apiEndPoint));
    console.log(response);
    yield put(fetchPostSuccess(response.data));
  } catch (error) {
    yield put(fetchPostFailur(error.message));
  }
}

export function* watchFetchPost() {
  yield takeEvery(FETCH_POSTS_REQUEST, fetchPost);
}