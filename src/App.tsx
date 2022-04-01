import React from "react";
import "./styles/app.scss";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Main from "./components/Main";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="navigation-main-split">
        <Navigation />
        <Main />
      </div>
    </div>
  );
};

export default App;
