"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import style from "./Header.module.scss";
import Link from "next/link";

const Header = () => {
  const pathname = usePathname();

  const isHome = pathname === "/";

  return (
    <header className={style.header}>
      {!isHome && (
        <Link href="/" className={style.header__arrow}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            className={style.header__arrow__icon}
          />
        </Link>
      )}
      <Image
        className={style.header__image}
        src="/logo/ohmyfood.png"
        alt="Ohmyfood Logo"
        width={500}
        height={500}
      />
    </header>
  );
};

export default Header;
