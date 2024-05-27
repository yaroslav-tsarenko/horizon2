import { Button } from "@mui/material";
import "./FrameComponent18.css";

const FrameComponent18 = ({ className = "" }) => {
  return (
    <div className={`header-container ${className}`}>
      <header className="header4">
        <div className="image-6-layerstyle-parent5">
          <img
            className="image-6-layerstyle-icon7"
            loading="lazy"
            alt=""
            src="/image-6-layerstyle.svg"
          />
          <div className="frame-wrapper22">
            <div className="frame-parent35">
              <div className="horizon-wrapper5">
                <a className="horizon7">Horizon</a>
              </div>
              <a className="sim7">SIM</a>
            </div>
          </div>
        </div>
        <div className="header-inner2">
          <div className="frame-parent36">
            <div className="frame-wrapper23">
              <div className="link-destinations-parent5">
                <a className="link-destinations9">Destinations</a>
                <a className="link-what9">What is an eSIM</a>
                <a className="link-about9">About Us</a>
                <a className="link-help9">Help center</a>
              </div>
            </div>
            <Button
              className="button-download-app4"
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
    </div>
  );
};

FrameComponent18.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent18;
