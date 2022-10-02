import {
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
} from "./postTypes";

export function fetchPostRequest(id) {
  return {
    type: FETCH_POSTS_REQUEST,
    payload: id,
  };
}

export function fetchPostSuccess(post) {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: post,
  };
}

export function fetchPostFailur(error) {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: error,
  };
}
