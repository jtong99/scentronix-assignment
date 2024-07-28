import React from "react";
import { Container, Box } from "@mui/material";
import ModifiedLink from "../shared/ModifiedLink";
import { recipes } from "@/mocks/recipes";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function RecipesPageContent() {
  return (
    <Container
      maxWidth="xl"
      sx={{ paddingTop: "50px" }}
    >
      <Typography variant="h1">Recipes</Typography>
      <Typography mt={3}>This is list of recipes</Typography>
      <Box sx={{ display: "flex", gap: 2, mt: 5, flexWrap: "wrap" }}>
        {recipes &&
          recipes.map((recipe) => (
            <ModifiedLink
              key={recipe.id}
              href={`/recipes/${recipe.id}`}
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
                    image={recipe.image}
                    alt="pasta"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                    >
                      {recipe.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      {recipe.title}
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

export default RecipesPageContent;
