import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import AllDestinations from "./pages/AllDestinations";
import HowItWorks from "./pages/HowItWorks";
import AboutUs from "./pages/AboutUs";
import HowToWork from "./pages/HowToWork";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/all-destinations":
        title = "";
        metaDescription = "";
        break;
      case "/how-it-works":
        title = "";
        metaDescription = "";
        break;
      case "/about-us":
        title = "";
        metaDescription = "";
        break;
      case "/how-to-work":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/all-destinations" element={<AllDestinations />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/how-to-work" element={<HowToWork />} />
    </Routes>
  );
}
export default App;
