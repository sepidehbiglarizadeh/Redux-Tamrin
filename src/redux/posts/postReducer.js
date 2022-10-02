import { FETCH_POSTS_FAILURE, FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS } from "./postTypes";

  
  const initialState = {
    lodaing: false,
    users: [],
    error: "",
  };
  
  const postReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_POSTS_REQUEST:
        return { ...state, loading: true };
      case FETCH_POSTS_SUCCESS:
        return { loading: false, error: "", users: action.payload };
      case FETCH_POSTS_FAILURE:
        return { loading: false, error: action.payload, users: [] };
      default:
        return state;
    }
  };
  
  export default postReducer;