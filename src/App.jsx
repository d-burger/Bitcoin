import React from "react";
import "./styles/app.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Dashboard from "./components/Dashboard";

const App = () => {
  //-------- USESTATE ------------------------
  const [searchStarted, setSearchStarted] = useState(false);
  const [currencies, setCurrencies] = useState([]);

  //-------- USEEFFECT -----------------------
  useEffect(() => {
    getCurrencies();
  }, []);

  //-------- FUNCTIONS -----------------------
  const getCurrencies = async () => {
    try {
      const { data } = await axios.get("https://blockchain.info/ticker");
      console.log(data);
      let helperArr = [];

      for (const key in data) {
        let helpObject = { [key]: data[key] };
        helperArr.push(helpObject);
      }

      setCurrencies(helperArr);
      setSearchStarted(true);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="App">
      <Header />
      <div className="navigation-main-split">
        <Navigation />
        <Dashboard currencies={currencies} />
      </div>
    </div>
  );
};

export default App;
