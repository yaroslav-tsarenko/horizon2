import { Button } from "@mui/material";
import FrameComponent13 from "../components/FrameComponent13";
import Background2 from "../components/Background2";
import FrameComponent11 from "../components/FrameComponent11";
import FrameComponent10 from "../components/FrameComponent10";
import "./HowItWorks.css";

const HowItWorks = () => {
  return (
    <div className="how-it-works">
      <header className="header">
        <div className="image-6-layerstyle-group">
          <img
            className="image-6-layerstyle-icon1"
            loading="lazy"
            alt=""
            src="/image-6-layerstyle.svg"
          />
          <div className="frame-wrapper3">
            <div className="frame-parent8">
              <div className="horizon-container">
                <a className="horizon1">Horizon</a>
              </div>
              <a className="sim1">SIM</a>
            </div>
          </div>
        </div>
        <div className="header-inner">
          <div className="frame-parent9">
            <div className="frame-wrapper4">
              <div className="link-destinations-group">
                <a className="link-destinations1">Destinations</a>
                <a className="link-what1">What is an eSIM</a>
                <a className="link-about1">About Us</a>
                <a className="link-help1">Help center</a>
              </div>
            </div>
            <Button
              className="button-download-app"
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
      <section className="how-it-works-inner">
        <FrameComponent13 />
      </section>
      <Background2 />
      <FrameComponent11 />
      <FrameComponent10 />
      <section className="footer1">
        <div className="frame-parent10">
          <div className="image-6-layerstyle-container">
            <img
              className="image-6-layerstyle-icon2"
              alt=""
              src="/image-6-layerstyle.svg"
            />
            <div className="frame-wrapper5">
              <div className="frame-parent11">
                <div className="horizon-frame">
                  <div className="horizon2">Horizon</div>
                </div>
                <div className="sim2">SIM</div>
              </div>
            </div>
          </div>
          <div className="frame-wrapper6">
            <div className="link-destinations-container">
              <a
                className="link-destinations2"
                href="https://www.figma.com/design/ChO0euFDvPgaehWUhty9Gg?node-id=1-470"
                target="_blank"
              >
                Destinations
              </a>
              <a
                className="link-what2"
                href="https://www.figma.com/design/ChO0euFDvPgaehWUhty9Gg?node-id=1-2421"
                target="_blank"
              >
                What is an eSIM
              </a>
              <a
                className="link-about2"
                href="https://www.figma.com/design/ChO0euFDvPgaehWUhty9Gg?node-id=1-2942"
                target="_blank"
              >
                About Us
              </a>
              <div className="link-help2">Help center</div>
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
        <div className="separator-group">
          <div className="separator1" />
          <div className="frame-parent12">
            <div className="frame-wrapper7">
              <div className="all-rights-reserved-group">
                <div className="all-rights-reserved1">All rights reserved.</div>
                <a className="link-privacy1">Privacy Policy</a>
                <a className="link-terms1">Terms of Service</a>
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
    </div>
  );
};

export default HowItWorks;
