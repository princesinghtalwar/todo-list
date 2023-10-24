import React from 'react';
import logo from './images/profile.jpg'; // Tell webpack this JS file uses this image

console.log(logo); // /logo.84287d09.png

const ProfilePicture = () => {
  // Import result is the URL of your image
  return <img src={logo} alt="Logo" style={{"height" : "70%", "width" : "100%","borderRadius":"50%"}} />;
}

export default ProfilePicture; 