import Book from "./Book";

const BookList = ({ books, deleteBook, editBook }) => {
  return (
    <ul>
      {books.map((b) => (
        <Book
          key={b._id}
          book={b}
          deleteBook={deleteBook}
          editBook={editBook}
        />
      ))}
    </ul>
  );
};

export default BookList;
