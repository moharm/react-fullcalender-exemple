import React, { useContext, useState } from "react";
import { BookContext, Types } from "../../../contexts/BookContext";
import uuid from "uuid/v1";

export const NewBookForm = () => {
  const { dispatch } = useContext(BookContext) as Types;
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    //console.log(title, author);
    dispatch({
      type: "ADD_BOOK",
      book: {
        title,
        author,
        id: uuid()
      }
    });
    setTitle("");
    setAuthor("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="book title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="inp"
      />
      <input
        type="text"
        placeholder="author name"
        value={author}
        onChange={e => setAuthor(e.target.value)}
        className="inp"
      />
      <input type="submit" value="add book" />
    </form>
  );
};
