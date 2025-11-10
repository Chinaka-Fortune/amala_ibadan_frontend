import React from 'react'
import './DashBoard.css'
import '../component/GeneralStyles.css'
const LandingDashboard = () => {
  return (
    <div className="container-fluid mt-5 ">
      <div className="row d-flex justify-content-center mx-auto" style={{width:98 + '%'}}>
        <div className="gap-4 d-flex justify-content-center  flex-wrap">
          <div className="col-10 col-sm-8 col-md-5 col-lg-4 dashboardHoverBackgroundColor d-flex justify-content-around align-items-center py-4 rounded ">
          <div className="">
            <div className="fw-bolder fs-4 text-muted">2.3 Million</div>
            <div className="fw-bolder fs-4 text-muted">Revenue</div>
          </div>
          <div className="">
            <div className="icon-box">
              <i class="bi bi-cash text-success fs-4 fw-bolder  text-muted"></i>
            </div>
          </div>
        </div>
        <div className="col-10 col-sm-8 col-md-5 col-lg-4 dashboardHoverBackgroundColor d-flex justify-content-around align-items-center py-4 rounded ">
          <div className="">
            <div className="fw-bolder fs-4 text-muted">1271</div>
            <div className="fw-bolder fs-4 text-muted">Order</div>
          </div>
          <div className="">
            <div className="icon-box">
              <i class="bi bi-bag-check-fill fs-4 fw-bolder  text-muted"></i>
            </div>
          </div>
        </div>
        <div className="col-10 col-sm-8 col-md-5 col-lg-4 dashboardHoverBackgroundColor d-flex justify-content-around align-items-center py-4 rounded ">
          <div className="">
            <div className="fw-bolder fs-4 text-muted">54</div>
            <div className="fw-bolder fs-4 text-muted">Message</div>
          </div>
          <div className="">
            <div className="icon-box">
              <i class="bi bi-envelope fs-4 fw-bolder  text-muted"></i>
            </div>
          </div>
        </div>
        <div className="col-10 col-sm-8 col-md-5 col-lg-4 dashboardHoverBackgroundColor d-flex justify-content-around align-items-center py-4 rounded ">
          <div className="">
            <div className="fw-bolder fs-4 text-muted">1007</div>
            <div className="fw-bolder fs-4 text-muted">Staffs</div>
          </div>
          <div className="">
            <div className="icon-box">
              <i class="bi bi-person-fill fs-4 fw-bolder  text-muted"></i>
            </div>
          </div>
        </div>
        </div>
      </div>
      
    </div>
  )
}

export default LandingDashboard
