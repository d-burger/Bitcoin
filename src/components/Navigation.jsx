import { Link, NavLink } from "react-router-dom";
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
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "active-link nav-link" : "inactive-link nav-link"
            }
          >
            <img src={Tacho} alt="" />
            <div>Dashboard</div>
          </NavLink>
          <NavLink
            to="/details"
            className={({ isActive }) =>
              isActive ? "active-link nav-link" : "inactive-link nav-link"
            }
          >
            <img src={Info} alt="" />
            <div>Details</div>
          </NavLink>
          <NavLink
            to="/umrechner"
            className={({ isActive }) =>
              isActive ? "active-link nav-link" : "inactive-link nav-link"
            }
          >
            <img src={Calculator} alt="" />
            <div>Umrechner</div>
          </NavLink>
          <NavLink
            to="/diagramm"
            className={({ isActive }) =>
              isActive ? "active-link nav-link" : "inactive-link nav-link"
            }
          >
            <img src={Chart} alt="" />
            <div>Diagramm</div>
          </NavLink>
          <NavLink
            to="/meine-bitcoin"
            className={({ isActive }) =>
              isActive ? "active-link nav-link" : "inactive-link nav-link"
            }
          >
            <img src={Bitcoin} alt="" />
            <div>Meine Bitcoin</div>
          </NavLink>
        </ul>
        <ul className="option-links">
          <li className="nav-link inactive-link">
            <img src={Gear} alt="" />
            <a href="#" className="nav-link-text">
              Einstellungen
            </a>
          </li>
          <li className="nav-link inactive-link">
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
