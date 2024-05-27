import BenefitComponents from "./BenefitComponents";
import PropTypes from "prop-types";
import "./Background.css";

const Background = ({ className = "" }) => {
  return (
    <div className={`background3 ${className}`}>
      <div className="benefits-content">
        <div className="why-saily">Why Saily?</div>
        <h1 className="heading-22">Stay connected wherever you go</h1>
      </div>
      <div className="benefit-items">
        <BenefitComponents
          img="/img-10.svg"
          heading3Affordable="Affordable"
          findADataPlanThatWorksFor="Find a data plan that works for your"
          budget="budget."
        />
        <BenefitComponents
          img="/img-11.svg"
          heading3Affordable="Easy to use"
          findADataPlanThatWorksFor="Just get the app and buy a data"
          budget="plan. Easy!"
          propFlex="0.9154"
          propPadding="0px 30px 0px 0px"
          propMinWidth="266px"
          propWidth="158.5px"
        />
        <BenefitComponents
          img="/img-12.svg"
          heading3Affordable="Avoid roaming charges"
          findADataPlanThatWorksFor="Sneaky roaming fees are a thing of"
          budget="the past."
          propFlex="1"
          propPadding="unset"
          propMinWidth="262px"
          propWidth="331.9px"
        />
      </div>
    </div>
  );
};

Background.propTypes = {
  className: PropTypes.string,
};

export default Background;
