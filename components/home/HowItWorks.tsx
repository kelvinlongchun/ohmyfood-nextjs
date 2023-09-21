import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileScreen,
  faList,
  faStore,
} from "@fortawesome/free-solid-svg-icons";
import style from "./HowItWorks.module.scss";

const HowItWorks = () => {
  return (
    <section className={style.howItWorks}>
      <h2 className={style.howItWorks__title}>How it works</h2>
      <ol className={style.howItWorks__steps}>
        <li className={style.howItWorks__steps__stepItem}>
          <FontAwesomeIcon
            icon={faMobileScreen}
            className={style.howItWorks__steps__stepItem__icon}
          />
          <p className={style.howItWorks__steps__stepItem__text}>
            Chose a restaurant
          </p>
        </li>
        <li className={style.howItWorks__steps__stepItem}>
          <FontAwesomeIcon
            icon={faList}
            className={style.howItWorks__steps__stepItem__icon}
          />
          <p className={style.howItWorks__steps__stepItem__text}>
            Create your menu
          </p>
        </li>
        <li className={style.howItWorks__steps__stepItem}>
          <FontAwesomeIcon
            icon={faStore}
            className={style.howItWorks__steps__stepItem__icon}
          />
          <p className={style.howItWorks__steps__stepItem__text}>
            Fo enjoy it at the restaurant
          </p>
        </li>
      </ol>
    </section>
  );
};

export default HowItWorks;
