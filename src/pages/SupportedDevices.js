import FrameComponent7 from "../components/FrameComponent7";
import FrameComponent6 from "../components/FrameComponent6";
import "./SupportedDevices.css";

const SupportedDevices = () => {
  return (
    <div className="supported-devices">
      <header className="header1">
        <div className="image-6-layerstyle-container">
          <img
            className="image-6-layerstyle-icon2"
            loading="lazy"
            alt=""
            src="/image-6-layerstyle.svg"
          />
          <div className="frame-wrapper4">
            <div className="frame-parent7">
              <div className="horizon-frame">
                <a className="horizon2">Horizon</a>
              </div>
              <a className="sim2">SIM</a>
            </div>
          </div>
        </div>
        <div className="header-child">
          <div className="frame-parent8">
            <div className="frame-wrapper5">
              <div className="link-destinations-container">
                <a className="link-destinations2">Destinations</a>
                <a className="link-what2">What is an eSIM</a>
                <a className="link-about2">About Us</a>
                <a className="link-help2">Help center</a>
              </div>
            </div>
            <button className="button-download-app1">
              <a className="download-app1">Download App</a>
            </button>
          </div>
        </div>
      </header>
      <section className="supported-devices-inner">
        <FrameComponent7 />
      </section>
      <footer className="footer1">
        <div className="frame-parent9">
          <div className="image-6-layerstyle-parent1">
            <img
              className="image-6-layerstyle-icon3"
              alt=""
              src="/image-6-layerstyle.svg"
            />
            <div className="frame-wrapper6">
              <div className="frame-parent10">
                <div className="horizon-wrapper1">
                  <div className="horizon3">Horizon</div>
                </div>
                <div className="sim3">SIM</div>
              </div>
            </div>
          </div>
          <div className="frame-wrapper7">
            <div className="link-destinations-parent1">
              <a
                className="link-destinations3"
                href="https://www.figma.com/design/ChO0euFDvPgaehWUhty9Gg?node-id=1-470"
                target="_blank"
              >
                Destinations
              </a>
              <a
                className="link-what3"
                href="https://www.figma.com/design/ChO0euFDvPgaehWUhty9Gg?node-id=1-2421"
                target="_blank"
              >
                What is an eSIM
              </a>
              <a
                className="link-about3"
                href="https://www.figma.com/design/ChO0euFDvPgaehWUhty9Gg?node-id=1-2942"
                target="_blank"
              >
                About Us
              </a>
              <div className="link-help3">Help center</div>
              <a
                className="link-download1"
                href="https://www.figma.com/design/ChO0euFDvPgaehWUhty9Gg?node-id=1-3096"
                target="_blank"
              >
                Download App
              </a>
              <div className="link-become1">Become affiliate</div>
            </div>
          </div>
        </div>
        <FrameComponent6 linkPictureGooglesvg="/link--picture--googlesvg1@2x.png" />
      </footer>
    </div>
  );
};

export default SupportedDevices;
