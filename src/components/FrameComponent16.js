import { Button } from "@mui/material";
import "./FrameComponent16.css";

const FrameComponent16 = ({ className = "" }) => {
  return (
    <section className={`frame-wrapper25 ${className}`}>
      <div className="picture-parent">
        <img
          className="picture-icon4"
          loading="lazy"
          alt=""
          src="/picture2@2x.png"
        />
        <div className="frame-wrapper26">
          <div className="still-looking-for-a-data-plan-parent">
            <div className="still-looking-for">
              Still looking for a data plan?
            </div>
            <h1 className="heading-211">Find Your Perfect Fit</h1>
            <p className="embark-on-a">
              Embark on a journey of seamless connectivity with our diverse
              range of eSIM plans tailored to suit your unique needs.
            </p>
            <Button
              className="button3"
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#000",
                fontSize: "16",
                background: "#eda619",
                border: "#eda619 solid 1px",
                borderRadius: "9999px",
                "&:hover": { background: "#eda619" },
                width: 256.3,
                height: 48,
              }}
            >
              Choose Your Destination
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent16.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent16;
