const BookList = ({ books }) => {
  return (
    <ul>
      {books.map(book => (
        <li key={book._id}>
          {book.title} — {book.author}
        </li>
      ))}
    </ul>
  );
};

export default BookList;
