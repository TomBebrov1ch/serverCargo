import React from "react";
import Train from "../../../assets/train_icon.svg";
import "../ButtonOur/style.scss";

const ButtonOur = ({ text, showImage }) => {
  return (
    <div className="button">
      <button className="button__item">
        {showImage && <img src={Train} alt="train" className="button__img" />}
        <span className="button__text">{text}</span>
      </button>
    </div>
  );
};

export default ButtonOur;
