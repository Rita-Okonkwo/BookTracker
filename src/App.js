import "./App.css";
import { useEffect, useState } from "react";
import BookShelf from "./BookShelf";
import { getAll, update } from "./BooksAPI";
import BookSearch from "./BookSearch";

const App = () => {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [books, setBooks] = useState([])

  useEffect((() => {
    let ignore = false
    const fetchBooks = async () => {
      const res = await getAll()
      if (!ignore) {
        setBooks(res)
      }  
    }
    fetchBooks()
    return () => {
      ignore = true
    }
  }), [])

  const handleChange = (book, event) => {
    event.preventDefault()
    const updateShelf = async () => {
      await update(book, event.target.value)
      const res = await getAll()
      setBooks(res)
    }
    updateShelf()
  }

  const handleClick = () => {
    setShowSearchpage(!showSearchPage)
  }

  return (
    <div className="app">
      {showSearchPage ? (
        <BookSearch updateShow={handleClick}/>
      ) : (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <BookShelf books={books} shelf="currentlyReading" shelfName="Currently Reading" update={handleChange}/>
              <BookShelf books={books} shelf="wantToRead" shelfName="Want to Read"update={handleChange}/>
              <BookShelf books={books} shelf="read" shelfName="Read" update={handleChange}/>
            </div>
          </div>
          <div className="open-search">
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;