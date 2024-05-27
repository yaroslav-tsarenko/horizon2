import Main from "../components/Main";
import FrameComponent3 from "../components/FrameComponent3";
import Background from "../components/Background";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Main />
      <FrameComponent3 />
      <section className="background-parent">
        <Background />
        <FrameComponent2 />
      </section>
      <FrameComponent1 />
      <FrameComponent />
    </div>
  );
};

export default Home;
