import FrameComponent5 from "./FrameComponent5";
import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section className={`footer-wrapper ${className}`}>
      <footer className="footer4">
        <div className="footer-top">
          <FrameComponent5
            propTextDecoration="unset"
            propDisplay="unset"
            propTextDecoration1="unset"
          />
          <div className="links-container">
            <div className="navigation-links1">
              <a
                className="link-destinations7"
                href="https://www.figma.com/design/ChO0euFDvPgaehWUhty9Gg?node-id=1-470"
                target="_blank"
              >
                Destinations
              </a>
              <a
                className="link-what7"
                href="https://www.figma.com/design/ChO0euFDvPgaehWUhty9Gg?node-id=1-2421"
                target="_blank"
              >
                What is an eSIM
              </a>
              <a
                className="link-about7"
                href="https://www.figma.com/design/ChO0euFDvPgaehWUhty9Gg?node-id=1-2942"
                target="_blank"
              >
                About Us
              </a>
              <div className="link-help7">Help center</div>
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
        <div className="separator-container">
          <div className="separator2" />
          <div className="copyright">
            <div className="rights">
              <div className="legal">
                <div className="all-rights-reserved2">
                  {" "}
                  All rights reserved.
                </div>
                <a className="link-privacy2">Privacy Policy</a>
                <u className="link-terms2">Terms of Service</u>
                <u className="button-cookie2">Cookie Preferences</u>
              </div>
            </div>
            <div className="app-icons">
              <img
                className="link-picture-applesvg2"
                loading="lazy"
                alt=""
                src="/link--picture--applesvg@2x.png"
              />
              <img
                className="link-picture-googlesvg2"
                loading="lazy"
                alt=""
                src="/link--picture--googlesvg@2x.png"
              />
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
