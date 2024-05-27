import { Button } from "@mui/material";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import "./SignIn.css";

const SignIn = () => {
  return (
    <div className="sign-in">
      <FrameComponent1 />
      <main className="sign-in-desktop-wrapper">
        <section className="sign-in-desktop">
          <div className="sign-in-desktop-child" />
          <div className="sign-in-desktop-inner">
            <div className="sign-in-parent">
              <img
                className="sign-in1"
                loading="lazy"
                alt=""
                src="/sign-in@2x.png"
              />
              <div className="sign-in2">
                <div className="sign-in-group">
                  <h1 className="sign-in3">Sign in</h1>
                  <div className="sign-in-to">
                    Sign in to your account to see products catered to you
                  </div>
                </div>
                <form className="frame-parent">
                  <div className="username-parent">
                    <div className="username">Username</div>
                    <img className="frame-child" alt="" src="/frame-153.svg" />
                  </div>
                  <div className="password-parent">
                    <div className="password">Password</div>
                    <img className="frame-item" alt="" src="/frame-153-1.svg" />
                  </div>
                  <Button
                    className="button"
                    disableElevation={true}
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#fff",
                      fontSize: "16",
                      background: "#eda619",
                      borderRadius: "4px",
                      "&:hover": { background: "#eda619" },
                    }}
                  >
                    Sign In
                  </Button>
                </form>
                <div className="or-sign-in">or, sign in with</div>
                <div className="frame-group">
                  <img
                    className="frame-inner"
                    loading="lazy"
                    alt=""
                    src="/frame-158.svg"
                  />
                  <img
                    className="frame-icon"
                    loading="lazy"
                    alt=""
                    src="/frame-158.svg"
                  />
                  <img
                    className="frame-child1"
                    loading="lazy"
                    alt=""
                    src="/frame-158.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FrameComponent />
    </div>
  );
};

export default SignIn;
