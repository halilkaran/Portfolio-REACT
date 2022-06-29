import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";
 
const Topbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"topbar " + (menuOpen && " active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            <img src="assets/logo.png" alt="logo" />
            <img
              src={menuOpen ? "assets/Halo1.png" : "assets/Halo.png"}
              alt="logo"
            />
          </a>

          <div className="itemContainer">
            <Person className="icon" />
            <span>
              <div class="col-12 col-sm-4">
                <i class="fab fa-whatsapp"></i>

                <a
                  style={{ textDecoration: "none", color: "black" }}
                  href="https://wa.me/+4917670104713 "
                  target="_blank"
                  rel="noreferrer"
                >
                  +49 176 70104713
                </a>
              </div>
            </span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>
              {" "}
              <a
                style={{ textDecoration: "none", color: "black" }}
                href="mailto:halilkarancontact@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                halilkarancontact@gmail.com
              </a>{" "}
            </span>
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
