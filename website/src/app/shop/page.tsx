"use client";
import React from "react";
import ShopLayout from "@/components/layout/ShopLayout";
import Navigation from "@/components/navigation";
import { shopSubHeaderItems } from "@/config/navigation";
function ShopPage() {
  return (
    <ShopLayout>
      <Navigation subHeaderItems={shopSubHeaderItems} />
      shop
    </ShopLayout>
  );
}

export default ShopPage;
