import { useState, useCallback } from "react";
import {
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
import FrameComponent9 from "../components/FrameComponent9";
import FrameComponent8 from "../components/FrameComponent8";
import Link from "../components/Link";
import FrameComponent7 from "../components/FrameComponent7";
import FrameComponent6 from "../components/FrameComponent6";
import "./AllDestinations.css";

const AllDestinations = () => {
  const [linkDateTimePickerValue, setLinkDateTimePickerValue] = useState(null);
  const [linkDateTimePicker1Value, setLinkDateTimePicker1Value] =
    useState(null);
  const [linkDateTimePicker2Value, setLinkDateTimePicker2Value] =
    useState(null);
  const [linkDateTimePicker3Value, setLinkDateTimePicker3Value] =
    useState(null);
  const [linkDateTimePicker4Value, setLinkDateTimePicker4Value] =
    useState(null);
  const [linkDateTimePicker5Value, setLinkDateTimePicker5Value] =
    useState(null);
  const [linkDateTimePicker6Value, setLinkDateTimePicker6Value] =
    useState(null);
  const [linkDateTimePicker7Value, setLinkDateTimePicker7Value] =
    useState(null);
  const [linkDateTimePicker8Value, setLinkDateTimePicker8Value] =
    useState(null);
  const [linkDateTimePicker9Value, setLinkDateTimePicker9Value] =
    useState(null);
  const [linkDateTimePicker10Value, setLinkDateTimePicker10Value] =
    useState(null);
  const [linkDateTimePicker11Value, setLinkDateTimePicker11Value] =
    useState(null);
  const [linkDateTimePicker12Value, setLinkDateTimePicker12Value] =
    useState(null);
  const [linkDateTimePicker13Value, setLinkDateTimePicker13Value] =
    useState(null);

  const onLinkContainer7Click = useCallback(() => {
    // Please sync "Product Description" to the project
  }, []);

  const onLink73Click = useCallback(() => {
    // Please sync "Product Description" to the project
  }, []);

  const onLinkContainer9Click = useCallback(() => {
    // Please sync "Product Description" to the project
  }, []);

  const onLinkContainer10Click = useCallback(() => {
    // Please sync "Product Description" to the project
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="all-destinations">
        <FrameComponent9 />
        <main className="all-destinations-inner">
          <section className="frame-parent">
            <div className="heading-1-all-destinations-parent">
              <h1 className="heading-1">Connectivity Without Borders:</h1>
              <p className="explore-all-destinations">
                Explore all destinations with Horizon Sim. Our global network
                ensures seamless connectivity wherever your travels take you.
              </p>
            </div>
            <div className="backgroundbordershadow">
              <div className="backgroundbordershadow-inner">
                <div className="img-parent">
                  <img className="img-icon" alt="" src="/img.svg" />
                  <div className="enter-country">Enter country</div>
                </div>
              </div>
              <img
                className="background-icon"
                loading="lazy"
                alt=""
                src="/background1.svg"
              />
            </div>
            <div className="frame-group">
              <FrameComponent8 border="/border-2@2x.png" algeria="Algeria" />
              <FrameComponent8
                border="/border-51@2x.png"
                algeria="Argentina"
                propWidth="152.1px"
                propDebugCommit="unset"
                propFlex="1"
                propDisplay="unset"
                propMinWidth="unset"
                propAlignSelf="stretch"
                propDebugCommit1="unset"
              />
              <div className="link-parent">
                <TextField
                  className="link"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-6.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24px" }}
                      >
                        <img width="16px" height="16px" src="/img-7.png" />
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
                    width: "31.967493584260115%",
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
                  <MenuItem value={1}>Armenia</MenuItem>
                </TextField>
                <TextField
                  className="link1"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-7.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24.100000000002183px" }}
                      >
                        <img width="16px" height="16px" src="/img-8.png" />
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
                    width: "31.967493584260115%",
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
                  <MenuItem value={1}>Aruba</MenuItem>
                </TextField>
                <TextField
                  className="link2"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-8.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24px" }}
                      >
                        <img width="16px" height="16px" src="/img-9.png" />
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
                    width: "31.967493584260115%",
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
                  <MenuItem value={1}>Australia</MenuItem>
                </TextField>
              </div>
              <div className="link-group">
                <TextField
                  className="link3"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-9.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24px" }}
                      >
                        <img width="16px" height="16px" src="/img-10.png" />
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
                    width: "31.967493584260115%",
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
                  <MenuItem value={1}>Austria</MenuItem>
                </TextField>
                <div className="link4">
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
                        placeholder: "Azerbaijan",
                      },
                      openPickerIcon: {
                        component: () => (
                          <img
                            width="36px"
                            height="36px"
                            src="/border-10.png"
                          />
                        ),
                      },
                    }}
                  />
                </div>
                <TextField
                  className="link5"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-11.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24px" }}
                      >
                        <img width="16px" height="16px" src="/img-12.png" />
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
                    width: "31.967493584260115%",
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
                  <MenuItem value={1}>Bahrain</MenuItem>
                </TextField>
              </div>
              <div className="link-container">
                <TextField
                  className="link6"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-12.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24px" }}
                      >
                        <img width="16px" height="16px" src="/img-13.png" />
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
                    width: "31.967493584260115%",
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
                  <MenuItem value={1}>Bangladesh</MenuItem>
                </TextField>
                <TextField
                  className="link7"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-13.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24.100000000002183px" }}
                      >
                        <img width="16px" height="16px" src="/img-14.png" />
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
                    width: "31.967493584260115%",
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
                  <MenuItem value={1}>Barbados</MenuItem>
                </TextField>
                <TextField
                  className="link8"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-14.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24px" }}
                      >
                        <img width="16px" height="16px" src="/img-15.png" />
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
                    width: "31.967493584260115%",
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
                  <MenuItem value={1}>Belgium</MenuItem>
                </TextField>
              </div>
              <div className="frame-div">
                <TextField
                  className="link9"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-15.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24px" }}
                      >
                        <img width="16px" height="16px" src="/img-16.png" />
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
                    width: "31.967493584260115%",
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
                  <MenuItem value={1}>Benin</MenuItem>
                </TextField>
                <TextField
                  className="link10"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-16.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24.100000000002183px" }}
                      >
                        <img width="16px" height="16px" src="/img-17.png" />
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
                    width: "31.967493584260115%",
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
                  <MenuItem value={1}>Bermuda</MenuItem>
                </TextField>
                <TextField
                  className="link11"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-17.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24px" }}
                      >
                        <img width="16px" height="16px" src="/img-18.png" />
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
                    width: "31.967493584260115%",
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
                  <MenuItem value={1}>Bolivia</MenuItem>
                </TextField>
              </div>
              <div className="link-parent1">
                <TextField
                  className="link12"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-18.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24px" }}
                      >
                        <img width="16px" height="16px" src="/img-19.png" />
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
                    width: "31.967493584260115%",
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
                  <MenuItem value={1}>Botswana</MenuItem>
                </TextField>
                <TextField
                  className="link13"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-19.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24.100000000002183px" }}
                      >
                        <img width="16px" height="16px" src="/img-20.png" />
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
                    width: "31.967493584260115%",
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
                  <MenuItem value={1}>Brazil</MenuItem>
                </TextField>
                <div className="link14">
                  <DatePicker
                    value={linkDateTimePicker1Value}
                    onChange={(newValue) => {
                      setLinkDateTimePicker1Value(newValue);
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
                        placeholder: "Bulgaria",
                      },
                      openPickerIcon: {
                        component: () => (
                          <img
                            width="36px"
                            height="36px"
                            src="/border-20.png"
                          />
                        ),
                      },
                    }}
                  />
                </div>
              </div>
              <div className="link-parent2">
                <div className="link15">
                  <DatePicker
                    value={linkDateTimePicker2Value}
                    onChange={(newValue) => {
                      setLinkDateTimePicker2Value(newValue);
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
                        placeholder: "Cambodia",
                      },
                      openPickerIcon: {
                        component: () => (
                          <img
                            width="36px"
                            height="36px"
                            src="/border-21.png"
                          />
                        ),
                      },
                    }}
                  />
                </div>
                <TextField
                  className="link16"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-22.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24.100000000002183px" }}
                      >
                        <img width="16px" height="16px" src="/img-23.png" />
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
                    width: "31.967493584260115%",
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
                  <MenuItem value={1}>Cameroon</MenuItem>
                </TextField>
                <TextField
                  className="link17"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-23.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24px" }}
                      >
                        <img width="16px" height="16px" src="/img-24.png" />
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
                    width: "31.967493584260115%",
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
                  <MenuItem value={1}>Canada</MenuItem>
                </TextField>
              </div>
              <div className="link-parent3">
                <Link chad="Chad" />
                <TextField
                  className="link18"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-25.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24.100000000002183px" }}
                      >
                        <img width="16px" height="16px" src="/img-26.png" />
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
                    width: "31.967493584260115%",
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
                  <MenuItem value={1}>Chile</MenuItem>
                </TextField>
                <Link chad="China" propMinWidth="280px" propWidth="112.7px" />
              </div>
              <div className="link-parent4">
                <TextField
                  className="link19"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-27.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24px" }}
                      >
                        <img width="16px" height="16px" src="/img-28.png" />
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
                    width: "31.967493584260115%",
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
                  <MenuItem value={1}>Colombia</MenuItem>
                </TextField>
                <div className="link20">
                  <DatePicker
                    value={linkDateTimePicker3Value}
                    onChange={(newValue) => {
                      setLinkDateTimePicker3Value(newValue);
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
                        placeholder: "Costa Rica",
                      },
                      openPickerIcon: {
                        component: () => (
                          <img
                            width="36px"
                            height="36px"
                            src="/border-28.png"
                          />
                        ),
                      },
                    }}
                  />
                </div>
                <div className="link21">
                  <DatePicker
                    value={linkDateTimePicker4Value}
                    onChange={(newValue) => {
                      setLinkDateTimePicker4Value(newValue);
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
                        placeholder: "Croatia",
                      },
                      openPickerIcon: {
                        component: () => (
                          <img
                            width="36px"
                            height="36px"
                            src="/border-29.png"
                          />
                        ),
                      },
                    }}
                  />
                </div>
              </div>
              <div className="link-parent5">
                <TextField
                  className="link22"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-30.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24px" }}
                      >
                        <img width="16px" height="16px" src="/img-31.png" />
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
                    width: "31.967493584260115%",
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
                  <MenuItem value={1}>Cyprus</MenuItem>
                </TextField>
                <div className="link23">
                  <div className="border-parent">
                    <img className="border-icon" alt="" />
                    <div className="czech-republic-wrapper">
                      <div className="czech-republic">Czech Republic</div>
                    </div>
                  </div>
                  <div className="img-wrapper">
                    <img className="img-icon1" alt="" />
                  </div>
                </div>
                <TextField
                  className="link24"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-32.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24px" }}
                      >
                        <img width="16px" height="16px" src="/img-33.png" />
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
                    width: "31.967493584260115%",
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
                  <MenuItem value={1}>Denmark</MenuItem>
                </TextField>
              </div>
              <div className="link-parent6">
                <TextField
                  className="link25"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-33.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24px" }}
                      >
                        <img width="16px" height="16px" src="/img-34.png" />
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
                    width: "31.967493584260115%",
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
                  <MenuItem value={1}>Dominica</MenuItem>
                </TextField>
                <TextField
                  className="link26"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-34.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24.100000000002183px" }}
                      >
                        <img width="16px" height="16px" src="/img-35.png" />
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
                    width: "31.967493584260115%",
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
                  <MenuItem value={1}>Dominican Republic</MenuItem>
                </TextField>
                <TextField
                  className="link27"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-35.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24px" }}
                      >
                        <img width="16px" height="16px" src="/img-36.png" />
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
                    width: "31.967493584260115%",
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
                  <MenuItem value={1}>Ecuador</MenuItem>
                </TextField>
              </div>
              <div className="link-parent7">
                <TextField
                  className="link28"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-36.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24px" }}
                      >
                        <img width="16px" height="16px" src="/img-37.png" />
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
                    width: "31.967493584260115%",
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
                  <MenuItem value={1}>Egypt</MenuItem>
                </TextField>
                <TextField
                  className="link29"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-37.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24.100000000002183px" }}
                      >
                        <img width="16px" height="16px" src="/img-38.png" />
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
                    width: "31.967493584260115%",
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
                  <MenuItem value={1}>El Salvador</MenuItem>
                </TextField>
                <TextField
                  className="link30"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-38.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24px" }}
                      >
                        <img width="16px" height="16px" src="/img-39.png" />
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
                    width: "31.967493584260115%",
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
                  <MenuItem value={1}>Estonia</MenuItem>
                </TextField>
              </div>
              <div className="link-parent8">
                <TextField
                  className="link31"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-39.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24px" }}
                      >
                        <img width="16px" height="16px" src="/img-40.png" />
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
                    width: "31.967493584260115%",
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
                  <MenuItem value={1}>Faroe Islands</MenuItem>
                </TextField>
                <TextField
                  className="link32"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-40.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24.100000000002183px" }}
                      >
                        <img width="16px" height="16px" src="/img-41.png" />
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
                    width: "31.967493584260115%",
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
                  <MenuItem value={1}>Fiji</MenuItem>
                </TextField>
                <TextField
                  className="link33"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-41.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24px" }}
                      >
                        <img width="16px" height="16px" src="/img-42.png" />
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
                    width: "31.967493584260115%",
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
                  <MenuItem value={1}>Finland</MenuItem>
                </TextField>
              </div>
              <div className="link-parent9">
                <div className="link34">
                  <DatePicker
                    value={linkDateTimePicker5Value}
                    onChange={(newValue) => {
                      setLinkDateTimePicker5Value(newValue);
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
                        placeholder: "France",
                      },
                      openPickerIcon: {
                        component: () => (
                          <img
                            width="36px"
                            height="36px"
                            src="/border-42.png"
                          />
                        ),
                      },
                    }}
                  />
                </div>
                <TextField
                  className="link35"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-43.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24.100000000002183px" }}
                      >
                        <img width="16px" height="16px" src="/img-44.png" />
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
                    width: "31.967493584260115%",
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
                  <MenuItem value={1}>French Guiana</MenuItem>
                </TextField>
                <div className="link36">
                  <DatePicker
                    value={linkDateTimePicker6Value}
                    onChange={(newValue) => {
                      setLinkDateTimePicker6Value(newValue);
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
                        placeholder: "Gabon",
                      },
                      openPickerIcon: {
                        component: () => (
                          <img
                            width="36px"
                            height="36px"
                            src="/border-44.png"
                          />
                        ),
                      },
                    }}
                  />
                </div>
              </div>
              <div className="link-parent10">
                <TextField
                  className="link37"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-45.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24px" }}
                      >
                        <img width="16px" height="16px" src="/img-46.png" />
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
                    width: "31.967493584260115%",
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
                  <MenuItem value={1}>Georgia</MenuItem>
                </TextField>
                <TextField
                  className="link38"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-46.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24.100000000002183px" }}
                      >
                        <img width="16px" height="16px" src="/img-47.png" />
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
                    width: "31.967493584260115%",
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
                  <MenuItem value={1}>Germany</MenuItem>
                </TextField>
                <TextField
                  className="link39"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-47.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24px" }}
                      >
                        <img width="16px" height="16px" src="/img-48.png" />
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
                    width: "31.967493584260115%",
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
                  <MenuItem value={1}>Ghana</MenuItem>
                </TextField>
              </div>
              <div className="link-parent11">
                <TextField
                  className="link40"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-48.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24px" }}
                      >
                        <img width="16px" height="16px" src="/img-49.png" />
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
                    width: "31.967493584260115%",
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
                  <MenuItem value={1}>Gibraltar</MenuItem>
                </TextField>
                <TextField
                  className="link41"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-49.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24.100000000002183px" }}
                      >
                        <img width="16px" height="16px" src="/img-50.png" />
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
                    width: "31.967493584260115%",
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
                  <MenuItem value={1}>Greece</MenuItem>
                </TextField>
                <TextField
                  className="link42"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-50.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24px" }}
                      >
                        <img width="16px" height="16px" src="/img-51.png" />
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
                    width: "31.967493584260115%",
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
                  <MenuItem value={1}>Grenada</MenuItem>
                </TextField>
              </div>
              <div className="link-parent12">
                <div className="link43">
                  <DatePicker
                    value={linkDateTimePicker7Value}
                    onChange={(newValue) => {
                      setLinkDateTimePicker7Value(newValue);
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
                        placeholder: "Guadeloupe",
                      },
                      openPickerIcon: {
                        component: () => (
                          <img
                            width="36px"
                            height="36px"
                            src="/border-51.png"
                          />
                        ),
                      },
                    }}
                  />
                </div>
                <TextField
                  className="link44"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-52.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24.100000000002183px" }}
                      >
                        <img width="16px" height="16px" src="/img-53.png" />
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
                    width: "31.967493584260115%",
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
                  <MenuItem value={1}>Guatemala</MenuItem>
                </TextField>
                <TextField
                  className="link45"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-53.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24px" }}
                      >
                        <img width="16px" height="16px" src="/img-54.png" />
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
                    width: "31.967493584260115%",
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
                  <MenuItem value={1}>Guernsey</MenuItem>
                </TextField>
              </div>
              <div className="link-parent13">
                <TextField
                  className="link46"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-54.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24px" }}
                      >
                        <img width="16px" height="16px" src="/img-55.png" />
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
                    width: "31.967493584260115%",
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
                  <MenuItem value={1}>Guinea</MenuItem>
                </TextField>
                <div className="link47">
                  <div className="border-group">
                    <img
                      className="border-icon1"
                      alt=""
                      src="/border-55@2x.png"
                    />
                    <div className="guinea-bissau-wrapper">
                      <div className="guinea-bissau">Guinea-Bissau</div>
                    </div>
                  </div>
                  <div className="img-container">
                    <img className="img-icon2" alt="" src="/img-7@2x.png" />
                  </div>
                </div>
                <div className="link48">
                  <div className="border-container">
                    <img
                      className="border-icon2"
                      alt=""
                      src="/border-56@2x.png"
                    />
                    <div className="guyana-wrapper">
                      <div className="guyana">Guyana</div>
                    </div>
                  </div>
                  <div className="img-frame">
                    <img className="img-icon3" alt="" src="/img-3@2x.png" />
                  </div>
                </div>
              </div>
              <FrameComponent7
                border="/border-59@2x.png"
                hongKong="Hong Kong"
              />
              <div className="link-parent14">
                <div className="link49">
                  <DatePicker
                    value={linkDateTimePicker8Value}
                    onChange={(newValue) => {
                      setLinkDateTimePicker8Value(newValue);
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
                        placeholder: "Hungary",
                      },
                      openPickerIcon: {
                        component: () => (
                          <img
                            width="36px"
                            height="36px"
                            src="/border-60.png"
                          />
                        ),
                      },
                    }}
                  />
                </div>
                <TextField
                  className="link50"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-61.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24.100000000002183px" }}
                      >
                        <img width="16px" height="16px" src="/img-62.png" />
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
                    width: "31.967493584260115%",
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
                  <MenuItem value={1}>Iceland</MenuItem>
                </TextField>
                <TextField
                  className="link51"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-62.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24px" }}
                      >
                        <img width="16px" height="16px" src="/img-63.png" />
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
                    width: "31.967493584260115%",
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
                  <MenuItem value={1}>India</MenuItem>
                </TextField>
              </div>
              <div className="link-parent15">
                <TextField
                  className="link52"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-63.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24px" }}
                      >
                        <img width="16px" height="16px" src="/img-64.png" />
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
                    width: "31.967493584260115%",
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
                  <MenuItem value={1}>Indonesia</MenuItem>
                </TextField>
                <div className="link53">
                  <div className="border-parent1">
                    <img
                      className="border-icon3"
                      alt=""
                      src="/border-64@2x.png"
                    />
                    <div className="iraq-wrapper">
                      <div className="iraq">Iraq</div>
                    </div>
                  </div>
                  <div className="img-wrapper1">
                    <img className="img-icon4" alt="" src="/img-7@2x.png" />
                  </div>
                </div>
                <TextField
                  className="link54"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-65.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24px" }}
                      >
                        <img width="16px" height="16px" src="/img-66.png" />
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
                    width: "31.967493584260115%",
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
                  <MenuItem value={1}>Ireland</MenuItem>
                </TextField>
              </div>
              <div className="link-parent16">
                <TextField
                  className="link55"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-66.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24px" }}
                      >
                        <img width="16px" height="16px" src="/img-67.png" />
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
                    width: "31.967493584260115%",
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
                  <MenuItem value={1}>Isle of Man</MenuItem>
                </TextField>
                <TextField
                  className="link56"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-67.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24.100000000002183px" }}
                      >
                        <img width="16px" height="16px" src="/img-68.png" />
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
                    width: "31.967493584260115%",
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
                  <MenuItem value={1}>Israel</MenuItem>
                </TextField>
                <TextField
                  className="link57"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-68.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24px" }}
                      >
                        <img width="16px" height="16px" src="/img-69.png" />
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
                    width: "31.967493584260115%",
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
                  <MenuItem value={1}>Italy</MenuItem>
                </TextField>
              </div>
              <div className="link-parent17">
                <TextField
                  className="link58"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-69.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24px" }}
                      >
                        <img width="16px" height="16px" src="/img-70.png" />
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
                    width: "31.967493584260115%",
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
                  <MenuItem value={1}>Jamaica</MenuItem>
                </TextField>
                <TextField
                  className="link59"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-70.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24.100000000002183px" }}
                      >
                        <img width="16px" height="16px" src="/img-71.png" />
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
                    width: "31.967493584260115%",
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
                  <MenuItem value={1}>Japan</MenuItem>
                </TextField>
                <TextField
                  className="link60"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-71.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24px" }}
                      >
                        <img width="16px" height="16px" src="/img-72.png" />
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
                    width: "31.967493584260115%",
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
                  <MenuItem value={1}>Jersey</MenuItem>
                </TextField>
              </div>
              <div className="link-parent18">
                <TextField
                  className="link61"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-72.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24px" }}
                      >
                        <img width="16px" height="16px" src="/img-73.png" />
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
                    width: "31.967493584260115%",
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
                  <MenuItem value={1}>Jordan</MenuItem>
                </TextField>
                <TextField
                  className="link62"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-73.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24.100000000002183px" }}
                      >
                        <img width="16px" height="16px" src="/img-74.png" />
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
                    width: "31.967493584260115%",
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
                  <MenuItem value={1}>Kazakhstan</MenuItem>
                </TextField>
                <TextField
                  className="link63"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-74.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24px" }}
                      >
                        <img width="16px" height="16px" src="/img-75.png" />
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
                    width: "31.967493584260115%",
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
                  <MenuItem value={1}>Kenya</MenuItem>
                </TextField>
              </div>
              <div className="link-parent19">
                <TextField
                  className="link64"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-75.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24px" }}
                      >
                        <img width="16px" height="16px" src="/img-76.png" />
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
                    width: "31.967493584260115%",
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
                  <MenuItem value={1}>Kuwait</MenuItem>
                </TextField>
                <TextField
                  className="link65"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-76.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24.100000000002183px" }}
                      >
                        <img width="16px" height="16px" src="/img-77.png" />
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
                    width: "31.967493584260115%",
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
                  <MenuItem value={1}>Kyrgyzstan</MenuItem>
                </TextField>
                <TextField
                  className="link66"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-77.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24px" }}
                      >
                        <img width="16px" height="16px" src="/img-78.png" />
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
                    width: "31.967493584260115%",
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
                  <MenuItem value={1}>Latvia</MenuItem>
                </TextField>
              </div>
              <div className="link-parent20">
                <TextField
                  className="link67"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-78.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24px" }}
                      >
                        <img width="16px" height="16px" src="/img-79.png" />
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
                    width: "31.967493584260115%",
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
                  <MenuItem value={1}>Lesotho</MenuItem>
                </TextField>
                <div className="link68">
                  <div className="border-parent2">
                    <img
                      className="border-icon4"
                      alt=""
                      src="/border-79@2x.png"
                    />
                    <div className="liberia-wrapper">
                      <div className="liberia">Liberia</div>
                    </div>
                  </div>
                  <div className="img-wrapper2">
                    <img className="img-icon5" alt="" src="/img-7@2x.png" />
                  </div>
                </div>
                <TextField
                  className="link69"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-80.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24px" }}
                      >
                        <img width="16px" height="16px" src="/img-81.png" />
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
                    width: "31.967493584260115%",
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
                  <MenuItem value={1}>Liechtenstein</MenuItem>
                </TextField>
              </div>
              <FrameComponent6 border="/border-83@2x.png" macao="Macao" />
              <div className="link-parent21">
                <TextField
                  className="link70"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-84.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24px" }}
                      >
                        <img width="16px" height="16px" src="/img-85.png" />
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
                    width: "31.967493584260115%",
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
                  <MenuItem value={1}>Madagascar</MenuItem>
                </TextField>
                <TextField
                  className="link71"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-85.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24.100000000002183px" }}
                      >
                        <img width="16px" height="16px" src="/img-86.png" />
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
                    width: "31.967493584260115%",
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
                  <MenuItem value={1}>Malawi</MenuItem>
                </TextField>
                <TextField
                  className="link72"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-86.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24px" }}
                      >
                        <img width="16px" height="16px" src="/img-87.png" />
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
                    width: "31.967493584260115%",
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
              </div>
              <div className="link-parent22">
                <TextField
                  className="link73"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-87.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24px" }}
                      >
                        <img width="16px" height="16px" src="/img-88.png" />
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
                    width: "31.967493584260115%",
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
                  <MenuItem value={1}>Malta</MenuItem>
                </TextField>
                <div className="link74">
                  <DatePicker
                    value={linkDateTimePicker9Value}
                    onChange={(newValue) => {
                      setLinkDateTimePicker9Value(newValue);
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
                        placeholder: "Martinique",
                      },
                      openPickerIcon: {
                        component: () => (
                          <img
                            width="36px"
                            height="36px"
                            src="/border-88.png"
                          />
                        ),
                      },
                    }}
                  />
                </div>
                <TextField
                  className="link75"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-89.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24px" }}
                      >
                        <img width="16px" height="16px" src="/img-90.png" />
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
                    width: "31.967493584260115%",
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
                  <MenuItem value={1}>Mauritius</MenuItem>
                </TextField>
              </div>
              <FrameComponent6
                border="/border-92@2x.png"
                macao="Monaco"
                propDebugCommit="unset"
                propMinWidth="82px"
                propDebugCommit1="unset"
              />
              <FrameComponent8
                border="/border-95@2x.png"
                algeria="Montserrat"
                propWidth="162.6px"
                propDebugCommit="unset"
                propFlex="1"
                propDisplay="unset"
                propMinWidth="unset"
                propAlignSelf="stretch"
                propDebugCommit1="unset"
              />
              <div className="link-parent23">
                <TextField
                  className="link76"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-96.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24px" }}
                      >
                        <img width="16px" height="16px" src="/img-97.png" />
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
                    width: "31.967493584260115%",
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
                  <MenuItem value={1}>Morocco</MenuItem>
                </TextField>
                <div className="link77">
                  <div className="border-parent3">
                    <img
                      className="border-icon5"
                      alt=""
                      src="/border-97@2x.png"
                    />
                    <div className="mozambique-wrapper">
                      <div className="mozambique">Mozambique</div>
                    </div>
                  </div>
                  <div className="img-wrapper3">
                    <img className="img-icon6" alt="" src="/img-7@2x.png" />
                  </div>
                </div>
                <div className="link78">
                  <div className="border-parent4">
                    <img
                      className="border-icon6"
                      alt=""
                      src="/border-98@2x.png"
                    />
                    <div className="nauru-wrapper">
                      <div className="nauru">Nauru</div>
                    </div>
                  </div>
                  <div className="img-wrapper4">
                    <img className="img-icon7" alt="" src="/img-3@2x.png" />
                  </div>
                </div>
              </div>
              <FrameComponent7
                border="/border-101@2x.png"
                hongKong="Nicaragua"
                propWidth="159px"
              />
              <FrameComponent8
                border="/border-104@2x.png"
                algeria="Norway"
                propWidth="unset"
                propDebugCommit="unset"
                propFlex="unset"
                propDisplay="inline-block"
                propMinWidth="76.9px"
                propAlignSelf="unset"
                propDebugCommit1="unset"
              />
              <div className="link-parent24">
                <div className="link79">
                  <DatePicker
                    value={linkDateTimePicker10Value}
                    onChange={(newValue) => {
                      setLinkDateTimePicker10Value(newValue);
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
                        placeholder: "Oman",
                      },
                      openPickerIcon: {
                        component: () => (
                          <img
                            width="36px"
                            height="36px"
                            src="/border-105.png"
                          />
                        ),
                      },
                    }}
                  />
                </div>
                <TextField
                  className="link80"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-106.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24.100000000002183px" }}
                      >
                        <img width="16px" height="16px" src="/img-107.png" />
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
                    width: "31.967493584260115%",
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
                  <MenuItem value={1}>Pakistan</MenuItem>
                </TextField>
                <TextField
                  className="link81"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-107.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24px" }}
                      >
                        <img width="16px" height="16px" src="/img-108.png" />
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
                    width: "31.967493584260115%",
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
                  <MenuItem value={1}>Panama</MenuItem>
                </TextField>
              </div>
              <div className="link-parent25">
                <TextField
                  className="link82"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-108.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24px" }}
                      >
                        <img width="16px" height="16px" src="/img-109.png" />
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
                    width: "31.967493584260115%",
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
                  <MenuItem value={1}>Papua New Guinea</MenuItem>
                </TextField>
                <div className="link83">
                  <div className="border-parent5">
                    <img
                      className="border-icon7"
                      alt=""
                      src="/border-109@2x.png"
                    />
                    <div className="paraguay-wrapper">
                      <div className="paraguay">Paraguay</div>
                    </div>
                  </div>
                  <div className="img-wrapper5">
                    <img className="img-icon8" alt="" src="/img-7@2x.png" />
                  </div>
                </div>
                <div className="link84">
                  <div className="border-parent6">
                    <img
                      className="border-icon8"
                      alt=""
                      src="/border-110@2x.png"
                    />
                    <div className="peru-wrapper">
                      <div className="peru">Peru</div>
                    </div>
                  </div>
                  <div className="img-wrapper6">
                    <img className="img-icon9" alt="" src="/img-3@2x.png" />
                  </div>
                </div>
              </div>
              <div className="link-parent26">
                <Link
                  chad="Philippines"
                  propMinWidth="177px"
                  propWidth="161.5px"
                />
                <div className="link85">
                  <div className="border-parent7">
                    <img
                      className="border-icon9"
                      alt=""
                      src="/border-112@2x.png"
                    />
                    <div className="poland-wrapper">
                      <div className="poland">Poland</div>
                    </div>
                  </div>
                  <div className="img-wrapper7">
                    <img className="img-icon10" alt="" src="/img-7@2x.png" />
                  </div>
                </div>
                <div className="link86">
                  <div className="border-parent8">
                    <img
                      className="border-icon10"
                      alt=""
                      src="/border-113@2x.png"
                    />
                    <div className="portugal-wrapper">
                      <div className="portugal">Portugal</div>
                    </div>
                  </div>
                  <div className="img-wrapper8">
                    <img className="img-icon11" alt="" src="/img-3@2x.png" />
                  </div>
                </div>
              </div>
              <FrameComponent6
                border="/border-116@2x.png"
                macao="Réunion"
                propDebugCommit="unset"
                propMinWidth="82.3px"
                propDebugCommit1="unset"
              />
              <div className="frame-container">
                <div className="link-parent27">
                  <TextField
                    className="link87"
                    variant="standard"
                    select
                    value={1}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment
                          position="start"
                          style={{ marginLeft: "24px", marginRight: "16px" }}
                        >
                          <img
                            width="36px"
                            height="36px"
                            src="/border-117.png"
                          />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment
                          position="end"
                          style={{ marginRight: "24px" }}
                        >
                          <img width="16px" height="16px" src="/img-118.png" />
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
                      width: "100%",
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
                    <MenuItem value={1}>Romania</MenuItem>
                  </TextField>
                  <div className="link88">
                    <div className="frame-parent1">
                      <div className="border-wrapper">
                        <img
                          className="border-icon11"
                          alt=""
                          src="/border-118@2x.png"
                        />
                      </div>
                      <div className="saint-martin-french-container">
                        <p className="saint-martin-french">
                          Saint Martin (French
                        </p>
                        <p className="part">part)</p>
                      </div>
                    </div>
                    <div className="img-wrapper9">
                      <img className="img-icon12" alt="" src="/img-8@2x.png" />
                    </div>
                  </div>
                </div>
                <div className="frame-parent2">
                  <div className="link-parent28">
                    <div className="link89">
                      <DatePicker
                        value={linkDateTimePicker11Value}
                        onChange={(newValue) => {
                          setLinkDateTimePicker11Value(newValue);
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
                            placeholder: "Rwanda",
                          },
                          openPickerIcon: {
                            component: () => (
                              <img
                                width="36px"
                                height="36px"
                                src="/border-119.png"
                              />
                            ),
                          },
                        }}
                      />
                    </div>
                    <div className="link90">
                      <div className="border-parent9">
                        <img
                          className="border-icon12"
                          alt=""
                          src="/border-116@2x.png"
                        />
                        <div className="saint-barthlemy-wrapper">
                          <div className="saint-barthlemy">
                            Saint Barthélemy
                          </div>
                        </div>
                      </div>
                      <div className="img-wrapper10">
                        <img
                          className="img-icon13"
                          alt=""
                          src="/img-3@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="link-parent29">
                    <TextField
                      className="link91"
                      variant="standard"
                      select
                      value={1}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment
                            position="start"
                            style={{ marginLeft: "24px", marginRight: "16px" }}
                          >
                            <img
                              width="36px"
                              height="36px"
                              src="/border-121.png"
                            />
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment
                            position="end"
                            style={{ marginRight: "24.100000000002183px" }}
                          >
                            <img
                              width="16px"
                              height="16px"
                              src="/img-122.png"
                            />
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
                        width: "48.45066770387671%",
                        height: "108px",
                        "& .MuiInput-underline:before": {
                          borderBottom: "none",
                        },
                        "& .MuiInput-underline:after": { borderBottom: "none" },
                        "& .MuiInput-underline:hover:not(.Mui-disabled):before":
                          { borderBottom: "none" },
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
                      <MenuItem value={1}>Samoa</MenuItem>
                    </TextField>
                    <div className="link92">
                      <div className="border-parent10">
                        <img
                          className="border-icon13"
                          alt=""
                          src="/border-122@2x.png"
                        />
                        <div className="saudi-arabia-wrapper">
                          <div className="saudi-arabia">Saudi Arabia</div>
                        </div>
                      </div>
                      <div className="img-wrapper11">
                        <img
                          className="img-icon14"
                          alt=""
                          src="/img-3@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="link-parent30">
                <TextField
                  className="link93"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-123.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24px" }}
                      >
                        <img width="16px" height="16px" src="/img-124.png" />
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
                    width: "31.967493584260115%",
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
                  <MenuItem value={1}>Serbia</MenuItem>
                </TextField>
                <div className="link94">
                  <div className="border-parent11">
                    <img
                      className="border-icon14"
                      alt=""
                      src="/border-124@2x.png"
                    />
                    <div className="seychelles-wrapper">
                      <div className="seychelles">Seychelles</div>
                    </div>
                  </div>
                  <div className="img-wrapper12">
                    <img className="img-icon15" alt="" src="/img-7@2x.png" />
                  </div>
                </div>
                <div className="link95">
                  <div className="border-parent12">
                    <img
                      className="border-icon15"
                      alt=""
                      src="/border-125@2x.png"
                    />
                    <div className="singapore-wrapper">
                      <div className="singapore">Singapore</div>
                    </div>
                  </div>
                  <div className="img-wrapper13">
                    <img className="img-icon16" alt="" src="/img-3@2x.png" />
                  </div>
                </div>
              </div>
              <div className="link-parent31">
                <div className="link96">
                  <DatePicker
                    value={linkDateTimePicker12Value}
                    onChange={(newValue) => {
                      setLinkDateTimePicker12Value(newValue);
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
                        placeholder: "Slovakia",
                      },
                      openPickerIcon: {
                        component: () => (
                          <img
                            width="36px"
                            height="36px"
                            src="/border-126.png"
                          />
                        ),
                      },
                    }}
                  />
                </div>
                <div className="link97">
                  <div className="border-parent13">
                    <img
                      className="border-icon16"
                      alt=""
                      src="/border-127@2x.png"
                    />
                    <div className="slovenia-wrapper">
                      <div className="slovenia">Slovenia</div>
                    </div>
                  </div>
                  <div className="img-wrapper14">
                    <img className="img-icon17" alt="" src="/img-7@2x.png" />
                  </div>
                </div>
                <div className="link98">
                  <div className="border-parent14">
                    <img
                      className="border-icon17"
                      alt=""
                      src="/border-128@2x.png"
                    />
                    <div className="south-africa-wrapper">
                      <div className="south-africa">South Africa</div>
                    </div>
                  </div>
                  <div className="img-wrapper15">
                    <img className="img-icon18" alt="" src="/img-3@2x.png" />
                  </div>
                </div>
              </div>
              <div className="link-parent32">
                <TextField
                  className="link99"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-129.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24px" }}
                      >
                        <img width="16px" height="16px" src="/img-130.png" />
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
                    width: "31.967493584260115%",
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
                  <MenuItem value={1}>South Korea</MenuItem>
                </TextField>
                <div className="link100">
                  <div className="border-parent15">
                    <img
                      className="border-icon18"
                      alt=""
                      src="/border-130@2x.png"
                    />
                    <div className="south-sudan-wrapper">
                      <div className="south-sudan">South Sudan</div>
                    </div>
                  </div>
                  <div className="img-wrapper16">
                    <img className="img-icon19" alt="" src="/img-7@2x.png" />
                  </div>
                </div>
                <div className="link101">
                  <div className="border-parent16">
                    <img
                      className="border-icon19"
                      alt=""
                      src="/border-131@2x.png"
                    />
                    <div className="spain-wrapper">
                      <div className="spain">Spain</div>
                    </div>
                  </div>
                  <div className="img-wrapper17">
                    <img className="img-icon20" alt="" src="/img-3@2x.png" />
                  </div>
                </div>
                <TextField
                  className="link102"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-132.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24px" }}
                      >
                        <img width="16px" height="16px" src="/img-133.png" />
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
                    width: "31.967493584260115%",
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
                  <MenuItem value={1}>Sri Lanka</MenuItem>
                </TextField>
                <div className="link103">
                  <div className="border-parent17">
                    <img
                      className="border-icon20"
                      alt=""
                      src="/border-133@2x.png"
                    />
                    <div className="sudan-wrapper">
                      <div className="sudan">Sudan</div>
                    </div>
                  </div>
                  <div className="img-wrapper18">
                    <img className="img-icon21" alt="" src="/img-7@2x.png" />
                  </div>
                </div>
                <div className="link104">
                  <div className="border-parent18">
                    <img
                      className="border-icon21"
                      alt=""
                      src="/border-134@2x.png"
                    />
                    <div className="suriname-wrapper">
                      <div className="suriname">Suriname</div>
                    </div>
                  </div>
                  <div className="img-wrapper19">
                    <img className="img-icon22" alt="" src="/img-3@2x.png" />
                  </div>
                </div>
                <TextField
                  className="link105"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-135.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24px" }}
                      >
                        <img width="16px" height="16px" src="/img-136.png" />
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
                    width: "31.967493584260115%",
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
                  <MenuItem value={1}>Sweden</MenuItem>
                </TextField>
                <div className="link106">
                  <div className="border-parent19">
                    <img
                      className="border-icon22"
                      alt=""
                      src="/border-136@2x.png"
                    />
                    <div className="switzerland-wrapper">
                      <div className="switzerland">Switzerland</div>
                    </div>
                  </div>
                  <div className="img-wrapper20">
                    <img className="img-icon23" alt="" src="/img-7@2x.png" />
                  </div>
                </div>
                <TextField
                  className="link107"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-137.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24px" }}
                      >
                        <img width="16px" height="16px" src="/img-138.png" />
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
                    width: "31.967493584260115%",
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
                  <MenuItem value={1}>Taiwan</MenuItem>
                </TextField>
                <div className="link108">
                  <DatePicker
                    value={linkDateTimePicker13Value}
                    onChange={(newValue) => {
                      setLinkDateTimePicker13Value(newValue);
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
                          <img
                            width="36px"
                            height="36px"
                            src="/border-138.png"
                          />
                        ),
                      },
                    }}
                  />
                </div>
                <div className="link109">
                  <div className="border-parent20">
                    <img
                      className="border-icon23"
                      alt=""
                      src="/border-139@2x.png"
                    />
                    <div className="tunisia-wrapper">
                      <div className="tunisia">Tunisia</div>
                    </div>
                  </div>
                  <div className="img-wrapper21">
                    <img className="img-icon24" alt="" src="/img-7@2x.png" />
                  </div>
                </div>
                <div className="link110">
                  <div className="border-parent21">
                    <img
                      className="border-icon24"
                      alt=""
                      src="/border-140@2x.png"
                    />
                    <div className="turkey-wrapper">
                      <div className="turkey">Turkey</div>
                    </div>
                  </div>
                  <div className="img-wrapper22">
                    <img className="img-icon25" alt="" src="/img-3@2x.png" />
                  </div>
                </div>
                <TextField
                  className="link111"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-141.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24px" }}
                      >
                        <img width="16px" height="16px" src="/img-142.png" />
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
                    width: "31.967493584260115%",
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
                  <MenuItem value={1}>Uganda</MenuItem>
                </TextField>
                <div className="link112" onClick={onLinkContainer7Click}>
                  <div className="border-parent22">
                    <img
                      className="border-icon25"
                      alt=""
                      src="/border-142@2x.png"
                    />
                    <div className="ukraine-wrapper">
                      <a
                        className="ukraine"
                        href="https://www.figma.com/design/ChO0euFDvPgaehWUhty9Gg?node-id=1-5409"
                        target="_blank"
                      >
                        Ukraine
                      </a>
                    </div>
                  </div>
                  <div className="img-wrapper23">
                    <img className="img-icon26" alt="" src="/img-7@2x.png" />
                  </div>
                </div>
                <div className="link113">
                  <div className="border-parent23">
                    <img
                      className="border-icon26"
                      alt=""
                      src="/border-143@2x.png"
                    />
                    <div className="united-arab-emirates-wrapper">
                      <div className="united-arab-emirates">
                        United Arab Emirates
                      </div>
                    </div>
                  </div>
                  <div className="img-wrapper24">
                    <img className="img-icon27" alt="" src="/img-3@2x.png" />
                  </div>
                </div>
                <TextField
                  className="link114"
                  variant="standard"
                  select
                  value={1}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        style={{ marginLeft: "24px", marginRight: "16px" }}
                      >
                        <img width="36px" height="36px" src="/border-144.png" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ marginRight: "24px" }}
                      >
                        <img width="16px" height="16px" src="/img-145.png" />
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
                    width: "31.967493584260115%",
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
                  onClick={onLink73Click}
                >
                  <MenuItem value={1}>United Kingdom</MenuItem>
                </TextField>
                <div className="link115" onClick={onLinkContainer9Click}>
                  <div className="border-parent24">
                    <img
                      className="border-icon27"
                      alt=""
                      src="/border-145@2x.png"
                    />
                    <div className="united-states-wrapper">
                      <a
                        className="united-states"
                        href="https://www.figma.com/design/ChO0euFDvPgaehWUhty9Gg?node-id=1-3518"
                        target="_blank"
                      >
                        United States
                      </a>
                    </div>
                  </div>
                  <div className="img-wrapper25">
                    <img className="img-icon28" alt="" src="/img-7@2x.png" />
                  </div>
                </div>
                <div className="link116" onClick={onLinkContainer10Click}>
                  <div className="border-parent25">
                    <img
                      className="border-icon28"
                      alt=""
                      src="/border-146@2x.png"
                    />
                    <div className="uruguay-wrapper">
                      <a
                        className="uruguay"
                        href="https://www.figma.com/design/ChO0euFDvPgaehWUhty9Gg?node-id=1-6312"
                        target="_blank"
                      >
                        Uruguay
                      </a>
                    </div>
                  </div>
                  <div className="img-wrapper26">
                    <img className="img-icon29" alt="" src="/img-3@2x.png" />
                  </div>
                </div>
              </div>
              <div className="frame-parent3">
                <div className="frame-parent4">
                  <div className="link-parent33">
                    <div className="link117">
                      <div className="border-parent26">
                        <img
                          className="border-icon29"
                          alt=""
                          src="/border-147@2x.png"
                        />
                        <div className="uzbekistan-wrapper">
                          <div className="uzbekistan">Uzbekistan</div>
                        </div>
                      </div>
                      <div className="img-wrapper27">
                        <img
                          className="img-icon30"
                          alt=""
                          src="/img-8@2x.png"
                        />
                      </div>
                    </div>
                    <div className="link118">
                      <div className="border-parent27">
                        <img
                          className="border-icon30"
                          alt=""
                          src="/border-148@2x.png"
                        />
                        <div className="zambia-wrapper">
                          <div className="zambia">Zambia</div>
                        </div>
                      </div>
                      <div className="img-wrapper28">
                        <img
                          className="img-icon31"
                          alt=""
                          src="/img-8@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="link119">
                    <div className="border-parent28">
                      <img
                        className="border-icon31"
                        alt=""
                        src="/border-149@2x.png"
                      />
                      <div className="vanuatu-wrapper">
                        <div className="vanuatu">Vanuatu</div>
                      </div>
                    </div>
                    <div className="img-wrapper29">
                      <img className="img-icon32" alt="" src="/img-7@2x.png" />
                    </div>
                  </div>
                </div>
                <div className="link120">
                  <div className="border-parent29">
                    <img
                      className="border-icon32"
                      alt=""
                      src="/border-150@2x.png"
                    />
                    <div className="vietnam-wrapper">
                      <div className="vietnam">Vietnam</div>
                    </div>
                  </div>
                  <div className="img-wrapper30">
                    <img className="img-icon33" alt="" src="/img-3@2x.png" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="footer">
          <div className="frame-parent5">
            <div className="image-6-layerstyle-parent">
              <img
                className="image-6-layerstyle-icon"
                alt=""
                src="/image-6-layerstyle.svg"
              />
              <div className="frame-wrapper">
                <div className="frame-parent6">
                  <div className="horizon-wrapper">
                    <div className="horizon">Horizon</div>
                  </div>
                  <div className="sim">SIM</div>
                </div>
              </div>
            </div>
            <div className="frame-wrapper1">
              <div className="link-destinations-parent">
                <a
                  className="link-destinations"
                  href="https://www.figma.com/design/ChO0euFDvPgaehWUhty9Gg?node-id=1-470"
                  target="_blank"
                >
                  Destinations
                </a>
                <a
                  className="link-what"
                  href="https://www.figma.com/design/ChO0euFDvPgaehWUhty9Gg?node-id=1-2421"
                  target="_blank"
                >
                  What is an eSIM
                </a>
                <a
                  className="link-about"
                  href="https://www.figma.com/design/ChO0euFDvPgaehWUhty9Gg?node-id=1-2942"
                  target="_blank"
                >
                  About Us
                </a>
                <div className="link-help">Help center</div>
                <a
                  className="link-download"
                  href="https://www.figma.com/design/ChO0euFDvPgaehWUhty9Gg?node-id=1-3096"
                  target="_blank"
                >
                  Download App
                </a>
                <div className="link-become">Become affiliate</div>
              </div>
            </div>
          </div>
          <div className="separator-parent">
            <div className="separator" />
            <div className="frame-parent7">
              <div className="frame-wrapper2">
                <div className="all-rights-reserved-parent">
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
                  src="/link--picture--applesvg@2x.png"
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
      </div>
    </LocalizationProvider>
  );
};

export default AllDestinations;
