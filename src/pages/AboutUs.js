import {
  Button,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
} from "@mui/material";
import FrameComponent14 from "../components/FrameComponent14";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us">
      <header className="header1">
        <div className="image-6-layerstyle-parent1">
          <img
            className="image-6-layerstyle-icon3"
            loading="lazy"
            alt=""
            src="/image-6-layerstyle.svg"
          />
          <div className="frame-wrapper8">
            <div className="frame-parent13">
              <div className="horizon-wrapper1">
                <a className="horizon3">Horizon</a>
              </div>
              <a className="sim3">SIM</a>
            </div>
          </div>
        </div>
        <div className="header-child">
          <div className="frame-parent14">
            <div className="frame-wrapper9">
              <div className="link-destinations-parent1">
                <a className="link-destinations3">Destinations</a>
                <a className="link-what3">What is an eSIM</a>
                <a className="link-about3">About Us</a>
                <a className="link-help3">Help center</a>
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
      <main className="about-us-inner">
        <section className="frame-section">
          <div className="frame-parent15">
            <div className="frame-wrapper10">
              <div className="heading-1-what-is-saily-parent">
                <h1 className="heading-11">What is Horizon Sim?</h1>
                <p className="experience-unparalleled-freedo">
                  Experience unparalleled freedom with Horizonsim – the premier
                  virtual network provider offering cutting-edge eSIM services.
                  Say goodbye to physical SIM cards and hello to a world of
                  limitless connectivity.
                </p>
                <p className="explore-the-possibilities-container">
                  <span className="explore-the-possibilities">
                    Explore the possibilities without borders. Explore
                    Horizonsim today.
                  </span>
                </p>
              </div>
            </div>
            <img
              className="picture-image"
              loading="lazy"
              alt=""
              src="/picture--image@2x.png"
            />
          </div>
          <div className="frame-parent16">
            <div className="frame-wrapper11">
              <div className="frame-parent17">
                <div className="picture-image-wrapper">
                  <img
                    className="picture-image1"
                    alt=""
                    src="/picture--image-1@2x.png"
                  />
                </div>
                <div className="frame-parent18">
                  <div className="created-by-nexustech-solutions-parent">
                    <h1 className="created-by-nexustech">
                      Created by NexusTech Solutions
                    </h1>
                    <p className="horizonsim-proudly-crafted">
                      Horizonsim, proudly crafted by Nexus Tech Solutions,
                      revolutionizes the way we experience connectivity in the
                      digital age. Born from a passion for innovation and a
                      commitment to excellence, Horizonsim offers users a
                      seamless and intuitive eSIM solution designed to transcend
                      borders and limitations.
                    </p>
                  </div>
                  <p className="join-the-horizonsim">
                    Join the Horizonsim community today and experience the
                    freedom of seamless connectivity, brought to you by Nexus
                    Tech Solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="frame-parent19">
              <div className="frame-wrapper12">
                <div className="verticalborder-parent">
                  <div className="verticalborder">
                    <div className="button-who">Ownership of Horizonsim</div>
                    <div className="container">
                      <p className="horizonsim-the-innovative">
                        Horizonsim, the innovative eSIM service redefining
                        connectivity, is owned and operated by Nexus Tech
                        Solutions, a trailblazing company at the forefront of
                        technological advancement.
                      </p>
                    </div>
                  </div>
                  <TextField
                    className="verticalborder1"
                    placeholder="What’s the origin of Horizonsim?"
                    variant="outlined"
                    sx={{
                      "& fieldset": { borderColor: "#b1b1b4" },
                      "& .MuiInputBase-root": {
                        height: "30px",
                        borderRadius: "0px 0px 0px 0px",
                        fontSize: "20px",
                      },
                      "& .MuiInputBase-input": { color: "#6c6d75" },
                    }}
                  />
                  <div className="verticalborder2">
                    <div className="button-how">How did Horizonsim start?</div>
                  </div>
                </div>
              </div>
              <img
                className="picture-image2"
                alt=""
                src="/picture--image-2@2x.png"
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="footer2">
        <div className="frame-parent20">
          <div className="image-6-layerstyle-parent2">
            <img
              className="image-6-layerstyle-icon4"
              alt=""
              src="/image-6-layerstyle.svg"
            />
            <div className="frame-wrapper13">
              <div className="frame-parent21">
                <div className="horizon-wrapper2">
                  <div className="horizon4">Horizon</div>
                </div>
                <div className="sim4">SIM</div>
              </div>
            </div>
          </div>
          <div className="frame-wrapper14">
            <div className="link-destinations-parent2">
              <a
                className="link-destinations4"
                href="https://www.figma.com/design/ChO0euFDvPgaehWUhty9Gg?node-id=1-470"
                target="_blank"
              >
                Destinations
              </a>
              <a
                className="link-what4"
                href="https://www.figma.com/design/ChO0euFDvPgaehWUhty9Gg?node-id=1-2421"
                target="_blank"
              >
                What is an eSIM
              </a>
              <a
                className="link-about4"
                href="https://www.figma.com/design/ChO0euFDvPgaehWUhty9Gg?node-id=1-2942"
                target="_blank"
              >
                About Us
              </a>
              <div className="link-help4">Help center</div>
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
        <FrameComponent14
          allRightsReserved=" All rights reserved."
          linkPictureApplesvg="/link--picture--applesvg1@2x.png"
          linkPictureGooglesvg="/link--picture--googlesvg1@2x.png"
        />
      </footer>
    </div>
  );
};

export default AboutUs;
