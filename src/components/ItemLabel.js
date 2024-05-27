import { useMemo } from "react";
import "./ItemLabel.css";

const ItemLabel = ({
  className = "",
  gB,
  prop,
  propMinWidth,
  propDisplay,
  propMinWidth1,
  propWidth,
}) => {
  const gBStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const div1Style = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth1,
      width: propWidth,
    };
  }, [propDisplay, propMinWidth1, propWidth]);

  return (
    <div className={`item-label5 ${className}`}>
      <div className="border5" />
      <div className="gb-parent3">
        <div className="gb5" style={gBStyle}>
          {gB}
        </div>
        <div className="days-wrapper3">
          <div className="days5">30 days</div>
        </div>
        <div className="div9" style={div1Style}>
          {prop}
        </div>
      </div>
    </div>
  );
};

ItemLabel.propTypes = {
  className: PropTypes.string,
  gB: PropTypes.string,
  prop: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth1: PropTypes.any,
  propWidth: PropTypes.any,
};

export default ItemLabel;
