import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div className={`connection-content-wrapper ${className}`}>
      <div className="connection-content">
        <div className="easier-connection">
          <div className="easier-description">
            <div className="easier">Easier</div>
            <h1 className="heading-23">Quick Connectivity:</h1>
            <p className="connect-to-horizon">
              Connect to Horizon Sim in just a few taps. Our streamlined process
              ensures that you're up and running in no time. Simply open the
              Horizon Sim app, follow the prompts, and within moments, you'll be
              connected to our global network.
            </p>
          </div>
          <img
            className="picture-icon"
            loading="lazy"
            alt=""
            src="/picture@2x.png"
          />
        </div>
        <div className="faster-connection">
          <img className="picture-icon1" alt="" src="/picture-1@2x.png" />
          <div className="faster-description">
            <div className="faster">Faster</div>
            <h1 className="heading-24">Skip the Line:</h1>
            <p className="why-wait-when">
              Why wait when you can connect instantly? Horizon Sim offers a
              seamless activation process that puts you in control. Simply
              download our app, follow the quick setup instructions, and within
              moments,.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
