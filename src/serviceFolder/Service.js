import React from "react";
import { NavLink } from "react-router-dom";
import "../component/GeneralStyles.css";
import Takein from "../images/takein.jpg";
import catering from "../images/lisabi.jpg";
import stewCooking from "../images/meatstew (1).jpg";
import delivery4 from "../images/delivery4.jpeg";
import HandShake from "../images/handshake.webp";


import "./Service.css";
const Service = () => {
  return (
    <section className="container-fluid my-4 px-md-3 ">
      <div className="row px-4">
        <p className="text-muted fw-bolder text-center generalColor3 py-5 rounded-top-5 rounded-bottom-right-5">
          At Amamla Ibadan, we specialize in providing top-notch catering
          services for events of all sizes. Our team is dedicated to delivering
          authentic Nigerian dishes that will leave your guests raving! Whether
          it’s a wedding, corporate gathering, or a family celebration, we
          ensure that every meal is a delightful experience. Our services
          include personalized menu planning, on-site cooking, and exceptional
          customer service to make your event memorable.
        </p>
      </div>

      <div className="row row-gap-4 d-flex justify-content-center mx-auto">
        <div className="col-lg-3 col-md-6 ourLandinAnimate2">
          <div className="superBoulimageDiv generalColor2 py-1">
            <h4 className="text-center fw-bolder">Food Delivery</h4>
            <img src={delivery4} className="img-fluid w-100 h-75" alt="" />
            <p className="px-3 fs-5">
              Delivering freshly prepared meals to homes or offices, allowing
              customers to enjoy the taste of Amala Ibadan wherever they are.
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 ourLandinAnimate2">
          <div className="superBoulimageDiv generalColor2 py-1">
            <h4 className="text-center fw-bolder">Dine-In and Takeout</h4>
            <img src={Takein} className="img-fluid w-100 h-75" alt="" />
            <p className="px-3 fs-5">
              Traditional restaurant experience where customers can enjoy
              freshly prepared meals on-site or take them to-go.
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 ourLandinAnimate2">
          <div className="superBoulimageDiv generalColor2 py-1">
            <h4 className="text-center fw-bolder">Meal Prep & Orders</h4>
            <img src={stewCooking} className="img-fluid w-100 h-75" alt="" />
            <p className="px-3 fs-5">
              Some branches may offer pre-packaged meal plans, especially for
              customers wanting convenient Nigerian meals during the week.
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 ourLandinAnimate2">
          <div className="superBoulimageDiv generalColor2 py-1">
            <h4 className="text-center fw-bolder">Catering Services</h4>
            <img src={catering} className="img-fluid w-100 h-75" alt="" />
            <p className="px-3 fs-5">
              Expert catering for weddings, corporate gatherings, birthday
              parties, and more, specializing in large-batch Yoruba dishes like
              amala, ewedu, gbegiri, and assorted meats.
            </p>
          </div>
        </div>
      </div>

      <div className="row d-flex align-items-center px-5 mt-5">
        <div className="col-md-6 generalColor py-3 ">
          <h2 className="fw-bolder text-center text-warning">WE OFFER:</h2>
          <p className=" fw-bolder text-muted px-4">
            Unbeatable Prices, Unmatched Quality We offer flexible packages to
            fit every budget, delivering top-notch service without the high
            price. Customize your event and only pay for what you need—no
            unnecessary extras! Our affordable luxury ensures you get gourmet
            meals and excellent service, all at a price you'll love. Plus, keep
            an eye out for special discounts and promotions to save even more!
          </p>
          <p className=" fw-bolder text-muted px-4">
            We believe in providing exceptional value for our services. Our
            pricing is competitive, ensuring you get the best quality without
            breaking the bank! We offer various packages to accommodate
            different budgets while maintaining the highest standards of food
            quality and service. Let us help you plan an event that is both
            memorable and affordable!
          </p>
          <div className="d-flex justify-content-center "><NavLink className="rounded-pill px-3 py-2  fw-bolder text-decoration-none contactUsNowBtn">Contact Us Now</NavLink></div>
        </div>
        <div className="col-md-6 generalColor">
          <div className="handShakeDiv">
            <img src={HandShake} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
