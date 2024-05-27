import { Button } from "@mui/material";
import FrameComponent10 from "../components/FrameComponent10";
import FrameComponent9 from "../components/FrameComponent9";
import FrameComponent11 from "../components/FrameComponent11";
import "./BuyCredits.css";

const BuyCredits = () => {
  return (
    <div className="buy-credits">
      <section className="header-group">
        <header className="header1">
          <div className="image-6-layerstyle-parent1">
            <img
              className="image-6-layerstyle-icon4"
              loading="lazy"
              alt=""
              src="/image-6-layerstyle.svg"
            />
            <div className="frame-wrapper4">
              <div className="frame-parent5">
                <div className="horizon-wrapper2">
                  <a className="horizon4">Horizon</a>
                </div>
                <a className="sim4">SIM</a>
              </div>
            </div>
          </div>
          <div className="header-child">
            <div className="frame-parent6">
              <div className="frame-wrapper5">
                <div className="link-destinations-parent">
                  <a className="link-destinations4">Destinations</a>
                  <a className="link-what4">What is an eSIM</a>
                  <a className="link-about4">About Us</a>
                  <a className="link-help4">Help center</a>
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
        <FrameComponent10
          checkout="Welcome, Nowa"
          cart="Credit"
          checkout1="Dashboard"
          propDisplay="inline-block"
          propMinWidth="38px"
          propMinWidth1="69px"
        />
      </section>
      <FrameComponent9 />
      <footer className="footer2">
        <div className="footer-content1">
          <div className="brand">
            <img
              className="image-6-layerstyle-icon5"
              alt=""
              src="/image-6-layerstyle.svg"
            />
            <div className="footer-links1">
              <div className="footer-brand">
                <div className="footer-brand-name">
                  <div className="horizon5">Horizon</div>
                </div>
                <div className="sim5">SIM</div>
              </div>
            </div>
          </div>
          <div className="footer-navigation1">
            <div className="footer-navigation-links">
              <a
                className="link-destinations5"
                href="https://www.figma.com/design/ChO0euFDvPgaehWUhty9Gg?node-id=1-470"
                target="_blank"
              >
                Destinations
              </a>
              <a
                className="link-what5"
                href="https://www.figma.com/design/ChO0euFDvPgaehWUhty9Gg?node-id=1-2421"
                target="_blank"
              >
                What is an eSIM
              </a>
              <a
                className="link-about5"
                href="https://www.figma.com/design/ChO0euFDvPgaehWUhty9Gg?node-id=1-2942"
                target="_blank"
              >
                About Us
              </a>
              <div className="link-help5">Help center</div>
              <a
                className="link-download2"
                href="https://www.figma.com/design/ChO0euFDvPgaehWUhty9Gg?node-id=1-3096"
                target="_blank"
              >
                Download App
              </a>
              <div className="link-become2">Become affiliate</div>
            </div>
          </div>
        </div>
        <FrameComponent11
          linkPictureApplesvg="/link--picture--applesvg@2x.png"
          linkPictureGooglesvg="/link--picture--googlesvg2@2x.png"
        />
      </footer>
    </div>
  );
};

export default BuyCredits;
