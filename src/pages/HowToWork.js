import FrameComponent18 from "../components/FrameComponent18";
import FrameComponent17 from "../components/FrameComponent17";
import FrameComponent16 from "../components/FrameComponent16";
import Background3 from "../components/Background3";
import FrameComponent15 from "../components/FrameComponent15";
import FrameComponent14 from "../components/FrameComponent14";
import "./HowToWork.css";

const HowToWork = () => {
  return (
    <div className="how-to-work">
      <FrameComponent18 />
      <main className="frame-main">
        <FrameComponent17 />
        <FrameComponent16 />
        <Background3 />
        <section className="frame-wrapper15">
          <FrameComponent15 />
        </section>
      </main>
      <footer className="footer3">
        <div className="frame-parent22">
          <div className="image-6-layerstyle-parent3">
            <img
              className="image-6-layerstyle-icon5"
              alt=""
              src="/image-6-layerstyle.svg"
            />
            <div className="frame-wrapper16">
              <div className="frame-parent23">
                <div className="horizon-wrapper3">
                  <div className="horizon5">Horizon</div>
                </div>
                <div className="sim5">SIM</div>
              </div>
            </div>
          </div>
          <div className="frame-wrapper17">
            <div className="link-destinations-parent3">
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
        <FrameComponent14
          allRightsReserved="All rights reserved."
          linkPictureApplesvg="/link--picture--applesvg2@2x.png"
          linkPictureGooglesvg="/link--picture--googlesvg2@2x.png"
        />
      </footer>
    </div>
  );
};

export default HowToWork;
