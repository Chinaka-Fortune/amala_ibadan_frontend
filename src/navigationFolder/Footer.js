import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import logo from "../images/logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserTie,
  faUtensils,
  faCartPlus,
  faHeadset,
  faUtensilSpoon,
  faFaceSurprise,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const [currentYear, setCurentYear] = useState("");
  useEffect(() => {
    const todayDay = new Date();
    const D_year = todayDay.getFullYear();
    setCurentYear(D_year);
  }, []);

  return (
    <footer className="container-fluid px-lg-5  position-relative bottom-0">
      <div className="row ">
        <div className="px-lg-5  py-lg-3 d-md-flex justify-content-around w-100 ">
          <div className="col-md-3">
            <figure className="footerimg rounded">
              <img src={logo} alt="Amala ibadan logo" width={100}></img>
            </figure>
            <figcaption className="text-white fw-bolder">
              <p>
                A dinstinctive dining destination inspired by culture.
              </p>
              <div className="d-flex flex-column ">
                <h4 className="footerHeadersText">Opening Hours</h4>
                <span>Monday - Sunday</span>
                <span> 9:00 AM - 9:00 PM</span>
              </div>
            </figcaption>
          </div>

          <div className="col-lg-3 mt-3 mt-lg-0">
            <div className="d-flex flex-column ms-lg-5 row-gap-1">
              

              <h5 className=" fw-bold footerHeadersText">
                Services
              </h5>

              <div className=""><NavLink
                to="/"
                className="text-decoration-none  footerLinkText"
              >
                <FontAwesomeIcon icon={faUserTie} className=" fw-bolder fs-5 me-2" />
                Master Chefs
              </NavLink></div>

              <div className=""><NavLink
                to="/"
                className="text-decoration-none  footerLinkText"
              >
                <FontAwesomeIcon
                  icon={faUtensils}
                  className=" fw-bolder fs-5 me-2"
                />{" "}
                Dine-In and Takeout
              </NavLink></div>

              <div className=""><NavLink
                to="/"
                className="text-decoration-none  footerLinkText"
              >
                <FontAwesomeIcon
                  icon={faUtensilSpoon}
                  className="text fw-bolder fs-5 me-2"
                />{" "}
                Meal Prep & Orders
              </NavLink></div>

              <div className=""><NavLink
                to="/"
                className="text-decoration-none  footerLinkText"
              >
                <FontAwesomeIcon
                  icon={faFaceSurprise}
                  className=" fw-bolder fs-5 me-2"
                />{" "}
                Catering Services s
              </NavLink></div>

              <div className=""><NavLink
                to="/"
                className="text-decoration-none  footerLinkText"
              >
                <FontAwesomeIcon
                  icon={faCartPlus}
                  className=" fw-bolder fs-5 me-2"
                />{" "}
                Online Orders
              </NavLink></div>

              <div className=""><NavLink
                to="/"
                className="text-decoration-none  footerLinkText"
              >
                <FontAwesomeIcon icon={faHeadset} className=" fw-bolder fs-5 me-2" />{" "}
                24/7 Services{" "}
              </NavLink></div>

              
            </div>
          </div>
          <div className="col-lg-3 d-flex justify-content-lg-evenly mt-3 mt-lg-0">
            <div className=" d-flex flex-column row-gap-1">
              <h5 className="footerHeadersText">Company</h5>
              <div className="">
                <NavLink className="footerLinkText text-decoration-none ">
                  Terms & Condition
                </NavLink>
              </div>
              <div className="">
                <NavLink className="footerLinkText text-decoration-none ">
                  Privacy Policy
                </NavLink>
              </div>
              <div className="">
                <NavLink className="footerLinkText text-decoration-none ">
                  Cookie Policy
                </NavLink>
              </div>

              <div className=" mt-3">
                <p className="footerHeadersText">Follow Us on Social Media
</p>
                <div className="d-flex column-gap-3">
                  <NavLink className="footerNavIcon">
                  <i className="bi bi-facebook fs-4 "></i>
                </NavLink>
                <NavLink className='footerNavIcon'>
                  <i className="bi bi-whatsapp fs-4 "></i>
                </NavLink>
                <NavLink className='footerNavIcon'>
                  <i className="bi bi-tiktok fs-4"></i>
                </NavLink>
                <NavLink className='footerNavIcon'>
                  <i className="bi bi-instagram fs-4"></i>
                </NavLink>
                </div>
              </div>
            </div>

            
          </div>

          <div className=" d-flex flex-column row-gap-1 mt-3 mt-lg-0">
              <h5 className="footerHeadersText fw-bold">Links</h5>

              <NavLink className="text-decoration-none  footerLinkText" to="/">
                Home
              </NavLink>

              <NavLink
                className="text-decoration-none  footerLinkText"
                to="/menu"
              >
                Menu
              </NavLink>

              <NavLink
                to="/about"
                className="text-decoration-none  footerLinkText"
              >
                About Us
              </NavLink>

              <NavLink
                to="/contact"
                className="text-decoration-none  footerLinkText"
              >
                Contact Us
              </NavLink>

              <NavLink
                className="text-decoration-none  footerLinkText"
                to="/service"
              >
                Service
              </NavLink>

              <NavLink
                className="text-decoration-none  footerLinkText"
                to="/event"
              >
                Events
              </NavLink>
            </div>
        </div>

        
        <div className=" text-warning text-center mb-3">
          Copyright © {currentYear}. All right Reserver
        </div>
      </div>
    </footer>
  );
};

export default Footer;
