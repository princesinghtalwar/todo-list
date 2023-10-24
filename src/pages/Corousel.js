import React from "react";
// import ProfilePicture from "./Profilelogo";
import logo from './images/profile.jpg';

const Corousel = () => {
    return(

        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
        {/* <ProfilePicture/> */}
      <img src={logo} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
    {/* <ProfilePicture/> */}
      <img src="" className="d-block w-100" alt="This is not available"/>
    </div>
    <div className="carousel-item">
    {/* <ProfilePicture/> */}
      <img src={logo} className="d-block w-100" alt="..."/>
    </div>
  </div>
</div>

    );
}

export default Corousel;