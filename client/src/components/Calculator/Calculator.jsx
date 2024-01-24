import React, { useState } from "react";
import "../Calculator/style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaCalendar } from "react-icons/fa";
import { TbArrowsUpDown } from "react-icons/tb";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Loc from "../../assets/healthicons_geo-location.svg";
import Train from "../../assets/material-symbols_train.svg";
import AutocompleteInput from "../AutocompleteInput/AutocompleteInput";

const Calculator = () => {
  const [startDate, setStartDate] = useState(null);
  return (
    <>
      <div className="calc">
        <div className="calc__inputs">
          <div className="calc__input">
            <p className="calc__text">Станция отправления</p>
            <img src={Loc} alt="location" className="calc__loc" />
            <AutocompleteInput placeholder="Станция отправления" />
            <TbArrowsUpDown color="gray" className="calc__sort" />
          </div>
          <div className="calc__input">
            <p className="calc__text">Станция назначения</p>
            <img src={Loc} alt="location" className="calc__loc" />
            <AutocompleteInput placeholder="Станция назначения" />
            <TbArrowsUpDown color="gray" className="calc__sort" />
          </div>
          <div className="calc__input">
            <p className="calc__text">Тип п/с</p>
            <img src={Train} alt="location" className="calc__loc" />
            <input type="text" placeholder="Зерновоз" className="calc__item" />
          </div>
          <div className="calc__input">
            <p className="calc__text">Выберите дату</p>
            <FaCalendar className="calc__loc-c" color="#d9a441" />

            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="calc__item"
              placeholderText="Выберите дату"
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
        <button className="calc__button" type="submit">Расчитать</button>
      </div>
    </>
  );
};

export default Calculator;
