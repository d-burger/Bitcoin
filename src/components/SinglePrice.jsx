import Info from "../images/Info.svg";
import { Link } from "react-router-dom";

const SinglePrice = ({ currencies }) => {
  return (
    <div className="single-price-container">
      <Link to="/details" className="info-icon-main">
        <img src={Info} className="info-icon-main" alt="" />
      </Link>

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
  );
};

export default SinglePrice;
