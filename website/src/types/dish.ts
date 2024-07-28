export interface Dish {
  id: number;
  name?: string;
  title?: string;
  description?: string;
  prep?: number; // mins
  bake_from?: number; // mins
  bake_to?: number; // mins
  yield?: string;
  image?: string;
  total?: number;
}
