import { useCallback } from "react";
import {
  Button,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  TextField,
} from "@mui/material";
import "./FrameComponent13.css";

const FrameComponent13 = ({ className = "" }) => {
  const onLink1Click = useCallback(() => {
    // Please sync "Product Description" to the project
  }, []);

  return (
    <div className={`frame-parent25 ${className}`}>
      <div className="frame-parent26">
        <div className="frame-wrapper19">
          <div className="frame-parent27">
            <div className="unlocking-seamless-connectivit-parent">
              <h1 className="unlocking-seamless-connectivit">
                Unlocking Seamless Connectivity: How Horizon Sim Works
              </h1>
              <p className="horizon-sim-revolutionizes">
                {" "}
                Horizon Sim revolutionizes connectivity through eSIM technology.
                Instead of a physical SIM card, your device hosts a digital SIM
                that can be programmed with multiple network profiles.
              </p>
            </div>
            <Button
              className="button1"
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
        <img
          className="picture-icon3"
          loading="lazy"
          alt=""
          src="/picture1@2x.png"
        />
      </div>
      <div className="frame-parent28">
        <div className="popular-destinations-parent">
          <h1 className="popular-destinations">Popular destinations</h1>
          <div className="check-our-esim-plans-before-yo-parent">
            <div className="check-our-esim">
              Check our eSIM plans before your next trip:
            </div>
            <Button
              className="button2"
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
                width: 202.4,
                height: 48,
              }}
            >
              View All Countries
            </Button>
          </div>
        </div>
        <div className="link-parent37">
          <TextField
            className="link140"
            variant="standard"
            select
            value={1}
            InputProps={{
              startAdornment: (
                <InputAdornment
                  position="start"
                  style={{ marginLeft: "24px", marginRight: "16px" }}
                >
                  <img width="36px" height="36px" src="/border.png" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end" style={{ marginRight: "24px" }}>
                  <img width="16px" height="16px" src="/img.png" />
                </InputAdornment>
              ),
            }}
            SelectProps={{ IconComponent: () => null }}
            sx={{
              borderTopWidth: "1px",
              borderRightWidth: "1px",
              borderBottomWidth: "1px",
              borderLeftWidth: "1px",
              backgroundColor: "#f7f7f8",
              borderRadius: "12px",
              width: "31.505560307955456%",
              height: "84px",
              "& .MuiInput-underline:before": { borderBottom: "none" },
              "& .MuiInput-underline:after": { borderBottom: "none" },
              "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                borderBottom: "none",
              },
              "& .MuiInputBase-root": { height: "100%" },
              "& .MuiInputBase-input": {
                color: "#000",
                fontSize: 20,
                fontWeight: "Medium",
                fontFamily: "Roboto",
                textAlign: "left",
                p: "0 !important",
              },
            }}
          >
            <MenuItem value={1}>Turkey</MenuItem>
          </TextField>
          <TextField
            className="link141"
            variant="standard"
            select
            value={1}
            InputProps={{
              startAdornment: (
                <InputAdornment
                  position="start"
                  style={{ marginLeft: "24px", marginRight: "16px" }}
                >
                  <img width="36px" height="36px" src="/border-1.png" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment
                  position="end"
                  style={{ marginRight: "23.899999999997817px" }}
                >
                  <img width="16px" height="16px" src="/img-1.png" />
                </InputAdornment>
              ),
            }}
            SelectProps={{ IconComponent: () => null }}
            sx={{
              borderTopWidth: "1px",
              borderRightWidth: "1px",
              borderBottomWidth: "1px",
              borderLeftWidth: "1px",
              backgroundColor: "#f7f7f8",
              borderRadius: "12px",
              width: "31.505560307955456%",
              height: "84px",
              "& .MuiInput-underline:before": { borderBottom: "none" },
              "& .MuiInput-underline:after": { borderBottom: "none" },
              "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                borderBottom: "none",
              },
              "& .MuiInputBase-root": { height: "100%" },
              "& .MuiInputBase-input": {
                color: "#000",
                fontSize: 20,
                fontWeight: "Medium",
                fontFamily: "Roboto",
                textAlign: "left",
                p: "0 !important",
              },
            }}
            onClick={onLink1Click}
          >
            <MenuItem value={1}>United States</MenuItem>
          </TextField>
          <div className="link142">
            <div className="border-parent38">
              <img className="border-icon41" alt="" src="/border-21@2x.png" />
              <div className="thailand-wrapper">
                <div className="thailand">Thailand</div>
              </div>
            </div>
            <div className="img-wrapper39">
              <img className="img-icon44" alt="" src="/img-2@2x.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="heading-2-what-is-an-esim-parent">
        <h1 className="heading-26">What is an eSIM?</h1>
        <div className="an-esim-or-embedded-sim-is-a-parent">
          <p className="an-esim-or">
            An eSIM, or embedded SIM, is a digital SIM card that is built into a
            device, such as a smartphone, tablet, or smartwatch, instead of
            being a physical, removable card like traditional SIM cards. eSIMs
            are rewritable and can store multiple network profiles, allowing
            users to switch between mobile carriers or plans without needing to
            physically swap SIM cards.
          </p>
          <p className="overall-esims-represent">
            Overall, eSIMs represent the future of mobile connectivity, offering
            users more choice and control over their network preferences while
            streamlining the device setup and activation process.
          </p>
        </div>
      </div>
      <img className="image-icon" loading="lazy" alt="" src="/image@2x.png" />
      <div className="heading-2-how-does-an-esim-w-parent">
        <h1 className="heading-27">How It Works?</h1>
        <p className="esim-or-embedded">
          eSIM, or embedded SIM, works through a combination of hardware and
          software technology to provide connectivity to mobile devices.
        </p>
        <p className="to-start-using-container">
          <span className="to-start-using">
            To start using an eSIM, you’ll need to buy a data plan online and
            activate it on your device. You can
          </span>
          <span className="skip-the-hassle">
            skip the hassle of swapping out a SIM card — eSIMs are programmed
            remotely.
          </span>
        </p>
      </div>
      <div className="frame-parent29">
        <div className="heading-2-how-to-set-up-an-e-parent">
          <h1 className="heading-28">How to set up an eSIM</h1>
          <p className="before-buying-an-container">
            <span className="before-buying-an-esim-plan-ch">
              {`Before buying an eSIM plan, `}
              <span className="check-if-your">
                check if your phone is eSIM compatible
              </span>
              . Then, follow these steps to get
            </span>
            <span className="an-esim-plan-with-saily">
              an eSIM plan with Saily.
            </span>
          </p>
        </div>
        <div className="background-container">
          <div className="background4">
            <div className="background5">
              <div className="div">01</div>
              <div className="step-1f629f1easvg-wrapper">
                <img
                  className="step-1f629f1easvg-icon1"
                  loading="lazy"
                  alt=""
                  src="/step1f629f1easvg.svg"
                />
              </div>
            </div>
            <div className="background6">
              <h2 className="data-plan-selection1">
                Data Plan Selection Made Simple
              </h2>
              <p className="horizon-sim-streamlines1">
                Horizon Sim streamlines the process of selecting your ideal data
                plan.
              </p>
            </div>
          </div>
          <div className="background7">
            <div className="background8">
              <div className="div1">02</div>
              <div className="step-2eb28dc5asvg-wrapper">
                <img
                  className="step-2eb28dc5asvg-icon"
                  loading="lazy"
                  alt=""
                  src="/step1f629f1easvg.svg"
                />
              </div>
            </div>
            <div className="background9">
              <h2 className="effortless-app-download">
                Effortless App Download
              </h2>
              <p className="downloading-the-horizon">
                Downloading the Horizon Sim app is your ticket to hassle-free
                connectivity.
              </p>
            </div>
          </div>
          <div className="background10">
            <div className="background11">
              <div className="div2">03</div>
              <div className="step-320eb749esvg-wrapper">
                <img
                  className="step-320eb749esvg-icon"
                  loading="lazy"
                  alt=""
                  src="/step320eb749esvg1@2x.png"
                />
              </div>
            </div>
            <div className="background12">
              <h2 className="activation-made-easy">Activation Made Easy</h2>
              <p className="activating-your-horizon">
                Activating your Horizon Sim eSIM is a seamless process that
                takes just minutes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent13.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent13;
