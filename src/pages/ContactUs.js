import FrameComponent11 from "../components/FrameComponent11";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <form className="contact-us">
      <header className="header2">
        <div className="image-6-layerstyle-parent3">
          <img
            className="image-6-layerstyle-icon5"
            loading="lazy"
            alt=""
            src="/image-6-layerstyle.svg"
          />
          <div className="frame-wrapper11">
            <div className="frame-parent15">
              <div className="horizon-wrapper3">
                <a className="horizon5">Horizon</a>
              </div>
              <a className="sim5">SIM</a>
            </div>
          </div>
        </div>
        <div className="header-inner1">
          <div className="frame-parent16">
            <div className="frame-wrapper12">
              <div className="link-destinations-parent3">
                <a className="link-destinations5">Destinations</a>
                <a className="link-what5">What is an eSIM</a>
                <a className="link-about5">About Us</a>
                <a className="link-help5">Help center</a>
              </div>
            </div>
            <button className="button-download-app2">
              <a className="download-app2">Download App</a>
            </button>
          </div>
        </div>
      </header>
      <section className="contact-us-inner">
        <div className="frame-parent17">
          <div className="were-just-a-message-away-parent">
            <h1 className="were-just-a">We’re just a message away</h1>
            <div className="thank-you-for">{`Thank you for choosing EchoVisuals. We look forward to connecting with you! `}</div>
          </div>
          <FrameComponent11 />
        </div>
      </section>
      <footer className="footer3">
        <div className="frame-parent18">
          <div className="image-6-layerstyle-parent4">
            <img
              className="image-6-layerstyle-icon6"
              alt=""
              src="/image-6-layerstyle.svg"
            />
            <div className="frame-wrapper13">
              <div className="frame-parent19">
                <div className="horizon-wrapper4">
                  <div className="horizon6">Horizon</div>
                </div>
                <div className="sim6">SIM</div>
              </div>
            </div>
          </div>
          <div className="frame-wrapper14">
            <div className="link-destinations-parent4">
              <a
                className="link-destinations6"
                href="https://www.figma.com/design/ChO0euFDvPgaehWUhty9Gg?node-id=1-470"
                target="_blank"
              >
                Destinations
              </a>
              <a
                className="link-what6"
                href="https://www.figma.com/design/ChO0euFDvPgaehWUhty9Gg?node-id=1-2421"
                target="_blank"
              >
                What is an eSIM
              </a>
              <a
                className="link-about6"
                href="https://www.figma.com/design/ChO0euFDvPgaehWUhty9Gg?node-id=1-2942"
                target="_blank"
              >
                About Us
              </a>
              <div className="link-help6">Help center</div>
              <a
                className="link-download3"
                href="https://www.figma.com/design/ChO0euFDvPgaehWUhty9Gg?node-id=1-3096"
                target="_blank"
              >
                Download App
              </a>
              <div className="link-become3">Become affiliate</div>
            </div>
          </div>
        </div>
        <div className="separator-group">
          <div className="separator1" />
          <div className="frame-parent20">
            <div className="frame-wrapper15">
              <div className="all-rights-reserved-group">
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
                src="/link--picture--applesvg2@2x.png"
              />
              <img
                className="link-picture-googlesvg1"
                loading="lazy"
                alt=""
                src="/link--picture--googlesvg3@2x.png"
              />
            </div>
          </div>
        </div>
      </footer>
    </form>
  );
};

export default ContactUs;
