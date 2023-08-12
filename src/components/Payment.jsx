import React from 'react'
import RadioButtom from './Radio Button.png'
import RadioButtomGreen from './Radio Buttongreen.png'
import IconClock from './Icon Clock.png'
import samelogo from './samelogo.png'

import Az from './Az.png'
const Payment = ()=>{
	return (
    <>
        <div className="main-div">
            <div className="firstclass">
                <div className="SignUpmain">

                     <div className="progressBar">
                           <div className="stage1">
                              <div className="icon1">
                                   <div className="div">1</div>
                             </div>
                      <div className="text12">Sign Up</div>
                  </div>
                         <div className="stage1">
                      <div className="icon1">
                    <div className="div">2</div>
                </div>
                <div className="text12">Subscribe</div>
            </div>
        </div>

               </div>

               <div className="second">
                   Select your subcription plan
               </div>


               <div className="textField11">
            <img className="radioButtonIcon1" alt="" src={RadioButtom} />
            <div className="textContainer1">
                <div className="text5">12 Months Subscription</div>
                <div className="rightTextContainer1">
                    <div className="topText">
                        <div className="text6">Total</div>
                        <div className="text7">₹99</div>
                    </div>
                    <div className="bottomText">
                        <div className="text8">₹8</div>
                        <div className="text9">/mo</div>
                    </div>
                </div>
            </div>
            <div className="tago">
                <div className="offerExpired">Offer expired</div>
            </div>
        </div>


         <div className="textField21">
            <img className="radioButtonIcon1" alt="" src={RadioButtomGreen} />
            <div className="textContainer1">
                <div className="text5">12 Months Subscription</div>
                <div className="rightTextContainer1">
                    <div className="topText">
                        <div className="text6">Total</div>
                        <div className="text7">₹179</div>
                    </div>
                    <div className="bottomText">
                        <div className="text8">₹15</div>
                        <div className="text9">/mo</div>
                    </div>
                </div>
            </div>
            <div className="tag">
                <div className="recommended">Recommended</div>
            </div>
        </div>
 
          
          <div className="textField21">
            <img className="radioButtonIcon1" alt="" src={samelogo} />
            <div className="textContainer1">
                <div className="text5">6 Months Subscription</div>
                <div className="rightTextContainer1">
                    <div className="topText">
                        <div className="text6">Total</div>
                        <div className="text7">₹149</div>
                    </div>
                    <div className="bottomText">
                        <div className="text8">₹25</div>
                        <div className="text9">/mo</div>
                    </div>
                </div>
            </div>
        </div>


         <div className="textField21">
            <img className="radioButtonIcon1" alt="" src={samelogo} />
            <div className="textContainer1">
                <div className="text5">3 Months Subscription</div>
                <div className="rightTextContainer1">
                    <div className="topText">
                        <div className="text6">Total</div>
                        <div className="text7">₹99</div>
                    </div>
                    <div className="bottomText">
                        <div className="text8">₹33</div>
                        <div className="text9">/mo</div>
                    </div>
                </div>
            </div>
        </div>



          <div className="summaryContainer1">
            <div className="alertHeader">
                <div className="text5">Subscription Fee</div>
                <div className="text6">₹18,500</div>
            </div>
            <div className="alert">
                <div className="alertHeader">
                    <div className="text7">Limited time offer</div>
                    <div className="text8">- ₹18,401</div>
                </div>
                <div className="alertBody">
                    <img className="iconClock1" alt="" src={IconClock} />
                    <div className="text5">Offer valid till 25th March 2023</div>
                </div>
            </div>
            <div className="alertHeader">
                <div className="text5">
                    <span className="total">Total </span>
                    <span>(Incl. of 18% GST)</span>
                </div>
                <b className="rightText1">₹149</b>
            </div>

            </div>
           
           <div className="allbutton">
               <div className="secondaryButton">
                 <b className="lastbutton">cancel</b>
              </div>

              <div className="primaryButton">
                 <b className="lastbutton">proceed to pay</b>
              </div>
       </div>


          <div className="iconContainer1">
           <div className="razorpayIcon">
              <img className="razorpayIconChild" alt="" src={Az} />
           </div>
        </div>

        

            </div>
        </div>    
      </>
     
	);
}
export default Payment;