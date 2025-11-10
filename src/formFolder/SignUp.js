import React from "react";
import "./Form.css";
import "../component/GeneralStyles.css";
import { NavLink } from "react-router-dom";
const SignUp = () => {
  return (
    <div className="container">
      <div className="row form-input-div d-flex align-items-center justify-content-center">
        <form action="" className="col-md-10 col-lg-7">
          <div className="row row-gap-4">
            <h3 className="fw-bolder text-muted">Sign up</h3>
            <div className="col-md-6  inputDiv">
              <input
                type="text"
                id="inputid"
                className="w-100 rounded-2 py-2 ps-2 border-0 generalColor2"
                placeholder="Names"
              />
              <label htmlFor="inputid"></label>
            </div>
            <div className="col-md-6  inputDiv">
              <input
                type="email"
                className="w-100 rounded-2 py-2 ps-2 border-0 generalColor2"
                placeholder="Emails"
              />
            </div>
            <div className="col-md-6  inputDiv">
              <input
                type="password"
                className="w-100 rounded-2 py-2 ps-2 border-0 generalColor2"
                placeholder="Password"
              />
            </div>
            <div className="col-md-6  inputDiv">
              <input
                type="password"
                className="w-100 rounded-2 py-2 ps-2 border-0 generalColor2"
                placeholder="Comfirm Password"
              />
            </div>
          </div>

            <div className=" mt-4">
              <label htmlFor="registerAs" className="fw-bolder text-muted">
                Register as:
              </label>
              <input list="roleAs" id="registerAs" className="ps-2" />

              <datalist id="roleAs">
                <option value="Admin"></option>
                <option value="Manager"></option>
              </datalist>
            </div>
            
          <div className="d-flex align-items-center">
            <div className="">
              <input type="checkbox" />
            </div>
            <div className="pt-3">
              <p className="ps-3">I agree to the terms and condition</p>
            </div>

          </div>

          <input
            type="button"
            value="Submit"
            className="w-100  py-1 btn btn-white generalColor2"
          />

          <p className="mt-3">
            I already have an <NavLink>Account?</NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
