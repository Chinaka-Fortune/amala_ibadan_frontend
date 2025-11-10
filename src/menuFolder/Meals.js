import React from "react";
// import { NavLink } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
// import tapioka from "../images/launch1.webp";

// SWALLOW
import amala from "../images/amalaswallow.jpg";
import eba from "../images/Swallow.png";
import semo from "../images/semovita.webp";
import Poundo from "../images/poundoyam.jpg";
import fufu from "../images/fufumeal.jpg";

// MEALS
import jollofRice from "../images/jolofrice.jpg";
import whiteRice from "../images/whiterice.jpg";
import AsunRice from "../images/asunrice.webp";
import friedRice from "../images/friedrice.jpg";
import villageRice from "../images/villagerice.jpg";
import ofadaRice from "../images/ofada.webp";
import stirfry from "../images/stirfry.jpg";
import specialSpag from "../images/specialspag.jpg";
import yamPorriage from "../images/pottage.webp";
import yam from "../images/yam.png";
import ewa from "../images/ewa.jpeg";

// SOUPS
import egusi from "../images/egusisoup.webp";
import eforiro from "../images/efo-riro.jpg";
import ewedu from "../images/ewedu.jpg";
import gbegiri from "../images/gbegiri.jpeg";
import meatStew from "../images/meatstew (1).jpg";

// Extra
import plantain from "../images/plantain.jpg";
import ponmo from "../images/ponmo.webp";
import assorted from "../images/assorted.jpg";
import beef from "../images/beef.jpg";
import turkey from "../images/turkey.jpg";
import chicken from "../images/chicken.jpg";
import gizard from "../images/gizzard.webp";
import snail from "../images/snail.jpg";
import panlaFish from "../images/roundfish.jpg";
import titus from "../images/titus.jpg";
import croaker from "../images/croake.jpg";
import ogunfe from "../images/ogunfe.jpg";
import catfish from "../images/catfish.jpg";
import Egg from "../images/egg.jpg";
import MoiMoi from "../images/moimoi.jpg";
import Salad from "../images/salad.jpg";

// SUPER SOUP BOUL

import egusiBoul from "../images/egusi.jpg";
import bukaStew from "../images/buka stew.jpg";
import efoRiroBoul from "../images/eforirio.jpg";
import HakeFish from "../images/hakefish (2).jpg";
import Goatmeat from "../images/goatmeat (2).jpg";

// CELEBRATION SPECIAL MEAL
import celebration1 from "../images/christmas fiesta.jpg";
import celebration2 from "../images/christmas jolly.jpg";
import celebration3 from "../images/christmas vip.jpg";
import celebration4 from "../images/party starters.jpg";

import "./Menu.css";
import "../component/GeneralStyles.css";

const Meals = () => {
  return (
    <div className="container-fluid">
      <div className="row ">
        <div className="menuHero1 fw-bolder display-5 text-muted d-flex align-items-center justify-content-center dCaptionText2Anime">
          OUR MEALS
        </div>
        <div className="">
          <h4 className="deliciousText fw-bolder display-md-6 text-center ourLandinAnimate2">
            DELICIOUS, ORGANIC AND DELIGHTFUL.
          </h4>
          <p className="text-center ourLandinAnimate2">
            Explore a variety of authentic Nigerian dishes made with fresh,
            locally sourced ingredients.
          </p>
        </div>
      </div>
      <hr />

      {/* SWALLOW SECTION */}

      <section className="swallowSection row d-flex justify-content-center justify-content-xl-star gap-4 column-gap-5 row-gap-5 px-md-5 mx-auto">
        <div className="d-flex justify-content-center">
          <h3 className="text-center generalPill generalColor2 text-muted px-3 py-2 rounded-pill fw-bolder">
            Our Ever Yummy Swallows
          </h3>
        </div>
        <div className="col-lg-3 col-xl-2 col-11 col-sm-5 col-md-5 generalColor2 rounded-5 translatinhVertical">
          <figure className="figure pt-3">
            <img src={amala} alt="" className=" rounded" />
          </figure>
          <figcaption className="figcaption lh-1  align-items-center d-flex justify-content-between">
            <div className="">
              <p className="fw-bolder text-nowrap text-truncate">Black Amala</p>
              <p className="fw-bolder">₦1,000</p>
            </div>
            <div className=" rounded-circle  p-3 me-2 generalColor3">
              <i className="bi bi-cart fw-bolder"></i>
            </div>
          </figcaption>
        </div>
        <div className="col-lg-3 col-xl-2 col-11 col-sm-5 col-md-5 generalColor2 rounded-5 translatinhVertical">
          <figure className="figure pt-3">
            <img src={eba} alt="" className=" rounded" />
          </figure>
          <figcaption className="figcaption lh-1  align-items-center d-flex justify-content-between">
            <div className="">
              <p className="fw-bolder text-nowrap text-truncate">yellow Eba</p>
              <p className="fw-bolder">₦1,000</p>
            </div>
            <div className=" rounded-circle  p-3 me-2 generalColor3">
              <i className="bi bi-cart fw-bolder"></i>
            </div>
          </figcaption>
        </div>
        <div className="col-lg-3 col-xl-2 col-11 col-sm-5 col-md-5 generalColor2 rounded-5 translatinhVertical">
          <figure className="figure pt-3">
            <img src={semo} alt="" className=" rounded" />
          </figure>
          <figcaption className="figcaption lh-1  align-items-center d-flex justify-content-between">
            <div className="">
              <p className="fw-bolder text-nowrap text-truncate">Semovita</p>
              <p className="fw-bolder">₦1,000</p>
            </div>
            <div className=" rounded-circle  p-3 me-2 generalColor3">
              <i className="bi bi-cart fw-bolder"></i>
            </div>
          </figcaption>
        </div>
        <div className="col-lg-3 col-xl-2 col-11 col-sm-5 col-md-5 generalColor2 rounded-5 translatinhVertical">
          <figure className="figure pt-3">
            <img src={fufu} alt="" className=" rounded" />
          </figure>
          <figcaption className="figcaption lh-1  align-items-center d-flex justify-content-between">
            <div className="">
              <p className="fw-bolder text-nowrap text-truncate">Fufu</p>
              <p className="fw-bolder">₦1,000</p>
            </div>
            <div className=" rounded-circle  p-3 me-2 generalColor3">
              <i className="bi bi-cart fw-bolder"></i>
            </div>
          </figcaption>
        </div>
        <div className="col-lg-3 col-xl-2 col-11 col-sm-5 col-md-5 generalColor2 rounded-5 translatinhVertical">
          <figure className="figure pt-3">
            <img src={Poundo} alt="" className=" rounded" />
          </figure>
          <figcaption className="figcaption lh-1  align-items-center d-flex justify-content-between">
            <div className="">
              <p className="fw-bolder text-nowrap text-truncate">Poundo</p>
              <p className="fw-bolder">₦1,000</p>
            </div>
            <div className=" rounded-circle  p-3 me-2 generalColor3">
              <i className="bi bi-cart fw-bolder"></i>
            </div>
          </figcaption>
        </div>
      </section>

      {/* SOUP SECTION */}

      <section className="swallowSection row d-flex justify-content-center justify-content-xl-star gap-4 column-gap-5 row-gap-5 px-md-5 mx-auto mt-5">
        <div className="d-flex justify-content-center">
          <h3 className="text-center generalPill generalColor2 text-muted px-3 py-2 rounded-pill fw-bolder">
            Our Delicious Soup
          </h3>
        </div>
        <div className="col-lg-3 col-xl-2 col-11 col-sm-5 col-md-5 generalColor2 rounded-5 translatinhVertical">
          <figure className="figure pt-3">
            <img src={eforiro} alt="" className=" rounded" />
          </figure>
          <figcaption className="figcaption lh-1  align-items-center d-flex justify-content-between">
            <div className="">
              <p className="fw-bolder text-nowrap text-truncate">Efo-riro</p>
              <p className="fw-bolder">₦1,000</p>
            </div>
            <div className=" rounded-circle  p-3 me-2 generalColor3">
              <i className="bi bi-cart fw-bolder"></i>
            </div>
          </figcaption>
        </div>
        <div className="col-lg-3 col-xl-2 col-11 col-sm-5 col-md-5 generalColor2 rounded-5 translatinhVertical">
          <figure className="figure pt-3">
            <img src={egusi} alt="" className=" rounded" />
          </figure>
          <figcaption className="figcaption lh-1  align-items-center d-flex justify-content-between">
            <div className="">
              <p className="fw-bolder text-nowrap text-truncate">Egusi</p>
              <p className="fw-bolder">₦1,000</p>
            </div>
            <div className=" rounded-circle  p-3 me-2 generalColor3">
              <i className="bi bi-cart fw-bolder"></i>
            </div>
          </figcaption>
        </div>
        <div className="col-lg-3 col-xl-2 col-11 col-sm-5 col-md-5 generalColor2 rounded-5 translatinhVertical">
          <figure className="figure pt-3">
            <img src={ewedu} alt="" className=" rounded" />
          </figure>
          <figcaption className="figcaption lh-1  align-items-center d-flex justify-content-between">
            <div className="">
              <p className="fw-bolder text-nowrap text-truncate">Ewedu</p>
              <p className="fw-bolder">₦1,000</p>
            </div>
            <div className=" rounded-circle  p-3 me-2 generalColor3">
              <i className="bi bi-cart fw-bolder"></i>
            </div>
          </figcaption>
        </div>
        <div className="col-lg-3 col-xl-2 col-11 col-sm-5 col-md-5 generalColor2 rounded-5 translatinhVertical">
          <figure className="figure pt-3">
            <img src={gbegiri} alt="" className=" rounded" />
          </figure>
          <figcaption className="figcaption lh-1  align-items-center d-flex justify-content-between">
            <div className="">
              <p className="fw-bolder text-nowrap text-truncate">Fufu</p>
              <p className="fw-bolder">₦1,000</p>
            </div>
            <div className=" rounded-circle  p-3 me-2 generalColor3">
              <i className="bi bi-cart fw-bolder"></i>
            </div>
          </figcaption>
        </div>
        <div className="col-lg-3 col-xl-2 col-11 col-sm-5 col-md-5 generalColor2 rounded-5 translatinhVertical">
          <figure className="figure pt-3">
            <img src={meatStew} alt="" className=" rounded" />
          </figure>
          <figcaption className="figcaption lh-1  align-items-center d-flex justify-content-between">
            <div className="">
              <p className="fw-bolder text-nowrap text-truncate">Meat Stew</p>
              <p className="fw-bolder">₦1,000</p>
            </div>
            <div className=" rounded-circle  p-3 me-2 generalColor3">
              <i className="bi bi-cart fw-bolder"></i>
            </div>
          </figcaption>
        </div>
      </section>

      {/* MEAL SECTION */}

      <section className="swallowSection row d-flex justify-content-center justify-content-xl-star gap-4 column-gap-5 row-gap-5 px-md-5 mt-5">
        <div className="d-flex justify-content-center">
          <h3 className="text-center generalPill generalColor2 text-muted px-5 py-2 rounded-pill fw-bolder">
           Our Tasty Meal
          </h3>
        </div>
        <div className="col-lg-3 col-xl-2 col-11 col-sm-5 col-md-5 generalColor2 rounded-5 translatinhVertical">
          <figure className="figure pt-3">
            <img src={jollofRice} alt="" className=" rounded" />
          </figure>
          <figcaption className="figcaption lh-1  align-items-center d-flex justify-content-between">
            <div className="">
              <p className="fw-bolder text-nowrap text-truncate">Jellof Rice</p>
              <p className="fw-bolder">per potion</p>
              <p className="fw-bolder">₦1,000</p>
            </div>
            <div className=" rounded-circle  p-3 me-2 generalColor3">
              <i className="bi bi-cart fw-bolder"></i>
            </div>
          </figcaption>
        </div>
        <div className="col-lg-3 col-xl-2 col-11 col-sm-5 col-md-5 generalColor2 rounded-5 translatinhVertical">
          <figure className="figure pt-3">
            <img src={ewa} alt="" className=" rounded" />
          </figure>
          <figcaption className="figcaption lh-1  align-items-center d-flex justify-content-between">
            <div className="">
              <p className="fw-bolder text-nowrap text-truncate">Ewa Egonyi</p>
              <p className="fw-bolder">per potion</p>
              <p className="fw-bolder">₦1,200</p>
            </div>
            <div className=" rounded-circle  p-3 me-2 generalColor3">
              <i className="bi bi-cart fw-bolder"></i>
            </div>
          </figcaption>
        </div>
        <div className="col-lg-3 col-xl-2 col-11 col-sm-5 col-md-5 generalColor2 rounded-5 translatinhVertical">
          <figure className="figure pt-3">
            <img src={yam} alt="" className=" rounded" />
          </figure>
          <figcaption className="figcaption lh-1  align-items-center d-flex justify-content-between">
            <div className="">
              <p className="fw-bolder text-nowrap text-truncate">Yam</p>
              <p className="fw-bolder">per potion</p>
              <p className="fw-bolder">₦1,300</p>
            </div>
            <div className=" rounded-circle  p-3 me-2 generalColor3">
              <i className="bi bi-cart fw-bolder"></i>
            </div>
          </figcaption>
        </div>
        <div className="col-lg-3 col-xl-2 col-11 col-sm-5 col-md-5 generalColor2 rounded-5 translatinhVertical">
          <figure className="figure pt-3">
            <img src={yamPorriage} alt="" className=" rounded" />
          </figure>
          <figcaption className="figcaption lh-1  align-items-center d-flex justify-content-between">
            <div className="">
              <p className="fw-bolder text-nowrap text-truncate">Pottage</p>
              <p className="fw-bolder">per potion</p>
              <p className="fw-bolder">₦1,500</p>
            </div>
            <div className=" rounded-circle  p-3 me-2 generalColor3">
              <i className="bi bi-cart fw-bolder"></i>
            </div>
          </figcaption>
        </div>
        <div className="col-lg-3 col-xl-2 col-11 col-sm-5 col-md-5 generalColor2 rounded-5 translatinhVertical">
          <figure className="figure pt-3">
            <img src={specialSpag} alt="" className=" rounded" />
          </figure>
          <figcaption className="figcaption lh-1  align-items-center d-flex justify-content-between">
            <div className="">
              <p className="fw-bolder text-nowrap text-truncate">
                Special Spag
              </p>
              <p className="fw-bolder">per potion</p>
              <p className="fw-bolder">₦1,100</p>
            </div>
            <div className=" rounded-circle  p-3 me-2 generalColor3">
              <i className="bi bi-cart fw-bolder"></i>
            </div>
          </figcaption>
        </div>
        <div className="col-lg-3 col-xl-2 col-11 col-sm-5 col-md-5 generalColor2 rounded-5 translatinhVertical">
          <figure className="figure pt-3">
            <img src={stirfry} alt="" className=" rounded" />
          </figure>
          <figcaption className="figcaption lh-1  align-items-center d-flex justify-content-between">
            <div className="">
              <p className="fw-bolder text-nowrap text-truncate">stirfry</p>
              <p className="fw-bolder">per potion</p>
              <p className="fw-bolder">₦900</p>
            </div>
            <div className=" rounded-circle  p-3 me-2 generalColor3">
              <i className="bi bi-cart fw-bolder"></i>
            </div>
          </figcaption>
        </div>
        <div className="col-lg-3 col-xl-2 col-11 col-sm-5 col-md-5 generalColor2 rounded-5 translatinhVertical">
          <figure className="figure pt-3">
            <img src={ofadaRice} alt="" className=" rounded" />
          </figure>
          <figcaption className="figcaption lh-1  align-items-center d-flex justify-content-between">
            <div className="">
              <p className="fw-bolder text-nowrap text-truncate">ofada Rice</p>
              <p className="fw-bolder">per potion</p>
              <p className="fw-bolder">₦1,300</p>
            </div>
            <div className=" rounded-circle  p-3 me-2 generalColor3">
              <i className="bi bi-cart fw-bolder"></i>
            </div>
          </figcaption>
        </div>
        <div className="col-lg-3 col-xl-2 col-11 col-sm-5 col-md-5 generalColor2 rounded-5 translatinhVertical">
          <figure className="figure pt-3">
            <img src={villageRice} alt="" className=" rounded" />
          </figure>
          <figcaption className="figcaption lh-1  align-items-center d-flex justify-content-between">
            <div className="">
              <p className="fw-bolder text-nowrap text-truncate">
                village Rice
              </p>
              <p className="fw-bolder">per potion</p>
              <p className="fw-bolder">₦1,000</p>
            </div>
            <div className=" rounded-circle  p-3 me-2 generalColor3">
              <i className="bi bi-cart fw-bolder"></i>
            </div>
          </figcaption>
        </div>
        <div className="col-lg-3 col-xl-2 col-11 col-sm-5 col-md-5 generalColor2 rounded-5 translatinhVertical">
          <figure className="figure pt-3">
            <img src={friedRice} alt="" className=" rounded" />
          </figure>
          <figcaption className="figcaption lh-1  align-items-center d-flex justify-content-between">
            <div className="">
              <p className="fw-bolder text-nowrap text-truncate">fried Rice</p>
              <p className="fw-bolder">per potion</p>
              <p className="fw-bolder">₦1,300</p>
            </div>
            <div className=" rounded-circle  p-3 me-2 generalColor3">
              <i className="bi bi-cart fw-bolder"></i>
            </div>
          </figcaption>
        </div>
        <div className="col-lg-3 col-xl-2 col-11 col-sm-5 col-md-5 generalColor2 rounded-5 translatinhVertical">
          <figure className="figure pt-3">
            <img src={AsunRice} alt="" className=" rounded" />
          </figure>
          <figcaption className="figcaption lh-1  align-items-center d-flex justify-content-between">
            <div className="">
              <p className="fw-bolder text-nowrap text-truncate">Asun Rice</p>
              <p className="fw-bolder">per potion</p>
              <p className="fw-bolder">₦1,700</p>
            </div>
            <div className=" rounded-circle  p-3 me-2 generalColor3">
              <i className="bi bi-cart fw-bolder"></i>
            </div>
          </figcaption>
        </div>
        <div className="col-lg-3 col-xl-2 col-11 col-sm-5 col-md-5 generalColor2 rounded-5 translatinhVertical">
          <figure className="figure pt-3">
            <img src={whiteRice} alt="" className=" rounded" />
          </figure>
          <figcaption className="figcaption lh-1  align-items-center d-flex justify-content-between">
            <div className="">
              <p className="fw-bolder text-nowrap text-truncate">White Rice</p>
              <p className="fw-bolder">per potion</p>
              <p className="fw-bolder">₦1,100</p>
            </div>
            <div className=" rounded-circle  p-3 me-2 generalColor3">
              <i className="bi bi-cart fw-bolder"></i>
            </div>
          </figcaption>
        </div>
      </section>

      {/* Extra SECTION */}

      <section className="swallowSection row d-flex justify-content-center justify-content-xl-star gap-4 column-gap-5 row-gap-5 px-md-5 my-5">
        <div className="d-flex justify-content-center">
          <h3 className="text-center generalPill generalColor2 text-muted px-5 py-2 rounded-pill fw-bolder">
            Extra Top-Up
          </h3>
        </div>
        <div className="col-lg-3 col-xl-2 col-11 col-sm-5 col-md-5 generalColor2 rounded-5 translatinhVertical">
          <figure className="figure pt-3">
            <img src={catfish} alt="" className=" rounded" />
          </figure>
          <figcaption className="figcaption lh-1  align-items-center d-flex justify-content-between">
            <div className="">
              <p className="fw-bolder text-nowrap text-truncate">Catfish</p>
              <p className="fw-bolder">₦6,000</p>
            </div>
            <div className=" rounded-circle  p-3 me-2 generalColor3">
              <i className="bi bi-cart fw-bolder"></i>
            </div>
          </figcaption>
        </div>
        <div className="col-lg-3 col-xl-2 col-11 col-sm-5 col-md-5 generalColor2 rounded-5 translatinhVertical">
          <figure className="figure pt-3">
            <img src={ogunfe} alt="" className=" rounded" />
          </figure>
          <figcaption className="figcaption lh-1  align-items-center d-flex justify-content-between">
            <div className="">
              <p className="fw-bolder text-nowrap text-truncate">Ogunfe</p>
              <p className="fw-bolder">₦2,200</p>
            </div>
            <div className=" rounded-circle  p-3 me-2 generalColor3">
              <i className="bi bi-cart fw-bolder"></i>
            </div>
          </figcaption>
        </div>
        <div className="col-lg-3 col-xl-2 col-11 col-sm-5 col-md-5 generalColor2 rounded-5 translatinhVertical">
          <figure className="figure pt-3">
            <img src={croaker} alt="" className=" rounded" />
          </figure>
          <figcaption className="figcaption lh-1  align-items-center d-flex justify-content-between">
            <div className="">
              <p className="fw-bolder text-nowrap text-truncate">Croaker</p>
              <p className="fw-bolder">₦1,300</p>
            </div>
            <div className=" rounded-circle  p-3 me-2 generalColor3">
              <i className="bi bi-cart fw-bolder"></i>
            </div>
          </figcaption>
        </div>
        <div className="col-lg-3 col-xl-2 col-11 col-sm-5 col-md-5 generalColor2 rounded-5 translatinhVertical">
          <figure className="figure pt-3">
            <img src={titus} alt="" className=" rounded" />
          </figure>
          <figcaption className="figcaption lh-1  align-items-center d-flex justify-content-between">
            <div className="">
              <p className="fw-bolder text-nowrap text-truncate">Tittus</p>
              <p className="fw-bolder">₦1,100</p>
            </div>
            <div className=" rounded-circle  p-3 me-2 generalColor3">
              <i className="bi bi-cart fw-bolder"></i>
            </div>
          </figcaption>
        </div>
        <div className="col-lg-3 col-xl-2 col-11 col-sm-5 col-md-5 generalColor2 rounded-5 translatinhVertical">
          <figure className="figure pt-3">
            <img src={panlaFish} alt="" className=" rounded" />
          </figure>
          <figcaption className="figcaption lh-1  align-items-center d-flex justify-content-between">
            <div className="">
              <p className="fw-bolder text-nowrap text-truncate">Panla Fish</p>
              <p className="fw-bolder">₦900</p>
            </div>
            <div className=" rounded-circle  p-3 me-2 generalColor3">
              <i className="bi bi-cart fw-bolder"></i>
            </div>
          </figcaption>
        </div>
        <div className="col-lg-3 col-xl-2 col-11 col-sm-5 col-md-5 generalColor2 rounded-5 translatinhVertical">
          <figure className="figure pt-3">
            <img src={snail} alt="" className=" rounded" />
          </figure>
          <figcaption className="figcaption lh-1  align-items-center d-flex justify-content-between">
            <div className="">
              <p className="fw-bolder text-nowrap text-truncate">snail</p>
              <p className="fw-bolder">₦1,700</p>
            </div>
            <div className=" rounded-circle  p-3 me-2 generalColor3">
              <i className="bi bi-cart fw-bolder"></i>
            </div>
          </figcaption>
        </div>
        <div className="col-lg-3 col-xl-2 col-11 col-sm-5 col-md-5 generalColor2 rounded-5 translatinhVertical">
          <figure className="figure pt-3">
            <img src={gizard} alt="" className=" rounded" />
          </figure>
          <figcaption className="figcaption lh-1  align-items-center d-flex justify-content-between">
            <div className="">
              <p className="fw-bolder text-nowrap text-truncate">Gizard</p>
              <p className="fw-bolder">₦1,300</p>
            </div>
            <div className=" rounded-circle  p-3 me-2 generalColor3">
              <i className="bi bi-cart fw-bolder"></i>
            </div>
          </figcaption>
        </div>
        <div className="col-lg-3 col-xl-2 col-11 col-sm-5 col-md-5 generalColor2 rounded-5 translatinhVertical">
          <figure className="figure pt-3">
            <img src={chicken} alt="" className=" rounded" />
          </figure>
          <figcaption className="figcaption lh-1  align-items-center d-flex justify-content-between">
            <div className="">
              <p className="fw-bolder text-nowrap text-truncate">chicken</p>
              <p className="fw-bolder">₦1,500</p>
            </div>
            <div className=" rounded-circle  p-3 me-2 generalColor3">
              <i className="bi bi-cart fw-bolder"></i>
            </div>
          </figcaption>
        </div>
        <div className="col-lg-3 col-xl-2 col-11 col-sm-5 col-md-5 generalColor2 rounded-5 translatinhVertical">
          <figure className="figure pt-3">
            <img src={turkey} alt="" className=" rounded" />
          </figure>
          <figcaption className="figcaption lh-1  align-items-center d-flex justify-content-between">
            <div className="">
              <p className="fw-bolder text-nowrap text-truncate">Turkey</p>
              <p className="fw-bolder">₦1,300</p>
            </div>
            <div className=" rounded-circle  p-3 me-2 generalColor3">
              <i className="bi bi-cart fw-bolder"></i>
            </div>
          </figcaption>
        </div>
        <div className="col-lg-3 col-xl-2 col-11 col-sm-5 col-md-5 generalColor2 rounded-5 translatinhVertical">
          <figure className="figure pt-3">
            <img src={beef} alt="" className=" rounded" />
          </figure>
          <figcaption className="figcaption lh-1  align-items-center d-flex justify-content-between">
            <div className="">
              <p className="fw-bolder text-nowrap text-truncate">Beef</p>
              <p className="fw-bolder">₦300</p>
            </div>
            <div className=" rounded-circle  p-3 me-2 generalColor3">
              <i className="bi bi-cart fw-bolder"></i>
            </div>
          </figcaption>
        </div>
        <div className="col-lg-3 col-xl-2 col-11 col-sm-5 col-md-5 generalColor2 rounded-5 translatinhVertical">
          <figure className="figure pt-3">
            <img src={assorted} alt="" className=" rounded" />
          </figure>
          <figcaption className="figcaption lh-1  align-items-center d-flex justify-content-between">
            <div className="">
              <p className="fw-bolder text-nowrap text-truncate">Assorted</p>
              <p className="fw-bolder">₦2,100</p>
            </div>
            <div className=" rounded-circle  p-3 me-2 generalColor3">
              <i className="bi bi-cart fw-bolder"></i>
            </div>
          </figcaption>
        </div>
        <div className="col-lg-3 col-xl-2 col-11 col-sm-5 col-md-5 generalColor2 rounded-5 translatinhVertical">
          <figure className="figure pt-3">
            <img src={ponmo} alt="" className=" rounded" />
          </figure>
          <figcaption className="figcaption lh-1  align-items-center d-flex justify-content-between">
            <div className="">
              <p className="fw-bolder text-nowrap text-truncate">Ponmo</p>
              <p className="fw-bolder">₦400</p>
            </div>
            <div className=" rounded-circle  p-3 me-2 generalColor3">
              <i className="bi bi-cart fw-bolder"></i>
            </div>
          </figcaption>
        </div>
        <div className="col-lg-3 col-xl-2 col-11 col-sm-5 col-md-5 generalColor2 rounded-5 translatinhVertical">
          <figure className="figure pt-3">
            <img src={plantain} alt="" className=" rounded" />
          </figure>
          <figcaption className="figcaption lh-1  align-items-center d-flex justify-content-between">
            <div className="">
              <p className="fw-bolder text-nowrap text-truncate">Plantain</p>
              <p className="fw-bolder">₦700</p>
            </div>
            <div className=" rounded-circle  p-3 me-2 generalColor3">
              <i className="bi bi-cart fw-bolder"></i>
            </div>
          </figcaption>
        </div>
        <div className="col-lg-3 col-xl-2 col-11 col-sm-5 col-md-5 generalColor2 rounded-5 translatinhVertical">
          <figure className="figure pt-3">
            <img src={Egg} alt="" className=" rounded" />
          </figure>
          <figcaption className="figcaption lh-1  align-items-center d-flex justify-content-between">
            <div className="">
              <p className="fw-bolder text-nowrap text-truncate">Egg</p>
              <p className="fw-bolder">₦400</p>
            </div>
            <div className=" rounded-circle  p-3 me-2 generalColor3">
              <i className="bi bi-cart fw-bolder"></i>
            </div>
          </figcaption>
        </div>
        <div className="col-lg-3 col-xl-2 col-11 col-sm-5 col-md-5 generalColor2 rounded-5 translatinhVertical">
          <figure className="figure pt-3">
            <img src={MoiMoi} alt="" className=" rounded" />
          </figure>
          <figcaption className="figcaption lh-1  align-items-center d-flex justify-content-between">
            <div className="">
              <p className="fw-bolder text-nowrap text-truncate">Moi Moi</p>
              <p className="fw-bolder">₦500</p>
            </div>
            <div className=" rounded-circle  p-3 me-2 generalColor3">
              <i className="bi bi-cart fw-bolder"></i>
            </div>
          </figcaption>
        </div>
        <div className="col-lg-3 col-xl-2 col-11 col-sm-5 col-md-5 generalColor2 rounded-5 translatinhVertical">
          <figure className="figure pt-3">
            <img src={Salad} alt="" className=" rounded" />
          </figure>
          <figcaption className="figcaption lh-1  align-items-center d-flex justify-content-between">
            <div className="">
              <p className="fw-bolder text-nowrap text-truncate">Salad</p>
              <p className="fw-bolder">₦500</p>
            </div>
            <div className=" rounded-circle  p-3 me-2 generalColor3">
              <i className="bi bi-cart fw-bolder"></i>
            </div>
          </figcaption>
        </div>
      </section>

      {/* Super Boul section */}

      <section className="superBoul row d-flex justify-content-center justify-content-xl-star column-gap-5 row-gap-5 px-md- my-5">
        <div className="d-flex justify-content-center">
          <h3 className="text-center generalPill generalColor2 text-muted px-3 py-2 rounded-pill fw-bolder">
            Super Boul Delivery
          </h3>
        </div>
        <div className="col-lg-3 col-xl-3 col-11 col-sm-5 col-md-5 generalColor2 rounded-5 translatinhVertical">
          <figure className="figure pt-3">
            <img src={bukaStew} alt="" className=" rounded" />
          </figure>{" "}
          <figcaption className="figcaption lh-1  align-items-center d-flex justify-content-between">
            <div className="">
              <p className="fw-bolder text-nowrap text-truncate fs-5">
                Buka Stew
              </p>
              <p className="text-muted fw-bolder">per litre (2.5ltr)</p>
              <p className="fw-bolder">₦30,000</p>
            </div>
            <div className=" rounded-circle  p-3 me-2 generalColor3">
              <i className="bi bi-cart fw-bolder"></i>
            </div>
          </figcaption>
        </div>
        <div className="col-lg-3 col-xl-3 col-11 col-sm-5 col-md-5 generalColor2 rounded-5 translatinhVertical">
          <figure className="figure pt-3">
            <img src={efoRiroBoul} alt="" className=" rounded" />
          </figure>{" "}
          <figcaption className="figcaption lh-1  align-items-center d-flex justify-content-between">
            <div className="">
              <p className="fw-bolder text-nowrap text-truncate fs-5">
                Efo-riro
              </p>
              <p className="text-muted fw-bolder">per litre (2.5ltr)</p>
              <p className="fw-bolder">₦25,000</p>
            </div>
            <div className=" rounded-circle  p-3 me-2 generalColor3">
              <i className="bi bi-cart fw-bolder"></i>
            </div>
          </figcaption>
        </div>
        <div className="col-lg-3 col-xl-3 col-11 col-sm-5 col-md-5 generalColor2 rounded-5 translatinhVertical">
          <figure className="figure pt-3">
            <img src={egusiBoul} alt="" className=" rounded" />
          </figure>{" "}
          <figcaption className="figcaption lh-1  align-items-center d-flex justify-content-between">
            <div className="">
              <p className="fw-bolder text-nowrap text-truncate fs-5">Egusi</p>
              <p className="text-muted fw-bolder">per litre (2.5ltr)</p>
              <p className="fw-bolder">₦25,000</p>
            </div>
            <div className=" rounded-circle  p-3 me-2 generalColor3">
              <i className="bi bi-cart fw-bolder"></i>
            </div>
          </figcaption>
        </div>
        <div className="col-lg-3 col-xl-3 col-11 col-sm-5 col-md-5 generalColor2 rounded-5 translatinhVertical">
          <figure className="figure pt-3">
            <img src={HakeFish} alt="" className=" rounded" />
          </figure>{" "}
          <figcaption className="figcaption lh-1  align-items-center d-flex justify-content-between">
            <div className="">
              <p className="fw-bolder text-nowrap text-truncate fs-5">
                Hake Fish Stew
              </p>
              <p className="text-muted fw-bolder">per litre (2.5ltr)</p>
              <p className="fw-bolder">₦30,000</p>
            </div>
            <div className=" rounded-circle  p-3 me-2 generalColor3">
              <i className="bi bi-cart fw-bolder"></i>
            </div>
          </figcaption>
        </div>
        <div className="col-lg-3 col-xl-3 col-11 col-sm-5 col-md-5 generalColor2 rounded-5 translatinhVertical">
          <figure className="figure pt-3">
            <img src={Goatmeat} alt="" className=" rounded" />
          </figure>{" "}
          <figcaption className="figcaption lh-1  align-items-center d-flex justify-content-between">
            <div className="">
              <p className="fw-bolder text-nowrap text-truncate fs-5">
                Goat Meat Soup
              </p>
              <p className="text-muted fw-bolder">per litre (2.5ltr)</p>
              <p className="fw-bolder">₦25,000</p>
            </div>
            <div className=" rounded-circle  p-3 me-2 generalColor3">
              <i className="bi bi-cart fw-bolder"></i>
            </div>
          </figcaption>
        </div>
      </section>

      {/* Celebration special delivery section */}

      <section className="superBoul row d-flex justify-content-center justify-content-xl-star column-gap-5 row-gap-5 px-md- my-5">
        <div className="d-flex justify-content-center">
          <h3 className="text-center generalPill generalColor2 text-muted px-3 py-2 rounded-pill fw-bolder">
            Celebration special delivery
          </h3>
        </div>
        <div className="col-lg-3 col-xl-3 col-11 col-sm-5 col-md-5 generalColor2 rounded-5 translatinhVertical">
          <figure className="figure pt-3">
            <img src={celebration1} alt="" className=" rounded" />
          </figure>{" "}
          <figcaption className="figcaption lh-1  align-items-center d-flex justify-content-between">
            <div className="">
              <p className="fw-bolder text-nowrap text-truncate fs-5">
                CHRISTMAS FIESTA
              </p>
              <p className="fw-bolder">₦100,000</p>
              <p className="text-success">
                2.5ltrs jollof-rice, Buka stew, Efo-ri-ro 1.5ltrs Fried-rice 4
                pieces of chicken and moi-moi
              </p>
            </div>
            <div className=" rounded-circle  p-3 me-2 generalColor3">
              <i className="bi bi-cart fw-bolder"></i>
            </div>
          </figcaption>
        </div>
        <div className="col-lg-3 col-xl-3 col-11 col-sm-5 col-md-5 generalColor2 rounded-5 translatinhVertical">
          <figure className="figure pt-3">
            <img src={celebration2} alt="" className=" rounded" />
          </figure>{" "}
          <figcaption className="figcaption lh-1  align-items-center d-flex justify-content-between">
            <div className="">
              <p className="fw-bolder text-nowrap text-truncate fs-5">
                CHRISTMAS JOLLY
              </p>
              <p className="fw-bolder">₦150,000</p>
              <p className="text-success">
                2.5ltrs jollof-rice, Buka stew, Efo-ri-ro 1.5ltrs Fried-rice 4
                pieces of chicken and moi-moi
              </p>
            </div>
            <div className=" rounded-circle  p-3 me-2 generalColor3">
              <i className="bi bi-cart fw-bolder"></i>
            </div>
          </figcaption>
        </div>
        <div className="col-lg-3 col-xl-3 col-11 col-sm-5 col-md-5 generalColor2 rounded-5 translatinhVertical">
          <figure className="figure pt-3">
            <img src={celebration3} alt="" className=" rounded" />
          </figure>{" "}
          <figcaption className="figcaption lh-1  align-items-center d-flex justify-content-between">
            <div className="">
              <p className="fw-bolder text-nowrap text-truncate fs-5">
                CHRISTMAS VIP
              </p>
              <p className="fw-bolder">₦250,000</p>
              <p className="text-success">
                5ltrs jollof-rice, Prawn Fried-rice, Chicken Stew 2.5ltrs
                bukastew, Hake-Fish stew, Efo-ri-ro, 8 moi-moi, 4 turkey, amala,
                500ml gbegiri, 1.5ltrs ewedu
              </p>
            </div>
            <div className=" rounded-circle  p-3 me-2 generalColor3">
              <i className="bi bi-cart fw-bolder"></i>
            </div>
          </figcaption>
        </div>
        <div className="col-lg-3 col-xl-3 col-11 col-sm-5 col-md-5 generalColor2 rounded-5 translatinhVertical">
          <figure className="figure pt-3">
            <img src={celebration4} alt="" className=" rounded" />
          </figure>{" "}
          <figcaption className="figcaption lh-1  align-items-center d-flex justify-content-between">
            <div className="">
              <p className="fw-bolder text-nowrap text-truncate fs-5">
                PARTY STARTERS
              </p>
              <p className="fw-bolder">₦60,000</p>
              <p className="text-success">
                1.5ltrs jollof-rice, Fried-rice, Buka stew, Efo-ri-ro and 2 pieces of chicken


              </p>
            </div>
            <div className=" rounded-circle  p-3 me-2 generalColor3">
              <i className="bi bi-cart fw-bolder"></i>
            </div>
          </figcaption>
        </div>
      </section>
    </div>
  );
};

export default Meals;
