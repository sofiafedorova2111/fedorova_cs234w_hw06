import { useState } from "react";

const Book = ({ book, deleteBook, editBook }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(book.title);
  const [editAuthor, setEditAuthor] = useState(book.author);

  const save = () => {
    editBook(book._id, { title: editTitle, author: editAuthor });
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
          <input value={editAuthor} onChange={(e) => setEditAuthor(e.target.value)} />
          <button onClick={save}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          {book.title} — {book.author}
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteBook(book._id)}>Delete</button>
        </>
      )}
    </li>
  );
};

export default Book;
