import React from "react";
import Header from "./components/header/Header";
import Services from "./components/service/Services";
import "./App.css";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <div className="service">
        <div className="offers">
          <div className="texts">
            <h2 color="black">Service We Offer</h2>
            <p>Discover the digital possibilities for your brand with our comprehensive suite of services.</p>
          </div>
          <div className="arrowbutton">
            <img src="images/img_arrow_down.svg" alt="" />
            <div className="right">
              <img className="rightarrow" src="images/img_arrow_right_gray_900_02.svg" alt="" />
            </div>
          </div>
        </div>

        <Services />
        <Services />
      </div>
      <Footer />
    </div>
  );
};

export default App;
