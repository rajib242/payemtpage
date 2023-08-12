import React from 'react';
import Img1 from './Img1.png'
import Img2 from './Img2.png'
import Img3 from './Img3.png'
import Img4 from './Img4.png'
import Img5 from './Img5.png'
const MainLockup = () => {
    return (
        <>
        <div className="mainLockup">
            <div className="header">

                <div className="accessCuratedCoursesWorthWrapper">
                    <div className="accessCuratedCourses1">Access curated courses worth</div>
                </div>
                <div className="parent">
                    <span className="atJust">₹ 18,500</span>
                <div className="frameChild" />
                    <div className="atJustWrapper">
                        <span className="atJust"> at just</span>
                    </div>
                    <div className="wrapper">
                        <span className="atJust"> ₹99</span>
                    </div>
                    <div className="perYearWrapper">
                        <div className="atJust">per year!</div>
                    </div>
                 </div>

               </div>

               <div className="pointer1">
                     <div className="icon">
                         <img className="iconChild" src={Img1} alt=""/>
                    </div>
                <div className="textContainer6">
                      <div className="main-item">
                            <span className="span">{`100+ `}</span>
                            <span className="jobRelevantCourses">
                            <span>Job relevant courses</span>
                            <span className="span1">{` `}</span>
                          </span>
                    </div>
                </div>
            </div>




              <div className="pointer1">
                     <div className="icon">
                         <img className="iconChild" src={Img2} alt=""/>
                    </div>
                <div className="textContainer6">
                      <div className="main-item">
                            <span className="span">{`20,000+ `}</span>
                            <span className="jobRelevantCourses">
                            <span>Hours of content</span>
                            <span className="span1">{` `}</span>
                          </span>
                    </div>
                </div>
            </div>

               <div className="pointer3">
                <div className="icon2">
                    <div className="vectorParent">
                        <img className="iconChild2" alt="" src={Img3} />
                        <div className="live">live</div>
                    </div>
                </div>
                <div className="textContainer8">
                    <div className="main-item1">
                        <span className="span">{`Exclusive `}</span>
                        <span className="jobRelevantCourses">webinar access</span>
                    </div>
                </div>
            </div>




             <div className="pointer1">
                     <div className="icon">
                         <img className="iconChild" src={Img4} alt=""/>
                    </div>
                <div className="textContainer6">
                      <div className="main-item">
                            <span className="jobRelevantCourses">
                            <span>Scholarship worth</span>
                            <span className="spann">{` ₹94,500 `}</span>
                            <span className="span1">{` `}</span>
                          </span>
                    </div>
                </div>
            </div>




             <div className="pointer5">
            <div className="icon">
                <div className="vectorParent">
                    <img className="vectorIcon" alt="" src={Img5}/>
                    <div className="ads">ADS</div>
                    <div className="groupChild" />
                </div>
            </div>
            <div className="textContainer1">
                <div className="text1">
                    <span className="span">{`Ad Free `}</span>
                    <span className="learningExperience">learning experience</span>
                </div>
            </div>
        </div>



            </div>
            </>
    );
};

export default MainLockup;
