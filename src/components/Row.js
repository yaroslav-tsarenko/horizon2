import { useMemo } from "react";
import "./Row.css";

const Row = ({
  className = "",
  cellMicrosoft,
  httpsprivacymicrosoftcom,
  enUsprivacystatement,
  propGap,
  propDisplay,
  propMinWidth,
  propWidth,
  propWidth1,
  propWidth2,
  propRight,
}) => {
  const rowStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const cellMicrosoftStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
      width: propWidth,
    };
  }, [propDisplay, propMinWidth, propWidth]);

  const dataAnalyticsStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const httpsprivacymicrosoftcomStyle = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  const pleaseChangeYourContainerStyle = useMemo(() => {
    return {
      right: propRight,
    };
  }, [propRight]);

  return (
    <div className={`row11 ${className}`} style={rowStyle}>
      <div className="cell-microsoft" style={cellMicrosoftStyle}>
        {cellMicrosoft}
      </div>
      <div className="data-analytics6" style={dataAnalyticsStyle}>
        Analytics, advertising
      </div>
      <u
        className="httpsprivacymicrosoftcom"
        style={httpsprivacymicrosoftcomStyle}
      >
        <span className="httpsprivacymicrosoftcom1">
          <p className="httpsprivacymicrosoftcom2">
            {httpsprivacymicrosoftcom}
          </p>
          <p className="en-usprivacystatement">{enUsprivacystatement}</p>
        </span>
      </u>
      <p
        className="please-change-your-container4"
        style={pleaseChangeYourContainerStyle}
      >
        <span className="please-change-your-container5">
          <span className="please-change-your2">
            Please change your browser
          </span>
          <span className="settings-to-disable2">
            settings to disable cookies.
          </span>
        </span>
      </p>
    </div>
  );
};

Row.propTypes = {
  className: PropTypes.string,
  cellMicrosoft: PropTypes.string,
  httpsprivacymicrosoftcom: PropTypes.string,
  enUsprivacystatement: PropTypes.string,

  /** Style props */
  propGap: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
  propWidth: PropTypes.any,
  propWidth1: PropTypes.any,
  propWidth2: PropTypes.any,
  propRight: PropTypes.any,
};

export default Row;
