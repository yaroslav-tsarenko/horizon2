import "./FrameComponent11.css";

const FrameComponent11 = ({ className = "" }) => {
  return (
    <section className={`how-it-works-child ${className}`}>
      <div className="frame-parent33">
        <div className="what-is-the-difference-between-parent">
          <h1 className="what-is-the-container">
            <p className="what-is-the">
              What is the difference between an eSIM
            </p>
            <p className="and-a-physical">and a physical SIM?</p>
          </h1>
          <p className="the-main-difference-container">
            <span className="the-main-difference">
              The main difference between physical SIM cards and eSIMs is that
              you can install and activate
            </span>
            <span className="an-esim-yourself">
              an eSIM yourself and it will support multiple network profiles.
            </span>
          </p>
        </div>
        <div className="overlayshadow">
          <div className="overlayshadow-inner">
            <div className="cell-esim-parent">
              <div className="cell-esim">eSIM</div>
              <div className="cell-sim">SIM</div>
            </div>
          </div>
          <div className="row-parent">
            <div className="row">
              <div className="img-parent4">
                <img className="img-icon49" alt="" src="/img-9.svg" />
                <div className="phone-numbers">Phone numbers</div>
              </div>
              <div className="data-up-to-two-parent">
                <div className="data-up">Up to two</div>
                <p className="data-up1">
                  Up to two (if your device supports it)
                </p>
              </div>
            </div>
            <div className="row1">
              <div className="img-parent5">
                <img className="img-icon50" alt="" src="/img-101.svg" />
                <div className="network-operators">Network Operators</div>
              </div>
              <div className="data-multiple-parent">
                <div className="data-multiple">Multiple</div>
                <p className="data-up2">
                  Up to two (if your device supports it)
                </p>
              </div>
            </div>
            <div className="row2">
              <div className="img-parent6">
                <img className="img-icon51" alt="" src="/img-111.svg" />
                <div className="removal">Removal</div>
              </div>
              <div className="data-deactivate">Deactivate the profile</div>
              <div className="data-remove">Remove the SIM card</div>
            </div>
            <div className="row3">
              <div className="img-parent7">
                <img className="img-icon52" alt="" src="/img-121.svg" />
                <div className="activation">Activation</div>
              </div>
              <div className="data-remote">
                Remote: set it up on your device yourself
              </div>
              <p className="manual-buy-a-container">
                <span className="manual-buy-a-container1">
                  <span className="manual-buy-a">
                    Manual: buy a card from a carrier and
                  </span>
                  <span className="insert-it">insert it</span>
                </span>
              </p>
            </div>
            <div className="row4">
              <div className="img-parent8">
                <input className="img" type="checkbox" />
                <div className="compatibility">Compatibility</div>
              </div>
              <div className="data-newer-devices-parent">
                <div className="data-newer">Newer devices</div>
                <p className="data-all">All old and most new devices</p>
              </div>
            </div>
            <div className="row5">
              <div className="img-parent9">
                <img className="img-icon53" alt="" src="/img-14.svg" />
                <div className="using-internationally">
                  Using internationally
                </div>
              </div>
              <p className="affordable-easy-container">
                <span className="affordable-easy-container1">
                  <span className="affordable-easy">
                    Affordable — easy to get data plans in
                  </span>
                  <span className="different-countries">
                    different countries
                  </span>
                </span>
              </p>
              <p className="deal-with-expensive-container">
                <span className="deal-with-expensive-container1">
                  <span className="deal-with-expensive">
                    Deal with expensive roaming or buy a new
                  </span>
                  <span className="local-sim-card">local SIM card</span>
                </span>
              </p>
            </div>
            <div className="row6">
              <div className="img-parent10">
                <img className="img-icon54" alt="" src="/img-15.svg" />
                <div className="profiles">Profiles</div>
              </div>
              <div className="data-multiple1">Multiple</div>
              <div className="data-limited">Limited profile switching</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent11.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent11;
