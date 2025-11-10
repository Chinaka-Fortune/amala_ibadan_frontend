import React from "react";
import { useEffect} from "react";
// import { NavLink } from "react-router-dom";
import * as bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

import Et5Pix from "../images/fufumeal.jpg";
import imagen from "../images/friedrice.jpg";
import ewa from "../images/ewa.jpeg";
import jellof from "../images/images (4).jpeg";
import pottage from "../images/pottage.webp";
import SpecialSpag from "../images/specialspag.jpg";
import "./Home.css";
import "../cart/Cart.css";
import "../component/GeneralStyles.css";

const SubHomeDishes = () => {
  useEffect(() => {
    const popoverTriggerList = document.querySelectorAll(
      '[data-bs-toggle="popover"]'
    );
    const popoverList = [...popoverTriggerList].map(
      (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
    );

    console.log(popoverList)
  }, []);

  return (
    <div className="container-fluid">
      <div className="row  ">
        <h4 className="text-center fw-bolder display-6 text-muted ourLandinAnimate2">
          Our Popular menu
        </h4>
        <div className="d-lg-flex flex-wrap   row-gap-5 dCaptionText">
          <div className=" d-flex flex-nowrap align-items-center px-md-5 col-lg-6 mb-3 mb-lg-0 overFlow">
            <div className="col-3 me-3">
              <div className="CartImg-div">
                <img src={ewa} alt="" className=" rounded" />
              </div>
            </div>

            <div className="col-11 col-md-6 d-flex justify-content-around align-items-center">
              <p
                className="fw-bold flex-nowrap  pt-3 phoneSubmenuText1"
                data-bs-toggle="popover"
                data-bs-placement="bottom"
                data-bs-custom-class="custom-popover"
                data-bs-content="Beans and plantain, accompined with cold mineral, saussage,
                pineapple, mango juice"
              >
                Beans and plantain
              </p>

              <p className="fw-bold pt-3">₦2,900</p>
            </div>

            <div className="col-3 d-flex align-items-center justify-content-center">
              <button
                type="button"
                className="p-2 rounded-circle border-inf border-0 generalColor"
              >
                <FontAwesomeIcon
                  icon={faCartPlus}
                  className="fw-bolder fs-5 trash"
                />
              </button>
            </div>
          </div>
          <div className=" d-flex flex-nowrap align-items-center px-md-5 col-lg-6  mb-3 mb-lg-0 overFlow">
            <div className="col-3 me-3">
              <div className="CartImg-div">
                <img src={SpecialSpag} alt="" className=" rounded" />
              </div>
            </div>

            <div className="col-11 col-md-6 d-flex justify-content-around align-items-center">
              <p
                className="fw-bold flex-nowrap  pt-3 phoneSubmenuText1"
                data-bs-toggle="popover"
                data-bs-placement="bottom"
                data-bs-custom-class="custom-popover"
                data-bs-content="Special Spag, accompined with cold mineral, saussage,
                pineapple, mango juice"
              >
                Special Spag
              </p>

              <p className="fw-bold pt-3">₦900</p>
            </div>

            <div className="col-3 d-flex align-items-center justify-content-center">
              <button
                type="button"
                className="p-2 rounded-circle border-inf border-0 generalColor"
              >
                <FontAwesomeIcon
                  icon={faCartPlus}
                  className="fw-bolder fs-5 trash"
                />
              </button>
            </div>
          </div>
          <div className=" d-flex flex-nowrap align-items-center px-md-5 col-lg-6  mb-3 mb-lg-0 overFlow">
            <div className="col-3 me-3">
              <div className="CartImg-div">
                <img src={pottage} alt="" className=" rounded" />
              </div>
            </div>

            <div className="col-11 col-md-6 d-flex justify-content-around align-items-center">
              <p
                className="fw-bold flex-nowrap  pt-3 phoneSubmenuText1"
                data-bs-toggle="popover"
                data-bs-placement="bottom"
                data-bs-custom-class="custom-popover"
                data-bs-content="Pottage, accompined with cold mineral, saussage,
                pineapple, mango juice"
              >
                Pottage
              </p>

              <p className="fw-bold pt-3">₦2,900</p>
            </div>

            <div className="col-3 d-flex align-items-center justify-content-center">
              <button
                type="button"
                className="p-2 rounded-circle border-inf border-0 generalColor"
              >
                <FontAwesomeIcon
                  icon={faCartPlus}
                  className="fw-bolder fs-5 trash"
                />
              </button>
            </div>
          </div>
          <div className=" d-flex flex-nowrap align-items-center px-md-5 col-lg-6  mb-3 mb-lg-0 overFlow">
            <div className="col-3 me-3">
              <div className="CartImg-div">
                <img src={jellof} alt="" className=" rounded" />
              </div>
            </div>

            <div className="col-11 col-md-6 d-flex justify-content-around align-items-center">
              <p
                className="fw-bold flex-nowrap  pt-3 phoneSubmenuText1"
                data-bs-toggle="popover"
                data-bs-placement="bottom"
                data-bs-custom-class="custom-popover"
                data-bs-content="jellof Rice and Plantain, accompined with cold mineral, saussage,
                pineapple, mango juice"
              >
                jellof Rice and Plantain
              </p>

              <p className="fw-bold pt-3">₦2,900</p>
            </div>

            <div className="col-3 d-flex align-items-center justify-content-center">
              <button
                type="button"
                className="p-2 rounded-circle border-inf border-0 generalColor"
              >
                <FontAwesomeIcon
                  icon={faCartPlus}
                  className="fw-bolder fs-5 trash"
                />
              </button>
            </div>
          </div>
          <div className=" d-flex flex-nowrap align-items-center px-md-5 col-lg-6  mb-3 mb-lg-0 overFlow">
            <div className="col-3 me-3">
              <div className="CartImg-div">
                <img src={imagen} alt="" className=" rounded" />
              </div>
            </div>

            <div className="col-11 col-md-6 d-flex justify-content-around align-items-center">
              <p
                className="fw-bold flex-nowrap  pt-3 phoneSubmenuText1"
                data-bs-toggle="popover"
                data-bs-placement="bottom"
                data-bs-custom-class="custom-popover"
                data-bs-content="white Rice and Meat, accompined with cold mineral, saussage,
                pineapple, mango juice"
              >
                Fried Rice and Meat
              </p>

              <p className="fw-bold pt-3">₦2,900</p>
            </div>

            <div className="col-3 d-flex align-items-center justify-content-center">
              <button
                type="button"
                className="p-2 rounded-circle border-inf border-0 generalColor"
              >
                <FontAwesomeIcon
                  icon={faCartPlus}
                  className="fw-bolder fs-5 trash"
                />
              </button>
            </div>
          </div>
          <div className=" d-flex flex-nowrap align-items-center px-md-5 col-lg-6  mb-3 mb-lg-0 overFlow">
            <div className="col-3 me-3">
              <div className="CartImg-div">
                <img src={Et5Pix} alt="" className=" rounded" />
              </div>
            </div>

            <div className="col-11 col-md-6 d-flex justify-content-around align-items-center">
              <p
                className="fw-bold flex-nowrap  pt-3 phoneSubmenuText1"
                data-bs-toggle="popover"
                data-bs-placement="bottom"
                data-bs-custom-class="custom-popover"
                data-bs-content="Fried Rice and Chicken, accompined with cold mineral, saussage,
                pineapple, mango juice"
              >
                Fufu
              </p>

              <p className="fw-bold pt-3">₦2,900</p>
            </div>

            <div className="col-3 d-flex align-items-center justify-content-center">
              <button
                type="button"
                className="p-2 rounded-circle border-inf border-0 generalColor"
              >
                <FontAwesomeIcon
                  icon={faCartPlus}
                  className="fw-bolder fs-5 trash"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHomeDishes;
