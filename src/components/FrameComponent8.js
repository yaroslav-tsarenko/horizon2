import { useMemo } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  TextField,
} from "@mui/material";
import "./FrameComponent8.css";

const FrameComponent8 = ({
  className = "",
  border,
  algeria,
  propWidth,
  propDebugCommit,
  propFlex,
  propDisplay,
  propMinWidth,
  propAlignSelf,
  propDebugCommit1,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const borderIconStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
    };
  }, [propDebugCommit]);

  const frameDiv1Style = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const algeriaStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
      alignSelf: propAlignSelf,
      debugCommit: propDebugCommit1,
    };
  }, [propDisplay, propMinWidth, propAlignSelf, propDebugCommit1]);

  return (
    <div className={`link-parent34 ${className}`}>
      <TextField
        className="link130"
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
        <MenuItem value={1}>Afghanistan</MenuItem>
      </TextField>
      <TextField
        className="link131"
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
              style={{ marginRight: "24.100000000002183px" }}
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
        <MenuItem value={1}>Albania</MenuItem>
      </TextField>
      <div className="link132">
        <div className="border-parent34" style={frameDivStyle}>
          <img
            className="border-icon37"
            alt=""
            src={border}
            style={borderIconStyle}
          />
          <div className="algeria-wrapper" style={frameDiv1Style}>
            <div className="algeria" style={algeriaStyle}>
              {algeria}
            </div>
          </div>
        </div>
        <div className="img-wrapper35">
          <img className="img-icon40" alt="" src="/img-3@2x.png" />
        </div>
      </div>
    </div>
  );
};

FrameComponent8.propTypes = {
  className: PropTypes.string,
  border: PropTypes.string,
  algeria: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propDebugCommit: PropTypes.any,
  propFlex: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propDebugCommit1: PropTypes.any,
};

export default FrameComponent8;
