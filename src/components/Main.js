import Header from "./Header";
import FrameComponent4 from "./FrameComponent4";
import PropTypes from "prop-types";
import "./Main.css";

const Main = ({ className = "" }) => {
  return (
    <section className={`main ${className}`}>
      <Header />
      <FrameComponent4 />
    </section>
  );
};

Main.propTypes = {
  className: PropTypes.string,
};

export default Main;
