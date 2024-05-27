import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={`security-container-wrapper ${className}`}>
      <div className="security-container">
        <div className="security-content">
          <div className="safety-info">
            <div className="safer-parent">
              <div className="safer">Safer</div>
              <h1 className="heading-25">Secure Your Data</h1>
            </div>
            <p className="our-privacy-matters">
              our privacy matters, even when you're offline. Horizon Sim
              prioritizes the security of your information, implementing robust
              measures to safeguard your data from unauthorized access.
            </p>
          </div>
        </div>
        <img className="picture-icon2" alt="" src="/picture-2@2x.png" />
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
