import getSymbolFromCurrency from "currency-symbol-map";

const Currencies = ({ currencies }) => {
  return (
    <div className="currencies-container">
      <div className="currency-titles">
        <div className="currency-element"></div>
        <div className="currency-element">Einkauf</div>
        <div className="currency-element">Verkauf</div>
      </div>
      <div className="scroll-container">
        {currencies.map((currency, index) => {
          return (
            <div className="currency-row">
              <div className="currency-element">
                {currency.data_element.symbol}
              </div>
              <div className="currency-element special-font-color">
                {currency.data_element.buy}{" "}
                {getSymbolFromCurrency(currency.data_element.symbol)}
              </div>
              <div className="currency-element special-font-color">
                {currency.data_element.sell}{" "}
                {getSymbolFromCurrency(currency.data_element.symbol)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Currencies;
