import PropTypes from 'prop-types'

const BookShelf = ({books, shelf, shelfName, update})  => {
  console.log(books)
    return (
        <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {
              books.filter((book) => book.shelf === shelf).map((filteredBook) =>  (
                  <li key={filteredBook.id}>
                  <div className="book">
                    <div className="book-top">
                      <div
                        className="book-cover"
                        style={{
                        width: 128,
                        height: 193,
                        backgroundImage:
                        `url(${filteredBook.imageLinks['thumbnail']})`
                      }}/>
                  <div className="book-shelf-changer">
                    <select name="shelf" value={shelf} onChange={(event) => update(filteredBook, event)}>
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
                <div className="book-title">{filteredBook.title}</div>
                <div className="book-authors">{filteredBook.authors.join()}</div>
              </div>
              </li>
                )
              )
            }
          </ol>
        </div>
      </div> 
    )
}

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  shelf: PropTypes.string.isRequired,
  shelfName: PropTypes.string.isRequired
}

export default BookShelf