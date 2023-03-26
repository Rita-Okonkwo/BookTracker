import { useState } from "react"
import { search } from "./BooksAPI";

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
                  <li key={book.id}>
                  <div className="book">
                    <div className="book-top">
                      <div
                        className="book-cover"
                        style={{
                        width: 128,
                        height: 193,
                        backgroundImage:
                        `url(${book.imageLinks['thumbnail']})`
                      }}/>
                  <div className="book-shelf-changer"> 
                    <select name="shelf" value={bookFound ? bookFound.shelf : 'none'} onChange={(event) => update(book, event)}>
                      <option value="none" disabled>
                        Move to...
                      </option>
                      <option value="currentlyReading">
                        Currently Reading
                      </option>
                      <option value="wantToRead">
                        Want to Read
                      </option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors.join()}</div>
              </div>
              </li>
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