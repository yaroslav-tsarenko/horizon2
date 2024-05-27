import { useMemo } from "react";
import "./Link.css";

const Link = ({ className = "", chad, propMinWidth, propWidth }) => {
  const linkStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const frameDiv2Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={`link133 ${className}`} style={linkStyle}>
      <div className="border-parent35" style={frameDiv2Style}>
        <img className="border-icon38" alt="" />
        <div className="chad-wrapper">
          <div className="chad">{chad}</div>
        </div>
      </div>
      <div className="img-wrapper36">
        <img className="img-icon41" alt="" />
      </div>
    </div>
  );
};

Link.propTypes = {
  className: PropTypes.string,
  chad: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
  propWidth: PropTypes.any,
};

export default Link;
