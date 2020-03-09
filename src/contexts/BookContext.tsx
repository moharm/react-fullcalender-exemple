import React, { createContext, useReducer, useEffect } from "react";
import { ArrayOfBooks } from "../assets/types/Types";
import { bookReducer } from "../reducers/bookReducer";

export const BookContext = createContext({});

export interface Types {
  books: ArrayOfBooks;
  dispatch: any;
}

const BookContextProvider = (props: any) => {
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem("books");
    return localData ? JSON.parse(localData) : [];
  });
  //   const [books, setBooks] = useState([
  //     { title: "boite a merveille", author: "", id: "1" },
  //     { title: "comment je vois le monde", author: "", id: "2" },
  //     { title: "demain, tu comprendras", author: "", id: "3" },
  //     { title: "pouliche", author: "", id: "4" }
  //   ]);
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  });
  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
