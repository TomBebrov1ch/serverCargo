import React, { useState } from "react";
import { useForm } from "react-hook-form";

import emailjs from "@emailjs/browser";
import PopUp from "../PopUp/PopUp.jsx";

import "../Form/style.scss";
import { Slide } from "react-awesome-reveal";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result);
          setShowPopup(true);
        },
        (error) => {
          console.error(error.text);
        }
      );
    setEmail("");
    setName("");
    setMessage("");
  };

  const togglePopup = () => {
    setShowPopup(false);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <nav className="form__content">
        <div className="form__card">
          <p className="form__text">Ваше имя*</p>
          <input
            name="name"
            placeholder="Рауан Онгарбаев"
            className="form__input"
            required={true}
            onChange={(event) => setName(event.target.value)}
            value={name}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div className="form__card">
          <p className="form__text">Ваша почта*</p>
          <input
            placeholder="example@gmail.com"
            className="form__input"
            {...register("email", {
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Введите корректный email адрес",
              },
            })}
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
          {errors.email && (
            <p className="form__error">{errors.email.message}</p>
          )}
        </div>
        <div className="form__card-s">
          <p className="form__text">Комментарий*</p>
          <input
            name="message"
            placeholder="Комментарий"
            className="form__input-s"
            required={true}
            onChange={(event) => setMessage(event.target.value)}
            value={message}
          />
        </div>
      </nav>
      <button className="form__button" type="submit">
        Отправить
      </button>
      <Slide direction="up" in={showPopup}>
        <PopUp isOpen={showPopup} toggleMenu={togglePopup} />
      </Slide>
    </form>
  );
};

export default Form;
