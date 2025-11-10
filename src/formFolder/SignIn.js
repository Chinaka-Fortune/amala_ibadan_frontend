import React from "react";
import "./Form.css";
import "../component/GeneralStyles.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const SignIn = () => {
  const [adminLoginEmail , setAdminLoginEmail] = useState('');
  const [adminLoginPassword , setAdminLoginPassword] = useState('');

  const handleAdminLoginEmail = (e) => setAdminLoginEmail(e.target.value);
  const handleAdminLoginPassword = (e) => setAdminLoginPassword(e.target.value);

  return (
    <div className="container">
      <div className="row form-input-div d-flex align-items-center justify-content-center">
        <form action="" className="col-md-10 col-lg-7">
          <div className="row row-gap-4">
            <h3 className="fw-bolder text-muted">Sign in</h3>

            <div className="col-md-6  inputDiv">
              <input
                type="email"
                className="w-100 rounded-2 py-2 ps-2 border-0 generalColor2"
                placeholder="Emails"
                value={adminLoginEmail}
                onChange={handleAdminLoginEmail}
              />
            </div>
            <div className="col-md-6  inputDiv">
              <input
                type="password"
                className="w-100 rounded-2 py-2 ps-2 border-0 generalColor2"
                placeholder="Password"
                value={adminLoginPassword}
                onChange={handleAdminLoginPassword}
              />
            </div>

            <div className=" ">
              <label htmlFor="registerAs" className="fw-bolder text-muted">
                Sign in as:
              </label>
              <input list="roleAs" id="registerAs" className="ps-2" />

              <datalist id="roleAs">
                <option value="Admin"></option>
                <option value="Manager"></option>
              </datalist>
            </div>

            <div className="d-flex justify-content-between">
                <div className="d-flex column-gap-2 align-items-center">
                    <input type="checkbox" className="mb-3"/>
                    <p className="">Remember me</p>
                </div>
                <NavLink to='/'>Forgot password?</NavLink>
            </div>
          </div>
          <input
            type="button"
            value="Login"
            className="w-100  py-1 btn btn-white generalColor2"
          />
          <p className="mt-3">I don't have an <NavLink>Account?</NavLink></p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
