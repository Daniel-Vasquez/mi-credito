import Navbar from "./components/Navbar";
import Header from "./components/Header";
import FeaturesDesigned from "./components/FeaturesDesigned";
import EasyApi from "./components/EasyApi";
import FlexiblePricing from "./components/FlexiblePricing";
import WorldExperts from "./components/WorldExperts";
import Questions from "./components/Questions";
import Support from "./components/Support";
import Clients from "./components/Clients";
import StartBusiness from "./components/StartBusiness";
import Footer from "./components/Footer";
import imgMain from "./Assets/bg.jpg";
import imgFooter from "./Assets/footer-bg.jpg";

import "./App.css";

function App() {
  return (
    <main className="MainContainer">
      <img
        className="MainContainer_img"
        src={imgMain}
        alt="Background"
        loading="lazy"
      />
      <img
        className="MainContainer_img-footer"
        src={imgFooter}
        alt="Background"
        loading="lazy"
      />
      <div className="MainContainer_app">
        <Navbar />
        <Header />
        <FeaturesDesigned />
        <EasyApi />
        <FlexiblePricing />
        <WorldExperts />
        <Questions />
        <Support />
        <Clients />
        <StartBusiness />
        <Footer />
      </div>
    </main>
  );
}

export default App;
