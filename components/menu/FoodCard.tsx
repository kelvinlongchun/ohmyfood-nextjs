import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FunctionComponent } from "react";
import style from "./FoodCard.module.scss";

type FoodType = {
  name: string;
  description: string;
  price: string;
};

export type { FoodType };

type Props = FoodType;

const FoodCard: FunctionComponent<Props> = ({ name, description, price }) => {
  return (
    <section className={style.food}>
      <h3 className={style.food__name}>{name}</h3>
      <p className={style.food__desciption}>{description}</p>
      <strong className={style.food__price}>{price}</strong>
      <div className={style.food__confirmation}>
        <FontAwesomeIcon
          icon={faCircleCheck}
          className={style.food__confirmation__tick}
        />
      </div>
    </section>
  );
};

export default FoodCard;
