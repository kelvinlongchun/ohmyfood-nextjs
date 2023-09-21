import React, { FunctionComponent } from "react";
import Image from "next/image";
import style from "./MenuImagePart.module.scss";

type Props = {
  imageSrc: string;
  imageAlt: string;
};

const MenuImagePart: FunctionComponent<Props> = ({ imageSrc, imageAlt }) => {
  return (
    <div className={style.restaurantImage}>
      <Image src={imageSrc} alt={imageAlt} width={500} height={500} />
    </div>
  );
};

export default MenuImagePart;
