import React from "react";
import "./styles/app.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Dashboard from "./components/Dashboard";

const App = () => {
  //-------- USESTATE ------------------------
  const [currencies, setCurrencies] = useState([]);
  const [pricesOneWeek, setPricesOneWeek] = useState([]);

  //-------- USEEFFECT -----------------------
  useEffect(() => {
    getCurrencies();
    getPricesOneWeek();
  }, []);

  //-------- FUNCTIONS -----------------------
  const getCurrencies = async () => {
    try {
      const { data } = await axios.get("https://blockchain.info/ticker");
      console.log(data);
      let helperArr = [];

      for (const key in data) {
        let helpObject = { data_element: data[key] };
        helperArr.push(helpObject);
      }
      setCurrencies(helperArr);
    } catch (error) {
      console.error(error);
    }
  };

  const getPricesOneWeek = async () => {
    try {
      const {
        data: { values },
      } = await axios.get(
        "https://api.blockchain.info/charts/market-price?timespan=7days&format=json&cors=true"
      );

      let helperArr = [];
      values.map((value) => {
        helperArr.push({
          x:
            new Date(value.x * 1000).getDate() +
            "/" +
            (new Date(value.x * 1000).getMonth() + 1) +
            "/" +
            new Date(value.x * 1000).getFullYear(),
          y: value.y,
        });
      });

      setPricesOneWeek(helperArr);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="navigation-main-split">
        <Navigation />
        <Dashboard currencies={currencies} pricesOneWeek={pricesOneWeek} />
      </div>
    </div>
  );
};

export default App;
