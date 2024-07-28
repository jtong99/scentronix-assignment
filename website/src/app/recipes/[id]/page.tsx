"use client";

import React, { useEffect } from "react";
import ModifiedLink from "@/components/shared/ModifiedLink";
import { recipes } from "@/mocks/recipes";
import { Box, Container } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Dish } from "@/types/dish";

type RecipeIdProp = {
  params: { id: number };
};

function RecipePage({ params }: RecipeIdProp) {
  const recipe = recipes.find((recipe) => recipe.id == params.id);
  useEffect(() => {
    document.title = `Recipes | ${recipe?.name}`;
  }, []);
  if (!recipe) {
    return <div>{params.id}No recipe with this ID</div>;
  }

  return (
    <Container
      maxWidth="xl"
      sx={{ paddingTop: "50px" }}
    >
      <Typography variant="h1">{recipe.name}</Typography>
      <Typography mt={3}>{recipe.description}</Typography>
      <Box sx={{ display: "flex", gap: 2, mt: 5, flexWrap: "wrap" }}>
        {recipe.dish &&
          recipe.dish.map((dish: Dish) => (
            <ModifiedLink
              key={dish.name}
              href={`/recipes/${params.id}/dish/${dish.id}`}
              sx={{ textDecoration: "none" }}
            >
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    sx={{
                      height: 140,
                      width: 245,
                    }}
                    image={dish.image}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                    >
                      {dish.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      {dish.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </ModifiedLink>
          ))}
      </Box>
    </Container>
  );
}

export default RecipePage;
