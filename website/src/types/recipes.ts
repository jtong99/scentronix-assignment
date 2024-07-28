import { Dish } from "./dish";

export interface Recipe {
  id: number;
  name: string;
  title: string;
  description: string;
  image?: string;
  dish: Dish[];
}
