import { useMemo } from "react";
import "./BenefitComponents.css";

const BenefitComponents = ({
  className = "",
  img,
  heading3Affordable,
  findADataPlanThatWorksFor,
  budget,
  propFlex,
  propPadding,
  propMinWidth,
  propWidth,
}) => {
  const benefitComponentsStyle = useMemo(() => {
    return {
      flex: propFlex,
      padding: propPadding,
      minWidth: propMinWidth,
    };
  }, [propFlex, propPadding, propMinWidth]);

  const heading3Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className={`benefit-components ${className}`}
      style={benefitComponentsStyle}
    >
      <img className="img-icon39" alt="" src={img} />
      <div className="benefit-descriptions">
        <h3 className="heading-3" style={heading3Style}>
          {heading3Affordable}
        </h3>
        <p className="find-a-data-container">
          <span className="find-a-data">{findADataPlanThatWorksFor}</span>
          <span className="budget">{budget}</span>
        </p>
      </div>
    </div>
  );
};

BenefitComponents.propTypes = {
  className: PropTypes.string,
  img: PropTypes.string,
  heading3Affordable: PropTypes.string,
  findADataPlanThatWorksFor: PropTypes.string,
  budget: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propPadding: PropTypes.any,
  propMinWidth: PropTypes.any,
  propWidth: PropTypes.any,
};

export default BenefitComponents;
