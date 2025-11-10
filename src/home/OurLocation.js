import React from "react";
import { NavLink } from "react-bootstrap";
import "../component/GeneralStyles.css";

const OurLocation = () => {
  return (
    <div className="container-fluid mb-3">
      <div className="row ">
        <div className="d-flex align-items-center justify-content-between column-gap-2 flex-wrap gap-4">
          <h3 className="ps-4 fw-bolder display-6">Our Location</h3>
          <div className="col-md-12 d-lg-flex column-gap-2 border-right border-dark ">
            <div className="row ">
              <div className="d-md-flex justify-content-evenly align-items-center ourImpactAnimate">
                <div className="col-md-8 generalColor2 rounded-pill px-3 py-2 py-sm-3">
                  <h6 className="  ">
                    <span className="fw-bolder">
                      <i className="bi bi-geo-alt fw-bolder"></i> Address:
                    </span>
                    162 Ikotun Idimu Road, Nobex BusStop, Lagos, Nigeria.
                  </h6>
                </div>
                <div className="col-md-3 generalColor2 rounded-pill px-3 py-2 py-sm-3">
                  <NavLink className="">
                    <i className="bi bi-telephone">07047777521</i>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 d-lg-flex column-gap-2 border-right border-dark ">
            <div className="row ">
              <div className="d-md-flex justify-content-evenly align-items-center ourImpactAnimate">
                <div className="col-md-8 generalColor2 rounded-pill px-3 py-2 py-sm-3">
                  <h6 className="  ">
                    <span className="fw-bolder">
                      <i className="bi bi-geo-alt fw-bolder"></i> Address:
                    </span>
                    82, AIT road, Alagbado, Lagos, Nigeria.
                  </h6>
                </div>
                <div className="col-md-3 generalColor2 rounded-pill px-2 py-2 py-sm-3">
                  <NavLink className="">
                    <i className="bi bi-telephone">09169774773</i>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-12 d-lg-flex column-gap-2 border-right border-dark ">
            <div className="row ">
              <div className="d-md-flex justify-content-evenly align-items-center ourImpactAnimate">
                <div className="col-md-8 generalColor2 rounded-pill px-3 py-2 py-sm-3">
                  <h6 className="  ">
                    <span className="fw-bolder">
                      <i className="bi bi-geo-alt fw-bolder"></i> Address:
                    </span>
                    Grocery Bazaar (GB), 71 Meiran Road, Lagos, Nigeria.
                  </h6>
                </div>
                <div className="col-md-3 generalColor2 rounded-pill px-3 py-2 py-sm-3">
                  <NavLink className="">
                    <i className="bi bi-telephone">09066584259</i>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 d-lg-flex column-gap-2 border-right border-dark ">
            <div className="row ">
              <div className="d-md-flex justify-content-evenly align-items-center ourImpactAnimate">
                <div className="col-md-8 generalColor2 rounded-pill px-3 py-2 py-sm-3">
                  <h6 className="  ">
                    <span className="fw-bolder">
                      <i className="bi bi-geo-alt fw-bolder"></i> Address:
                    </span>
                    Grocery Bazaar(GB) supermarket OTA. 152/154 idirokeo
                    road,ojuore OTA lagos Nigeria.
                  </h6>
                </div>
                <div className="col-md-3 generalColor2 rounded-pill px-3 py-2 py-sm-3">
                  <NavLink className="">
                    <i className="bi bi-telephone">08104907018</i>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 d-lg-flex column-gap-2 border-right border-dark ">
            <div className="row ">
              <div className="d-md-flex justify-content-evenly align-items-center ourImpactAnimate">
                <div className="col-md-8 generalColor2 rounded-pill px-3 py-2 py-sm-3">
                  <h6 className="  ">
                    <span className="fw-bolder">
                      <i className="bi bi-geo-alt fw-bolder"></i> Address:
                    </span>
                    Grocery Bazaar (GB), Plot G, Block 33, Unity bus stop,
                    Command road, Ipaja, Lagos Nigeria.
                  </h6>
                </div>
                <div className="col-md-3 generalColor2 rounded-pill px-3 py-2 py-sm-3">
                  <NavLink className="">
                    <i className="bi bi-telephone">09124454075</i>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 d-lg-flex column-gap-2 border-right border-dark ">
            <div className="row ">
              <div className="d-md-flex justify-content-evenly align-items-center ourImpactAnimate">
                <div className="col-md-8 generalColor2 rounded-pill px-3 py-2 py-sm-3">
                  <h6 className="  ">
                    <span className="fw-bolder">
                      <i className="bi bi-geo-alt fw-bolder"></i> Address:
                    </span>
                    171, Lagos-Abeokuta Expressway, Iyana Ipaja Lagos Nigeria
                  </h6>
                </div>
                <div className="col-md-3 generalColor2 rounded-pill px-3 py-2 py-sm-3">
                  <NavLink className="">
                    <i className="bi bi-telephone">09124454075</i>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurLocation;
