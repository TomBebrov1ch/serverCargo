import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import copy from "clipboard-copy";

import "../AboutScreen/styles/style.scss";

import "../QuestionScreen/styles/style.scss";
import Form from "../../components/Form/Form.jsx";
import Footer from "../../components/Footer/Footer";

const Quest = () => {
  return (
    <div className="quest" id="quest">
      <div className="container">
        <nav className="quest__content">
          <h1 className="quest__content__text">Остались вопросы?</h1>
          <hr className="quest__content__separator" />
          <p className="quest__content__par">
            Cargo Express PV — это компания с собственным вагонным парком,
            сфокусированная на предоставление безупречного сервиса казахстанским
            грузоотправителям.
          </p>
          <div className="quest__contacts">
            <div className="quest__contacts__f">
              <FaWhatsapp color="green" className="quest__contacts__i" />
              <p className="quest__contacts__num">+7 (775) 993-25-87</p>
            </div>
            <div className="quest__contacts__s">
              <CiMail color="green" className="quest__contacts__i" />
              <p className="quest__contacts__mail">ruslanmakhmatov@gmail.com</p>
            </div>
          </div>
        </nav>
        <h1 className="quest__text">Остались вопросы?</h1>
        <hr className="quest__separator" />
        <p className="quest__par">
          Cargo Express PV — это компания с собственным вагонным парком,
          сфокусированная на предоставление безупречного сервиса казахстанским
          грузоотправителям.
        </p>
        <Form />
      </div>
      <Footer />
    </div>
  );
};

export default Quest;
