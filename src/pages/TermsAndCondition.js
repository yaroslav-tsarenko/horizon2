import { Button } from "@mui/material";
import TermsContent from "../components/TermsContent";
import FrameComponent13 from "../components/FrameComponent13";
import FrameComponent14 from "../components/FrameComponent14";
import SoftwareDetails from "../components/SoftwareDetails";
import AssignmentAndWaiver from "../components/AssignmentAndWaiver";
import "./TermsAndCondition.css";

const TermsAndCondition = () => {
  return (
    <div className="terms-and-condition">
      <header className="header1">
        <div className="image-and-links">
          <img
            className="image-6-layerstyle-icon2"
            loading="lazy"
            alt=""
            src="/image-6-layerstyle.svg"
          />
          <div className="links-and-download">
            <div className="top-links">
              <div className="horizon-sim-logo">
                <a className="horizon2">Horizon</a>
              </div>
              <a className="sim2">SIM</a>
            </div>
          </div>
        </div>
        <div className="destinations-link">
          <div className="destinations-button">
            <div className="destinations-url-wrapper">
              <div className="destinations-url">
                <a className="link-destinations2">Destinations</a>
                <a className="link-what2">What is an eSIM</a>
                <a className="link-about2">About Us</a>
                <a className="link-help2">Help center</a>
              </div>
            </div>
            <Button
              className="button-download-app1"
              disableElevation={true}
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "#000",
                fontSize: "16",
                borderColor: "#000",
                borderRadius: "9999px",
                "&:hover": { borderColor: "#000" },
                width: 176.3,
                height: 48,
              }}
            >
              Download App
            </Button>
          </div>
        </div>
      </header>
      <main className="terms-and-conditions1">
        <div className="terms-heading">
          <h1 className="heading-2">TERMS AND CONDITIONS</h1>
        </div>
        <TermsContent />
        <section className="monitoring-and-obligations">
          <div className="obligations-and-rights">
            <div className="item-operational">
              Operational, emergency, or security reasons.
            </div>
          </div>
          <div className="obligations-and-rights1">
            <b className="strong-monitoring">Monitoring</b>
          </div>
          <div className="obligations-and-rights2">
            <div className="charges-and-payments-parent">
              <div className="charges-and-payments">
                <p className="to-the-extent">
                  To the extent required by applicable law, regulations, orders
                  from government authorities or to the extent necessary to
                  protect us and
                </p>
              </div>
              <p className="other-customers-we-container">
                <span className="other-customers-we">
                  other customers, we may monitor and, if obliged, disclose
                  information related to your Account data and/or Services used.
                  Notwithstanding
                </span>
                <span className="the-foregoing-saily">
                  the foregoing, Saily cannot access or log your internet
                  traffic or content data.
                </span>
              </p>
            </div>
          </div>
          <div className="obligations-and-rights3">
            <b className="strong-your">Your obligations</b>
          </div>
          <div className="obligations-and-rights4">
            <p className="item-you">
              You agree to use the Service in accordance with these Terms and
              acknowledge your responsibility for all Service usage.
            </p>
          </div>
          <div className="obligations-and-rights5">
            <div className="frame-parent8">
              <div className="you-are-responsible-for-config-wrapper">
                <p className="you-are-responsible">
                  You are responsible for configuring your device to properly
                  utilize the Services, adhering to regulations and instructions
                  from us or the
                </p>
              </div>
              <div className="device-supplier">device supplier.</div>
            </div>
          </div>
          <div className="obligations-and-rights6">
            <div className="you-must">You must:</div>
          </div>
          <div className="obligations-and-rights7">
            <p className="item-avoid">
              Avoid using the Services for fraudulent, unlawful, or abusive
              communication;
            </p>
          </div>
          <div className="obligations-and-rights8">
            <p className="item-refrain">
              Refrain from using the Service for criminal or unlawful
              activities;
            </p>
          </div>
          <div className="obligations-and-rights9">
            <p className="item-act">
              Act in a manner that does not affect the operation of our
              networks;
            </p>
          </div>
          <div className="obligations-and-rights10">
            <p className="item-refrain1">
              Refrain from sending or uploading content that infringes
              third-party intellectual property rights;
            </p>
          </div>
          <div className="obligations-and-rights11">
            <p className="item-use">
              Use the Service for personal use only, refraining from commercial
              dealings;
            </p>
          </div>
          <div className="obligations-and-rights12">
            <div className="item-utilize">
              Utilize the Service in accordance with the Terms;
            </div>
          </div>
          <div className="obligations-and-rights13">
            <p className="item-comply">
              Comply with applicable laws and regulations in your home country
              or the country of residence or presence;
            </p>
          </div>
          <div className="obligations-and-rights14">
            <div className="item-provide">
              Provide proof of identity, if requested.
            </div>
          </div>
          <div className="obligations-and-rights15">
            <div className="frame-parent9">
              <div className="it-is-your-responsibility-to-d-wrapper">
                <p className="it-is-your">
                  It is your responsibility to delete the eSIM from your device
                  before passing it to another person. Any failure to do so
                  allows the new user
                </p>
              </div>
              <p className="to-access-the">
                to access the remaining pre-purchased Services.
              </p>
            </div>
          </div>
          <div className="obligations-and-rights16">
            <div className="frame-parent10">
              <div className="adhere-to-reasonable-security-wrapper">
                <p className="adhere-to-reasonable">
                  Adhere to reasonable security procedures and standards for the
                  Service. We may communicate security issues and general
                </p>
              </div>
              <p className="information-through-our">
                information through our Website, Saily App or dedicated emails.
              </p>
            </div>
          </div>
          <div className="obligations-and-rights17">
            <div className="strong-lost">Lost or Stolen Device</div>
          </div>
          <div className="obligations-and-rights18">
            <div className="frame-parent11">
              <div className="inform-us-promptly-if-the-devi-wrapper">
                <p className="inform-us-promptly">
                  Inform us promptly if the device with activated Services is
                  lost or stolen. You remain responsible for Service usage until
                  notification.
                </p>
              </div>
              <p className="email-us-at-container">
                <span className="email-us-at-supporthoriszonsi">
                  {`Email us at `}
                  <span className="supporthoriszonsimcom">
                    support@Horiszonsim.com
                  </span>{" "}
                  for lost or stolen devices. We will take reasonable action to
                  cancel Services on the lost or stolen device within
                </span>
                <span className="hours-subject-to-the-account">
                  72 hours, subject to the Account verification.
                </span>
              </p>
            </div>
          </div>
          <div className="obligations-and-rights19">
            <b className="strong-content">Content</b>
          </div>
          <div className="obligations-and-rights20">
            <div className="frame-parent12">
              <div className="you-are-solely-responsible-for-wrapper">
                <p className="you-are-solely">
                  You are solely responsible for all content, information, and
                  communications transmitted using the Service, acknowledging
                  that we
                </p>
              </div>
              <p className="have-no-responsibility">
                have no responsibility for deletion, corruption, or failure to
                store transmitted content.
              </p>
            </div>
          </div>
          <div className="obligations-and-rights21">
            <b className="strong-charges">CHARGES</b>
          </div>
          <div className="obligations-and-rights22">
            <div className="frame-parent13">
              <div className="the-costs-linked-to-the-purcha-wrapper">
                <p className="the-costs-linked">
                  The costs linked to the purchased Data plans are disclosed to
                  you before your Service purchase, and by completing the
                  purchase, you
                </p>
              </div>
              <p className="accept-these-charges-container">
                <span className="accept-these-charges">
                  accept these charges. We retain the right to modify or adjust
                  the charges for the Services you've acquired at any time,
                  either by updating
                </span>
                <span className="changes-on-website">
                  changes on Website and/or Horizonsim App.
                </span>
              </p>
            </div>
          </div>
          <div className="obligations-and-rights23">
            <div className="frame-parent14">
              <div className="the-charges-for-service-purcha-wrapper">
                <p className="the-charges-for">
                  The charges for Service purchases include value-added tax and
                  any other applicable sales taxes, duties, or levies imposed by
                  any
                </p>
              </div>
              <div className="authority-government-or">
                authority, government, or governmental agency.
              </div>
            </div>
          </div>
          <div className="obligations-and-rights24">
            <b className="strong-payments">PAYMENTS</b>
          </div>
          <div className="obligations-and-rights25">
            <div className="item-this">
              This Service operates on a pre-purchase basis.
            </div>
          </div>
          <div className="obligations-and-rights26">
            <div className="frame-parent15">
              <div className="you-agree-to-pay-us-for-any-pa-wrapper">
                <p className="you-agree-to">
                  You agree to pay us for any paid Services you purchase from
                  us, as well as all other charges incurred under your Account,
                  including
                </p>
              </div>
              <p className="applicable-taxes-and">
                applicable taxes and fees associated with your purchase of the
                Services.
              </p>
            </div>
          </div>
          <div className="obligations-and-rights27">
            <div className="frame-parent16">
              <div className="strong-payment-methods-wrapper">
                <p className="strong-payment-container">
                  <span className="payment-methods">Payment Methods</span>
                  <span>
                    . To purchase Services directly through us on our Website,
                    you must provide us with a current and valid method of
                  </span>
                </p>
              </div>
              <p className="payment-such-as">
                payment, such as a credit or debit card or any other payment
                method available on the Website.
              </p>
            </div>
          </div>
          <FrameComponent13
            nameEmailAddress="Billing and invoicing"
            weCollectYourFullNameAndE=". By providing us with a payment method, you (i) represent that you are authorized to use the payment method you"
            accountRetrievingALostPas="provided and that any payment information you provide is true and accurate; (ii) authorize us to charge the payment method you provided;"
            anAccountAndSignUpForTheS="and (iii) authorize us to charge you for any paid Services you chose when making a purchase. You can view your purchase history in your"
            heldByUsAndMadeAvailableT="Account."
            propFlex="unset"
            propWidth="1123.3px"
            propAlignSelf="unset"
          />
          <div className="obligations-and-rights28">
            <div className="frame-parent17">
              <div className="the-issuance-and-delivery-of-i-wrapper">
                <p className="the-issuance-and">
                  The issuance and delivery of invoices are the sole
                  responsibility of the Services provider – our Technology
                  Partner, conducted through the
                </p>
              </div>
              <div className="designated-electronic-means">
                designated electronic means.
              </div>
            </div>
          </div>
          <div className="obligations-and-rights29">
            <div className="frame-parent18">
              <div className="users-requesting-invoices-for-wrapper">
                <p className="users-requesting-invoices">
                  Users requesting invoices for acquired Services are required
                  to contact the Technology Partner via dedicated email –
                </p>
              </div>
              <p className="link-sailyenquiries1global-container">
                <span className="horizonsimquiries1globalcom">
                  <span className="horizonsimquiries1globalcom1">
                    Horizonsimquiries@1GLOBAL.com
                  </span>
                  . The period for this process depends on the rules and
                  regulations established by the Technology Partner, with
                </span>
                <span className="information-available-at-the-a">
                  information available at the aforementioned email address.
                </span>
              </p>
            </div>
          </div>
          <div className="obligations-and-rights30">
            <div className="frame-parent19">
              <div className="strong-payment-providers-wrapper">
                <p className="strong-payment-container1">
                  <span className="payment-providers">Payment Providers</span>
                  <span>
                    . Purchases may be handled via multiple payment companies
                    (e.g., Moonflash Limited, registered at Regent House, 316
                  </span>
                </p>
              </div>
              <p className="beulah-hill-london-container">
                <span className="beulah-hill-london-united-ki">
                  Beulah Hill, London, United Kingdom, SE19 3HF; NordSec B.V.,
                  registered at Fred. Roeskestraat 115, 1076 EE Amsterdam, the
                  Netherlands (exclusively
                </span>
                <span className="for-paypal-payments-lagosec">
                  for PayPal payments); Lagosec, Inc. registered at 651 N Broad
                  St Suite 206, Middletown, New Castle, Delaware 19709, United
                  States). To find out
                </span>
                <span className="more-on-how-payment-companies">
                  {`more on how payment companies process your personal data, please refer to our `}
                  <span className="privacy-policy2">Privacy Policy</span>.
                </span>
              </p>
            </div>
          </div>
          <div className="obligations-and-rights31">
            <p className="strong-fraud-container">
              <span className="fraud-protection">Fraud Protection</span>
              <span>
                . Saily reserves the right to verify credit/debit card payments
                prior to completing your purchase.
              </span>
            </p>
          </div>
          <div className="obligations-and-rights32">
            <div className="frame-parent20">
              <div className="strong-free-trials-wrapper">
                <p className="strong-free-container">
                  <span className="free-trials">Free Trials</span>
                  <span>
                    . In some cases, we or others on our behalf may offer a free
                    trial for our paid Services prior to charging your payment
                    method
                  </span>
                </p>
              </div>
              <p className="free-trial-the-container">
                <span>
                  <span className="free-trial-the-duration-of">
                    <span className="span6">(“</span>
                    <span className="free-trial">Free Trial</span>
                    <span>
                      ”). The duration of the Free Trial, its use and other
                      details will be specified during a sign-up and/or in the
                      promotional materials. We
                    </span>
                  </span>
                  <span className="determine-your-free-trial-elig">
                    <span>
                      determine your Free Trial eligibility at our sole
                      discretion, and to the extent permitted under applicable
                      law we may limit or withdraw the Free
                    </span>
                  </span>
                  <span className="trial-option-at-any-time-witho">
                    <span>
                      Trial option at any time without notice. We reserve the
                      right to limit you to one free trial or promotion of a
                      paid Service and to prohibit the
                    </span>
                  </span>
                  <span className="combining-of-free-trials-or-ot">
                    <span>
                      combining of free trials or other promotional offers.
                    </span>
                  </span>
                </span>
              </p>
            </div>
          </div>
          <div className="payment-enquiries">
            <p className="if-you-have-container1">
              <span className="if-you-have-container2">
                {`If you have any questions related to payments, please contact us at `}
                <span className="supporthorizonsimcom2">
                  support@Horizonsim.com
                </span>
                .
              </span>
            </p>
          </div>
          <div className="obligations-and-rights33">
            <b className="strong-termination">TERMINATION</b>
          </div>
          <div className="obligations-and-rights34">
            <b className="strong-by">By us:</b>
          </div>
          <div className="obligations-and-rights35">
            <div className="frame-parent21">
              <div className="we-retain-the-right-to-termina-wrapper">
                <p className="we-retain-the">
                  We retain the right to terminate your Account and discontinue
                  the provision of Services if you significantly breach these
                  Terms. No
                </p>
              </div>
              <p className="refunds-will-be">
                refunds will be issued for unused data bundles related to the
                Services upon termination.
              </p>
            </div>
          </div>
          <div className="obligations-and-rights36">
            <b className="strong-by1">By you:</b>
          </div>
          <div className="obligations-and-rights37">
            <p className="item-you1">
              You can terminate the Services at any time by notifying us as per
              clause 5.2.3.
            </p>
          </div>
          <div className="obligations-and-rights38">
            <div className="frame-parent22">
              <div className="if-before-depletion-or-expira-wrapper">
                <p className="if-before-depletion">
                  If, before depletion or expiration of a Data plan purchased,
                  you notify us of termination because we can no longer provide
                  the Services
                </p>
              </div>
              <p className="to-you-unrelated-container">
                <span className="to-you-unrelated-container1">
                  <span className="to-you-unrelated">
                    to you, unrelated to any action by you, you may request a
                    refund of the proportional value of unused Services.
                    Otherwise, termination does
                  </span>
                  <span className="not-entitle-you">
                    not entitle you to any payment.
                  </span>
                </span>
              </p>
            </div>
          </div>
          <div className="obligations-and-rights39">
            <div className="frame-parent23">
              <div className="to-terminate-email-us-at-supp-wrapper">
                <p className="to-terminate-email">
                  To terminate, email us at support@Horizonsim.com from the
                  email address associated with your Account – termination
                  process will be
                </p>
              </div>
              <div className="initiated-subject-to">
                initiated subject to Account verification.
              </div>
            </div>
          </div>
          <div className="obligations-and-rights40">
            <p className="item-upon">
              Upon depletion or expiration of the Data plan purchased, further
              Service usage is restricted until a new Data plan is purchased.
            </p>
          </div>
          <div className="obligations-and-rights41">
            <div className="strong-disclaimer">DISCLAIMER OF WARRANTIES</div>
          </div>
          <div className="obligations-and-rights42">
            <div className="frame-parent24">
              <div className="reasonable-efforts-are-taken-t-wrapper">
                <p className="reasonable-efforts-are">
                  Reasonable efforts are taken to improve the accuracy and
                  integrity of the Services, but complex software is never
                  wholly free from defects,
                </p>
              </div>
              <p className="errors-and-bugs-container">
                <span className="errors-and-bugs">
                  errors, and bugs. We give no warranty or representation that
                  the Services will be wholly free from defects, errors, and
                  bugs, such as downtime,
                </span>
                <span className="loss-of-data">
                  loss of data, corrupt data, service delay, mistakes,
                  out-of-date information, or other. Notwithstanding any other
                  provision of the Terms, we
                </span>
                <span className="reserve-the-right">
                  reserve the right to modify, suspend, or terminate access to
                  the Services, or any functionality comprising a part of the
                  Services at any time. In
                </span>
                <span className="no-event-to">
                  no event, to the extent permitted under applicable law, will
                  we be liable for making these changes. In exceptional and very
                  limited cases,
                </span>
                <span className="services-may-be">
                  Services may be unavailable from time to time due to human,
                  digital, mechanical, telecommunication, software, and other
                  failures. We cannot
                </span>
                <span className="predict-or-control">
                  predict or control when such downtime may occur and cannot
                  control the duration of such downtime.
                </span>
              </p>
            </div>
          </div>
          <div className="user-responsibility">
            <pre className="the-services-and-container">
              <span>
                <p className="the-services-and">
                  THE SERVICES AND WEBSITES ARE PROVIDED “AS IS” AND WITH ALL
                  FAULTS. WE MAKE NO REPRESENTATION OR WARRANTY WHATSOEVER
                  REGARDING
                </p>
                <p className="the-completeness-accuracy">
                  THE COMPLETENESS, ACCURACY, ADEQUACY, SUITABILITY,
                  FUNCTIONALITY, AVAILABILITY, OR OPERATION OF THE SERVICES. YOU
                  ACKNOWLEDGE THAT
                </p>
                <p className="we-do-not1">
                  WE DO NOT HAVE CONTROL OVER YOUR USE OF THE SERVICES, AND WE
                  DO NOT WARRANT THE PERFORMANCE OR RESULTS THAT MAY BE OBTAINED
                </p>
                <p className="through-your-use">
                  THROUGH YOUR USE OF THE SERVICES. YOU ASSUME ALL RISKS AND
                  RESPONSIBILITY FOR YOUR USE OF THE SERVICES AND FOR ANY LOSS
                  OF OR ERRORS
                </p>
                <p className="in-any-data">
                  IN ANY DATA OR INFORMATION. TO THE FULL EXTENT PERMISSIBLE BY
                  APPLICABLE LAW, WE DISCLAIM ALL WARRANTIES OF ANY KIND,
                  EXPRESS OR IMPLIED,
                </p>
                <p className="including-but-not">
                  INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
                  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
                  NON-INFRINGEMENT, AND
                </p>
                <p className="any-warranties-arising">
                  ANY WARRANTIES ARISING THROUGH COURSE OF DEALING, COURSE OF
                  PERFORMANCE, OR USAGE OF TRADE. WITHOUT LIMITING THE
                  FOREGOING, WE
                </p>
                <p className="neither-warrant-nor">
                  NEITHER WARRANT NOR REPRESENT THAT YOUR USE OF THE SERVICES
                  WILL NOT INFRINGE THE RIGHTS OF ANY THIRD PARTIES, NOR THAT
                  THE SERVICES
                </p>
                <p className="will-be-available">
                  WILL BE AVAILABLE FOR YOUR ACCESS OR USE, NOR THAT OPERATION
                  OF THE SERVICES WILL BE ERROR-FREE OR UNINTERRUPTED. PLEASE
                  NOTE THAT
                </p>
                <p className="some-jurisdictions-may">
                  SOME JURISDICTIONS MAY NOT ALLOW THE EXCLUSION OF IMPLIED
                  WARRANTIES, SO SOME OF THE ABOVE EXCLUSIONS MAY NOT APPLY TO
                  YOU. IN
                </p>
                <p className="addition-you-may">
                  ADDITION, YOU MAY ALSO HAVE OTHER RIGHTS THAT VARY FROM ONE
                  JURISDICTION TO ANOTHER JURISDICTION.
                </p>
              </span>
            </pre>
          </div>
          <div className="obligations-and-rights43">
            <div className="strong-limitation">LIMITATION OF LIABILITIES</div>
          </div>
          <div className="obligations-and-rights44">
            <div className="frame-parent25">
              <div className="there-are-inherent-risks-in-re-wrapper">
                <p className="there-are-inherent">
                  There are inherent risks in relying upon, using, transmitting,
                  or retrieving any data and/or content on the internet, and we
                  urge you to make
                </p>
              </div>
              <p className="sure-you-understand-container">
                <span className="sure-you-understand">
                  sure you understand these risks before using the Services.
                  Saily disclaims all responsibility for the behavior of its
                  users and/or visitors when they
                </span>
                <span className="access-or-use">
                  access or use the Services/Websites.
                </span>
              </p>
            </div>
          </div>
          <div className="software-list">
            <pre className="your-use-of-container">
              <p className="your-use-of">
                YOUR USE OF THE SERVICES AND WEBSITES IS AT YOUR OWN RISK.
                NEITHER SAILY, NOR ANY OF ITS PARENTS, SUBSIDIARIES OR
                AFFILIATES, NOR ANY OF
              </p>
              <p className="their-employees-officers">
                THEIR EMPLOYEES, OFFICERS OR DIRECTORS, SHALL BE LIABLE FOR ANY
                DIRECT, INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
                OR OTHER
              </p>
              <p className="damages-including-without">
                DAMAGES (INCLUDING, WITHOUT LIMITATION, LOSS OF DATA OR
                INFORMATION OF ANY KIND, LOSS OF BUSINESS, LOST PROFITS,
                INTERRUPTION OF
              </p>
              <p className="business-cost-of">
                BUSINESS, COST OF COVER OR ANY OTHER DAMAGES) ARISING OUT OF OR
                IN ANY WAY RELATED TO THESE TERMS OR THE USE OR INABILITY TO USE
                THE
              </p>
              <p className="services-or-websites">
                SERVICES OR WEBSITES, WHETHER BASED ON CONTRACT, TORT, STRICT
                LIABILITY OR OTHERWISE, EVEN IF WE HAVE BEEN ADVISED OF THE
                POSSIBILITY OF
              </p>
              <p className="such-damages-in">
                SUCH DAMAGES. IN ANY CASE, THE TOTAL AGGREGATE LIABILITY OF
                SAILY ARISING OUT OF OR RELATING TO THESE TERMS SHALL NOT EXCEED
                WHAT
              </p>
              <p className="you-paid-to">
                YOU PAID TO US DURING TWELVE (12) MONTHS IMMEDIATELY PRECEDING
                THE EVENT GIVING RISE TO SUCH LIABILITY AND SHALL NOT INCLUDE
                ATTORNEY
              </p>
              <p className="fees-or-court">
                FEES OR COURT COSTS IRRESPECTIVE OF ANY LAWS OR STATUTES THAT
                MAY PRESCRIBE OTHERWISE. YOU ACKNOWLEDGE THAT THE AMOUNT OF FEES
              </p>
              <p className="payable-by-you">
                PAYABLE BY YOU TO SAILY HEREUNDER REFLECT THE ALLOCATION OF RISK
                SET FORTH IN THE TERMS AND THAT SAILY WOULD NOT HAVE ENTERED
                INTO
              </p>
              <p className="the-agreement-with">
                THE AGREEMENT WITH YOU WITHOUT THE LIMITATIONS ON ITS LIABILITY
                CONTAINED IN THIS SECTION.
              </p>
            </pre>
          </div>
          <div className="obligations-and-rights45">
            <div className="frame-parent26">
              <div className="some-jurisdictions-restrict-or-wrapper">
                <p className="some-jurisdictions-restrict">
                  Some jurisdictions restrict or do not allow the limitation of
                  liability in contracts (e.g., limitation of liability for
                  death or personal injury caused
                </p>
              </div>
              <p className="by-other-partys-container">
                <span className="by-other-partys">
                  by other party's negligence, fraud, or fraudulent
                  misrepresentation, willful misconduct, or gross negligence).
                  As a result, respective provisions of
                </span>
                <span className="this-section-may">
                  this Section may not apply to you. In cases where such
                  restrictions on the limitation of liability apply, the
                  liability of Saily shall be limited to the
                </span>
                <span className="fullest-extent-permitted">
                  fullest extent permitted by certain applicable law.
                </span>
              </p>
            </div>
          </div>
          <FrameComponent14
            youAgreeToAcceptResponsib="Please also note, that we implemented security measures aimed at securing the Services and Websites; nevertheless, the internet is not a"
            passwordIncludingButNotLi="secure network and system reliability could be impaired independently our efforts and will. In addition, we cannot be held liable for"
            maintainingTheConfidentia="unpredictable events such as cyber-attacks, security breaches regarding the transmission of data or for performance guarantees regarding"
            yourAccountKeepYourPasswo="the volume and speed of data transmissions. Users are responsible for taking all appropriate measures to protect their own data, software,"
            ofAnyUnauthorizedUseOfYou="equipment, and systems, particularly from contamination by any viruses circulating on the internet."
            propWidth="1129px"
          />
          <div className="obligations-and-rights46">
            <b className="strong-indemnification">INDEMNIFICATION</b>
          </div>
          <div className="obligations-and-rights47">
            <div className="frame-parent27">
              <div className="you-agree-at-your-own-expense-wrapper">
                <p className="you-agree-at">
                  You agree, at your own expense, to indemnify, defend, and hold
                  harmless Horizonsim, its parents, subsidiaries, and affiliates
                  and their officers,
                </p>
              </div>
              <p className="directors-employees-agents-container">
                <span className="directors-employees-agents">
                  directors, employees, agents, distributors, and licensees from
                  and against any judgments, losses, deficiencies, damages,
                  liabilities, costs,
                </span>
                <span className="claims-demands-suits">
                  claims, demands, suits, and expenses (including, without
                  limitation, reasonable attorneys' fees, expert witness fees,
                  and expenses) incurred in,
                </span>
                <span className="arising-out-of">
                  arising out of or in any way related to (i) your breach of
                  these Terms; (ii) your (or any other users of your Account)
                  use of the Services; (iii) your
                </span>
                <span className="violation-of-any">
                  violation of any applicable laws, rules, and regulations; or
                  (iv) your negligence or willful misconduct. Saily shall not be
                  responsible for any delay
                </span>
                <span className="or-disruption-to">
                  or disruption to your use of the Services, including any
                  damages stemming therefrom caused by circumstances falling
                  under this Section.
                </span>
              </p>
            </div>
          </div>
          <div className="obligations-and-rights48">
            <b className="strong-license">LICENSE TERMS</b>
          </div>
          <SoftwareDetails />
          <div className="obligations-and-rights49">
            <div className="strong-application">APPLICATION PLATFORM TERMS</div>
          </div>
          <div className="obligations-and-rights50">
            <div className="frame-parent28">
              <div className="strong-app-store-wrapper">
                <p className="strong-app-container">
                  <span className="app-store">App Store</span>
                  <span>
                    . If you downloaded our Software from Apple App Store or if
                    you are using such Software and Services on any
                    Apple-branded
                  </span>
                </p>
              </div>
              <p className="device-you-acknowledge">
                device, you acknowledge that you have read, understood, and
                agree to the following notice regarding Apple:
              </p>
            </div>
          </div>
          <div className="saily-agreement">
            <p className="these-terms-are-container">
              <span className="these-terms-are-container1">
                <span className="these-terms-are">
                  These Terms are concluded between you and Saily, not with
                  Apple, and Apple is not responsible for the Services and the
                  content thereof. If you
                </span>
                <span className="need-any-support">
                  need any support with respect to Services, please contact us,
                  not Apple as they are under no obligation whatsoever to
                  furnish any
                </span>
                <span className="maintenance-or-support">
                  maintenance or support services with respect to Services. To
                  the extent that the Services fails to conform to any
                  applicable warranty, you may
                </span>
                <span className="notify-apple-and">
                  notify Apple, and Apple will refund the purchase price for the
                  Service to you; to the maximum extent permitted by law, Apple
                  will have no other
                </span>
                <span className="warranty-obligation-with">
                  warranty obligation with respect to the Services. Apple is not
                  responsible for addressing any claims by you or any third
                  party relating to the
                </span>
                <span className="service-or-your">
                  Service or your possession and/or use of the Service,
                  including: (i) product liability claims; (ii) any claim that
                  the Service fails to conform to any
                </span>
                <span className="applicable-legal-or">
                  applicable legal or regulatory requirement; and (iii) claims
                  arising under consumer protection or similar legislation.
                  Apple is not responsible for
                </span>
                <span className="the-investigation-defense">
                  the investigation, defense, settlement, and discharge of any
                  third-party claim that the Service and/or your possession and
                  use of the
                </span>
                <span className="application-infringe-that">
                  application infringe that third party's intellectual property
                  rights. You agree to comply with any applicable third-party
                  terms, when using the
                </span>
                <span className="service-apple-and">
                  Service. Apple, and Apple's subsidiaries, are third party
                  beneficiaries of these Terms, and upon your acceptance of
                  these Terms, Apple will have
                </span>
                <span className="the-right-and">
                  the right (and will be deemed to have accepted the right) to
                  enforce these Terms against you as a third-party beneficiary
                  of these Terms. You
                </span>
                <span className="hereby-represent-and">
                  hereby represent and warrant that (i) you are not located in a
                  country that is subject to a U.S. Government embargo, or that
                  has been
                </span>
                <span className="designated-by-the">
                  designated by the U.S. Government as a “terrorist supporting”
                  country; and (ii) you are not listed on any U.S. Government
                  list of prohibited or
                </span>
                <span className="restricted-parties">restricted parties.</span>
              </span>
            </p>
          </div>
          <div className="obligations-and-rights51">
            <div className="frame-parent29">
              <div className="strong-other-stores-wrapper">
                <p className="strong-other-container2">
                  <span className="other-stores">Other Stores</span>
                  <span>
                    . If our Software is downloaded from any other store,
                    platform, marketplace (e.g., Google Play, Amazon Appstore,
                    Microsoft
                  </span>
                </p>
              </div>
              <p className="store-huawei-appgallery-container">
                <span className="store-huawei-appgallery">
                  Store, HUAWEI AppGallery, etc.), you acknowledge that you have
                  read, understood, and agree to the customer terms of use of
                  such stores,
                </span>
                <span className="platforms-and-marketplace">
                  platforms, and marketplace. Saily is the licensor of the
                  Software and Services agent, 1GLOBAL is the provider of the
                  eSIM with data service plans
                </span>
                <span className="based-on-esim">
                  based on eSIM technology and other related services, and any
                  other third party (e.g., operator of the store, platform,
                  marketplace) is not a
                </span>
                <span className="party-to-these">party to these Terms.</span>
              </p>
            </div>
          </div>
          <div className="obligations-and-rights52">
            <div className="strong-governing">
              GOVERNING LAW AND DISPUTE RESOLUTION
            </div>
          </div>
          <FrameComponent13
            nameEmailAddress="Jurisdiction"
            weCollectYourFullNameAndE=". These Terms shall be governed by, and construed in accordance with, the laws of the state of Delaware, without reference to"
            accountRetrievingALostPas="its choice of law rules. However, some countries (including countries of the European Union) have laws that require contracts to be governed by"
            anAccountAndSignUpForTheS="the mandatory provisions of the local laws of the consumer’s country. In such cases, mandatory provisions of the local laws of your country of"
            heldByUsAndMadeAvailableT="residence apply."
            propFlex="unset"
            propWidth="1145.1px"
            propAlignSelf="unset"
          />
          <div className="obligations-and-rights53">
            <div className="frame-parent30">
              <div className="strong-judicial-resolution-o-wrapper">
                <p className="strong-judicial-container">
                  <span className="judicial-resolution-of">
                    Judicial Resolution of Disputes
                  </span>
                  <span>
                    . Before filing a claim against Saily, please try to resolve
                    the dispute informally by sending us a written notice
                  </span>
                </p>
              </div>
              <p className="of-dispute-at-container">
                <span className="of-dispute-at-supportsailyco">
                  {`of dispute at `}
                  <span className="supportsailycom">
                    support@saily.com
                  </span>{" "}
                  that includes your name, a detailed description of the
                  dispute, and the relief you seek. We will try to resolve the
                </span>
                <span className="dispute-informally-by-contacti">
                  dispute informally by contacting you via email. If a dispute
                  is not resolved, you or Horizonsim may bring a formal
                  proceeding. You and Saily agree that
                </span>
                <span className="any-judicial-proceeding-to-res">
                  any judicial proceeding to resolve claims relating to the
                  Terms will be brought in the courts of the State of Delaware.
                  If you reside in a country
                </span>
                <span className="including-countries-of-the-eur">
                  (including countries of the European Union) where laws provide
                  consumers the right to bring disputes in their local courts,
                  in such cases,
                </span>
                <span className="mandatory-provisions-of-the-lo">
                  mandatory provisions of the local laws of your country of
                  residence apply. We always strive to address your concerns
                  without needing a formal
                </span>
                <span className="legal-case">legal case.</span>
              </p>
            </div>
          </div>
          <div className="obligations-and-rights54">
            <div className="frame-parent31">
              <div className="strong-online-dispute-resolu-wrapper">
                <p className="strong-online-container">
                  <span className="online-dispute-resolution">
                    Online Dispute Resolution in the EU
                  </span>
                  <span>
                    . If you are a consumer, you may report the dispute to a
                    consumer dispute body in your country of
                  </span>
                </p>
              </div>
              <p className="residence-in-accordance-container">
                <span className="residence-in-accordance-container1">
                  <span className="residence-in-accordance-with">
                    residence, in accordance with local regulations and
                    practices. If you reside in the European Economic Area or
                    Switzerland, the European
                  </span>
                  <span className="commission-provides-for-an-onl">
                    {`Commission provides for an online dispute resolution platform, which you can access here: `}
                    <span className="httpseceuropaeuconsumers">
                      https://ec.europa.eu/consumers/odr
                    </span>
                    .
                  </span>
                </span>
              </p>
            </div>
          </div>
          <div className="obligations-and-rights55">
            <div className="frame-parent32">
              <div className="strong-no-class-actions-wrapper">
                <p className="strong-no-container">
                  <span className="no-class-actions">NO CLASS ACTIONS</span>
                  <span>
                    . YOU AND SAILY AGREE THAT EACH MAY BRING CLAIMS AGAINST THE
                    OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY AND
                  </span>
                </p>
              </div>
              <pre className="not-as-a-container">
                <p className="not-as-a">
                  NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR
                  REPRESENTATIVE PROCEEDING. FURTHER, UNLESS BOTH YOU AND SAILY
                  AGREE
                </p>
                <p className="otherwise-in-writing">
                  OTHERWISE IN WRITING, THE ARBITRATOR OR JUDGE MAY NOT
                  CONSOLIDATE MORE THAN ONE PERSON’S CLAIMS AND MAY NOT
                  OTHERWISE PRESIDE
                </p>
                <p className="over-any-form">
                  OVER ANY FORM OF A REPRESENTATIVE OR CLASS PROCEEDING. ALSO,
                  THE ARBITRATOR OR JUDGE MAY AWARD RELIEF (INCLUDING MONETARY,
                </p>
                <p className="injunctive-and-declaratory">
                  INJUNCTIVE, AND DECLARATORY RELIEF) ONLY IN FAVOR OF THE
                  INDIVIDUAL PARTY SEEKING RELIEF AND ONLY TO THE EXTENT
                  NECESSARY TO PROVIDE
                </p>
                <p className="relief-necessitated-by">
                  RELIEF NECESSITATED BY THAT PARTY’S INDIVIDUAL CLAIM(S). ANY
                  RELIEF AWARDED CANNOT AFFECT OTHER SAILY CUSTOMERS.
                </p>
              </pre>
            </div>
          </div>
          <div className="obligations-and-rights56">
            <b className="strong-miscellaneous">MISCELLANEOUS</b>
          </div>
          <div className="obligations-and-rights57">
            <div className="frame-parent33">
              <div className="strong-entire-agreement-wrapper">
                <p className="strong-entire-container">
                  <span className="entire-agreement">Entire Agreement</span>
                  <span>
                    . These Terms, along with any rules, guidelines, or policies
                    published on the Website constitute the entire agreement
                  </span>
                </p>
              </div>
              <p className="between-saily-and">
                between Saily and you with respect to your use of our Website
                and Services.
              </p>
            </div>
          </div>
          <div className="obligations-and-rights58">
            <div className="frame-parent34">
              <div className="strong-amendments-wrapper">
                <p className="strong-amendments-container">
                  <span className="amendments">Amendments</span>
                  <span>
                    . No amendment to these Terms by you shall be effective
                    unless acknowledged in writing by Saily. Notwithstanding the
                  </span>
                </p>
              </div>
              <p className="foregoing-saily-reserves">
                foregoing, Saily reserves the right, in its sole discretion, to
                modify these Terms or the policies referenced herein at any time
                as set forth above.
              </p>
            </div>
          </div>
          <div className="obligations-and-rights59">
            <div className="frame-parent35">
              <div className="strong-severability-wrapper">
                <p className="strong-severability-container">
                  <span className="severability">Severability</span>
                  <span>
                    . If any portion of these Terms is found to be unenforceable
                    or invalid for any reason, that provision will be limited or
                    eliminated
                  </span>
                </p>
              </div>
              <p className="to-the-minimum">
                to the minimum extent necessary so that the rest of these Terms
                will otherwise remain in full force and effect.
              </p>
            </div>
          </div>
          <AssignmentAndWaiver />
          <div className="export-regulations">
            <div className="export-compliance">
              <div className="export">
                <p className="strong-export-container">
                  <span className="export1">Export</span>
                  <span>
                    . Saily may be subject to the United States (U.S.), United
                    Kingdom, and European Union export and re-export control
                    laws and
                  </span>
                </p>
              </div>
              <p className="regulations-or-similar-container">
                <span>
                  <span className="regulations-or-similar-laws-ap">
                    <span className="regulations-or-similar">
                      regulations or similar laws applicable in other
                      jurisdictions, including the Export Administration
                      Regulations (“
                    </span>
                    <span className="ear">EAR</span>
                    <span>”) maintained by the U.S.</span>
                  </span>
                  <span className="department-of-commerce-you-wa">
                    <span>
                      Department of Commerce. You warrant that you are (i) not
                      located in any country to which the U.S., the European
                      Union, the United Kingdom or
                    </span>
                  </span>
                  <span className="other-relevant-jurisdiction-ha">
                    <span>
                      other relevant jurisdiction has embargoed goods or has
                      otherwise applied any economic sanctions, which would
                      forbid or limit the use, import,
                    </span>
                  </span>
                  <span className="export-sale-of-or-payment-fo">
                    <span>
                      export, sale of, or payment for the Services; and (ii) not
                      a denied party as specified in any applicable export or
                      re-export laws or regulations or
                    </span>
                  </span>
                  <span className="similar-laws-applicable-in-rel">
                    <span>
                      similar laws applicable in relevant jurisdictions or
                      otherwise listed on any list of prohibited or restricted
                      parties as administered by the Office of
                    </span>
                  </span>
                  <span className="foreign-control-of-the-us-de">
                    <span>
                      Foreign Control of the U.S. Department of the Treasury (“
                    </span>
                    <span className="ofac">OFAC</span>
                    <span className="the-us-department">
                      ”), the U.S. Department of State, the United Nations
                      Security Council, the European
                    </span>
                  </span>
                  <span className="union-her-majestys-treasury">
                    <span className="union-her-majestys">
                      Union, Her Majesty’s Treasury of the United Kingdom, or
                      other relevant sanctions authority (“
                    </span>
                    <span className="sanctions-authorities">
                      Sanctions Authorities
                    </span>
                    <span>”). You agree to comply with</span>
                  </span>
                  <span className="all-applicable-export-and-re-e">
                    <span>
                      all applicable export and re-export control laws and
                      regulations, including without limitation the EAR and
                      trade and economic sanctions
                    </span>
                  </span>
                  <span className="maintained-by-ofac-as-it-may-b">
                    <span>
                      maintained by OFAC as it may be applicable to you.
                      Specifically, you agree not to - directly or indirectly -
                      use, sell, export, reexport, transfer,
                    </span>
                  </span>
                  <span className="divert-release-or-otherwise">
                    <span>
                      divert, release, or otherwise dispose of any Saily
                      services, including products, software, or technology
                      (notwithstanding products derived from
                    </span>
                  </span>
                  <span className="or-based-on-such-technology-r">
                    <span>
                      or based on such technology) received from under these
                      Terms to any destination, entity, or person or for any
                      end-use prohibited by the
                    </span>
                  </span>
                  <span className="applicable-export-control-laws">
                    <span>
                      applicable export control laws, trade and economic
                      sanctions maintained by Sanctions Authorities or any
                      applicable laws or regulations
                    </span>
                  </span>
                  <span className="without-obtaining-any-required">
                    <span>
                      without obtaining any required prior authorization from
                      the competent government authorities as required by those
                      laws and regulations.
                    </span>
                  </span>
                </span>
              </p>
            </div>
          </div>
          <div className="obligations-and-rights60">
            <div className="frame-parent36">
              <div className="strong-prevailing-language-container">
                <p className="strong-prevailing-container1">
                  <span className="prevailing-language1">
                    Prevailing Language
                  </span>
                  <span>
                    . For all purposes, the English language version of the
                    Terms shall be the original, governing instrument and
                  </span>
                </p>
              </div>
              <p className="understanding-between-you-container">
                <span className="understanding-between-you">
                  understanding between you and us. In the event of any conflict
                  between this English language version of the Terms and any
                  subsequent
                </span>
                <span className="translation-into-any">
                  translation into any other language, the English language
                  version shall govern and control.
                </span>
              </p>
            </div>
          </div>
          <div className="obligations-and-rights61">
            <div className="frame-parent37">
              <div className="strong-force-majeure-wrapper">
                <p className="strong-force-container">
                  <span className="force-majeure">Force Majeure</span>
                  <span>
                    . Saily shall not be in breach of the Terms nor liable for
                    delay in performing, or failing to perform, any obligations
                    under the
                  </span>
                </p>
              </div>
              <p className="terms-if-such-container">
                <span className="terms-if-such">
                  Terms if such delay or failure result from unforeseen
                  circumstances, events, or causes beyond Horizonsim’s
                  reasonable control (including, without
                </span>
                <span className="limitation-failures-of">
                  limitation, failures of third party software (whether open or
                  not), failures of your telecommunication or internet service
                  providers, force majeure,
                </span>
                <span className="earthquakes-fires-floods">
                  earthquakes, fires, floods, embargoes, labor disputes and
                  strikes, riots, war, novelty of product manufacture or other
                  unanticipated product
                </span>
                <span className="development-problems-and">
                  development problems, and acts of civil and military
                  authorities). In such cases, Horizonsim shall be entitled to a
                  reasonable extension of the time for
                </span>
                <span className="performing-any-such">
                  performing any such obligations under the Terms.
                </span>
              </p>
            </div>
          </div>
          <div className="obligations-and-rights62">
            <p className="strong-no-container1">
              <span className="no-reliance">No Reliance</span>
              <span>
                . The parties acknowledge that no reliance is placed on any
                representation made but not expressly contained in these Terms.
              </span>
            </p>
          </div>
          <div className="obligations-and-rights63">
            <b className="strong-contact">CONTACT US</b>
          </div>
          <div className="obligations-and-rights64">
            <p className="item-you2">
              You can reach our team 24/7, 365 days a year. Just contact us
              through one of our communication channels:
            </p>
          </div>
          <div className="obligations-and-rights65">
            <div className="email-supporthorizonsimcom">
              <span className="email-supporthorizonsimcom-container">
                {`Email: `}
                <span className="supporthorizonsimcom3">
                  support@Horizonsim.com
                </span>
              </span>
            </div>
          </div>
          <div className="chatbot1">
            <p className="item-chatbot">
              Chatbot: through Saily App (while logged-in).
            </p>
          </div>
          <footer className="footer1">
            <div className="bottom-image">
              <div className="brand">
                <img
                  className="image-6-layerstyle-icon3"
                  alt=""
                  src="/image-6-layerstyle.svg"
                />
                <div className="bottom-links">
                  <div className="destinations">
                    <div className="app">
                      <div className="horizon3">Horizon</div>
                    </div>
                    <div className="sim3">SIM</div>
                  </div>
                </div>
              </div>
              <div className="policy">
                <div className="apple-store">
                  <a
                    className="link-destinations3"
                    href="https://www.figma.com/design/ChO0euFDvPgaehWUhty9Gg?node-id=1-470"
                    target="_blank"
                  >
                    Destinations
                  </a>
                  <a
                    className="link-what3"
                    href="https://www.figma.com/design/ChO0euFDvPgaehWUhty9Gg?node-id=1-2421"
                    target="_blank"
                  >
                    What is an eSIM
                  </a>
                  <a
                    className="link-about3"
                    href="https://www.figma.com/design/ChO0euFDvPgaehWUhty9Gg?node-id=1-2942"
                    target="_blank"
                  >
                    About Us
                  </a>
                  <div className="link-help3">Help center</div>
                  <a
                    className="link-download1"
                    href="https://www.figma.com/design/ChO0euFDvPgaehWUhty9Gg?node-id=1-3096"
                    target="_blank"
                  >
                    Download App
                  </a>
                  <div className="link-become1">Become affiliate</div>
                </div>
              </div>
            </div>
            <div className="legal-and-social">
              <div className="separator" />
              <div className="legal-info">
                <div className="legal-content">
                  <div className="legal-links">
                    <div className="all-rights-reserved">
                      All rights reserved.
                    </div>
                    <a className="link-privacy">Privacy Policy</a>
                    <a className="link-terms">Terms of Service</a>
                    <u className="button-cookie">Cookie Preferences</u>
                  </div>
                </div>
                <div className="link-picture-applesvg-parent">
                  <img
                    className="link-picture-applesvg"
                    loading="lazy"
                    alt=""
                    src="/link--picture--applesvg2@2x.png"
                  />
                  <img
                    className="link-picture-googlesvg"
                    loading="lazy"
                    alt=""
                    src="/link--picture--googlesvg@2x.png"
                  />
                </div>
              </div>
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
};

export default TermsAndCondition;
