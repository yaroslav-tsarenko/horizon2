import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent3 from "../components/FrameComponent3";
import Footer from "../components/Footer";
import "./Cart.css";

const Cart = () => {
  return (
    <div className="cart">
      <FrameComponent6 />
      <section className="cart-inner">
        <FrameComponent3 />
      </section>
      <Footer />
    </div>
  );
};

export default Cart;
