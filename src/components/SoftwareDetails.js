import "./SoftwareDetails.css";

const SoftwareDetails = ({ className = "" }) => {
  return (
    <div className={`software-details ${className}`}>
      <div className="ordered-list10">
        <div className="item5">
          <div className="software-grant">
            <p className="strong-software-container">
              <span className="strong-software-container1">
                <span className="software">Software</span>
                <span>
                  . For easier access to and use of our Services, you may need
                  to download and install our Software on a device. Below see
                  the terms
                </span>
              </span>
            </p>
          </div>
          <p className="and-conditions-applicable-container">
            <span className="and-conditions-applicable-to-t">
              <span className="and-conditions-applicable">
                and conditions applicable to the use of such Software. Pursuant
                to these Terms, “
              </span>
              <span className="software1">Software</span>
              <span>” means any mobile and desktop software</span>
            </span>
            <span className="applications-and-any-other-sof">
              <span>
                applications and any other software (including any releases,
                updates, enhancements, or revisions) and any documentation that
                accompanies
              </span>
            </span>
            <span className="or-is-made-available-in-connec">
              <span>
                or is made available in connection with such software provided
                by us to you for your use of the Services. We provide
                application updates for all
              </span>
            </span>
            <span className="os-versions-for-at-least-two">
              <span>
                OS versions for at least two (2) years after the initial OS
                version release.
              </span>
            </span>
          </p>
        </div>
        <div className="item6">
          <div className="strong-license-grant-wrapper">
            <p className="strong-license-container">
              <span className="license-grant">License Grant</span>
              <span>
                . Subject to these Terms and provided that you comply with the
                Terms we grant you a limited, revocable, non-exclusive,
              </span>
            </p>
          </div>
          <p className="personal-non-transferable-no-container">
            <span>
              <span className="personal-non-transferable-no">
                <span className="personal-non-transferable-no1">
                  personal, non-transferable, non-sublicensable, non-assignable,
                  fixed-term license (the “
                </span>
                <span className="license">License</span>
                <span>”) to download, install and use a copy of the</span>
              </span>
              <span className="software-on-a-compatible-devic">
                <span>
                  Software on a compatible device that you own or control. No
                  other right or license, express or implied, of any kind is
                  granted to you hereunder
                </span>
              </span>
              <span className="with-respect-to-the-services-a">
                <span>with respect to the Services and/or Software.</span>
              </span>
            </span>
          </p>
        </div>
        <div className="item7">
          <div className="strong-apple-requirements-wrapper">
            <p className="strong-apple-container">
              <span>
                <span className="apple-requirements">Apple Requirements</span>
                <span>
                  . For the sake of clarity, in respect to the Software that is
                  downloaded from Apple, Inc. (“
                </span>
                <span className="apple">Apple</span>
                <span>”) App Store, the License</span>
              </span>
            </p>
          </div>
          <p className="is-limited-to-container">
            <span className="is-limited-to">
              is limited to the use of such Software on any Apple-branded
              devices that you own or control and as permitted by the Usage
              Rules set forth in
            </span>
            <span className="the-apple-media">
              the Apple Media Services Terms and Conditions, except that such
              Software may be accessed and used by other accounts associated
              with you
            </span>
            <span className="via-family-sharing">
              via family sharing or volume purchasing features.
            </span>
          </p>
        </div>
        <div className="item8">
          <div className="strong-we-retain-all-rights-wrapper">
            <p className="strong-we-container">
              <span className="we-retain-all">We Retain all Rights</span>
              <span>
                . The Software used pursuant to these Terms is licensed, not
                sold, and you receive no title to or ownership of any copy,
              </span>
            </p>
          </div>
          <p className="or-of-the-container">
            <span className="or-of-the-container1">
              <span className="or-of-the">
                or of the Software itself, or even more so of the Services and
                Websites. You receive no rights to the Software other than those
                specifically
              </span>
              <span className="granted-in-section">
                granted in Section 9. We and/or our licensors retain all rights,
                title and interest in and to the Services, Software, Websites,
                and any portion
              </span>
              <span className="thereof-all-rights">
                thereof. All rights are reserved unless otherwise explicitly
                expressed. Saily and other marks are protected trademarks, owned
                by Nord
              </span>
              <span className="companies-and-you">
                companies and you are forbidden from registration, adoption, or
                any other use of trademarks, trade names, symbols, or signs that
                are either
              </span>
              <span className="identical-or-confusingly">
                identical or confusingly similar to any trademarks owned by
                Nord.
              </span>
            </span>
          </p>
        </div>
        <div className="item9">
          <div className="strong-feedback-wrapper">
            <p className="strong-feedback-container">
              <span className="feedback">Feedback</span>
              <span>
                . You hereby grant Saily and/or its affiliated companies a
                perpetual, irrevocable, worldwide license to use Feedback (as
                defined
              </span>
            </p>
          </div>
          <p className="below-you-communicate-container">
            <span>
              <span className="below-you-communicate-to-us-w">
                <span>
                  below) you communicate to us without reimbursement or
                  compensation, without any obligation to report on such use,
                  and without any other
                </span>
              </span>
              <span className="restriction-you-waive-or-agr">
                <span>
                  restriction. You waive (or agree not to enforce) any and all
                  rights that may now or in future exist (including moral and
                  equivalent rights) in
                </span>
              </span>
              <span className="feedback-feedback-refers-t">
                <span>Feedback. (“</span>
                <span className="feedback1">Feedback</span>
                <span>
                  ” refers to any recommendation, idea, proposal, suggestion,
                  feedback, review, or other input related to Services,
                  Software,
                </span>
              </span>
              <span className="website">
                <span>Website).</span>
              </span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

SoftwareDetails.propTypes = {
  className: PropTypes.string,
};

export default SoftwareDetails;
