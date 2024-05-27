import FrameComponent12 from "./FrameComponent12";
import PropTypes from "prop-types";
import "./Background2.css";

const Background2 = ({ className = "" }) => {
  return (
    <section className={`background13 ${className}`}>
      <div className="frame-parent30">
        <div className="frame-wrapper20">
          <div className="frame-parent31">
            <div className="heading-2-why-use-an-esim-parent">
              <h1 className="heading-29">Why use an eSIM?</h1>
              <p className="esims-are-great">
                eSIMs are great for many reasons.
              </p>
            </div>
            <div className="img-parent1">
              <img className="img-icon46" alt="" src="/img-10.svg" />
              <div className="heading-3-lower-roaming-char-parent">
                <h2 className="heading-32">Lower roaming charges</h2>
                <p className="an-esim-lets-container">
                  <span className="an-esim-lets">
                    An eSIM lets you connect to a local
                  </span>
                  <span className="carrier-and-avoid">
                    carrier and avoid high roaming fees.
                  </span>
                </p>
              </div>
            </div>
            <FrameComponent12
              img="/img-4.svg"
              heading3StaySafeOnline="Stay safe online"
              withAnESIMYouCanAvoidSome="With an eSIM, you can avoid some"
              cybersecurityRisksRelated="cybersecurity risks related to"
              unauthorizedSIMCardUse="unauthorized SIM card use."
            />
          </div>
        </div>
        <div className="frame-parent32">
          <FrameComponent12
            img="/img-5.svg"
            heading3StaySafeOnline="Pay for what you need"
            withAnESIMYouCanAvoidSome="Off to Japan for a week? Get a 7-day"
            cybersecurityRisksRelated="plan instead of monthly, and save"
            unauthorizedSIMCardUse="your yen for an extra okonomiyaki."
            propWidth="unset"
            propAlignSelf="stretch"
            propWidth1="314px"
          />
          <div className="img-parent2">
            <img className="img-icon47" alt="" src="/img-61.svg" />
            <div className="heading-3-multiple-profiles-parent">
              <h2 className="heading-33">Multiple profiles</h2>
              <p className="an-esim-lets-container1">
                <span className="an-esim-lets1">
                  An eSIM lets you have several
                </span>
                <span className="profiles-or">
                  profiles — or “virtual” SIM cards — on
                </span>
                <span className="one-device-you">
                  one device. You can switch between
                </span>
                <span className="carriers-without-swapping">
                  carriers without swapping physical
                </span>
                <span className="sim-cards">SIM cards.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="background-inner">
        <div className="img-parent3">
          <img className="img-icon48" alt="" src="/img-71.svg" />
          <div className="heading-3-less-space-parent">
            <h2 className="heading-34">Less space</h2>
            <p className="if-a-device-container">
              <span className="if-a-device">
                If a device doesn’t require a physical
              </span>
              <span className="sim-card-slot">
                SIM card slot, it can be made
              </span>
              <span className="smaller">smaller.</span>
            </p>
          </div>
          <FrameComponent12
            img="/img-81.svg"
            heading3StaySafeOnline="Less waste"
            withAnESIMYouCanAvoidSome="SIM cards are small but, at the end"
            cybersecurityRisksRelated="of the day, it’s still plastic waste that"
            unauthorizedSIMCardUse="could’ve been avoided."
            propWidth="unset"
            propAlignSelf="stretch"
            propWidth1="151.9px"
          />
        </div>
      </div>
    </section>
  );
};

Background2.propTypes = {
  className: PropTypes.string,
};

export default Background2;
