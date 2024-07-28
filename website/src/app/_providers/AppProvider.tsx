"use client";

import React from "react";
import SWRProvider from "./SWRProvider";
import ThemeRegistry from "./ThemeRegistry";

type AppProviderProps = {
  children: React.ReactNode;
};

function AppProvider({ children }: AppProviderProps) {
  return (
    <ThemeRegistry options={{ key: "mui-css" }}>
      <SWRProvider>{children}</SWRProvider>
    </ThemeRegistry>
  );
}

export default AppProvider;
