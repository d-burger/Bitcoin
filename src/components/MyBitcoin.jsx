import { useEffect, useState } from "react";
import Edit from "../images/Edit.svg";
import Bitcoin from "../images/Bitcoin.svg";

const MyBitcoin = () => {
  //-------- USESTATE ------------------------
  const [wallet, setWallet] = useState(500000);
  const [bitcoin, setBitcoin] = useState(2.8);
  const [history, setHistory] = useState([]);
  const [newWalletValue, setNewWalletValue] = useState();

  //-------- FUNCTIONS -----------------------
  const inputValueHandler = (e) => {
    setNewWalletValue(Number(e.target.value));
  };

  const changeWallet = () => {
    setWallet(newWalletValue);
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
              <div className="wallet-description">Investment</div>
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
                  {bitcoin}
                </div>
              </div>
            </div>
            <div className="edit-container">
              <input
                placeholder="... neuer Kontostand"
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
                <div className="history-value-row">
                  <div className="date">01.04.2022</div>
                  <div className="wallet-change special-font-color">
                    € 40000
                  </div>
                </div>
                <div className="history-value-row">
                  <div className="date">01.04.2022</div>
                  <div className="wallet-change special-font-color">
                    € 40000
                  </div>
                </div>
                <div className="history-value-row">
                  <div className="date">01.04.2022</div>
                  <div className="wallet-change special-font-color">
                    € 40000
                  </div>
                </div>
                <div className="history-value-row">
                  <div className="date">01.04.2022</div>
                  <div className="wallet-change special-font-color">
                    € 40000
                  </div>
                </div>
                <div className="history-value-row">
                  <div className="date">01.04.2022</div>
                  <div className="wallet-change special-font-color">
                    € 40000
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBitcoin;
