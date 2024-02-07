import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

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
            Мы готовы ответить на Ваши вопросы, предоставить дополнительную
            информацию о наших услугах, а также обсудить возможности
            сотрудничества. Не стесняйтесь связаться с нами - Ваш запрос важен
            для.
          </p>
          <div className="quest__contacts">
            <div className="quest__contacts__f">
              <FaWhatsapp color="green" className="quest__contacts__i" />
              <a href="tel:+77015465788" className="quest__contacts__num">
                +7 (701) 546 57-88
              </a>
            </div>
            <div className="quest__contacts__s">
              <CiMail color="green" className="quest__contacts__i" />
              <a
                href="mailto: ceo@cargopv.kz"
                className="quest__contacts__mail"
              >
                ceo@cargopv.kz
              </a>
            </div>
          </div>
        </nav>
        <h1 className="quest__text">Остались вопросы?</h1>
        <hr className="quest__separator" />
        <p className="quest__par">
          Мы готовы ответить на Ваши вопросы, предоставить дополнительную
          информацию о наших услугах, а также обсудить возможности
          сотрудничества. Не стесняйтесь связаться с нами - Ваш запрос важен
          для.
        </p>
        <Form />
      </div>
      <Footer />
    </div>
  );
};

export default Quest;
