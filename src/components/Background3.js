import BenefitComponents from "./BenefitComponents";
import PropTypes from "prop-types";
import "./Background3.css";

const Background3 = ({ className = "" }) => {
  return (
    <section className={`background14 ${className}`}>
      <div className="why-saily-parent">
        <div className="why-saily1">Why Saily?</div>
        <h1 className="heading-212">Stay connected wherever you go</h1>
      </div>
      <div className="frame-parent38">
        <div className="img-parent15">
          <img className="img-icon65" alt="" src="/img-10.svg" />
          <div className="heading-3-affordable-parent">
            <h3 className="heading-311">Affordable</h3>
            <div className="find-a-data-container1">
              <p className="find-a-data1">
                Find a data plan that works for your
              </p>
              <p className="budget1">budget.</p>
            </div>
          </div>
        </div>
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
    </section>
  );
};

Background3.propTypes = {
  className: PropTypes.string,
};

export default Background3;
