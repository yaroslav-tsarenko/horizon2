import { useMemo } from "react";
import "./FrameComponent12.css";

const FrameComponent12 = ({
  className = "",
  img,
  heading3StaySafeOnline,
  withAnESIMYouCanAvoidSome,
  cybersecurityRisksRelated,
  unauthorizedSIMCardUse,
  propWidth,
  propAlignSelf,
  propWidth1,
}) => {
  const frameDiv4Style = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  const heading31Style = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div className={`img-group ${className}`} style={frameDiv4Style}>
      <img className="img-icon45" alt="" src={img} />
      <div className="heading-3-stay-safe-online-parent">
        <h2 className="heading-31" style={heading31Style}>
          {heading3StaySafeOnline}
        </h2>
        <p className="with-an-esim-container">
          <span className="with-an-esim">{withAnESIMYouCanAvoidSome}</span>
          <span className="cybersecurity-risks-related">
            {cybersecurityRisksRelated}
          </span>
          <span className="unauthorized-sim-card">
            {unauthorizedSIMCardUse}
          </span>
        </p>
      </div>
    </div>
  );
};

FrameComponent12.propTypes = {
  className: PropTypes.string,
  img: PropTypes.string,
  heading3StaySafeOnline: PropTypes.string,
  withAnESIMYouCanAvoidSome: PropTypes.string,
  cybersecurityRisksRelated: PropTypes.string,
  unauthorizedSIMCardUse: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propWidth1: PropTypes.any,
};

export default FrameComponent12;
