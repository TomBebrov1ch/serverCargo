import React, { useState, useEffect } from "react";
import { BeatLoader } from "react-spinners";
import Load from "../../assets/Group 41.svg";
import "../Loader/style.scss";

const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return isVisible ? (
    <div>
      <section className="loader-m">
        <nav className="loader-m__container">
          <img src={Load} alt="load" className="loader-m__img" />
          <BeatLoader color="white" size="15" className="loader-m__dots" />
        </nav>
      </section>
      <section className="loader-pc">
        <nav className="loader-pc__container">
          <img src={Load} alt="load" className="loader-pc__img" />
          <BeatLoader color="white" size="15" className="loader-pc__dots" />
        </nav>
      </section>
    </div>
  ) : null;
};

export default Loader;
