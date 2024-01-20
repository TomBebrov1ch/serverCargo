import React from "react";

import "../TextAb/style.scss";

const TextAb = ({ text, par }) => {
  return (
    <>
      <h1 className="ab__text">{text}</h1>
      <hr className="ab__separatop" />
      <p className="ab__par">{par}</p>
    </>
  );
};

export default TextAb;
