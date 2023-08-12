import React from 'react';
import '../App.css'
import DropDown from './DropDown.svg'
import Search from './Search.svg'
const Navbar = () => {
  return (
    <>
      <div className="coding-assignment">
      <div className="nav-bar">
        <div className="container">
          <div className="left-content">
            <div className="logo">
              <div className="edyoda">EDYODA</div>
            </div>
            <div className="courses">
              <div className="text">Courses</div>
              <img
                className="icon-chevron-down"
                alt=""
                src={DropDown}
              />
            </div>
            <div className="courses">
              <div className="text">Programs</div>
              <img
                className="icon-chevron-down"
                alt=""
                src={DropDown}
              />
            </div>
          </div>
          <div className="left-content">
            <img className="icon-chevron-down" alt="" src={Search} />
            <div className="log-in">
              <b className="text">Log in</b>
            </div>
            <div className="primary-button">
              <b className="text3">JOIN NOW</b>
            </div>
          </div>
        </div>
      </div>
      </div>
      </>
    );
}
export default Navbar;
