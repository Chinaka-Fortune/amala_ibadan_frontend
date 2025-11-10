import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";
import "../component/GeneralStyles.css";
// import amalahero from "../images/amala1.jpg";
import amalaEfo from '../images/efo-riro.jpg'
const LandingPage = () => {
  return (
    <div className="container-fluid  px-md-5 landpage d-flex a">
      <div className="row align-items-center">
        <div className="col-lg-6 text-cente text-lg-start">
          <h1 className="display-4 fw-bolder  ourLandinAnimate2">
            You Haven't Tasted Amala Ibadan?
          </h1>
          <p className=" Animated sliderInLeft mb-4 pb-2 scaleAnime display-6 fst-italic text-muted">
            Trust me, you haven't tasted real meal!
          </p>

          <NavLink className=" text-decoration-none rounded-pill GeneralBackground py-sm-3 px-sm-5 sliderInLeft fw-bolder fs-5 text-white">
            Book a Table
          </NavLink>
        </div>
        <div className="col-lg-6 text-center text-lg-end overflow-hidden">
          <img
            src={amalaEfo}
            alt="imala ibadan dishes"
            className="img-fluid rounded-pill border-0"
            style={{width:85 + "%"}}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
