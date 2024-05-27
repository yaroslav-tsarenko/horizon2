import "./FrameComponent10.css";

const FrameComponent10 = ({ className = "" }) => {
  return (
    <section className={`how-it-works-inner1 ${className}`}>
      <div className="heading-2-frequently-asked-q-parent">
        <h1 className="heading-210">Frequently asked questions about eSIMs</h1>
        <div className="backgroundborder-parent">
          <div className="backgroundborder">
            <div className="heading-35">Why are eSIMs not popular?</div>
            <div className="img-wrapper40">
              <img className="img-icon55" alt="" src="/img-16.svg" />
            </div>
          </div>
          <div className="backgroundborder1">
            <div className="heading-36">
              Is an eSIM safer than a physical SIM?
            </div>
            <div className="img-wrapper41">
              <img className="img-icon56" alt="" src="/img-17.svg" />
            </div>
          </div>
          <div className="backgroundborder2">
            <div className="heading-37">
              Does an eSIM give you a phone number?
            </div>
            <div className="img-wrapper42">
              <img className="img-icon57" alt="" src="/img-16.svg" />
            </div>
          </div>
          <div className="backgroundborder3">
            <div className="heading-38">
              Can an eSIM work without an internet connection?
            </div>
            <div className="img-wrapper43">
              <img className="img-icon58" alt="" src="/img-16.svg" />
            </div>
          </div>
          <div className="backgroundborder4">
            <div className="heading-39">Does an eSIM drain the battery?</div>
            <div className="img-wrapper44">
              <img className="img-icon59" alt="" src="/img-16.svg" />
            </div>
          </div>
          <div className="backgroundborder5">
            <div className="heading-310">
              Can you convert an eSIM back to a physical SIM?
            </div>
            <div className="img-wrapper45">
              <img className="img-icon60" alt="" src="/img-17.svg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent10.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent10;
