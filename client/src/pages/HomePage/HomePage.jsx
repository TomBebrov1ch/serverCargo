import React, { useState, useEffect } from "react";

import MainScreen from "../../screens/MainScreen/MainScreen.jsx";
import AboutScreen from "../../screens/AboutScreen/AboutScreen.jsx";
import QuestScreen from "../../screens/QuestionScreen/QuestScreen.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import { Helmet } from "react-helmet";

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      document.body.style.overflowY = "hidden";
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1500);

      return () => {
        document.body.style.overflowY = "";
        clearTimeout(timer);
      };
    } else {
      document.body.style.overflowY = "";
    }
  }, [loading]);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          "Cargo PV: Ваш Надежный Партнер в Международных Грузоперевозках из Центральной Азии"
        </title>
        <meta
          property="og:title"
          content="Cargo PV: Ваш Надежный Партнер в Международных Грузоперевозках из Центральной Азии"
        ></meta>
        <meta
          property="og:description"
          content="Cargo PV специализируется на международных грузоперевозках зерна и других товаров, обеспечивая безопасные и эффективные транспортные решения из Казахстана, России, Узбекистана, Таджикистана, Афганистана, Туркменистана и Кыргызстана. Наша команда профессионалов гарантирует высокий уровень сервиса и индивидуальный подход к каждому клиенту, обеспечивая оптимальные логистические решения для вашего бизнеса."
        ></meta>
        <meta
          name="description"
          content="Cargo PV специализируется на международных грузоперевозках зерна и других товаров, обеспечивая безопасные и эффективные транспортные решения из Казахстана, России, Узбекистана, Таджикистана, Афганистана, Туркменистана и Кыргызстана. Наша команда профессионалов гарантирует высокий уровень сервиса и индивидуальный подход к каждому клиенту, обеспечивая оптимальные логистические решения для вашего бизнеса."
        ></meta>
      </Helmet>
      <Loader isVisible={loading} />
      <MainScreen />
      <AboutScreen />
      <QuestScreen />
    </>
  );
};

export default HomePage;
