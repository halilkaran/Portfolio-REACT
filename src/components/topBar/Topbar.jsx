import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";
import logo from "../../assets/logo.png";
import halo from "../../assets/Halo.png";
import halo1 from "../../assets/Halo1.png";
const Topbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"topbar " + (menuOpen && " active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            <img src={logo} alt="logo" />
            <img src={menuOpen ? halo1 : halo} alt="logo" />
              
          </a>

          <div className="itemContainer">
            <Person className="icon" />
            <span> +49 176 70104713 </span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span> halilkarancontact@gmail.com </span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
