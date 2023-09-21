import type { NextApiResponse, NextApiRequest } from "next";
import restautants from "@/data/restaurants.json";
import restautantsMenus from "@/data/restaurants-menus.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const name = Array.isArray(req.query.value)
    ? req.query.value[0]
    : req.query.value;

  const data = {
    title: "",
    imageSrc: "",
    menus: restautantsMenus[name],
  };

  restautants.map((restaurant) => {
    if (restaurant.name === name && !!name) {
      data.title = restaurant.title;
      data.imageSrc = restaurant.imageSrc;
    }
  });

  res.status(200).json(data);
}
