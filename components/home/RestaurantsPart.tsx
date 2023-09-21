import React from "react";
import Restaurant from "@/components/home/Restaurant";
import { RestaurantType } from "@/components/home/Restaurant";
import style from "./RestaurantsPart.module.scss";

async function getRestaurants(): Promise<RestaurantType[]> {
  const res = await fetch(
    "https://kelvinlongchun.github.io/ohmyfood-nextjs/api/restaurants"
  );
  // const res = await fetch("http://localhost:3000/api/restaurants");
  return res.json();
}

const RestaurantsPart = async () => {
  const restaurantsData = await getRestaurants();

  return (
    <section className={style.restaurantsPart}>
      <h2 className={style.restaurantsPart__title}>Restaurants</h2>
      <div className={style.restaurantsPart__restaurants}>
        {restaurantsData.map((data, index) => (
          <Restaurant
            key={index}
            name={data.name}
            imageSrc={data.imageSrc}
            imageAlt={data.imageAlt}
            title={data.title}
            city={data.city}
            isNew={data.isNew}
          />
        ))}
      </div>
    </section>
  );
};

export default RestaurantsPart;
