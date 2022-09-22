import {
  FETCH_USER_SUCCESS,
  FETCH_USER_REQUEST,
  FETCH_USER_FAILUR,
} from "./userTypes";

import axios from "axios";

function fetchUserRequest() {
  return {
    type: FETCH_USER_REQUEST,
  };
}

// action creators :
function fetchUserSuccess(users) {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
}

function fetchUserFailur(error) {
  return {
    type: FETCH_USER_FAILUR,
    payload: error,
  };
}

// async action creator:

export const fetchUser = () => {
    return function (dispatch) {
      dispatch(fetchUserRequest());
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          const users = res.data;
          dispatch(fetchUserSuccess(users));
        })
        .catch((error) => {
          dispatch(fetchUserFailur(error.message));
        });
    };
  };