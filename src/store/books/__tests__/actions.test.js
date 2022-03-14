import {
    getBooks,
    getBooksFailure,
    getBooksRequest,
    getBooksSuccess,
    GET_BOOKS_SUCCESS,
  } from "../actions";
  
  describe("getBooksSuccess tests", () => {
    it("returns obj with type and payload", () => {
      const payload = [];
      const expected = {
        type: GET_BOOKS_SUCCESS,
        payload,
      };
  
      const received = getBooksSuccess(payload);
      expect(expected).toEqual(received);
    });
  });
  
  describe("getBooksTest", () => {
    it("calls fn passed as an arg with getBooksReq", () => {
      const mockDispatch = jest.fn();
  
      getBooks()(mockDispatch);
  
      expect(mockDispatch).toHaveBeenCalledWith(getBooksRequest());
    });
  
    it("calls fn passed as an arg with getBooksSuc if fetch was successful", async () => {
      const mockDispatch = jest.fn();
      const result = ["test"];
      // eslint-disable-next-line no-undef
      fetchMock.mockResponseOnce(JSON.stringify(result));
  
      await getBooks()(mockDispatch);
  
      expect(mockDispatch).toHaveBeenLastCalledWith(getBooksSuccess(result));
    });
  
    it("calls fn passed as an arg with getBooksFail if fetch was unsuccessful", async () => {
      const mockDispatch = jest.fn();
      const error = new Error("some fetch error");
      // eslint-disable-next-line no-undef
      fetchMock.mockRejectOnce(error);
  
      await getBooks()(mockDispatch);
  
      expect(mockDispatch).toHaveBeenLastCalledWith(getBooksFailure(error));
    });
  });