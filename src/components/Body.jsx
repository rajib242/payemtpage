import React from 'react';
import BackGround from './BackGround.png'
import MainLockup from './MainLockup.jsx'
import Payment from './Payment.jsx'
import '../App.css'
import './Payment.css'
const Body=()=> {
  return (
    <>
      <div className="content-container">
        <img className="back-ground-icon" src={BackGround} alt=""  />
        <div className="body-left-content">
            <MainLockup/>
            <Payment/>
        </div>
      </div> 
    </>
  );
}

export default Body;



