import { CircularProgress } from "@mui/material";
import { useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getBooks} from '../../store/books/actions.js';
import {selectError, selectBooksLoading,selectBooks}  from "../../store/books/selectors.js";



export const Books = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectBooksLoading);
  const books = useSelector(selectBooks);

    const getData = async() =>{
      dispatch(getBooks())
    };
    useEffect(() => {
      getData()
    }, []);
    return (
        <div>
        <h3>Books</h3>
        <button onClick={getData}>Refresh</button>
        {error && <h5>Error: {error.message}</h5>}
        {isLoading ? (
        <CircularProgress />
      ) : (
        <ol>
        {books.map((art) => (
            <li key={art.isbn}>
              Book name: {art.name} 
              <br /> 
              Authors: {art.authors}
              <br /> 
              Number of pages: {art.numberOfPages}
              <hr /> 
              </li>
          ))}
        </ol>
      )}
        </div>
    )
}