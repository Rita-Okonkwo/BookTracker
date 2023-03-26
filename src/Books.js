import BookShelf from "./BookShelf"
import { Link } from "react-router-dom"

const Books = ({books, handleChange}) => {
    return (
        <div className="app">
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
            <Link to="/search">Add a book</Link>
          </div>
        </div>
    </div>
    )
}
export default Books