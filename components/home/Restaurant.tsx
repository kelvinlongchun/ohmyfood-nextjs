import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FunctionComponent } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import style from "./Restaurant.module.scss";
import Heart from "../common/Heart";

type RestaurantType = {
  name: string;
  imageSrc: string | StaticImport;
  imageAlt: string;
  title: string;
  city: string;
  isNew?: boolean;
};

export type { RestaurantType };

type Props = RestaurantType;

const Restaurant: FunctionComponent<Props> = ({
  name,
  imageSrc,
  imageAlt,
  title,
  city,
  isNew,
}) => {
  return (
    <Link href={`/restaurant/${name}`} className={style.restaurant}>
      <div className={style.restaurant__imagePart}>
        <Image
          className={style.restaurant__imagePart__image}
          src={imageSrc}
          alt={imageAlt}
          width={500}
          height={500}
        />
      </div>
      {isNew && <p className={style.restaurant__new}>New</p>}
      <div className={style.restaurant__textPart}>
        <h3 className={style.restaurant__textPart__title}>{title}</h3>
        <p className={style.restaurant__textPart__city}>{city}</p>
        <Heart />
      </div>
    </Link>
  );
};

export default Restaurant;
