import React from "react";
import { Link } from "react-scroll";

import Card from "../../components/AboutCard/AboutCard.jsx";
import ButtonMore from "../../components/Buttons/ButtonMore/ButtonMore.jsx";
import TextAb from "../../components/TextAb/TextAb.jsx";

import First from "../../assets/Group 9.svg";
import Search from "../../assets/Group 25.svg";
import Train from "../../assets/Group 27.svg";
import Shield from "../../assets/Group 29.svg";
import firstVag from "../../assets/Services.webp";
import secondVag from "../../assets/Group-454.webp";
import thirdVag from "../../assets/Frame-45.webp";
import fourVag from "../../assets/Group-454 (1).webp";

import "./styles/style.scss";
import "../../components/Vagon/style.scss";
import Advant from "../../components/Advant/Advant.jsx";

const AboutScreen = () => {
  return (
    <div className="about" id="about">
      <TextAb
        text="О Нас"
        par="Мы предоставляем высококачественные и профессиональные услуги в сфере грузоперевозок, специализируясь на перевозках железнодорожным транспортом.
"
      />
      <div className="about__card-pc">
        <Card
          img={First}
          text="Опыт и Экспертиза"
          par="Мы обладаем богатым опытом в организации грузоперевозок по железной дороге из Казахстана. Наша команда состоит из профессионалов, готовых решать самые сложные задачи в области логистики."
        />
        <Card
          img={Search}
          text="Безопасность и Надежность"
          par="Мы ценим доверие наших клиентов и стремимся обеспечить максимальную безопасность перевозок. Все наши операции выполняются в соответствии с высокими стандартами качества, гарантируя надежность доставки ваших грузов."
        />
        <Card
          img={Train}
          textS="Клиентоориентированность"
          par="Мы гордимся тем, что наша команда всегда готова выслушать ваши потребности и предложить наилучшее решение. Мы ценим каждого клиента и стремимся устанавливать долгосрочные партнерские отношения."
        />
        <Card
          img={Shield}
          text="Инновации и Технологии"
          par="Мы следим за последними тенденциями в сфере логистики и используем современные технологии для оптимизации наших процессов. Это позволяет нам повысить эффективность перевозок и обеспечить оперативность обслуживания."
        />
      </div>
      <Link>
        <ButtonMore className={"outline"} text="Подробнее" />
      </Link>
      <div className="about__vagon" id="vagon">
        <div className="about__vagon__content">
          <h1 className="about__text-s">Наши Услуги</h1>
          <hr className="about__separatop" />
          <p className="about__par-s">
            CargoExpress PV гордится своей способностью эффективно сотрудничать
            с собственниками различных типов вагонов, предоставляя клиентам
            уникальные возможности для перевозки грузов. Мы ценим многообразие в
            транспортном парке и обеспечиваем гибкость в выборе вагонов для
            наших клиентов.
          </p>
        </div>
        <div className="about__vagon__card">
          <div className="vagon">
            <img src={firstVag} alt="" className="vagon__img" />
            <h1 className="vagon__text">Крытый вагон</h1>
          </div>
          <div className="vagon">
            <img src={secondVag} alt="" className="vagon__img" />
            <h1 className="vagon__text-s">Вагон рефрижератор</h1>
          </div>
          <div className="vagon">
            <img src={thirdVag} alt="" className="vagon__img" />
            <h1 className="vagon__text">Вагон-термос</h1>
          </div>
          <div className="vagon">
            <img src={fourVag} alt="" className="vagon__img" />
            <h1 className="vagon__text">Полувагон</h1>
          </div>
        </div>
      </div>
      <div className="about__advant">
        <TextAb
          text="Наши Приемущества"
          par="С CargoExpress PV каждый тип вагона становится инструментом для успешной и эффективной перевозки вашего груза. Мы готовы предоставить вам не только услуги, но и партнерство, основанное на взаимном доверии и профессионализме."
        />
        <div className="about__advant__cards">
          <Advant textS="Универсальность Вагонов" />
          <Advant text="Экспертиза в Разнообразных Грузах" />
          <Advant text="Индивидуальные Решения для Каждого Груза" />
          <Advant textS="Географическая Доступность" />
        </div>
        <Link smooth to="quest">
          <button className="about__advant__btn">Связаться с нами</button>
        </Link>
      </div>
    </div>
  );
};

export default AboutScreen;
