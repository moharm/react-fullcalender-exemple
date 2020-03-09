import React, { useContext } from "react";
import { ArrayOfBooks } from "../../../assets/types/Types";
import { AuthContext } from "../../../contexts/AuthContext";
import { BookContext } from "../../../contexts/BookContext";

const Navbar = () => {
  const { isAuthentificated, Logout } = useContext(AuthContext);
  const { books } = useContext(BookContext) as ArrayOfBooks;
  return (
    <div className="navbar">
      <nav>
        <h1>Context App</h1>
        <button onClick={Logout}>
          {!isAuthentificated ? "Logged in" : "Logged out"}
        </button>

        <div>
          <p>Currently you have {books.length} books to get through...</p>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
