import { useMemo } from "react";
import { Button } from "@mui/material";
import "./CheckoutDetails.css";

const CheckoutDetails = ({
  className = "",
  checkoutDetailsWidth,
  checkoutDetailsMinWidth,
  checkoutDetailsAlignSelf,
  lineDivBorderTop,
}) => {
  const checkoutDetailsStyle = useMemo(() => {
    return {
      width: checkoutDetailsWidth,
      minWidth: checkoutDetailsMinWidth,
      alignSelf: checkoutDetailsAlignSelf,
    };
  }, [checkoutDetailsWidth, checkoutDetailsMinWidth, checkoutDetailsAlignSelf]);

  const lineDivStyle = useMemo(() => {
    return {
      borderTop: lineDivBorderTop,
    };
  }, [lineDivBorderTop]);

  return (
    <div
      className={`checkout-details ${className}`}
      style={checkoutDetailsStyle}
    >
      <div className="header-wrapper">
        <Button
          className="header4"
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#1d1d1d",
            fontSize: "18",
            background: "#eda619",
            borderRadius: "5px",
            "&:hover": { background: "#eda619" },
          }}
        >
          Checkout Details
        </Button>
      </div>
      <div className="checkout-details-inner">
        <div className="cart-subtotal-parent">
          <div className="cart-subtotal">Cart Subtotal</div>
          <div className="div6">$360.00</div>
        </div>
      </div>
      <div className="checkout-details-child">
        <div className="frame-parent20">
          <div className="shipping-handling-parent">
            <div className="shipping-handling">{`Shipping & Handling`}</div>
            <div className="other-taxes">Other Taxes</div>
          </div>
          <div className="parent1">
            <div className="div7">$0.00</div>
            <div className="div8">$0.00</div>
          </div>
        </div>
      </div>
      <div className="checkout-details-inner1">
        <div className="frame-child3" style={lineDivStyle} />
      </div>
      <div className="checkout-details-inner2">
        <div className="grand-total-parent">
          <b className="grand-total">Grand Total</b>
          <b className="b">$360.00</b>
        </div>
      </div>
    </div>
  );
};

CheckoutDetails.propTypes = {
  className: PropTypes.string,

  /** Style props */
  checkoutDetailsWidth: PropTypes.any,
  checkoutDetailsMinWidth: PropTypes.any,
  checkoutDetailsAlignSelf: PropTypes.any,
  lineDivBorderTop: PropTypes.any,
};

export default CheckoutDetails;
