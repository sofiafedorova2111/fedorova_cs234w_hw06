import { useState } from "react";
import BookForm from "../components/BookForm";

const AddBookPage = () => {
  const [message, setMessage] = useState("");

  const handleAdd = (newBook) => {
    fetch("http://localhost:3000/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBook)
    })
      .then(res => res.json())
      .then(data => setMessage(data.message));
  };

  return (
    <>
      <h2>Add a Book</h2>
      <BookForm onSubmit={handleAdd} />
      {message && <p>{message}</p>}
    </>
  );
};

export default AddBookPage;
