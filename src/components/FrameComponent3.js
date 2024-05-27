import { useState, useCallback } from "react";
import {
  Button,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  TextField,
  Icon,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Background1 from "./Background1";
import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent3 = ({ className = "" }) => {
  const [linkDateTimePickerValue, setLinkDateTimePickerValue] = useState(null);

  const onLink1Click = useCallback(() => {
    // Please sync "Product Description" to the project
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <section className={`destination-content-wrapper ${className}`}>
        <form className="destination-content">
          <div className="destination-header">
            <div className="where">Where?</div>
            <div className="destination-subheader">
              <h1 className="heading-2">Choose your destination</h1>
              <div className="plan-selection">
                <div className="pick-a-data">
                  Pick a data plan for your trip.
                </div>
                <Button
                  className="button"
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
          </div>
          <div className="countries-content-parent">
            <div className="countries-content">
              <div className="country-grid">
                <TextField
                  className="link121"
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
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24px" }}
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
                >
                  <MenuItem value={1}>Turkey</MenuItem>
                </TextField>
                <TextField
                  className="link122"
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
                        <img width="16px" height="16px" src="/img-2.png" />
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
                <div className="link123">
                  <DatePicker
                    value={linkDateTimePickerValue}
                    onChange={(newValue) => {
                      setLinkDateTimePickerValue(newValue);
                    }}
                    sx={{
                      fieldset: {
                        borderColor: "transparent",
                        borderTopWidth: 1,
                        borderRightWidth: 1,
                        borderBottomWidth: 1,
                        borderLeftWidth: 1,
                      },
                      "&:hover": {
                        fieldset: { borderColor: "transparent" },
                        ".MuiOutlinedInput-notchedOutline": {
                          borderColor: "transparent",
                        },
                      },
                      "& input::placeholder": {
                        textColor: "#000",
                        fontSize: 20,
                      },
                      input: {
                        color: "#000",
                        fontSize: 20,
                        textAlign: "left",
                        fontWeight: "500",
                      },
                      "& .MuiInputBase-root": {
                        backgroundColor: "#f7f7f8",
                        height: 84,
                        gap: "8px",
                        flexDirection: { flexDirection: "row" },
                      },
                    }}
                    slotProps={{
                      textField: {
                        size: "medium",
                        fullWidth: true,
                        required: false,
                        autoFocus: false,
                        error: false,
                        placeholder: "Thailand",
                      },
                      openPickerIcon: {
                        component: () => (
                          <img width="36px" height="36px" src="/border-2.png" />
                        ),
                      },
                    }}
                  />
                </div>
              </div>
              <div className="more-countries">
                <TextField
                  className="link124"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-3.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24px" }}
                      >
                        <img width="16px" height="16px" src="/img-4.png" />
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
                  <MenuItem value={1}>Malaysia</MenuItem>
                </TextField>
                <TextField
                  className="link125"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-4.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "23.899999999997817px" }}
                      >
                        <img width="16px" height="16px" src="/img-5.png" />
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
                  <MenuItem value={1}>United Arab Emirates</MenuItem>
                </TextField>
                <div className="link126">
                  <div className="border-parent30">
                    <img
                      className="border-icon33"
                      alt=""
                      src="/border-5@2x.png"
                    />
                    <div className="china-wrapper">
                      <div className="china">China</div>
                    </div>
                  </div>
                  <div className="img-wrapper31">
                    <img className="img-icon35" alt="" src="/img-6@2x.png" />
                  </div>
                </div>
                <div className="link127">
                  <div className="border-parent31">
                    <img
                      className="border-icon34"
                      alt=""
                      src="/border-6@2x.png"
                    />
                    <div className="japan-wrapper">
                      <div className="japan">Japan</div>
                    </div>
                  </div>
                  <div className="img-wrapper32">
                    <img className="img-icon36" alt="" src="/img-7@2x.png" />
                  </div>
                </div>
                <div className="link128">
                  <div className="border-parent32">
                    <img
                      className="border-icon35"
                      alt=""
                      src="/border-7@2x.png"
                    />
                    <div className="france-wrapper">
                      <div className="france">France</div>
                    </div>
                  </div>
                  <div className="img-wrapper33">
                    <img className="img-icon37" alt="" src="/img-8@2x.png" />
                  </div>
                </div>
                <div className="link129">
                  <div className="border-parent33">
                    <img
                      className="border-icon36"
                      alt=""
                      src="/border-8@2x.png"
                    />
                    <div className="india-wrapper">
                      <div className="india">India</div>
                    </div>
                  </div>
                  <div className="img-wrapper34">
                    <img className="img-icon38" alt="" src="/img-6@2x.png" />
                  </div>
                </div>
              </div>
            </div>
            <h1 className="heading-21">How does HorizonSIM work?</h1>
          </div>
          <div className="download-app">
            <p className="dont-have-horizonsim">
              Don’t have HorizonSim? Download our App Now.
            </p>
            <div className="background-group">
              <Background1
                emptyStepBackgrounds="01"
                step1f629f1easvg="/step1f629f1easvg.svg"
                dataPlanSelectionMadeSimp="Data Plan Selection Made Simple"
                horizonSimStreamlinesTheP="Horizon Sim streamlines the process of selecting your ideal data plan."
              />
              <Background1
                emptyStepBackgrounds="02"
                step1f629f1easvg="/step1f629f1easvg.svg"
                dataPlanSelectionMadeSimp="Effortless App Download"
                horizonSimStreamlinesTheP="Downloading the Horizon Sim app is your ticket to hassle-free connectivity."
                propWidth="unset"
                propDisplay="inline-block"
                propMinWidth="24.7px"
                propWidth1="294.6px"
                propWidth2="291.6px"
              />
              <Background1
                emptyStepBackgrounds="03"
                step1f629f1easvg="/step320eb749esvg@2x.png"
                dataPlanSelectionMadeSimp="Activation Made Easy"
                horizonSimStreamlinesTheP="Activating your Horizon Sim eSIM is a seamless process that takes just minutes."
                propWidth="unset"
                propDisplay="inline-block"
                propMinWidth="25px"
                propWidth1="258.3px"
                propWidth2="284.8px"
              />
            </div>
          </div>
        </form>
      </section>
    </LocalizationProvider>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
