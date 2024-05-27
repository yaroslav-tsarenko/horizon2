import "./FrameComponent17.css";

const FrameComponent17 = ({ className = "" }) => {
  return (
    <section className={`frame-wrapper24 ${className}`}>
      <div className="frame-parent37">
        <div className="img-parent11">
          <img className="img-icon61" loading="lazy" alt="" src="/img1.svg" />
          <div className="esim-data-plans-container">
            <p className="esim-data-plans">eSIM data plans in 150</p>
            <p className="destinations">destinations</p>
          </div>
        </div>
        <div className="img-parent12">
          <img className="img-icon62" alt="" src="/img-1.svg" />
          <div className="available-on-ios">Available on iOS and Android</div>
        </div>
        <div className="img-parent13">
          <img className="img-icon63" alt="" src="/img-21.svg" />
          <div className="customer-support">24/7 customer support</div>
        </div>
        <div className="img-parent14">
          <img className="img-icon64" alt="" src="/img-31.svg" />
          <div className="works-on-all-container">
            <p className="works-on-all">Works on all smartphones that</p>
            <p className="support-esim">support eSIM</p>
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
