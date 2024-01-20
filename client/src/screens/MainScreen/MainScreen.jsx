import { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-scroll";
import "./styles/mainscreen.scss";
import MainTrain from "../../assets/main_train.webp";
import TrainPc from "../../assets/main_train-pc.webp";

import Header from "../../components/Header/Header.jsx";
import Menu from "../../components/Menu/Menu.jsx";
import ButtonOur from "../../components/Buttons/ButtonOur/ButtonOur.jsx";
import ButtonMore from "../../components/Buttons/ButtonMore/ButtonMore.jsx";
import Calculator from "../../components/Calculator/Calculator";
import Loader from "../../components/Loader/Loader";

const MainScreen = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleMenu() {
    setIsOpen(!isOpen);
  }
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "";
    }

    return () => {
      document.body.style.overflowY = "";
    };
  }, [isOpen]);
  return (
    <>
      <section className="mob-screen-main" id="mob-main">
        <Loader />
        <main className="main">
          <Header isOpen={isOpen} toggleMenu={toggleMenu} />
          {isOpen && <Menu isOpen={isOpen} toggleMenu={toggleMenu} />}
          <div className="main__content">
            <Fade direction="up" triggerOnce>
              <h1 className="main__first">
                <span className="main__span">Cargo Express PV – </span>
                Эффективная и надёжная доставка грузов
              </h1>
            </Fade>
            <Fade direction="up" delay={200} triggerOnce>
              <p className="main__second">
                Будьте уверены в том, что ваш груз будет доставлен вовремя и в
                целости с "Cargo Express PV". Наша компания предоставляет
                профессиональные услуги по перевозке товаров в вагонах по всей
                территории Казахстана, гарантируя высокую надежность и
                безопасность.
              </p>
            </Fade>
            <div className="main__buttons">
              <Link smooth to="vagon">
                <Fade direction="up" delay={300} triggerOnce>
                  <ButtonOur text={"Наши вагоны"} showImage={true} />
                </Fade>
              </Link>
              <Link smooth to="about">
                <Fade direction="up" delay={300} triggerOnce>
                  <ButtonMore text="Подробнее" className={"simple"} />
                </Fade>
              </Link>
            </div>
          </div>
          <img src={TrainPc} alt="train" className="main__train-pc" />
          <img src={MainTrain} alt="train" className="main__train" />
          <div className="main__calc">
            <Calculator />
          </div>
        </main>
      </section>
    </>
  );
};

export default MainScreen;
