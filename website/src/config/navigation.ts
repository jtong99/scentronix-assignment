import { ReactNode } from "react";

export type SubHeaderItem = {
  label: string;
  link: string;
};

export type HeaderItem = {
  label: string;
  link: string;
};

export const headerItems: HeaderItem[] = [
  { label: "shop", link: "/shop" },
  {
    label: "recipes",
    link: "/recipes",
  },
  { label: "learn", link: "/learn" },
  { label: "about", link: "/about" },
  { label: "blog", link: "/blog" },
];

export const recipesSubHeaderItems: SubHeaderItem[] = [
  { label: "categories", link: "/recipes/categories" },
  { label: "collections", link: "/recipes/collections" },
  { label: "resources", link: "/recipes/resources" },
];

export const homeSubHeaderItems: SubHeaderItem[] = [
  { label: "categories", link: "/recipes/categories" },
  { label: "collections", link: "/recipes/collections" },
  { label: "resources", link: "/recipes/resources" },
];

export const shopSubHeaderItems: SubHeaderItem[] = [
  { label: "categories", link: "/recipes/categories" },
  { label: "collections", link: "/recipes/collections" },
  { label: "resources", link: "/recipes/resources" },
];
