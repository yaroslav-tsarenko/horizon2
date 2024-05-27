import { Button } from "@mui/material";
import FrameComponent10 from "../components/FrameComponent10";
import FrameComponent7 from "../components/FrameComponent7";
import FrameComponent8 from "../components/FrameComponent8";
import FrameComponent11 from "../components/FrameComponent11";
import "./Checkout.css";

const Checkout = () => {
  return (
    <div className="checkout">
      <section className="header-parent">
        <header className="header">
          <div className="image-6-layerstyle-group">
            <img
              className="image-6-layerstyle-icon2"
              loading="lazy"
              alt=""
              src="/image-6-layerstyle.svg"
            />
            <div className="frame-wrapper2">
              <div className="frame-parent2">
                <div className="horizon-frame">
                  <a className="horizon2">Horizon</a>
                </div>
                <a className="sim2">SIM</a>
              </div>
            </div>
          </div>
          <div className="header-inner">
            <div className="frame-parent3">
              <div className="destinations-link-container">
                <div className="destinations-link1">
                  <a className="link-destinations2">Destinations</a>
                  <a className="link-what2">What is an eSIM</a>
                  <a className="link-about2">About Us</a>
                  <a className="link-help2">Help center</a>
                </div>
              </div>
              <Button
                className="button-download-app1"
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
          checkout="Checkout"
          cart="Cart"
          checkout1="Checkout"
        />
      </section>
      <section className="checkout-inner">
        <form className="frame-form">
          <FrameComponent7 />
          <FrameComponent8 />
        </form>
      </section>
      <section className="footer1">
        <div className="footer-content-container">
          <div className="image-6-layerstyle-container">
            <img
              className="image-6-layerstyle-icon3"
              alt=""
              src="/image-6-layerstyle.svg"
            />
            <div className="frame-wrapper3">
              <div className="frame-parent4">
                <div className="horizon-wrapper1">
                  <div className="horizon3">Horizon</div>
                </div>
                <div className="sim3">SIM</div>
              </div>
            </div>
          </div>
          <div className="social-link-buttons-wrapper">
            <div className="social-link-buttons">
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
        <FrameComponent11
          linkPictureApplesvg="/link--picture--applesvg1@2x.png"
          linkPictureGooglesvg="/link--picture--googlesvg1@2x.png"
        />
      </section>
    </div>
  );
};

export default Checkout;
