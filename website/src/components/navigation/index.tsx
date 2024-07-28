import React from "react";
import Header from "./Header";
import SubHeader from "./SubHeader";
import Box from "@mui/material/Box";
import { SubHeaderItem } from "@/config/navigation";

interface NavigationProps {
  subHeaderItems: SubHeaderItem[];
}

function Navigation({ subHeaderItems }: NavigationProps) {
  return (
    <Box>
      <Header />
      <SubHeader subHeaderItems={subHeaderItems} />
    </Box>
  );
}

export default Navigation;
