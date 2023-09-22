import React, { FunctionComponent } from "react";
import MenuImagePart from "@/components/menu/MenuImagePart";
import MenuRestaurantCard from "@/components/menu/MenuRestaurantCard";
import generalConfigs from "@/configs/general";

type Props = {
  params: { name: string };
};

const MenuPage: FunctionComponent<Props> = async ({ params }) => {
  async function getRestaurantData() {
    const res = await fetch(
      `http://${generalConfigs.domain}/api/restaurant/${params.name}`
    );
    return res.json();
  }

  const data = await getRestaurantData();

  return (
    <main>
      <MenuImagePart imageSrc={data.imageSrc} imageAlt={data.title} />
      <MenuRestaurantCard restaurantName={data.title} menus={data.menus} />
    </main>
  );
};

export default MenuPage;
