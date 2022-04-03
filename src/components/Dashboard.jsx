import Info from "../images/Info.svg";
import { Line } from "react-chartjs-2";
import getSymbolFromCurrency from "currency-symbol-map";

const Dashboard = ({ currencies, pricesOneWeek }) => {
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
      </div>
      <div className="tall-row">
        {/* PRICE CHART -----------------------------------*/}
        <div className="price-chart-container">
          <div className="chart">
            <Line
              data={{
                labels: pricesOneWeek.map((element) => element.x),

                datasets: [
                  {
                    label: "USD For One Bitcoin",
                    data: pricesOneWeek.map((element) => element.y),
                    // backgroundColor: [],
                    fill: false,
                    borderColor: ["rgba(29, 241, 255, 1)"],
                    borderWidth: 3,
                    color: ["rgba(255, 255, 255, 1)"],
                  },
                ],
              }}
              options={{
                elements: {
                  line: {
                    tension: 0,
                  },
                },
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        beginAtZero: false,
                      },
                    },
                  ],
                },
              }}
              responsive={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
