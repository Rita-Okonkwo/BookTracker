import { useState } from "react"
import { search } from "./BooksAPI";

const BookSearch = ({updateShow}) => {

  const [query, setQuery] = useState('')

  const handleChange = (event) => {
    setQuery(event.target.value)
  }
  
    return (
        <div className="search-books">
          <div className="search-books-bar">
            <a
              className="close-search"
              onClick={updateShow}
            >
              Close
            </a>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                value={query}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
    )
}
export default BookSearch