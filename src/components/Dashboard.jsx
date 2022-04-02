// import { useEffect, useState } from "react";
// import axios from "axios";
import Info from "../images/Info.svg";

const Dashboard = ({ currencies }) => {
  // console.log(currencies);
  if (true)
    return (
      <div className="main">
        <div className="small-row">
          <div className="single-price-container">
            <img src={Info} className="info-icon-main" alt="" />
            <div className="single-price-title">Preis (USD)</div>
            {currencies.map((currency) => {
              console.log(currency.ARS);
              return <div className="single-price-value">$</div>;
            })}

            <div className="single-price-description">
              Durchschnittlicher Marktpreis in USD
            </div>
          </div>
          <div className="currencies-container"> Hi</div>
        </div>
        <div className="tall-row">
          <div className="price-chart-container">Nice</div>
        </div>
      </div>
    );
  else return <div>Hi</div>;
};

export default Dashboard;
