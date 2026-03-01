import { useEffect, useState } from "react";
import AddBookForm from "./components/AddBookForm.jsx";
import BookList from "./components/BookList";

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/books")
      .then(res => res.json())
      .then(data => setBooks(data));
  }, []);

  const addBook = (newBook) => {
    fetch("http://localhost:3000/books", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newBook)
    })
      .then(res => res.json())
      .then(saved => setBooks(prev => [...prev, saved]));
  };

  const deleteBook = (id) => {
    fetch("http://localhost:3000/books/" + id, { method: "DELETE" })
      .then(() => setBooks(prev => prev.filter(b => b._id !== id)));
  };

  const editBook = (id, updatedBook) => {
    fetch("http://localhost:3000/books/" + id, {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(updatedBook)
    })
      .then(res => res.json())
      .then(saved =>
        setBooks(prev => prev.map(b => (b._id === id ? saved : b)))
      );
  };

  return (
    <div>
      <h1>Book Review App</h1>
      <AddBookForm addBook={addBook} />
      <BookList books={books} deleteBook={deleteBook} editBook={editBook} />
    </div>
  );
};

export default App;

