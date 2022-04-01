import companyIcon from "../images/CompanyIcon.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="company-icon-container">
        <img src={companyIcon} alt="" />
      </div>
      <div className="headline-title">
        sev<span>Coin</span>
      </div>
    </div>
  );
};

export default Header;
