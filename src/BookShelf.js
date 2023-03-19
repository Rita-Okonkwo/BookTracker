const BookShelf = ({books, shelf, shelfName})  => {
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
                      }}
                  ></div>
                  <div className="book-shelf-changer">
                    <select>
                      <option value="none" disabled>
                        Move to...
                      </option>
                      <option value="currentlyReading">
                        Currently Reading
                      </option>
                      <option value="wantToRead">Want to Read</option>
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
export default BookShelf