import {GET_BOOKS_FAILURE, GET_BOOKS_REQUEST,GET_BOOKS_SUCCESS} from "./actions.js";
export const FETCH_STATUSES = {
    IDLE: 0,
    REQUEST: 1,
    SUCCESS: 2,
    FAILURE: 3,
  };

  
  const initialState = {
    data: [],
    error: null,
    status: FETCH_STATUSES.IDLE,
  };
  
  export const booksReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_BOOKS_REQUEST: {
        return {
          ...state,
          error: null,
          status: FETCH_STATUSES.REQUEST,
        };
      }
      case GET_BOOKS_SUCCESS: {
        return {
          ...state,
          data: action.payload,
          status: FETCH_STATUSES.SUCCESS,
        };
      }
      case GET_BOOKS_FAILURE: {
        return {
          ...state,
          status: FETCH_STATUSES.FAILURE,
          error: action.payload,
        };
      }
      default:
        return state;
    }
  };

 