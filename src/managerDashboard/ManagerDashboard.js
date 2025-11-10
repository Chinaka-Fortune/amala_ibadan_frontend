import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell} from "@fortawesome/free-solid-svg-icons";
import userImage from "../dashBoard/33-336800_chef-hat-png-download-chef-cartoon-head-png.png";

import "../dashBoard/DashBoard.css";
import "../component/GeneralStyles.css";

import { NavLink } from "react-router-dom";

import ManagerLandingDashBoard from './ManagerLandingDashboard'
import ManagerMessage from './ManagerMessage'
import ManagerOrder from './ManagerOrder'
import ManagerPost from './ManagerPost'
import ManagerWorkers from "./ManagerWorkers";

const ManagerDashboard = () => {

    const [managerActiveFile, setManagerActiveFileActiveFile] = useState(null)
    
      const handleClickButton = (targetedFile) =>{
        if(managerActiveFile === targetedFile){
          setManagerActiveFileActiveFile(null)
        }else{
          setManagerActiveFileActiveFile(targetedFile)
        }
      }
  return (
    <>
      <div className="heroContainer mb-5">
        <div className="topBar">
          <div className="logo">
            <h2 className="h2">Brand</h2>
          </div>
          <div className="search">
            <input type="search" name="" id="search" placeholder="search..." />
            <label htmlFor="search">
              <FontAwesomeIcon icon={faSearch} className="searchIcon" />
            </label>
          </div>
          <FontAwesomeIcon icon={faBell} className="navBell" />
          <div className="userDiv">
            <img src={userImage} alt="" />
          </div>
        </div>

        <div className="sideBar">
          <ul>
            <li onClick={() => handleClickButton('ManagerLandingDashBoard')}>
              <NavLink className="NavList">
                <i class="bi bi-grid-3x3-gap-fill"></i>
                <div className="fw-bolder fs-4">Dashboard</div>
              </NavLink>
            </li>
            <li onClick={() => handleClickButton('ManagerPost')}>
              <NavLink className="NavList">
                <i class="bi bi-pencil-square"></i>
                <div className="fw-bolder">Post</div>
              </NavLink>
            </li>
            <li onClick={() => handleClickButton('ManagerOrder')}>
              <NavLink className="NavList">
                <i class="bi bi-bag-check-fill"></i>
                <div className="fw-bolder">Order</div>
              </NavLink>
            </li>
            <li onClick={() => handleClickButton('ManagerMessage')}>
              <NavLink className="NavList">
                <i class="bi bi-envelope-at"></i>
                <div className="fw-bolder">Message</div>
              </NavLink>
            </li>
            <li onClick={() => handleClickButton('ManagerWorkers')}>
              <NavLink className="NavList">
                <i class="bi bi-person-fill"></i>
                <div className="fw-bolder">Staffs</div>
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="main">

          {managerActiveFile === 'ManagerLandingDashBoard' && <ManagerLandingDashBoard /> } 
          {managerActiveFile === 'ManagerMessage' && <ManagerMessage />} 
          {managerActiveFile === 'ManagerOrder' && <ManagerOrder />} 
          {managerActiveFile === 'ManagerPost' && <ManagerPost />} 
          {managerActiveFile === 'ManagerWorkers' && <ManagerWorkers />} 
        </div>
      </div>
    </>

  )
}

export default ManagerDashboard
