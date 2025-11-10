import React from "react";
import tapioka from "../images/launch1.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";
import '../dashBoard/DashBoard.css'
const Cart = () => {
  return (
    <div className="container-fluid container-xl " style={{minHeight:100 + 'vmin'}}>
      <div className="row px-2 px-md-4 rounded d-flex justify-content-center akign-items-center" >
        <h3 className="mt-2 fw-bold">Your Choice</h3>
        <div className="col-12 my-3  generalColor py-2">
          <div className="row">
            <div className="overFlow d-flex flex-nowra align-items-center justify-content-evenly w-100">
              <div className="col-4 col-md-2">
                <div className="CartImg-div ">
                  <img src={tapioka} alt="" className=" rounded" />
                </div>
              </div>

              <div className="col-8 col-md-2 col-lg-2 ">
                <p className="fw-bold text-nowrap text-truncate  pt-3">
                  Fried Rice and Chicken
                </p>
                
              </div>

              <div className="col-3 col-md-2 col-lg-2"><p className="fw-bold pt-3 ps-md-4">₦2,900</p></div>

              <div className="col-5 col-md-2  fw-bolder text-nowrap ">
                Qty: <input type="number" className="ps-1" style={{width:3 + 'rem'}}/>
              </div>

              <div className="col-5 col-md-2 col-lg-2"><p className="fw-bold pt-3 text-nowrap">Total: ₦2,900</p></div>

              <div className="col-2  d-flex align-items-center justify-content-center">
                <button
                  type="button"
                  className="p-2 rounded-circle border-inf border-0 generalColor"
                >
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="fw-bolder fs-5 trash"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row d-flex justify-content-between align-items-center my-3 px-md-4">
        <form className="col-sm-9 col-lg-4">
                  <textarea
                    name=""
                    id=""
                    placeholder="special Request (Optional)..."
                    className="rounded-2 p-3 textAreaPost"
                    style={{ resize: "none" }}
                  ></textarea>
                  
                </form>
          <div className="col-12 d-flex justify-content-between">
            <div className="">
                <h5>No. of items: 1</h5>
            <h5>Total Amount: ₦2,900</h5>
            </div>
            <div className=""><input type="submit" value="Pay" className="w-100 py-2 px-sm-5 px-4 py-sm-3 border-0 generalColor rounded generalBtnColor fw-bolder" /></div>
          </div>
        </div>
      </div>
    
  );
};

export default Cart;
