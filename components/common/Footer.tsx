import React from "react";
import Link from "next/link";
import { Shrikhand } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faHandshakeAngle,
} from "@fortawesome/free-solid-svg-icons";
import style from "./Footer.module.scss";

const shrikhand = Shrikhand({ subsets: ["latin"], weight: ["400"] });

const Footer = () => {
  return (
    <footer className={style.footer}>
      <h2 className={`${style.footer__title} ${shrikhand.className}`}>
        ohmyfood
      </h2>
      <ul className={style.footer__list}>
        <li className={style.footer__list__item}>
          <Link href="#">
            <FontAwesomeIcon
              icon={faUtensils}
              className={style.footer__list__item__icon}
            />
            Suggest a restaurant
          </Link>
        </li>
        <li className={style.footer__list__item}>
          <Link href="#">
            <FontAwesomeIcon
              icon={faHandshakeAngle}
              className={style.footer__list__item__icon}
            />
            Become a partner
          </Link>
        </li>
        <li className={style.footer__list__item}>
          <Link href="#">Legal</Link>
        </li>
        <li className={style.footer__list__item}>
          <a href="mailto:contact@ohmyfood.com">Contact</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
