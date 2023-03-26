import { useState } from "react"
import { search } from "./BooksAPI";
import ListBooks from "./ListBooks";

const BookSearch = ({updateShow, update, books}) => {

  const [query, setQuery] = useState('')
  const [searchedBook, setSearchedBook] = useState([])

  const handleChange = (event) => {
    const currentQuery = event.target.value
    currentQuery === '' ? setSearchedBook([]) : doSearch(currentQuery)
    setQuery(currentQuery)
  }

  const doSearch = (query) => {
    const find = async () => {
      try {
        const res = await search(query)
        setSearchedBook(res)
      } catch (err) {
        setSearchedBook([])
      }
    }
    find()
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
        <ol className="books-grid">
          {
            searchedBook.error === undefined && searchedBook.length !== 0 && searchedBook.filter((book) => book.imageLinks !== undefined && book.authors !== undefined ).map((book) =>  { 
            const bookFound = books.find((findBook) => findBook.id === book.id)
            return (
              <ListBooks key={book.id} book={book} shelf={bookFound ? bookFound.shelf : 'none'} update={update}/>
            )
          }
          )
          }
        </ol>
      </div>
    </div>
  )
}
export default BookSearch