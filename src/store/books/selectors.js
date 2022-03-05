import { FETCH_STATUSES } from "./reducer";

export const selectBooks = (state) => state.books.data;
export const selectBooksLoading = (state) =>
  state.books.status === FETCH_STATUSES.REQUEST;
export const selectError = (state) => state.books.error;
