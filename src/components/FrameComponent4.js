import "./FrameComponent4.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <div className={`heading-1-parent ${className}`}>
      <div className="heading-12" />
      <h1 className="browse-the-world-container">
        <span className="browse-the-world-container1">
          <p className="browse-the-world">Browse the world with</p>
          <p className="saily">Saily</p>
        </span>
      </h1>
      <div className="hero-content">
        <div className="worldwide-esim-data">Worldwide eSIM data service.</div>
        <div className="backgroundbordershadow1">
          <div className="image-wrapper">
            <div className="input-container">
              <img
                className="img-icon34"
                loading="lazy"
                alt=""
                src="/img.svg"
              />
              <div className="enter-country1">Enter country</div>
            </div>
          </div>
          <img
            className="background-icon1"
            loading="lazy"
            alt=""
            src="/background.svg"
          />
        </div>
      </div>
    </div>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
