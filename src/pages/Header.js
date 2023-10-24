import React from 'react';
import ProfilePicture from './Profilelogo';
import TypeEffect from './TypeEffect'
 
const Header = (props) => {
   return (
    <>
    <div className="container-fluid bg-primary d-flex align-items-center mb-5 py-5"  style={{"minHeight": "100vh"}}>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5 px-5 pl-lg-0 pb-5 pb-lg-0">
                    {/* <img className="img-fluid w-100 rounded-circle shadow-sm" src="img/profile.jpg" alt=""> */}
                    <ProfilePicture/>
                </div>
                <div className="col-lg-7 text-center text-lg-left">
                    <h3 className="text-white font-weight-normal mb-3">I'm</h3>
                    <h1 className="display-3 text-uppercase text-primary mb-2" style={{"-webkit-text-stroke": "2px #ffffff"}}>{props.name}</h1>
                    <TypeEffect title='Java Developer'/>
                    {/* <h1 className="typed-text-output d-inline font-weight-lighter text-white"></h1> */}
                    {/* <div className="typed-text d-none">JAVA Developer</div> */}
                </div>
            </div>
        </div>
    </div>
    </>
   );
};
 
export default Header;