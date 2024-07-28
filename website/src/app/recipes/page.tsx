"use client";
import React, { useEffect } from "react";
import RecipesPageContent from "@/components/recipes";

function RecipesMainPage() {
  useEffect(() => {
    document.title = "Recipes";
  }, []);
  return <RecipesPageContent />;
}

export default RecipesMainPage;
