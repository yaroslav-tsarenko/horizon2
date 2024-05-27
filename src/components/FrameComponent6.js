import { useState, useMemo } from "react";
import {
  TextField,
  Icon,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import "./FrameComponent6.css";

const FrameComponent6 = ({
  className = "",
  border,
  macao,
  propDebugCommit,
  propMinWidth,
  propDebugCommit1,
}) => {
  const [linkDateTimePickerValue, setLinkDateTimePickerValue] = useState(null);
  const borderIcon1Style = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
    };
  }, [propDebugCommit]);

  const macaoStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
      debugCommit: propDebugCommit1,
    };
  }, [propMinWidth, propDebugCommit1]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={`link-parent36 ${className}`}>
        <div className="link137">
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
              "& input::placeholder": { textColor: "#000", fontSize: 20 },
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
                placeholder: "Lithuania",
              },
              openPickerIcon: {
                component: () => (
                  <img width="36px" height="36px" src="/border-81.png" />
                ),
              },
            }}
          />
        </div>
        <TextField
          className="link138"
          variant="standard"
          select
          value={1}
          InputProps={{
            startAdornment: (
              <InputAdornment
                position="start"
                style={{ marginLeft: "24px", marginRight: "16px" }}
              >
                <img width="36px" height="36px" src="/border-82.png" />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment
                position="end"
                style={{ marginRight: "24.100000000002183px" }}
              >
                <img width="16px" height="16px" src="/img-83.png" />
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
          <MenuItem value={1}>Luxembourg</MenuItem>
        </TextField>
        <div className="link139">
          <div className="border-parent37">
            <img
              className="border-icon40"
              alt=""
              src={border}
              style={borderIcon1Style}
            />
            <div className="macao-wrapper">
              <div className="macao" style={macaoStyle}>
                {macao}
              </div>
            </div>
          </div>
          <div className="img-wrapper38">
            <img className="img-icon43" alt="" src="/img-3@2x.png" />
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
  border: PropTypes.string,
  macao: PropTypes.string,

  /** Style props */
  propDebugCommit: PropTypes.any,
  propMinWidth: PropTypes.any,
  propDebugCommit1: PropTypes.any,
};

export default FrameComponent6;
