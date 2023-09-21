import type { NextApiResponse, NextApiRequest } from "next";
import restaurantsData from "@/data/restaurants.json";

type RestaurantsData = {
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  city: string;
  isNew?: boolean;
}[];

type ResponseData = RestaurantsData;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json(restaurantsData);
}
