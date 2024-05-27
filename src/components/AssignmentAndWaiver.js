import AssignmentTerms from "./AssignmentTerms";
import Item from "./Item";
import PropTypes from "prop-types";
import "./AssignmentAndWaiver.css";

const AssignmentAndWaiver = ({ className = "" }) => {
  return (
    <div className={`assignment-and-waiver ${className}`}>
      <div className="assignment-info">
        <AssignmentTerms
          assignment="Assignment"
          youMayNotAssignItsRightsO=". You may not assign its rights or obligations under these Terms without the prior written consent of Saily but may be assigned"
          bySailyWithoutRestriction="by Saily without restriction."
        />
        <AssignmentTerms
          assignment="Non-Waiver"
          youMayNotAssignItsRightsO=". Saily’s failure to insist upon or enforce any provision of these Terms shall not be construed as a waiver of any provision or"
          bySailyWithoutRestriction="right."
          propWidth="40.5px"
        />
        <div className="third-party-components">
          <div className="third-party-interaction">
            <p className="strong-third-party-container">
              <span className="third-party-components1">
                Third-Party Components
              </span>
              <span>
                . You acknowledge that Services, Software, and Websites, may
                incorporate, embed, be combined with, or may
              </span>
            </p>
          </div>
          <p className="otherwise-interact-with-container">
            <span className="otherwise-interact-with-third-">
              <span className="otherwise-interact-with">
                otherwise interact with third-party computer programs,
                applications, services, links, and components (“
              </span>
              <span className="third-party-components2">
                Third-Party Components
              </span>
              <span>”). For the</span>
            </span>
            <span className="avoidance-of-doubt-section-d">
              <span>
                avoidance of doubt, Section “Disclaimer of Warranties” and
                Section “Limitation of Liabilities” of these Terms apply to the
                foregoing interaction
              </span>
            </span>
            <span className="with-third-party-components-w">
              <span>
                with Third-Party Components. Where our Website contains links to
                other websites and/or resources provided by third parties, which
                include
              </span>
            </span>
            <span className="third-party-social-media-websi">
              <span>
                third-party social media websites such as Facebook, Instagram,
                and LinkedIn, they are provided for your information only.
                Please review the
              </span>
            </span>
            <span className="third-party-websites-terms-of">
              <span>
                third-party website’s terms of use and other policies carefully
                and make sure you understand them before you engage in any
                transaction.
              </span>
            </span>
          </p>
        </div>
        <Item
          communicationOptimization="Linking to our Websites"
          weUseVariousToolsToHelpUs=". You may link to our Website, provided you do so in a way that is fair and legal and does not damage our"
          performWithAnEmailSuchAsO="reputation or take advantage of it, but you must not establish a link in such a way as to suggest any form of association, approval, or"
          androidToOptimisePushNoti="endorsement on our part where none exists."
          propAlignSelf="unset"
          propPadding="unset"
          propFlex="unset"
          propMarginTop="unset"
          itemWidth="1066.9px"
        />
        <div className="saily-communication">
          <div className="communication-methods">
            <p className="strong-communication-container1">
              <span className="communication-with-horizonsim">
                Communication with Horizonsim
              </span>
              <span>
                . You may provide notices, requests, information, and other
                communications to Saily via our customer support.
              </span>
            </p>
          </div>
          <p className="you-agree-to-container">
            <span className="you-agree-to2">
              You agree to receive communications from us electronically, e.g.,
              by email, through our applications, and customer support
              platforms, and
            </span>
            <span className="consent-that-such">
              consent that such notifications have the same legal power as
              communication in writing. We may communicate to you in order to
              advise you
            </span>
            <span className="about-provision-changes">
              about provision, changes, or additions to the Services or for
              other purposes that are reasonable or required by applicable law.
              When
            </span>
            <span className="communicating-with-our">
              communicating with our customer support representatives, you agree
              to be respectful and kind. In addition, you undertake to provide
              accurate
            </span>
            <span className="data-for-communication">
              data for communication with us and, if your contact details have
              changed, update them in your Account immediately. Saily is not
              liable if you
            </span>
            <span className="do-not-receive">
              do not receive certain notices regarding the Services upon your
              failure to update your contact details.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

AssignmentAndWaiver.propTypes = {
  className: PropTypes.string,
};

export default AssignmentAndWaiver;
