"use client";

import React, { useEffect, useState } from "react";
import { recipes, RecipeDataType, dishDataType } from "@/mocks/recipes";
import { Box, Container, CircularProgress, Typography } from "@mui/material";
import { BreadCrumbTypeData } from "@/types/shared";
import DishDetail from "@/components/recipes/DishDetail";

type DishIdProp = {
  params: { dish_id: number; id: number };
};

function DishPage({ params }: DishIdProp) {
  const recipeId = params.id;
  const dishId = params.dish_id;
  const [recipe, setRecipe] = useState<RecipeDataType | null>(null);
  const [dish, setDish] = useState<dishDataType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [breadCrumbData, setBreadCrumbData] = useState<BreadCrumbTypeData[]>([]);
  useEffect(() => {
    document.title = `Recipes | ${recipe?.name} | ${dish?.name}`;
  }, [dish, recipe]);
  useEffect(() => {
    if (recipes) {
      const recipe = recipes.find((recipe) => recipe.id == recipeId);

      if (recipe) {
        setRecipe(recipe || null);
        const dish = recipe.dish.find((dish) => dish.id == dishId);
        setDish(dish || null);
        setBreadCrumbData([
          {
            href: `/recipes`,
            name: "recipes",
          },
          {
            href: `/recipes/${recipe.id}`,
            name: recipe.name,
          },
          {
            name: dish && dish.name ? dish.name : "",
          },
        ]);
      }
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return (
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <CircularProgress
          size={60}
          thickness={4}
          sx={{ color: "#d89196" }}
        />
        <Typography
          variant="h6"
          sx={{
            mt: 2,
            color: "#d89196",
            fontWeight: "light",
            letterSpacing: 1,
          }}
        >
          Loading...
        </Typography>
      </Box>
    );
  }

  if (!recipe) {
    return <Box>No recipe found</Box>;
  }

  if (!dish) {
    return <Box>No dish found</Box>;
  }

  return (
    <Container
      maxWidth="xl"
      sx={{ paddingTop: "50px" }}
    >
      <DishDetail
        recipe={recipe}
        dish={dish}
        breadCrumbData={breadCrumbData}
      />
    </Container>
  );
}

export default DishPage;
