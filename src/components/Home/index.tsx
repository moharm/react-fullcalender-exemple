import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import { NewBookForm } from "./components/NewBookForm";
import { RouteComponentProps } from "@reach/router";
import { AuthContext } from "../../contexts/AuthContext";
import {
  withLastLocation,
  WithLastLocationProps
} from "react-router-last-location";
import history from "../../assets/history/history";

interface types {
  lastLocation: any;
}

const Home = (props: RouteComponentProps & WithLastLocationProps) => {
  const { isAuthentificated } = useContext(AuthContext);
  if (!isAuthentificated) {
    history.push("/login");
  }
  return (
    <>
      <div className="home">
        <Navbar />
        <BookList />
        <NewBookForm />
        <button
          onClick={() => {
            history.push("/profile");
          }}
        >
          {" "}
          Go to Profile
        </button>
      </div>
    </>
  );
};

export default withLastLocation(Home);
