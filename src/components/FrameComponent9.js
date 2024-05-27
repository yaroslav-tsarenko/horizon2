import FrameComponent5 from "./FrameComponent5";
import PropTypes from "prop-types";
import "./FrameComponent9.css";

const FrameComponent9 = ({ className = "" }) => {
  return (
    <header className={`header-wrapper ${className}`}>
      <div className="header3">
        <FrameComponent5
          propTextDecoration="none"
          propDisplay="inline-block"
          propTextDecoration1="none"
        />
        <div className="header-inner1">
          <div className="frame-parent24">
            <div className="frame-wrapper18">
              <div className="link-destinations-parent4">
                <a className="link-destinations8">Destinations</a>
                <a className="link-what8">What is an eSIM</a>
                <a className="link-about8">About Us</a>
                <a className="link-help8">Help center</a>
              </div>
            </div>
            <div className="button-download-app3">
              <a className="download-app1">Download App</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

FrameComponent9.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent9;
