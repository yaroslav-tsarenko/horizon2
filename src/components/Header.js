import { Button } from "@mui/material";
import FrameComponent5 from "./FrameComponent5";
import PropTypes from "prop-types";
import "./Header.css";

const Header = ({ className = "" }) => {
  return (
    <header className={`header2 ${className}`}>
      <FrameComponent5 />
      <div className="navigation-links-wrapper">
        <div className="navigation-links">
          <div className="links-wrapper">
            <div className="link-list">
              <a className="link-destinations6">Destinations</a>
              <a className="link-what6">What is an eSIM</a>
              <a className="link-about6">About Us</a>
              <a className="link-help6">Help center</a>
            </div>
          </div>
          <Button
            className="button-download-app2"
            disableElevation={true}
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#000",
              fontSize: "16",
              borderColor: "#000",
              borderRadius: "9999px",
              "&:hover": { borderColor: "#000" },
              width: 176.3,
              height: 48,
            }}
          >
            Download App
          </Button>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
