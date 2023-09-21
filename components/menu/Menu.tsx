import React from "react";
import { FunctionComponent } from "react";
import FoodCard from "./FoodCard";
import { FoodType } from "./FoodCard";
import style from "./Menu.module.scss";

type MenuType = {
  menuName: string;
  foods: FoodType[];
};

export type { MenuType };

type Props = MenuType;

const Menu: FunctionComponent<Props> = ({ menuName, foods }) => {
  return (
    <section className={style.menu}>
      <h2 className={style.menu__title}>{menuName}</h2>
      <div className={style.menu__line}></div>
      <div className={style.menu__foods}>
        {foods.map((food, index) => (
          <FoodCard
            key={index}
            name={food.name}
            description={food.description}
            price={food.price}
          />
        ))}
      </div>
    </section>
  );
};

export default Menu;
