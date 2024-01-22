import React from "react";
import Popup from "reactjs-popup";
import { Slide } from "react-awesome-reveal";

import "../PopUp/style.scss";
import "../PopUp/popup.scss";

import logo from "../../assets/CARGO_LOGO 4.svg";

const PopUp = (props) => {
  return (
    <Popup
      open={props.isOpen}
      modal
      nested
      className="popup-window"
      position="center center"
      overlayStyle={{ background: "#f2f2f2" }}
    >
      <Slide direction="up">
        <div className="window">
          <div className="window__content">
            <img src={logo} alt="logo" className="footer_m__logo" />
            <span className="window__content__first">
              Спасибо за вашу заявку!
            </span>
            <span className="window__content__second">
              В скором времени мы с вами свяжемся
            </span>
            <button className="window__content__btn" onClick={props.toggleMenu}>
              Закрыть
            </button>
          </div>
        </div>
      </Slide>
    </Popup>
  );
};

export default PopUp;
