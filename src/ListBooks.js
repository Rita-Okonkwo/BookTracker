const ListBooks = ({book, shelf, update}) => {
    return (
        <li>
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
                        <select name="shelf" value={shelf} onChange={(event) => update(book, event)}>
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
    );
};
export default ListBooks