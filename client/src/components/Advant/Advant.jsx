import React from "react";

import "../../components/Advant/style.scss";

import Container from "../../assets/cargo_container.svg";

const Advant = ({ text }) => {
  return (
    <div className="advant">
      <p className="advant__text">{text}</p>
      <img src={Container} alt="con" className="advant__img" />
    </div>
  );
};

export default Advant;
