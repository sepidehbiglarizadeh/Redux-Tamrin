import {
  FETCH_USER_SUCCESS,
  FETCH_USER_REQUEST,
  FETCH_USER_FAILUR,
} from "./userTypes";

const initialState = {
  lodaing: false,
  users: [],
  error: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return { ...state, loading: true };
    case FETCH_USER_SUCCESS:
      return { loading: false, error: "", users: action.payload };
    case FETCH_USER_FAILUR:
      return { loading: false, error: action.payload, users: [] };
    default:
      return state;
  }
};

export default userReducer;
