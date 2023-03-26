import PropTypes from 'prop-types'
import ListBooks from './ListBooks'

const BookShelf = ({books, shelf, shelfName, update})  => {
    return (
        <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {
              books.filter((book) => book.shelf === shelf).map((filteredBook) =>  (
                <ListBooks key={filteredBook.id} book={filteredBook} shelf={shelf} update={update}/>
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