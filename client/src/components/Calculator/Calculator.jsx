import React, { useState, useEffect, useRef } from "react";
import "../Calculator/style.scss";
import emailjs from "@emailjs/browser";
import { FaCalendar } from "react-icons/fa";
import { TbArrowsUpDown } from "react-icons/tb";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ru from "date-fns/locale/ru";
import PopUp from "../PopUp/PopUp";

import Loc from "../../assets/healthicons_geo-location.svg";
import Train from "../../assets/material-symbols_train.svg";
import AutocompleteInput from "../AutocompleteInput/AutocompleteInput";
import { Slide } from "react-awesome-reveal";

registerLocale("ru", ru);
const Calculator = () => {
  const [startDate, setStartDate] = useState(null);
  const [firstStation, setFirtsStation] = useState("");
  const [secondStation, setSecondStation] = useState("");
  const [selectedCargo, setSelectedCargo] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const keywords = [
    "Крытый вагон",
    "Вагон-рефрижератор",
    "Вагон-термос",
    "Полувагон",
    "Зерновоз",
  ];

  useEffect(() => {
    const filtered = keywords.filter((item) =>
      item.toLowerCase().includes(selectedCargo.toLowerCase())
    );
    setFilteredSuggestions(filtered);
  }, [selectedCargo]);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID_SECOND,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.error(error.text);
        }
      );
    setFirtsStation("");
    setSecondStation("");
    setStartDate("");
    setSelectedCargo("");
  };

  const handleSelectFirstStation = (value) => {
    setFirtsStation(value);
  };

  const handleSelectSecondStation = (value) => {
    setSecondStation(value);
  };

  const handleSelectCargo = (value) => {
    setSelectedCargo(value);
    setFilteredSuggestions([]);
    setIsOpen(false);
  };

  const handleCargoInputFocus = () => {
    setFilteredSuggestions(keywords);
    setIsOpen(true);
  };

  const handleClickOutside = (event) => {
    if (!containerRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const containerRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="calc">
          <div className="calc__inputs">
            <div className="calc__input">
              <p className="calc__text">Станция отправления</p>
              <img src={Loc} alt="location" className="calc__loc" />
              <AutocompleteInput
                placeholder="Станция отправления"
                name="firstStation"
                value={firstStation}
                onChange={handleSelectFirstStation}
              />
              <TbArrowsUpDown color="gray" className="calc__sort" />
            </div>
            <div className="calc__input">
              <p className="calc__text">Станция назначения</p>
              <img src={Loc} alt="location" className="calc__loc" />
              <AutocompleteInput
                placeholder="Станция назначения"
                name="secondStation"
                value={secondStation}
                onChange={handleSelectSecondStation}
              />
              <TbArrowsUpDown color="gray" className="calc__sort" />
            </div>
            <div className="calc__input" ref={containerRef}>
              <p className="calc__text">Тип п/с</p>
              <img src={Train} alt="location" className="calc__loc" />
              <input
                type="text"
                placeholder="Выберите тип поезда"
                className="calc__item"
                name="selectedCargo"
                value={selectedCargo}
                onChange={(e) => setSelectedCargo(e.target.value)}
                onFocus={handleCargoInputFocus}
              />
              {isOpen && (
                <ul className="auto">
                  {filteredSuggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      onClick={() => handleSelectCargo(suggestion)}
                      className="auto__item"
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="calc__input">
              <p className="calc__text">Выберите дату</p>
              <FaCalendar className="calc__loc-c" color="#d9a441" />

              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="calc__item"
                placeholderText="Выберите дату"
                value={startDate}
                name="date"
                locale="ru"
              />
            </div>
            <div className="calc__input">
              <p className="calc__text">Наименование груза по ЕТСНГ</p>
              <input
                type="text"
                placeholder="Наименование груза"
                className="calc__item-s"
                name="cargo"
              />
            </div>
          </div>
          <button className="calc__button" type="submit">
            Отправить
          </button>
          <Slide direction="up" in={showPopup}>
            <PopUp isOpen={showPopup} toggleMenu={togglePopup} />
          </Slide>
        </div>
      </form>
    </>
  );
};

export default Calculator;
