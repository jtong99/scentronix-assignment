import RecipesLayout from "@/components/layout/RecipesLayout";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RecipesLayout>{children}</RecipesLayout>
    </>
  );
}

export default Layout;
