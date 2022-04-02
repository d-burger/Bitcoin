import profilePicture from "../images/ProfilePicture.png";
import Logout from "../images/Logout.svg";
import Info from "../images/Info.svg";
import Calculator from "../images/Calculator.svg";
import Chart from "../images/Chart.svg";
import Bitcoin from "../images/Bitcoin.svg";
import Tacho from "../images/Tacho.svg";
import Gear from "../images/Gear.svg";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="profile-container">
        <img className="profile-picture" src={profilePicture} alt="" />
        <div className="profile-name">Domi Bu</div>
      </div>
      <div className="link-list">
        <ul className="main-links">
          <li className="nav-link">
            <img src={Tacho} alt="" />
            <a href="#" className="nav-link-text">
              Dashboard
            </a>
          </li>
          <li className="nav-link">
            <img src={Info} alt="" />
            <a href="#" className="nav-link-text">
              Detailansicht
            </a>
          </li>
          <li className="nav-link">
            <img src={Calculator} alt="" />
            <a href="#" className="nav-link-text">
              Umrechner
            </a>
          </li>
          <li className="nav-link">
            <img src={Chart} alt="" />
            <a href="#" className="nav-link-text">
              Diagramm
            </a>
          </li>
          <li className="nav-link">
            <img src={Bitcoin} alt="" />
            <a href="#" className="nav-link-text">
              Meine Bitcoin
            </a>
          </li>
        </ul>
        <ul className="option-links">
          <li className="nav-link">
            <img src={Gear} alt="" />
            <a href="#" className="nav-link-text">
              Einstellungen
            </a>
          </li>
          <li className="nav-link">
            <img src={Logout} alt="" />
            <a href="#" className="nav-link-text">
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
