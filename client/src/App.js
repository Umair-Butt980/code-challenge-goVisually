import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainPage from "./Pages/MainPage";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <MainPage />
          </Route>
        </Switch>
      </main>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
