import { useEffect, useState } from "react";
import Edit from "../images/Edit.svg";
import Bitcoin from "../images/Bitcoin.svg";

const MyBitcoin = ({
  wallet,
  setWallet,
  history,
  setHistory,
  newWalletValue,
  setNewWalletValue,
  currencies,
}) => {
  //-------- USEEFFECT -----------------------
  // Run once
  useEffect(() => {
    getLocal();
  }, []);

  useEffect(() => {
    saveToLocal();
  }, [history]);

  //-------- FUNCTIONS -----------------------
  // Save to local
  const saveToLocal = () => {
    localStorage.setItem("wallet", JSON.stringify(wallet));
    localStorage.setItem("history", JSON.stringify(history));
  };

  // Get from local
  const getLocal = () => {
    if (localStorage.getItem("wallet") === null) {
      localStorage.setItem("wallet", JSON.stringify());
    } else {
      let walletFromLocal = JSON.parse(localStorage.getItem("wallet"));
      setWallet(Number(walletFromLocal));
    }
    if (localStorage.getItem("history") === null) {
      localStorage.setItem("history", JSON.stringify());
    } else {
      let historyFromLocal = JSON.parse(localStorage.getItem("history"));
      setHistory(historyFromLocal);
    }
  };

  const addToHistory = () => {
    let today = new Date();
    let date =
      today.getDate() +
      "/" +
      (today.getMonth() + 1) +
      "/" +
      today.getFullYear() +
      ": " +
      today.getHours() +
      ":" +
      today.getMinutes() +
      ":" +
      today.getSeconds();
    setHistory((prevArray) => [
      { date: date, value: newWalletValue },
      ...prevArray,
    ]);
  };

  const inputValueHandler = (e) => {
    setNewWalletValue(Number(e.target.value));
  };

  const changeWallet = () => {
    setWallet(newWalletValue);
    addToHistory();
    setNewWalletValue("");
  };

  const handleKeypress = (e) => {
    if (e.key === "Enter") {
      changeWallet();
    }
  };

  return (
    <div className="main">
      <div className="small-row">
        <div className="investment-container">
          <div className="investment">
            <div class="wallet-container">
              {" "}
              <div className="wallet-description">Kontostand</div>
              <div className="wallet-values">
                <div className="wallet-value special-font-color">
                  € {wallet}
                </div>
                <div className="wallet-value special-font-color">
                  {" "}
                  <img
                    src={Bitcoin}
                    className="wallet-bitcoin-icon"
                    alt=""
                  />{" "}
                  {currencies.map((el) => {
                    if (el.data_element.symbol === "EUR") {
                      return (
                        <div className="bitcoin-value">
                          {Math.round(
                            (wallet / el.data_element.last + Number.EPSILON) *
                              100
                          ) / 100}
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
            <div className="edit-container">
              <input
                placeholder="... Kontostand ändern"
                onChange={inputValueHandler}
                onKeyPress={handleKeypress}
                value={newWalletValue}
              />
              <img
                src={Edit}
                className="edit-icon"
                onClick={changeWallet}
                alt=""
              />
            </div>
            <div className="history-container">
              <div className="history-title">Verlauf</div>
              <div className="history-values">
                {history.map((el) => {
                  return (
                    <div className="history-value-row">
                      <div className="date">{el.date}</div>
                      <div className="wallet-change special-font-color">
                        € {el.value}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBitcoin;
