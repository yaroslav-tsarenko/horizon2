import { useMemo } from "react";
import "./FrameComponent5.css";

const FrameComponent5 = ({
  className = "",
  propTextDecoration,
  propDisplay,
  propTextDecoration1,
}) => {
  const horizonStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
      display: propDisplay,
    };
  }, [propTextDecoration, propDisplay]);

  const sIMStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration1,
    };
  }, [propTextDecoration1]);

  return (
    <div className={`image-6-layerstyle-parent4 ${className}`}>
      <img
        className="image-6-layerstyle-icon6"
        loading="lazy"
        alt=""
        src="/image-6-layerstyle.svg"
      />
      <div className="header-content">
        <div className="logo-wrapper">
          <div className="horizon-wrapper4">
            <a className="horizon6" style={horizonStyle}>
              Horizon
            </a>
          </div>
          <a className="sim6" style={sIMStyle}>
            SIM
          </a>
        </div>
      </div>
    </div>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propTextDecoration: PropTypes.any,
  propDisplay: PropTypes.any,
  propTextDecoration1: PropTypes.any,
};

export default FrameComponent5;
