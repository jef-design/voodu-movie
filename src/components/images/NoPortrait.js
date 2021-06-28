import React from "react";
import alternative from '../images/noportrait.jpg';
// import '../../App.css'

const NoPortrait = () => {
  return (
    <>
      <img
        src={alternative}
        alt=""
        className="noportrait"
      />
    </>
  );
};

export default NoPortrait;