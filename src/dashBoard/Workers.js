import React from "react";
import "../dashBoard/DashBoard.css";
import "../component/GeneralStyles.css";
import { useEffect } from "react";
import * as bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";
const Workers = () => {
  useEffect(() => {
    const popoverTriggerList = document.querySelectorAll(
      '[data-bs-toggle="popover"]'
    );
    const popoverList = [...popoverTriggerList].map(
      (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
    );
  }, []);

  return (
    <div className="container-fluid">
      <div className="row mt-3 d-flex align-items-center justify-content-center">
        <h3 className="fw-bolder text-muted">Staff section</h3>
        <form action="" className="col-md-10 col-lg-7">
          <div className="row row-gap-4">
            <div className="col-md-6  inputDiv">
              <input
                type="text"
                id="inputid"
                className="w-100 rounded-2 py-2 ps-2 border-0 generalColor2"
                placeholder="First Name"
              />
              <label htmlFor="inputid"></label>
            </div>
            <div className="col-md-6  inputDiv">
              <input
                type="text"
                className="w-100 rounded-2 py-2 ps-2 border-0 generalColor2"
                placeholder="last Name"
              />
            </div>
            <div className="col-md-6  inputDiv">
              <input
                type="text"
                className="w-100 rounded-2 py-2 ps-2 border-0 generalColor2"
                placeholder="Address"
              />
            </div>
            <div className="col-md-6  inputDiv">
              <input
                type="tel"
                className="w-100 rounded-2 py-2 ps-2 border-0 generalColor2"
                placeholder="Pnone Number"
              />
            </div>
            <div className="col-md-6  inputDiv">
              <input
                type="number"
                className="w-100 rounded-2 py-2 ps-2 border-0 generalColor2"
                placeholder="Salary (₦0)"
              />
            </div>
          </div>

          <input
            type="button"
            value="Save"
            className="w-100  py-2 mt-3 btn btn-white generalColor2"
          />
        </form>
      </div>

      <div className="row overflow-x-auto mt-4">
        <table className="table">
          <thead>
            <th className="text-center">s/n</th>
            <th className="text-nowrap ">First Name</th>
            <th className="text-nowrap ">Last Name</th>
            <th>address</th>
            <th>Number</th>
            <th className="text-center">Salary</th>
            <th className="text-center">Paid</th>
            <th className=" text-center">Edit</th>
            <th>Delete</th>
          </thead>
          <tbody>
            <tr>
              <td className="text-center ">1</td>
              <td className="text-center ">benedict</td>
              <td className="text-center ">idio</td>
              <td
                className="text-nowrap text-truncate"
                data-bs-toggle="popover"
                data-bs-placement="bottom"
                data-bs-custom-class="custom-popover"
                data-bs-content="30, the line avenue, white house bustop, governor road, ikotun,
                lagos."
              >
                30, the line avenue, white house bustop, governor road, ikotun,
                lagos.
              </td>
              <td>07067979656</td>
              <td className="text-center ">₦175,000</td>
              <td className="text-center d-flex justify-content-center column-gap-2  border-0">
                <button
                  type="button"
                  className="rounded-pill btn btn-success  generalColor2"
                >
                  Paid
                </button>
              </td>
              <td className="text-center   border-0">
                <button
                  type="button"
                  className="btn btn-primary rounded generalColor2"
                >
                  <i class="bi bi-pencil-square"></i>
                </button>
              </td>
              <td className="text-center  generalColor2 border-0">
                <button
                  type="button"
                  className="rounded-circle py-2 px-3 border-0 generalColor2"
                >
                  <i className="bi bi-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Workers;
