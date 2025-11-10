import React from "react";
import aboutImage from "../images/garnish.jpeg";
import images1 from "../images/download (2).jpeg";
import "../component/GeneralStyles.css";
import logoImage from "../images/logo2.png";
import ceos from "../images/ceos.jpg";
import amala1 from "../images/amala1.jpg";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-lg-6 ">
            <div className="row g-">
              <div className="col-6">
                <div className="text-start">
                  <img
                    src={aboutImage}
                    alt=""
                    className="img-fluid rounded w-100 ZoomIn wow"
                  />
                </div>
              </div>{" "}
              <div className="col-6 text-start">
                <img src={images1} alt="" className="img-fluid rounded w-100" />
              </div>
            </div>
          </div>

          <div className="col-lg-6 ">
            <h5 className=" generalTextColor text-start fw-normal ourLandinAnimate2">
              About Us
            </h5>
            <p className=" ourLandinAnimate2 fw-bolder logoImageResturantText text-center">
              Welcome To <img src={logoImage} className="logoImageResturant" alt="" />
              Resturant
            </p>
            <p className="mb-4 dCaptionText2Anime">
              Amala Ibadan is a restaurant that brings the rich culinary
              heritage of Ibadan to life. We specialize in serving traditional
              Yoruba meals, with Amala as our star dish. Using the finest
              ingredients and authentic recipes passed down through generations,
              we ensure every meal delivers an unforgettable taste of Ibadan.
              Our passion for food and our deep connection to Yoruba culture
              inspire everything we do. We invite you to experience the warmth
              and flavors of Ibadan, right here at our restaurant.
            </p>

            <div className="row g-4 mb-4 ourLandinAnimate2">
              <div className="col-sm-6">
                <div className="d-flex align-items-center border-start border-5 border-warning px-3">
                  <h1 className="flex-shrink-0 display-5 generalTextColor mb-0">
                    15
                  </h1>
                  <div className="ps-4">
                    <p className="mb-0">Years of</p>
                    <h6 className="text-uppercase mb-0 fw-bolder">
                      Experience
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="d-flex align-items-center border-start border-5 border-warning px-3">
                  <h1 className="flex-shrink-0 display-5 generalTextColor mb-0   ">
                    50
                  </h1>
                  <div className="ps-4">
                    <p className="mb-0">Popular</p>
                    <h6 className="text-uppercase mb-0 fw-bolder">
                      Master Chefs
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row ">
          <div className="d-md-flex align-items-center ">
            <div className="col-md-6 pe-3">
            <h2 className="fw-bolder display-6 scaleAnime">What Drive's Us</h2>
            <h4 className="fw-bolder scaleAnime">
              Driven by Passion, Built on Perseverance
            </h4>
            <p className="fw-bolder text-muted fst-italic scaleAnime">
              Our owners, fueled by passion and unwavering determination,
              transformed a simple idea into a thriving success. Through hard
              work and resilience, they overcame challenges and built a business
              that inspires growth and excellence.
            </p>
          </div>
          <div className="col-md-6 scaleAnime">
            <div className="aboutImgDivs">
              <img src={ceos} alt="" />
            </div>
          </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="d-lg-flex align-items-center bePartanimation">
            <div className="col-lg-6 dCaptionText">
              <img src={amala1} className="img-fluid rounded" alt="" />
            </div>
            <div className="col-lg-6 ps-md-3">
              <h2 className="text-center fw-bolder text-muted mt-3 mt-lg-0 ourLandinAnimate2">
                Why Amala?
              </h2>
              <p>
                Amala is more than just a dish; it’s a cherished staple of
                Yoruba cuisine that embodies the rich culinary traditions of
                Nigeria. Made from yam flour or cassava flour, Amala is known
                for its unique texture and earthy flavor, making it a perfect
                accompaniment to a variety of soups and stews.
              </p>
              <p>
                The preparation of Amala requires skill and patience. The dough
                is stirred vigorously until it becomes smooth and elastic,
                showcasing the artistry behind this beloved dish. Often served
                with sumptuous soups like Efo Riro or Ogbono, Amala creates a
                delightful dining experience that brings families and friends
                together.
              </p>
              <p>
                At Amala Ibadan, we take pride in serving authentic Amala
                prepared with the finest ingredients, allowing you to savor the
                true taste of Yoruba culture in every bite.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
