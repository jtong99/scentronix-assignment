import React from "react";
import { ReactNode } from "react";

type ShopLayoutProps = {
  children: ReactNode;
};

function ShopLayout({ children }: ShopLayoutProps) {
  return <>{children}</>;
}

export default ShopLayout;
