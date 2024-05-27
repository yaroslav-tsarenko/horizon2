import { useState, useMemo } from "react";
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
import "./FrameComponent7.css";

const FrameComponent7 = ({ className = "", border, hongKong, propWidth }) => {
  const [linkDateTimePickerValue, setLinkDateTimePickerValue] = useState(null);
  const frameDiv3Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={`link-parent35 ${className}`}>
        <TextField
          className="link134"
          variant="standard"
          select
          value={1}
          InputProps={{
            startAdornment: (
              <InputAdornment
                position="start"
                style={{ marginLeft: "24px", marginRight: "16px" }}
              >
                <img width="36px" height="36px" src="/border-57.png" />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end" style={{ marginRight: "24px" }}>
                <img width="16px" height="16px" src="/img-58.png" />
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
          <MenuItem value={1}>Haiti</MenuItem>
        </TextField>
        <div className="link135">
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
                placeholder: "Honduras",
              },
              openPickerIcon: {
                component: () => (
                  <img width="36px" height="36px" src="/border-58.png" />
                ),
              },
            }}
          />
        </div>
        <div className="link136">
          <div className="border-parent36" style={frameDiv3Style}>
            <img className="border-icon39" alt="" src={border} />
            <div className="hong-kong-wrapper">
              <div className="hong-kong">{hongKong}</div>
            </div>
          </div>
          <div className="img-wrapper37">
            <img className="img-icon42" alt="" src="/img-3@2x.png" />
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

FrameComponent7.propTypes = {
  className: PropTypes.string,
  border: PropTypes.string,
  hongKong: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
};

export default FrameComponent7;
