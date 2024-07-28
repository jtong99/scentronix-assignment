import React, { useEffect, useState } from "react";
import { recipes, RecipeDataType, dishDataType } from "@/mocks/recipes";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import ModifiedBreadcrumbs from "@/components/shared/ModifiedBreadcumbs";
import Image from "next/image";
import { BreadCrumbTypeData } from "@/types/shared";
import { formatTime } from "@/utils/formatTime";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Divider from "@mui/material/Divider";
import PawIcon from "./PawIcon";
import AddIcon from "@mui/icons-material/Add";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import CheckIcon from "@mui/icons-material/Check";

function DishDetail({
  recipe,
  dish,
  breadCrumbData,
}: {
  recipe: RecipeDataType;
  dish: dishDataType;
  breadCrumbData: BreadCrumbTypeData[];
}) {
  const [isSaved, setIsSaved] = useState(false);
  const handlePrint = () => {
    window.print();
  };
  const handleSaveToggle = () => {
    setIsSaved(!isSaved);
  };
  return (
    <Grid
      container
      spacing={13}
    >
      <Grid
        item
        xs={12}
        lg={6}
      >
        <ModifiedBreadcrumbs breadcrumbsData={breadCrumbData} />
        <Typography
          variant="h2"
          fontSize={67}
          fontWeight={500}
          mt={3}
        >
          {dish.title}
        </Typography>

        <Typography
          variant="body1"
          mt={15}
          fontSize={22}
          fontWeight={100}
          color={"#757575"}
        >
          {dish.description && (
            <div dangerouslySetInnerHTML={{ __html: dish.description }} />
          )}
        </Typography>

        <Box
          mt={5}
          sx={{ display: "flex" }}
        >
          <Box sx={{ display: "flex", alignItems: "flex-start" }}>
            <AccessTimeIcon sx={{ fontSize: 50, marginRight: 1 }} />
            <Box>
              <Typography
                fontSize={12}
                fontWeight={600}
                sx={{ letterSpacing: "0.1rem" }}
              >
                PREP
              </Typography>
              <Typography
                fontSize={20}
                fontWeight={500}
                mt={1}
              >
                {dish.prep !== undefined && formatTime(dish.prep)}
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{ alignItems: "center" }}
            ml={8}
          >
            <Typography
              fontSize={12}
              fontWeight={600}
              sx={{ letterSpacing: "0.1rem" }}
            >
              BAKE
            </Typography>
            <Typography
              fontSize={20}
              fontWeight={500}
              mt={1}
            >
              {`${dish.bake_from !== undefined && formatTime(dish.bake_from)} to ${dish.bake_to !== undefined && formatTime(dish.bake_to)}`}
            </Typography>
          </Box>

          <Box
            sx={{ alignItems: "center" }}
            ml={8}
          >
            <Typography
              fontSize={12}
              fontWeight={600}
              sx={{ letterSpacing: "0.1rem" }}
            >
              TOTAL
            </Typography>
            <Typography
              fontSize={20}
              fontWeight={500}
              mt={1}
            >
              {dish.total !== undefined && formatTime(dish.total)}
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 4 }} />

        <Box
          mt={5}
          sx={{ display: "flex" }}
        >
          <Box sx={{ display: "flex", alignItems: "flex-start" }}>
            <PawIcon
              width={40}
              height={40}
            />
            <Box ml={2}>
              <Typography
                fontSize={12}
                fontWeight={600}
                sx={{ letterSpacing: "0.1rem" }}
              >
                YIELD
              </Typography>
              <Typography
                fontSize={20}
                fontWeight={500}
                mt={1}
              >
                {dish.yield}
              </Typography>
            </Box>
          </Box>

          <Box ml={4}>
            <Button
              variant="outlined"
              startIcon={isSaved ? <CheckIcon /> : <AddIcon />}
              onClick={handleSaveToggle}
              sx={{
                border: "2px solid #d89196",
                color: isSaved ? "#fff" : "#000",
                backgroundColor: isSaved ? "#d89196" : "#ffffff",
                "&:hover": {
                  border: "2px solid #d89196",
                  backgroundColor: isSaved ? "transparent" : "#ffffff",
                  color: isSaved ? "#000" : "#d89196",
                },
                borderRadius: 0,
                letterSpacing: "0.1rem",
                fontSize: 12,
                width: 150,
              }}
            >
              {isSaved ? "SAVED" : "SAVE RECIPE"}
            </Button>
            <Button
              variant="outlined"
              startIcon={<PrintOutlinedIcon />}
              onClick={handlePrint}
              sx={{
                border: "2px solid #d89196",
                color: "#000",
                "&:hover": {
                  border: "2px solid #d89196",
                  backgroundColor: "rgba(0, 0, 0, 0.04)",
                },
                borderRadius: 0,
                letterSpacing: "0.1rem",
                fontSize: 12,
                ml: {
                  lg: 2,
                },
              }}
            >
              PRINT
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        lg={6}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            paddingTop: "75%",
            "@media (max-width: 600px)": {
              paddingTop: "100%",
            },
          }}
        >
          <Image
            src={dish.image as string}
            alt="dish image"
            fill
            priority
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 40vw, 33vw"
            style={{
              objectFit: "cover",
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
}

export default DishDetail;
