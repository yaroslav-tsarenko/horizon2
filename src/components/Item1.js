import { useMemo } from "react";
import "./Item1.css";

const Item1 = ({
  className = "",
  paymentData,
  thisInformationIsNecessar,
  informationForPaymentProc,
  creditCardInformation,
  propAlignSelf,
  propPadding,
  propFlex,
  propAlignSelf1,
  propMarginTop,
  propWidth,
  frameDivPadding,
}) => {
  const itemStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      padding: propPadding,
      flex: propFlex,
    };
  }, [propAlignSelf, propPadding, propFlex]);

  const frameDiv3Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
      marginTop: propMarginTop,
      padding: frameDivPadding,
    };
  }, [propAlignSelf1, propMarginTop, frameDivPadding]);

  const informationForPaymentContainerStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={`item3 ${className}`} style={itemStyle}>
      <div className="strong-payment-data-wrapper" style={frameDiv3Style}>
        <p className="strong-payment-container2">
          <span className="payment-data">{paymentData}</span>
          <span>{thisInformationIsNecessar}</span>
        </p>
      </div>
      <p
        className="information-for-payment-container"
        style={informationForPaymentContainerStyle}
      >
        <span className="information-for-payment-container1">
          <span className="information-for-payment">
            {informationForPaymentProc}
          </span>
          <span className="credit-card-information">
            {creditCardInformation}
          </span>
        </span>
      </p>
    </div>
  );
};

Item1.propTypes = {
  className: PropTypes.string,
  paymentData: PropTypes.string,
  thisInformationIsNecessar: PropTypes.string,
  informationForPaymentProc: PropTypes.string,
  creditCardInformation: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propPadding: PropTypes.any,
  propFlex: PropTypes.any,
  propAlignSelf1: PropTypes.any,
  propMarginTop: PropTypes.any,
  propWidth: PropTypes.any,
  frameDivPadding: PropTypes.any,
};

export default Item1;
