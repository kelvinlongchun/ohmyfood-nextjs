import type { NextApiResponse, NextApiRequest } from "next";
import restautants from "@/data/restaurants.json";
import restautantsMenus from "@/data/restaurants-menus.json";
import { MenuType } from "@/components/menu/Menu";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const name = Array.isArray(req.query.value)
    ? req.query.value[0]
    : req.query.value;

  // const menus: MenuType[] = restautantsMenus[name] as MenuType[];

  type Data = {
    title: string;
    imageSrc: string;
    menus?: any[];
  };

  const data: Data = {
    title: "",
    imageSrc: "",
  };

  restautants.map((restaurant) => {
    if (restaurant.name === name && !!name) {
      data.title = restaurant.title;
      data.imageSrc = restaurant.imageSrc;
    }
  });

  restautantsMenus.map((restaurant) => {
    if (restaurant.name === name && !!name) {
      data.menus = new Array(restaurant.menus);
    }
  });

  res.status(200).json(data);
}
