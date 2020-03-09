import React, { useContext } from "react";
import { BookContext, Types } from "../../../contexts/BookContext";
import { BookDetailPropsTypes } from "../../../assets/types/Types";

export const BookDetails = (props: BookDetailPropsTypes) => {
  const { dispatch } = useContext(BookContext) as Types;

  return (
    <li onClick={() => dispatch({ type: "REMOVE_BOOK", id: props.book.id })}>
      <div className="title">{props.book.title}</div>
      <div className="author">{props.book.author}</div>
    </li>
  );
};
