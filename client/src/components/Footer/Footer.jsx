import React from "react";
import { Link } from "react-scroll";

import "../Footer/style.scss";

import logo from "../../assets/CARGO_LOGO 4.svg";
import spark from "../../assets/spark_logo.svg";

const Footer = () => {
  return (
    <footer>
      <section className="footer_m">
        <img src={logo} alt="logo" className="footer_m__logo" />
        <nav className="footer_m__nav">
          <Link smooth to="main">
            <h1 className="footer_m__text">Главная</h1>
          </Link>
          <Link smooth to="about">
            <h1 className="footer_m__text">О нас</h1>
          </Link>
          <Link smooth to="vagon">
            <h1 className="footer_m__text">Наши вагоны</h1>
          </Link>
          <Link smooth to="quest">
            <h1 className="footer_m__text">Контакты</h1>
          </Link>
          <Link smooth to="main">
            <button className="footer_m__btn">Вверх</button>
          </Link>
        </nav>
        <div className="footer_m__items">
          <hr className="footer_m__separator" />
          <p className="footer_m__com">©Cargo Express PV 2024</p>
          <a href="https://sparkstudio.kz/">
            <img src={spark} alt="" className="footer_m__logo-s" />
          </a>
        </div>
      </section>
      <div className="footer">
        <Link smooth to="main">
          <img src={logo} alt="logo" className="footer__logo" />
        </Link>
        <nav className="footer__nav">
          <Link smooth to="main">
            <h1 className="footer__text">Главная</h1>
          </Link>
          <Link smooth to="about">
            <h1 className="footer__text">О нас</h1>
          </Link>
          <Link smooth to="vagon">
            <h1 className="footer__text">Наши вагоны</h1>
          </Link>
          <Link smooth to="quest">
            <h1 className="footer__text">Контакты</h1>
          </Link>
          <Link smooth to="main">
            <button className="footer__btn">Вверх</button>
          </Link>
        </nav>
      </div>
      <section className="footer__items-pc">
        <hr className="footer__separator-pc" />
        <p className="footer__com-pc">©Cargo Express PV 2024</p>
        <a href="https://sparkstudio.kz/">
          <img src={spark} alt="comp" className="footer__logo-pc" />
        </a>
      </section>
    </footer>
  );
};

export default Footer;
