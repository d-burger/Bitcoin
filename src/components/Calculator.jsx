import { useState, useEffect } from "react";
import getSymbolFromCurrency from "currency-symbol-map";
import Bitcoin from "../images/Bitcoin.svg";
import { v4 as uuidv4 } from "uuid";

const Calculator = ({
  currencies,
  valueForConversion,
  setValueForConversion,
  optionValue,
  setOptionValue,
}) => {
  //-------- FUNCTIONS -----------------------
  const inputHandler = (e) => {
    setValueForConversion(parseInt(e.target.value));
  };

  const optionHandler = (e) => {
    setOptionValue(e.target.value);
  };

  const valueHandler = (currency) => {
    console.log(currency);
    let obj = currencies.find((o) => o.data_element.symbol === currency);
    console.log(obj.data_element.last);
  };

  return (
    <div className="main">
      <div className="small-row">
        <div className="calculate-container">
          <div className="calculation-title">Betrag in Bitcoin umrechnen</div>
          <div className="calculation">
            <select onChange={optionHandler}>
              {currencies.map((el) => {
                if (
                  el.data_element.symbol === "USD" ||
                  el.data_element.symbol === "EUR" ||
                  el.data_element.symbol === "AUD" ||
                  el.data_element.symbol === "NZD" ||
                  el.data_element.symbol === "GBP"
                ) {
                  return (
                    <option key={uuidv4()} value={el.data_element.last}>
                      {getSymbolFromCurrency(el.data_element.symbol)}{" "}
                      {el.data_element.symbol}
                    </option>
                  );
                }
              })}
            </select>

            <input placeholder="... Betrag eingeben" onChange={inputHandler} />
          </div>
          <div>entspricht</div>
          <div className="conversion-result">
            {" "}
            {valueForConversion ? (
              <div className="conversion-result-container">
                <div>
                  <img src={Bitcoin} className="wallet-bitcoin-icon" alt="" />
                </div>
                <div className="special-font-color">
                  {Math.round(
                    (valueForConversion / optionValue + Number.EPSILON) * 1000
                  ) / 1000}
                </div>
              </div>
            ) : (
              <div className="conversion-result-container">
                <div>
                  <img src={Bitcoin} className="wallet-bitcoin-icon" alt="" />
                </div>
                <div className="special-font-color">0</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
