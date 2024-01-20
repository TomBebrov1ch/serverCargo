import React from "react";

import "../Vagon/style.scss";

import Vagons from "../../assets/Services.svg";

const Vagon = ({ text }) => {
  return (
    <div className="vagon">
      <img src={Vagons} alt="" className="vagon__img" />
      <h1 className="vagon__text">{text}</h1>
    </div>
  );
};

export default Vagon;
