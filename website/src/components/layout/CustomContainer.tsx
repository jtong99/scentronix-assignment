"use client";

import { Container, ContainerProps } from "@mui/material";
import React from "react";

function CustomContainer(props: ContainerProps) {
  return (
    <Container
      maxWidth={false}
      {...props}
      sx={{
        position: "relative",
        borderRadius: { xs: "20px", xl: "30px" },
        background: "#F2F4F8",
        p: { xs: 2, xl: 3 },
        overflow: "hidden",
        minHeight: "calc(100vh - 242px)",
        ...props?.sx,
      }}
    />
  );
}

export default CustomContainer;
