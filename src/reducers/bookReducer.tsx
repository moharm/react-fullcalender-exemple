import { BookTypes } from "../assets/types/Types";

export const bookReducer = (state: any, action: any) => {
  debugger;
  switch (action.type) {
    case "ADD_BOOK":
      return [
        ...state,
        {
          title: action.book.title,
          author: action.book.author,
          id: action.book.id
        }
      ];
    case "REMOVE_BOOK":
      return state.filter((book: BookTypes) => book.id !== action.id);

    default:
      return state;
  }
};
