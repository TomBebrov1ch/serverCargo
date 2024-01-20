import React from "react";

import "../AboutCard/style.scss";

const Card = ({ img, text, par }) => {
  return (
    <div className="card">
      <img src={img} alt="search" className="card__img" />
      <div className="card__text">
        <h1 className="card__main">{text}</h1>
        <p className="card__par">{par}</p>
      </div>
    </div>
  );
};

export default Card;
