import React from "react";
import style from "./Overview.module.scss";
import Button from "@/components/common/Button";

const Overview = () => {
  return (
    <section className={style.overview}>
      <h2>Book the menu you like</h2>
      <p className={style.overview__text}>
        Discover top-of-the-art restaurants we picked for you
      </p>
      <Button
        className={style.overview__button}
        text="Explore our restaurants"
      />
    </section>
  );
};

export default Overview;
