import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ModifiedLink from "./ModifiedLink";

export type BreadCrumbTypeData = {
  href?: string;
  name: string | "";
};

export default function ModifiedBreadcrumbs({
  breadcrumbsData,
}: {
  breadcrumbsData: BreadCrumbTypeData[];
}) {
  const depthArray = ["recipes", "bread", "quick bread"];

  const breadcrumbs = breadcrumbsData.map((item, index) => {
    if (index === depthArray.length - 1) {
      return (
        <Typography
          key={item.name}
          color="text.primary"
          sx={{
            textTransform: "uppercase",
            letterSpacing: "0.1rem",
            fontSize: "inherit",
            fontWeight: "inherit",
          }}
        >
          {item.name}
        </Typography>
      );
    }

    return (
      <ModifiedLink
        key={item.name}
        href={item.href || ""}
        color="text.primary"
        sx={{
          textDecoration: "none",
          textTransform: "uppercase",
          letterSpacing: "0.1rem",
        }}
      >
        {item.name}
      </ModifiedLink>
    );
  });

  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={
          <NavigateNextIcon
            fontSize="small"
            sx={{ color: "#d89196" }}
          />
        }
        aria-label="breadcrumb"
        sx={{ fontSize: "13px", fontWeight: 600 }}
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}
