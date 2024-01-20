import React, { useState, useEffect } from "react";

import MainScreen from "../../screens/MainScreen/MainScreen.jsx";
import AboutScreen from "../../screens/AboutScreen/AboutScreen.jsx";
import QuestScreen from "../../screens/QuestionScreen/QuestScreen.jsx";
import Loader from "../../components/Loader/Loader.jsx";

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
      <Loader isVisible={loading} />
      <MainScreen />
      <AboutScreen />
      <QuestScreen />
    </>
  );
};

export default HomePage;
