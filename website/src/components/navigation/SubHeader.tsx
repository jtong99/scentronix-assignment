import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { Theme } from "@mui/material";
import Container from "@mui/material/Container";
import { SubHeaderItem } from "@/config/navigation";

function SubHeader({ subHeaderItems: pages }: { subHeaderItems: SubHeaderItem[] }) {
  return (
    <Box
      sx={{
        background: "#f8f5f0",
        mt: 1,
      }}
    >
      <Container maxWidth="xl">
        <List
          sx={{
            display: "flex",
            paddingLeft: {
              lg: "140px",
            },
          }}
          dense
        >
          {pages.map((page) => (
            <ListItem
              key={page.label}
              sx={{
                width: {
                  lg: "auto",
                },
              }}
              disablePadding
            >
              <ListItemButton
                sx={{
                  my: 1,
                  fontSize: "14px",
                  color: (theme: Theme) => theme.palette.text.primary,
                  textTransform: "uppercase",
                  letterSpacing: "0.1rem",
                  fontWeight: 500,
                  marginX: 0,
                }}
              >
                {page.label}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Container>
    </Box>
  );
}

export default SubHeader;
