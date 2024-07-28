"use client";

import React from "react";
import { ReactNode } from "react";
import Navigation from "@/components/navigation";
import { recipesSubHeaderItems } from "@/config/navigation";

type RecipesLayoutProps = {
  children: ReactNode;
};

function RecipesLayout({ children }: RecipesLayoutProps) {
  return (
    <>
      <Navigation subHeaderItems={recipesSubHeaderItems} />
      {children}
    </>
  );
}

export default RecipesLayout;
