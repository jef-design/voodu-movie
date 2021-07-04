import React from "react";
import alternative from '../images/no-poster-available.jpg';
// import '../../App.css'

const AlternativeImage = () => {
  return (
    <>
      <img
        src={alternative}
        alt=""
        className="alternative_img"
      
      />
    </>
  );
};

export default AlternativeImage;