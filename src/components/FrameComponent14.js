import "./FrameComponent14.css";

const FrameComponent14 = ({
  className = "",
  allRightsReserved,
  linkPictureApplesvg,
  linkPictureGooglesvg,
}) => {
  return (
    <div className={`separator-parent1 ${className}`}>
      <div className="separator3" />
      <div className="frame-parent34">
        <div className="frame-wrapper21">
          <div className="all-rights-reserved-container">
            <div className="all-rights-reserved3">{allRightsReserved}</div>
            <a className="link-privacy3">Privacy Policy</a>
            <u className="link-terms3">Terms of Service</u>
            <u className="button-cookie3">Cookie Preferences</u>
          </div>
        </div>
        <div className="link-picture-applesvg-container">
          <img
            className="link-picture-applesvg3"
            loading="lazy"
            alt=""
            src={linkPictureApplesvg}
          />
          <img
            className="link-picture-googlesvg3"
            loading="lazy"
            alt=""
            src={linkPictureGooglesvg}
          />
        </div>
      </div>
    </div>
  );
};

FrameComponent14.propTypes = {
  className: PropTypes.string,
  allRightsReserved: PropTypes.string,
  linkPictureApplesvg: PropTypes.string,
  linkPictureGooglesvg: PropTypes.string,
};

export default FrameComponent14;
