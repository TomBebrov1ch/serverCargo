import React from "react";

import "../AboutCard/style.scss";

const Card = ({
  img,
  text,
  textS,
  par,
  className,
  textF,
  parF,
  textL,
  parL,
}) => {
  return (
    <div className="card">
      <img src={img} alt="search" className={`${className}`} />
      <div className="card__text">
        <h1 className="card__main">{text}</h1>
        <h1 className="card__main_F">{textF}</h1>
        <h2 className="card__mainS">{textS}</h2>
        <h2 className="card__mainL">{textL}</h2>
        <p className="card__par">{par}</p>
        <p className="card__par_f">{parF}</p>
        <p className="card__par_l">{parL}</p>
      </div>
    </div>
  );
};

export default Card;
