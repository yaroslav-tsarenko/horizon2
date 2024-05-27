import { useMemo } from "react";
import "./Background1.css";

const Background1 = ({
  className = "",
  emptyStepBackgrounds,
  step1f629f1easvg,
  dataPlanSelectionMadeSimp,
  horizonSimStreamlinesTheP,
  propWidth,
  propDisplay,
  propMinWidth,
  propWidth1,
  propWidth2,
}) => {
  const emptyStepBackgroundsStyle = useMemo(() => {
    return {
      width: propWidth,
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propWidth, propDisplay, propMinWidth]);

  const dataPlanSelectionStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const horizonSimStreamlinesStyle = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  return (
    <div className={`background ${className}`}>
      <div className="background1">
        <div
          className="empty-step-backgrounds"
          style={emptyStepBackgroundsStyle}
        >
          {emptyStepBackgrounds}
        </div>
        <div className="step-icons">
          <img
            className="step-1f629f1easvg-icon"
            loading="lazy"
            alt=""
            src={step1f629f1easvg}
          />
        </div>
      </div>
      <div className="background2">
        <h3 className="data-plan-selection" style={dataPlanSelectionStyle}>
          {dataPlanSelectionMadeSimp}
        </h3>
        <p
          className="horizon-sim-streamlines"
          style={horizonSimStreamlinesStyle}
        >
          {horizonSimStreamlinesTheP}
        </p>
      </div>
    </div>
  );
};

Background1.propTypes = {
  className: PropTypes.string,
  emptyStepBackgrounds: PropTypes.string,
  step1f629f1easvg: PropTypes.string,
  dataPlanSelectionMadeSimp: PropTypes.string,
  horizonSimStreamlinesTheP: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
  propWidth1: PropTypes.any,
  propWidth2: PropTypes.any,
};

export default Background1;
