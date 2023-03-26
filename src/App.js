import "./App.css";
import { useEffect, useState } from "react";
import { getAll, update } from "./BooksAPI";
import BookSearch from "./BookSearch";
import { Routes, Route } from "react-router-dom"
import Books from "./Books";

const App = () => {
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
    <Routes>
      <Route exact path="/" element={<Books books={books} handleChange={handleChange}/>}/>
      <Route path="/search" element={<BookSearch update={handleChange} books={books}/>}/>
    </Routes>
  );
}

export default App;