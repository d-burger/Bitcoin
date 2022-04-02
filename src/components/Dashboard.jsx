import Info from "../images/Info.svg";

const Dashboard = ({ currencies }) => {
  return (
    <div className="main">
      <div className="small-row">
        {/* SINGLE PRICE ----------------------------------*/}
        <div className="single-price-container">
          <img src={Info} className="info-icon-main" alt="" />
          <div className="single-price-title">Preis (USD)</div>
          {currencies.map((currency, index) => {
            if (currency.data_element.symbol === "USD") {
              return (
                <div className="single-price-value" key={index}>
                  $ {currency.data_element.last}
                </div>
              );
            }
          })}
          <div className="single-price-description">
            Durchschnittlicher Marktpreis in USD
          </div>
        </div>
        {/* CURRENCIES ------------------------------------*/}
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
                    {currency.data_element.buy}
                  </div>
                  <div className="currency-element special-font-color">
                    {currency.data_element.sell}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="tall-row">
        {/* PRICE CHART -----------------------------------*/}
        <div className="price-chart-container">Nice</div>
      </div>
    </div>
  );
};

export default Dashboard;
