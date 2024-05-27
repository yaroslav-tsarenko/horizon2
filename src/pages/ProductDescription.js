import Header from "../components/Header";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import Footer from "../components/Footer";
import "./ProductDescription.css";

const ProductDescription = () => {
  return (
    <div className="product-description">
      <img className="border-icon" alt="" src="/border@2x.png" />
      <div className="button">
        <img className="img-icon" alt="" src="/img.svg" />
        <div className="check-compatibility">Check compatibility</div>
      </div>
      <Header />
      <FrameComponent5 />
      <FrameComponent4 />
      <section className="product-description-inner">
        <FrameComponent3 picture="/picture@2x.png" />
      </section>
      <FrameComponent1 />
      <FrameComponent />
      <Footer />
    </div>
  );
};

export default ProductDescription;
