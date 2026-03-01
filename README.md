Project CS234W

Name: Sofia Fedorova

Date: 02/26/2026

Description: Book Review App which includes forn and backend, able to add, delete, or edit a book (CRUD)

BACKEND
- Express
- MongoDB


FRONTEND:
- React

To connnect fron to end  fetch() is used.

Testing:

All the backend testing was completed through Thunder Client

GET /books
- Sent a GET request to http://localhost:3000/books

PUT /books/:id
- In the Body : { "title": "Title", "author": "Author" }

DELETE /books/:id

- Sent a DELETE request using a valid _id.

FRONTEND TESTING:

- npm run dev
- Able to add, edit, or delete books
