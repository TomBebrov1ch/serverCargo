import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Calculator/style.scss";
import ButtonOur from "../Buttons/ButtonOur/ButtonOur";
import { TbArrowsUpDown } from "react-icons/tb";

import Loc from "../../assets/healthicons_geo-location.svg";
import Train from "../../assets/material-symbols_train.svg";

import useFetchCity from "../../api/useFetchStations";

const Calculator = () => {
  const [city, setCity] = useState([]);
  const [error, setError] = useState("");

  const { fetchCity, cities } = useFetchCity();

  const apiKeyData = {
    station_type: "station",
    transport_type: "train",
  };

  const entries = Object.entries(apiKeyData);

  const sortedEntries = entries.sort((a, b) => a[1].localeCompare(b[1]));

  const sortedApiKeyData = Object.fromEntries(sortedEntries);
  useEffect(() => {
    fetchCity();
  }, []);
  return (
    <>
      <div className="calc">
        <div className="calc__inputs">
          <div className="calc__input">
            <p className="calc__text">Станция отправления</p>
            <img src={Loc} alt="location" className="calc__loc" />
            <input
              type="text"
              placeholder="Станция отправления"
              className="calc__item"
            />
            <TbArrowsUpDown color="gray" className="calc__sort" />
          </div>
          <tbody>
            {city.map((station) => (
              <tr key={station.transport_type}>
                <td>{station.station_type}</td>
                <td>{station.code}</td>
              </tr>
            ))}
          </tbody>
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
