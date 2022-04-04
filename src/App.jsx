import React from "react";
import "./styles/app.scss";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Dashboard from "./components/Dashboard";
import Details from "./components/Details";
import Calculator from "./components/Calculator";
import Diagram from "./components/Diagram";
import MyBitcoin from "./components/MyBitcoin";

const App = () => {
  //-------- USESTATE ------------------------
  const [currencies, setCurrencies] = useState([]);
  const [pricesOneWeek, setPricesOneWeek] = useState([]);
  const [pricesEightWeeks, setPricesEightWeeks] = useState([]);

  // Calculator
  const [valueForConversion, setValueForConversion] = useState();
  const [optionValue, setOptionValue] = useState();

  // MyBitcoin
  const [wallet, setWallet] = useState(0);
  const [history, setHistory] = useState([]);
  const [newWalletValue, setNewWalletValue] = useState();

  //-------- USEEFFECT -----------------------
  useEffect(() => {
    getCurrencies();
    getPricesOneWeek();
    getPricesEightWeeks();
  }, []);

  // Save Default Value For Calculator
  useEffect(() => {
    try {
      let obj = currencies.find((el) => el.data_element.symbol === "AUD");
      console.log(obj);
      let defaultValue = Number(obj.data_element.last);
      setOptionValue(defaultValue);
    } catch (error) {
      console.log("Currencies not saved yet.");
    }
  }, [currencies]);

  //-------- FUNCTIONS -----------------------
  const getCurrencies = async () => {
    try {
      const { data } = await axios.get("https://blockchain.info/ticker");

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
  const getPricesEightWeeks = async () => {
    try {
      const {
        data: { values },
      } = await axios.get(
        "https://api.blockchain.info/charts/market-price?timespan=8weeks&format=json&cors=true"
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

      setPricesEightWeeks(helperArr);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="navigation-main-split">
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={
              <Dashboard
                currencies={currencies}
                pricesOneWeek={pricesOneWeek}
                wallet={wallet}
                setWallet={setWallet}
              />
            }
          />
          <Route path="/details" element={<Details />} />
          <Route
            path="/umrechner"
            element={
              <Calculator
                currencies={currencies}
                valueForConversion={valueForConversion}
                setValueForConversion={setValueForConversion}
                optionValue={optionValue}
                setOptionValue={setOptionValue}
              />
            }
          />
          <Route
            path="/diagramm"
            element={
              <Diagram
                pricesOneWeek={pricesOneWeek}
                pricesEightWeeks={pricesEightWeeks}
              />
            }
          />
          <Route
            path="/meine-bitcoin"
            element={
              <MyBitcoin
                wallet={wallet}
                setWallet={setWallet}
                history={history}
                setHistory={setHistory}
                newWalletValue={newWalletValue}
                setNewWalletValue={setNewWalletValue}
                currencies={currencies}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
