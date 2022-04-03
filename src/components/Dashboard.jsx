import SinglePrice from "./SinglePrice";
import Currencies from "./Currencies";
import PriceChart from "./PriceChart";
import BitcoinOverview from "./BitcoinOverview";

const Dashboard = ({ currencies, pricesOneWeek, wallet, setWallet }) => {
  return (
    <div className="main">
      <div className="small-row">
        <SinglePrice currencies={currencies} />
        <Currencies currencies={currencies} />
      </div>
      <div className="tall-row">
        <PriceChart pricesOneWeek={pricesOneWeek} />
        <BitcoinOverview
          wallet={wallet}
          currencies={currencies}
          setWallet={setWallet}
        />
      </div>
    </div>
  );
};

export default Dashboard;
