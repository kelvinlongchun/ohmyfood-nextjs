import type { NextApiResponse, NextApiRequest } from "next";
import restautantsMenus from "@/data/restaurants-menus.json";
import { MenuType } from "@/components/menu/Menu";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { restaurantName } = req.query;
  const menus: MenuType[] = restautantsMenus[restaurantName];
  res.status(200).json(menus);
}
