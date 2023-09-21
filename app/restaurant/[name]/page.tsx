import React, { FunctionComponent } from "react";
import MenuImagePart from "@/components/menu/MenuImagePart";
import MenuRestaurantCard from "@/components/menu/MenuRestaurantCard";
import type { RestaurantType } from "@/components/home/Restaurant";

type Props = {
  params: { name: string };
};

async function getRestaurants(): Promise<RestaurantType[]> {
  const res = await fetch("http://localhost:3000/api/restaurants");
  return res.json();
}

const TheFullPalatte: FunctionComponent<Props> = async ({ params }) => {
  async function getMenus() {
    const res = await fetch(`http://localhost:3000/api/menus/${params.name}`);
    return res.json();
  }

  const menus = await getMenus();

  const restaurants = await getRestaurants();

  let restaurantData: RestaurantType;
  restaurants.map((data) => {
    if (data.name === params.name) {
      restaurantData = data;
    }
  });

  const isVaild = !!restaurantData;

  return (
    <main>
      {isVaild && (
        <MenuImagePart
          imageSrc={restaurantData.imageSrc}
          imageAlt={restaurantData.imageAlt}
        />
      )}
      {isVaild && (
        <MenuRestaurantCard
          restaurantName={restaurantData.title}
          menus={menus}
        />
      )}
    </main>
  );
};

export default TheFullPalatte;
