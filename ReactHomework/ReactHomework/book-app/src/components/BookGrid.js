import '../styles/BookGrid.css';
import BookDisplay from './BookDisplay'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

function BookGrid() {
  const [query, setQuery] = useState("harry potter")
  const [search, setSearch] = useState("harry potter")
  const [books, setBooks] = useState({ totalItems: "", items: [] })
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios(
        'https://www.googleapis.com/books/v1/volumes?q=' + search
      )
      setBooks(result.data)
      setIsLoading(false);
    }
    fetchData()

  }, [search]); // the second param, search, will trigger useEffect once changed

  function handleSubmit(e) {
    e.preventDefault()
    setSearch(query)
  };

  return (
    <div className="Container">
      <div className="SearchContainer">
        <form onSubmit={handleSubmit}>
          <input type="text" name="item" value={query} onChange={event => setQuery(event.target.value)} className="InputBox" />
          <button type="submit" className="SubmitBtn">Search</button>
        </form>
      </div>
      <div className="BookContainer">
        {isLoading ? <Loader type="TailSpin"
          color="white"
          height={75}
          width={75}
          timeout={3000} /> :
          <div>
            {
              books.totalItems === 0 ?
                <p className="NoResultText">No books found for {query}</p> :
                <div className="BookGrid">
                  {books.items.map((book) => (
                    <BookDisplay key={book.id} Data={book} />
                  ))}
                </div>
            }
          </div>}
      </div>
    </div>
  );
}

export default BookGrid;
