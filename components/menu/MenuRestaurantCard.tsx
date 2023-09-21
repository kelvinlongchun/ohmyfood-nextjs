import React from "react";
import { FunctionComponent } from "react";
import { Shrikhand } from "next/font/google";
import Heart from "../common/Heart";
import Menu from "./Menu";
import { MenuType } from "./Menu";
import Button from "../common/Button";
import style from "./MenuRestaurantCard.module.scss";

type Props = {
  restaurantName: string;
  menus: MenuType[];
};

const shrikhand = Shrikhand({ subsets: ["latin"], weight: ["400"] });

const MenuRestaurantCard: FunctionComponent<Props> = ({
  restaurantName,
  menus,
}) => {
  return (
    <div className={style.restaurantCard}>
      <section className={style.restaurantCard__title}>
        <h1
          className={`${style.restaurantCard__title__text} ${shrikhand.className}`}
        >
          {restaurantName}
        </h1>
        <Heart />
      </section>
      <div className={style.restaurantCard__menus}>
        {menus.map((menu, index) => (
          <Menu key={index} menuName={menu.menuName} foods={menu.foods} />
        ))}
      </div>
      <Button className={style.restaurantCard__button} text="Order" />
    </div>
  );
};

export default MenuRestaurantCard;
