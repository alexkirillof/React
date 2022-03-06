const apiUrl = "https://www.anapioficeandfire.com/api/books?pageSize=30";
export const GET_BOOKS_REQUEST = "BOOKS::GET_BOOKS_REQUEST";
export const GET_BOOKS_SUCCESS = "BOOKS::GET_BOOKS_SUCCESS";
export const GET_BOOKS_FAILURE = "BOOKS::GET_BOOKS_FAILURE";

export const getBooksRequest = () => ({
    type: GET_BOOKS_REQUEST,
  });
  
  export const getBooksSuccess = (books) => ({
    type: GET_BOOKS_SUCCESS,
    payload: books,
  });
  
  export const getBooksFailure = (error) => ({
    type: GET_BOOKS_FAILURE,
    payload: error,
  });
  
  export const getBooks = () => async (dispatch) => {
    dispatch(getBooksRequest());
  
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(response.status);
      }
      const result = await response.json();
      dispatch(getBooksSuccess(result));
    } catch (err) {
      dispatch(getBooksFailure(err));
      console.warn(err);
    }
  };