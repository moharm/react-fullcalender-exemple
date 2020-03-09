import React, { useContext } from "react";
import { ArrayOfBooks } from "../../../assets/types/Types";
import { BookContext } from "../../../contexts/BookContext";
import { BookDetails } from "./BookDetails";

const BookList = () => {
  const { books } = useContext(BookContext) as ArrayOfBooks;

  return (
    <div className="book-list">
      <ul>
        {books.map(book => {
          return <BookDetails book={book} key={book.id} />;
        })}
      </ul>
    </div>
  );
};

export default BookList;
