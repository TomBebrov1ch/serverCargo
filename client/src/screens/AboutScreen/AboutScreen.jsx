import React from "react";
import { Link } from "react-scroll";

import Card from "../../components/AboutCard/AboutCard.jsx";
import ButtonMore from "../../components/Buttons/ButtonMore/ButtonMore.jsx";
import TextAb from "../../components/TextAb/TextAb.jsx";

import First from "../../assets/Group 9.svg";
import Search from "../../assets/Group 25.svg";
import Train from "../../assets/Group 27.svg";
import Shield from "../../assets/Group 29.svg";
import Vagon from "../../components/Vagon/Vagon.jsx";

import "./styles/style.scss";
import Advant from "../../components/Advant/Advant.jsx";

const AboutScreen = () => {
  return (
    <div className="about" id="about">
      <TextAb
        text="О Нас"
        par="Cargo Express PV — это компания с собственным вагонным парком, сфокусированная на предоставление безупречного сервиса казахстанским грузоотправителям.
"
      />
      <div className="about__card-pc">
        <Card
          img={First}
          text="Cвоевременная подача вагонов"
          par="Интерактивная дислокация позволяет чётко оценивать сроки поставки вагонов под погрузку и доставку."
        />
        <Card
          img={Search}
          text="Cвоевременная подача вагонов"
          par="Интерактивная дислокация позволяет чётко оценивать сроки поставки вагонов под погрузку и доставку."
        />
        <Card
          img={Train}
          text="Cвоевременная подача вагонов"
          par="Интерактивная дислокация позволяет чётко оценивать сроки поставки вагонов под погрузку и доставку."
        />
        <Card
          img={Shield}
          text="Cвоевременная подача вагонов"
          par="Интерактивная дислокация позволяет чётко оценивать сроки поставки вагонов под погрузку и доставку."
        />
      </div>
      <Link>
        <ButtonMore className={"outline"} text="Подробнее" />
      </Link>
      <div className="about__vagon" id="vagon">
        <div className="about__vagon__content">
          <h1 className="about__text-s">Наши Вагоны</h1>
          <hr className="about__separatop" />
          <p className="about__par-s">
            Cargo Express PV — это компания с собственным вагонным парком,
            сфокусированная на предоставление безупречного сервиса казахстанским
            грузоотправителям.
          </p>
        </div>
        <div className="about__vagon__card">
          <Vagon text={"Услуга 1"} />
          <Vagon text={"Услуга 2"} />
          <Vagon text={"Услуга 3"} />
          <Vagon text={"Услуга 4"} />
        </div>
      </div>
      <div className="about__advant">
        <TextAb
          text="Наши Приемущества"
          par="Cargo Express PV — это компания с собственным вагонным парком,
          сфокусированная на предоставление безупречного сервиса казахстанским
          грузоотправителям."
        />
        <div className="about__advant__cards">
          <Advant text="Высококвалифицированный персонал, с многолетним опытом работы." />
          <Advant text="Высококвалифицированный персонал, с многолетним опытом работы." />
          <Advant text="Высококвалифицированный персонал, с многолетним опытом работы." />
          <Advant text="Высококвалифицированный персонал, с многолетним опытом работы." />
        </div>
        <Link smooth to="quest">
          <button className="about__advant__btn">Связаться с нами</button>
        </Link>
      </div>
    </div>
  );
};

export default AboutScreen;
