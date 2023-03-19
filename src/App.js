import "./App.css";
import { useEffect, useState } from "react";
import BookShelf from "./BookShelf";
import { getAll, update } from "./BooksAPI";

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

  return (
    <div className="app">
      {showSearchPage ? (
        <div className="search-books">
          <div className="search-books-bar">
            <a
              className="close-search"
              onClick={() => setShowSearchpage(!showSearchPage)}
            >
              Close
            </a>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
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