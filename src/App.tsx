import React from "react";
import "./App.css";
import ThemeContextProvider from "./contexts/ThemeContext";
import AuthContextProvider from "./contexts/AuthContext";
import BookContextProvider from "./contexts/BookContext";
import MyApp from "./components";
import { Router, Route } from "react-router-dom";
import { LastLocationProvider } from "react-router-last-location";
import Login from "./components/Login";
import history from "./assets/history/history";
import Header from "./components/Calendar/Modal/Header";

const App: React.FC = () => {
  return (
    <>
      <ThemeContextProvider>
        <AuthContextProvider>
          <BookContextProvider>
            <Router history={history}>
              <LastLocationProvider>
                <Route exact path="/login" component={Login}></Route>
                <Route path="/App" component={MyApp}></Route>
                <Route path="/CalenderHeader" component={Header}></Route>
              </LastLocationProvider>
            </Router>
          </BookContextProvider>
        </AuthContextProvider>
      </ThemeContextProvider>
    </>
  );
};

export default App;
