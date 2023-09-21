import React from "react";
import style from "./Heart.module.scss";
import "@/styles/fontawesome.scss";

const Heart = () => {
  return (
    <div className={style.heartContainer}>
      <i className={`fa-regular fa-heart ${style.heartContainer__heart}`}></i>
      <i
        className={`fa-solid fa-heart ${style.heartContainer__heartFilled}`}
      ></i>
    </div>
  );
};

export default Heart;
