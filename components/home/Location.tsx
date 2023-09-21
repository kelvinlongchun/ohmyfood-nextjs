import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import style from "./Location.module.scss";

const Location = () => {
  return (
    <div className={style.location}>
      <FontAwesomeIcon icon={faLocationDot} className={style.location__icon} />
      <p>Paris, Belleville</p>
    </div>
  );
};

export default Location;
