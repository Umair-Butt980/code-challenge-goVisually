import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import MainPage from "./Pages/MainPage";
import Modal from "./components/Modal/Modal";

function App() {
  return (
    <Router>
      <Header />
      <Modal />
      <main>
        <Switch>
          <Route path="/" exact>
            <MainPage />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
