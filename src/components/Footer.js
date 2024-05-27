import FrameComponent6 from "./FrameComponent6";
import PropTypes from "prop-types";
import "./Footer.css";

const Footer = ({ className = "" }) => {
  return (
    <section className={`footer4 ${className}`}>
      <div className="frame-parent53">
        <FrameComponent6
          propTextDecoration="unset"
          propDisplay="unset"
          propTextDecoration1="unset"
        />
        <div className="frame-wrapper19">
          <div className="link-destinations-parent3">
            <a
              className="link-destinations9"
              href="https://www.figma.com/design/ChO0euFDvPgaehWUhty9Gg?node-id=1-470"
              target="_blank"
            >
              Destinations
            </a>
            <a
              className="link-what9"
              href="https://www.figma.com/design/ChO0euFDvPgaehWUhty9Gg?node-id=1-2421"
              target="_blank"
            >
              What is an eSIM
            </a>
            <a
              className="link-about9"
              href="https://www.figma.com/design/ChO0euFDvPgaehWUhty9Gg?node-id=1-2942"
              target="_blank"
            >
              About Us
            </a>
            <div className="link-help9">Help center</div>
            <a
              className="link-download4"
              href="https://www.figma.com/design/ChO0euFDvPgaehWUhty9Gg?node-id=1-3096"
              target="_blank"
            >
              Download App
            </a>
            <div className="link-become4">Become affiliate</div>
          </div>
        </div>
      </div>
      <div className="separator-parent">
        <div className="separator1" />
        <div className="frame-parent54">
          <div className="frame-wrapper20">
            <div className="all-rights-reserved-parent">
              <div className="all-rights-reserved1">All rights reserved.</div>
              <a className="link-privacy1">Privacy Policy</a>
              <u className="link-terms1">Terms of Service</u>
              <u className="button-cookie1">Cookie Preferences</u>
            </div>
          </div>
          <div className="link-picture-applesvg-group">
            <img
              className="link-picture-applesvg1"
              loading="lazy"
              alt=""
              src="/link--picture--applesvg@2x.png"
            />
            <img
              className="link-picture-googlesvg1"
              loading="lazy"
              alt=""
              src="/link--picture--googlesvg@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
