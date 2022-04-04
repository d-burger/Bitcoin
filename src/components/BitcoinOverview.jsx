import { useEffect } from "react";
import Bitcoin from "../images/Bitcoin.svg";
import { Link } from "react-router-dom";

const BitcoinOverview = ({ currencies, wallet, setWallet }) => {
  //-------- USEEFFECT -----------------------
  // Run once
  useEffect(() => {
    getLocal();
  }, []);

  //-------- FUNCTIONS -----------------------
  // Get from local
  const getLocal = () => {
    if (localStorage.getItem("wallet") === null) {
      localStorage.setItem("wallet", JSON.stringify());
    } else {
      let walletFromLocal = JSON.parse(localStorage.getItem("wallet"));
      setWallet(Number(walletFromLocal));
    }
  };

  return (
    <div className="bitcoin-overview-container">
      <div class="dashboard-wallet-container">
        {" "}
        <div className="dashboard-wallet-description">Kontostand</div>
        <div className="dashboard-wallet-values">
          <div className="wallet-value special-font-color">€ {wallet}</div>
          <div className="equal-sign">=</div>
          <div className="wallet-value special-font-color">
            {" "}
            <img src={Bitcoin} className="wallet-bitcoin-icon" alt="" />{" "}
            {currencies.map((el) => {
              if (el.data_element.symbol === "EUR") {
                return (
                  <div className="bitcoin-value">
                    {Math.round(
                      (wallet / el.data_element.last + Number.EPSILON) * 100
                    ) / 100}
                  </div>
                );
              }
            })}
          </div>
        </div>
        <Link to="/meine-bitcoin">
          <button className="btn">Anpassen</button>
        </Link>
      </div>
    </div>
  );
};

export default BitcoinOverview;
