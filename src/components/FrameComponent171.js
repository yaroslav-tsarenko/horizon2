import { Button } from "@mui/material";
import "./FrameComponent171.css";

const FrameComponent17 = ({ className = "" }) => {
  return (
    <section className={`hero ${className}`}>
      <div className="hero-content">
        <div className="hero-image-wrapper">
          <div className="hero-image">
            <img
              className="image-icon2"
              loading="lazy"
              alt=""
              src="/image2@2x.png"
            />
            <div className="hero-info">
              <div className="heading-1-esim-for-united-ki-wrapper">
                <h1 className="heading-13">eSIM for United Kingdom</h1>
              </div>
              <p className="item-affordable2">
                Unlock a new era of connectivity with eSIM technology now
                available in the UK. Designed to simplify and enhance your
                mobile experience
              </p>
            </div>
          </div>
        </div>
        <div className="hero-plan">
          <Button
            className="button5"
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#000",
              fontSize: "16",
              background: "#eda619",
              border: "#eda619 solid 1px",
              borderRadius: "9999px",
              "&:hover": { background: "#eda619" },
              height: 48,
            }}
          >
            Go to Checkout
          </Button>
          <h3 className="heading-29">Choose the plan that’s best for you</h3>
          <div className="list4">
            <div className="plan-item">
              <div className="plan-details">
                <div className="item-label9">
                  <div className="border9" />
                  <div className="data-amount">
                    <div className="gb9">1 GB</div>
                    <div className="days9">7 days</div>
                  </div>
                  <div className="separator3">$4.49</div>
                </div>
                <div className="item-label10">
                  <div className="border10" />
                  <div className="validity-period">
                    <div className="gb10">3 GB</div>
                    <div className="validity-days">
                      <div className="days10">30 days</div>
                    </div>
                    <div className="data-separator">$8.99</div>
                  </div>
                </div>
              </div>
              <div className="plan-details1">
                <div className="item-label11">
                  <div className="border11" />
                  <div className="gb-parent6">
                    <div className="gb11">10 GB</div>
                    <div className="days11">30 days</div>
                  </div>
                  <div className="div16">$19.99</div>
                </div>
                <div className="item-label12">
                  <div className="border12" />
                  <div className="gb-parent7">
                    <div className="gb12">20 GB</div>
                    <div className="days-wrapper6">
                      <div className="days12">30 days</div>
                    </div>
                    <div className="div17">$31.99</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item-label13">
              <div className="data-border">
                <div className="border13" />
              </div>
              <div className="gb13">5 GB</div>
              <div className="data-days">
                <div className="days13">30 days</div>
                <div className="separator4">$12.99</div>
              </div>
            </div>
          </div>
          <div className="activation-info">
            <div className="activation-images">
              <input className="img6" type="radio" />
              <input className="img7" type="radio" />
              <input className="img8" type="radio" />
            </div>
            <div className="activation-steps">
              <p className="well-guide-you2">
                We’ll guide you through the activation process in the Saily app
                after purchase.
              </p>
              <div className="if-you-dont2">
                If you don’t manage to activate your plan, you’ll be eligible
                for a refund.
              </div>
              <div className="secure-payment-guaranteed2">
                Secure payment guaranteed.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent17.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent17;
