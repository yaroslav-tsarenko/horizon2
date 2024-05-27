import { Button } from "@mui/material";
import SignupForm from "../components/SignupForm";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="sign-up">
      <header className="sign-up-inner">
        <div className="frame-container">
          <div className="image-6-layerstyle-parent">
            <img
              className="image-6-layerstyle-icon"
              loading="lazy"
              alt=""
              src="/image-6-layerstyle.svg"
            />
            <div className="frame-wrapper">
              <div className="frame-div">
                <div className="horizon-wrapper">
                  <a className="horizon">Horizon</a>
                </div>
                <a className="sim">SIM</a>
              </div>
            </div>
          </div>
          <div className="frame-wrapper1">
            <div className="frame-parent1">
              <div className="destinations-link-wrapper">
                <div className="destinations-link">
                  <a className="link-destinations">Destinations</a>
                  <a className="link-what">What is an eSIM</a>
                  <a className="link-about">About Us</a>
                  <a className="link-help">Help center</a>
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
        </div>
      </header>
      <main className="sign-up-desktop-wrapper">
        <section className="sign-up-desktop">
          <div className="sign-up-desktop-child" />
          <SignupForm />
        </section>
      </main>
      <footer className="footer">
        <div className="footer-content">
          <div className="top-footer">
            <div className="footer-links">
              <div className="footer-links-container">
                <img
                  className="image-6-layerstyle-icon1"
                  alt=""
                  src="/image-6-layerstyle.svg"
                />
                <div className="footer-slogan">
                  <div className="footer-horizon">
                    <div className="horizon-container">
                      <div className="horizon1">Horizon</div>
                    </div>
                    <div className="sim1">SIM</div>
                  </div>
                </div>
              </div>
              <div className="footer-navigation">
                <div className="footer-links-list">
                  <a
                    className="link-destinations1"
                    href="https://www.figma.com/design/ChO0euFDvPgaehWUhty9Gg?node-id=1-470"
                    target="_blank"
                  >
                    Destinations
                  </a>
                  <a
                    className="link-what1"
                    href="https://www.figma.com/design/ChO0euFDvPgaehWUhty9Gg?node-id=1-2421"
                    target="_blank"
                  >
                    What is an eSIM
                  </a>
                  <a
                    className="link-about1"
                    href="https://www.figma.com/design/ChO0euFDvPgaehWUhty9Gg?node-id=1-2942"
                    target="_blank"
                  >
                    About Us
                  </a>
                  <div className="link-help1">Help center</div>
                  <a
                    className="link-download"
                    href="https://www.figma.com/design/ChO0euFDvPgaehWUhty9Gg?node-id=1-3096"
                    target="_blank"
                  >
                    Download App
                  </a>
                  <div className="link-become">Become affiliate</div>
                </div>
              </div>
            </div>
            <div className="separator" />
          </div>
          <div className="copyright">
            <div className="copyright-content">
              <div className="copyright-info">
                <div className="all-rights-reserved">All rights reserved.</div>
                <a className="link-privacy">Privacy Policy</a>
                <u className="link-terms">Terms of Service</u>
                <u className="button-cookie">Cookie Preferences</u>
              </div>
            </div>
            <div className="social-icons">
              <img
                className="link-picture-applesvg"
                loading="lazy"
                alt=""
                src="/link--picture--applesvg@2x.png"
              />
              <img
                className="link-picture-googlesvg"
                loading="lazy"
                alt=""
                src="/link--picture--googlesvg@2x.png"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SignUp;
