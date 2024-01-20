import React, { useState, useEffect } from "react";
import "../Calculator/style.scss";
import { TbArrowsUpDown } from "react-icons/tb";

import Loc from "../../assets/healthicons_geo-location.svg";
import Train from "../../assets/material-symbols_train.svg";
import AutocompleteInput from "../AutocompleteInput/AutocompleteInput";

const Calculator = () => {
  return (
    <>
      <div className="calc">
        <div className="calc__inputs">
          <div className="calc__input">
            <p className="calc__text">Станция отправления</p>
            <img src={Loc} alt="location" className="calc__loc" />
            <AutocompleteInput />
            <TbArrowsUpDown color="gray" className="calc__sort" />
          </div>
          <div className="calc__input">
            <p className="calc__text">Станция назначения</p>
            <img src={Loc} alt="location" className="calc__loc" />
            <input
              type="text"
              placeholder="Станция назначения"
              className="calc__item"
            />
            <TbArrowsUpDown color="gray" className="calc__sort" />
          </div>
          <div className="calc__input">
            <p className="calc__text">Тип п/с</p>
            <img src={Train} alt="location" className="calc__loc" />
            <input type="text" placeholder="Зерновоз" className="calc__item" />
          </div>
          <div className="calc__input">
            <p className="calc__text">Выберите дату</p>
            <img src={Loc} alt="location" className="calc__loc" />
            <input
              type="text"
              placeholder="Выберите дату"
              className="calc__item"
            />
          </div>
          <div className="calc__input">
            <p className="calc__text">Код / Наименование груза по ЕТСНГ</p>
            <input
              type="text"
              placeholder="Выберите Код / Наименование груза"
              className="calc__item-s"
            />
          </div>
        </div>
        <button className="calc__button">Расчитать</button>
      </div>
    </>
  );
};

export default Calculator;
