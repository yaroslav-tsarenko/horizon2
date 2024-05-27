import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Button,
} from "@mui/material";
import "./SignupForm.css";

const SignupForm = ({ className = "" }) => {
  return (
    <div className={`signup-form ${className}`}>
      <img className="sign-in4" loading="lazy" alt="" src="/sign-in1@2x.png" />
      <div className="sign-in5">
        <div className="signup-label">
          <h1 className="sign-up1">Sign up</h1>
          <div className="sign-up-to">
            Sign up to get rewards, and many more
          </div>
        </div>
        <form className="input-fields">
          <div className="name-address-username">
            <TextField
              className="name-address-username-fields"
              placeholder="Your Name"
              variant="outlined"
              sx={{
                "& fieldset": { borderColor: "#d1d1d1" },
                "& .MuiInputBase-root": {
                  height: "40px",
                  backgroundColor: "#fff",
                },
                "& .MuiInputBase-input": { color: "#000" },
              }}
            />
            <TextField
              className="email-country-password"
              placeholder="Email"
              variant="outlined"
              sx={{
                "& fieldset": { borderColor: "#d1d1d1" },
                "& .MuiInputBase-root": {
                  height: "40px",
                  backgroundColor: "#fff",
                },
                "& .MuiInputBase-input": { color: "#000" },
              }}
            />
          </div>
          <div className="name-address-username1">
            <TextField
              className="name-address-username-child"
              placeholder="Address"
              variant="outlined"
              sx={{
                "& fieldset": { borderColor: "#d1d1d1" },
                "& .MuiInputBase-root": {
                  height: "40px",
                  backgroundColor: "#fff",
                },
                "& .MuiInputBase-input": { color: "#000" },
              }}
            />
            <FormControl
              className="parent"
              variant="standard"
              sx={{
                borderColor: "#d1d1d1",
                borderStyle: "SOLID",
                borderTopWidth: "1px",
                borderRightWidth: "1px",
                borderBottomWidth: "1px",
                borderLeftWidth: "1px",
                backgroundColor: "#fff",
                borderRadius: "4px",
                width: "48.902195608782435%",
                height: "40px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "40px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "40px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "40px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "40px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  color: "#000",
                  fontSize: 16,
                  fontWeight: "Regular",
                  fontFamily: "Work Sans",
                  textAlign: "left",
                  p: "0 !important",
                  marginLeft: "11px",
                },
              }}
            >
              <InputLabel color="secondary" />
              <Select
                color="secondary"
                disableUnderline
                displayEmpty
                IconComponent={() => (
                  <img
                    width="16px"
                    height="16px"
                    src="/email-country-password-inputs.svg"
                    style={{ marginRight: "11px" }}
                  />
                )}
              >
                <MenuItem>Country</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
          </div>
          <div className="name-address-username2">
            <div className="username-group">
              <div className="username1">Username</div>
              <img
                className="name-address-username-inputs"
                alt=""
                src="/frame-153-11.svg"
              />
            </div>
            <TextField
              className="name-address-username-item"
              placeholder="Password"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <img width="16px" height="16px" src="/frame-153-2.svg" />
                ),
              }}
              sx={{
                "& fieldset": { borderColor: "#d1d1d1" },
                "& .MuiInputBase-root": {
                  height: "40px",
                  backgroundColor: "#fff",
                  paddingRight: "11px",
                },
                "& .MuiInputBase-input": { color: "#000" },
              }}
            />
          </div>
          <Button
            className="button1"
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              background: "#eda619",
              borderRadius: "4px",
              "&:hover": { background: "#eda619" },
              height: 54,
            }}
          >
            Sign Up
          </Button>
        </form>
        <div className="or-sign-up">or, sign up with</div>
        <div className="social-buttons">
          <img
            className="social-button-placeholders"
            loading="lazy"
            alt=""
            src="/frame-158.svg"
          />
          <img
            className="social-button-placeholders1"
            loading="lazy"
            alt=""
            src="/frame-158.svg"
          />
          <img
            className="social-button-placeholders2"
            loading="lazy"
            alt=""
            src="/frame-158.svg"
          />
        </div>
      </div>
    </div>
  );
};

SignupForm.propTypes = {
  className: PropTypes.string,
};

export default SignupForm;
