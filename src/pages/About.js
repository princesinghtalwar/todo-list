import React from "react";
// import {Profile} from './images/profile.jpg';
import ProfilePicture from './Profilelogo';
import Header from './Header';
import Qualification from "./Qualification";
import Corousel from "./Corousel";


const About = () => { 

  var date1 = new Date("07/05/2021");
	var date2 = new Date();
	var Difference_In_Time = date2.getTime() - date1.getTime();
	
	// To calculate the no. of days between two dates
	var Difference_In_Days = parseInt(Difference_In_Time / (1000 * 3600 * 24));
	var year = parseInt(Difference_In_Days/365);
	var monthss = parseInt((Difference_In_Days%365)/30);
	// var days = parseInt(((Difference_In_Days%365)%30));
	var yLabel = " Year "; 
	var mLabel = " Month ";
	// var dLabel = " Day";
	if(year>1)
		yLabel = " Years ";
	if(monthss>1)
		mLabel = " Months";
	// if(days>1)
	// 	dLabel = " Days";
	
	let experience = year +yLabel+monthss+mLabel;
  
  return (
    <>
    <Header name="PRINCE SINGH"/>
    <Corousel/>
    <div className="card mb-3" style={{maxWidth: '100%'}}>
  <div className="row g-0">
    <div className="col-md-4">
      {/* <img src={ProfilePicture} className="img-fluid rounded-start" alt="This is not available."/> */}
      <ProfilePicture/>
    </div>
    <div className="col-md-8" id="about">
      <div className="card-body">
      <h3 className="mb-4">JAVA Developer</h3>
                    <p>
                      For the past years, I've been working on backend development. I take an evaluative approach to solving issues and work through the process by trying out various solutions.
                      I'm skilled at working in teams. An enthusiastic with highly motivated and leadership skills. Always willing to innovate the new things which can improve the existing technology.
                    </p>
                    <div className="row mb-3">
                        <div className="col-sm-6 py-2"><h6>Name: <span className="text-secondary">Prince Singh</span></h6></div>
                        <div className="col-sm-6 py-2"><h6>Birthday: <span className="text-secondary">13<sup>th</sup> October</span></h6></div>
                        <div className="col-sm-6 py-2"><h6>Degree: <span className="text-secondary">Master In Computer Applications</span></h6></div>
                        <div className="col-sm-6 py-2"><h6>Experience: <span className="text-secondary" id="exp" name="exp"> {experience} </span></h6></div>
                        <div className="col-sm-6 py-2"><h6>Profile: <span className="text-secondary" id="exp" name="exp">Java Developer</span></h6></div>
                        {/* <div className="col-sm-6 py-2"><h6>Phone: <span className="text-secondary">+91 8447100263</span></h6></div> */}
                        <div className="col-sm-6 py-2"><h6>Email: <span className="text-secondary">singh.princeof@gmail.com</span></h6></div>
                        <div className="col-sm-6 py-2"><h6>Address: <span className="text-secondary">Shahdara, Delhi</span></h6></div>
                        <div className="col-sm-6 py-2"><h6>Pincode: <span className="text-secondary">110032</span></h6></div>
                        <div className="col-sm-6 py-2"> <h6>Freelance: <span className="text-secondary">Available</span></h6> </div>
                    </div>
      </div>
    </div>
  </div>
</div>
<Qualification/>
    
    </>
  );
};
export default About;