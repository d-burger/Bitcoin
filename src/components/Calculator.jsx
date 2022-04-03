import { useState, useEffect } from "react";
import getSymbolFromCurrency from "currency-symbol-map";

const Calculator = ({ currencies }) => {
  //-------- USESTATE ------------------------
  const [valueForConversion, setValueForConversion] = useState();
  const [optionValue, setOptionValue] = useState();

  //-------- USEEFFECT -----------------------
  useEffect(() => {}, []);

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
                    <option value={el.data_element.last}>
                      {getSymbolFromCurrency(el.data_element.symbol)}{" "}
                      {el.data_element.symbol}
                    </option>
                  );
                }
              })}
            </select>

            <input
              placeholder="Hier Betrag eingeben ..."
              onChange={inputHandler}
            />
            <button>Berechnen</button>
            <button>Zurücksetzen</button>
          </div>
        </div>
      </div>
      <div>{valueForConversion / optionValue}</div>
    </div>
  );
};

export default Calculator;
