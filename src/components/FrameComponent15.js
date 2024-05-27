import BackgroundBorder from "./BackgroundBorder";
import PropTypes from "prop-types";
import "./FrameComponent15.css";

const FrameComponent15 = ({ className = "" }) => {
  return (
    <div className={`frame-parent39 ${className}`}>
      <div className="frame-parent40">
        <div className="heading-2-how-to-set-up-an-e-group">
          <h1 className="heading-213">How to set up an eSIM</h1>
          <p className="before-buying-an-container1">
            <span className="before-buying-an-esim-plan-ch1">
              {`Before buying an eSIM plan, `}
              <span className="check-if-your1">
                check if your phone is eSIM compatible
              </span>
              . Then, follow these steps to get
            </span>
            <span className="an-esim-plan-with-saily1">
              an eSIM plan with Saily.
            </span>
          </p>
        </div>
        <div className="background-parent1">
          <div className="background15">
            <div className="background16">
              <div className="div3">01</div>
              <div className="step-1f629f1easvg-container">
                <img
                  className="step-1f629f1easvg-icon2"
                  loading="lazy"
                  alt=""
                  src="/step1f629f1easvg.svg"
                />
              </div>
            </div>
            <div className="background17">
              <h3 className="data-plan-selection2">
                Data Plan Selection Made Simple
              </h3>
              <p className="horizon-sim-streamlines2">
                Horizon Sim streamlines the process of selecting your ideal data
                plan.
              </p>
            </div>
          </div>
          <div className="background18">
            <div className="background19">
              <div className="div4">02</div>
              <div className="step-2eb28dc5asvg-container">
                <img
                  className="step-2eb28dc5asvg-icon1"
                  loading="lazy"
                  alt=""
                  src="/step1f629f1easvg.svg"
                />
              </div>
            </div>
            <div className="background20">
              <h3 className="effortless-app-download1">
                Effortless App Download
              </h3>
              <p className="downloading-the-horizon1">
                Downloading the Horizon Sim app is your ticket to hassle-free
                connectivity.
              </p>
            </div>
          </div>
          <div className="background21">
            <div className="background22">
              <div className="div5">03</div>
              <div className="step-320eb749esvg-container">
                <img
                  className="step-320eb749esvg-icon1"
                  loading="lazy"
                  alt=""
                  src="/step320eb749esvg2@2x.png"
                />
              </div>
            </div>
            <div className="background23">
              <h3 className="activation-made-easy1">Activation Made Easy</h3>
              <p className="activating-your-horizon1">
                Activating your Horizon Sim eSIM is a seamless process that
                takes just minutes.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="paragraphbackground">
        <h1 className="get-help-with">Get help with your eSIM</h1>
        <p className="if-you-have-container">
          <span className="if-you-have-container1">
            <span className="if-you-have">
              If you have any questions, our team is available via chat 24/7 on
              the Horizonsim app. You can also send us an
            </span>
            <span className="email-if-you">
              email if you have a more detailed question.
            </span>
          </span>
        </p>
        <h3 className="link-supportsailycom">support@horizonsim.com</h3>
      </div>
      <div className="frame-wrapper27">
        <div className="heading-2-faq-parent">
          <h1 className="heading-214">FAQ</h1>
          <BackgroundBorder
            heading3IsMyPhoneCompatib="Is my phone compatible with eSIMs?"
            img="/img-17.svg"
          />
          <BackgroundBorder
            heading3IsMyPhoneCompatib="How to install an eSIM without a QR code"
            img="/img-16.svg"
            propWidth="570.8px"
            propPadding="0px 0px 11.5px"
          />
          <BackgroundBorder
            heading3IsMyPhoneCompatib="How to manually install an eSIM on your phone"
            img="/img-16.svg"
            propWidth="659.8px"
            propPadding="0px 0px 11.5px"
          />
          <BackgroundBorder
            heading3IsMyPhoneCompatib="Can I use an eSIM without the app?"
            img="/img-16.svg"
            propWidth="494.8px"
            propPadding="11.6px 0px 0px"
          />
          <BackgroundBorder
            heading3IsMyPhoneCompatib="Can I install an eSIM without activating it?"
            img="/img-17.svg"
            propWidth="587.7px"
            propPadding="0px 0px 11.5px"
          />
          <BackgroundBorder
            heading3IsMyPhoneCompatib="How long does it take to activate an eSIM?"
            img="/img-16.svg"
            propWidth="593.9px"
            propPadding="0px 0px 11.5px"
          />
        </div>
      </div>
    </div>
  );
};

FrameComponent15.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent15;
