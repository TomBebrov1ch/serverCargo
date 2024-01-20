import React from "react";
import "../ButtonMore/style.scss";

const ButtonOur = ({ className, text }) => {
  return <button className={`${className}`}>{text}</button>;
};

export default ButtonOur;
