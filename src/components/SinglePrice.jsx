import Info from "../images/Info.svg";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const SinglePrice = ({ currencies }) => {
  return (
    <div className="single-price-container">
      <Link to="/details" className="info-icon-main">
        <img src={Info} className="info-icon-main" alt="" />
      </Link>

      <div className="single-price-title">Preis (USD)</div>
      {currencies.map((currency) => {
        if (currency.data_element.symbol === "USD") {
          return (
            <div className="single-price-value" key={uuidv4()}>
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
