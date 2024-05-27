import { useMemo } from "react";
import "./BackgroundBorder.css";

const BackgroundBorder = ({
  className = "",
  heading3IsMyPhoneCompatib,
  img,
  propWidth,
  propPadding,
}) => {
  const heading32Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const frameDiv5Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={`backgroundborder6 ${className}`}>
      <div className="heading-312" style={heading32Style}>
        {heading3IsMyPhoneCompatib}
      </div>
      <div className="img-wrapper46" style={frameDiv5Style}>
        <img className="img-icon66" alt="" src={img} />
      </div>
    </div>
  );
};

BackgroundBorder.propTypes = {
  className: PropTypes.string,
  heading3IsMyPhoneCompatib: PropTypes.string,
  img: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propPadding: PropTypes.any,
};

export default BackgroundBorder;
