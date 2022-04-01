import React from "react";
import FiltersSidebar from "../components/shop-page/FiltersSidebar";
import ProductCard from "../components/shop-page/ProductCard";
import SortProductsDropdown from "../components/shop-page/SortProductsDropdown";

function Shop() {
  return (
    <main
      style={{ top: "5rem", minHeight: "100vh" }}
      className="relative w-full justify-end flex"
    >
      <FiltersSidebar />

      <div className="products-display-container">
        <div className="flex w-full justify-end">
          <SortProductsDropdown />
        </div>

        <div style={{ gap: "4rem" }} className="grid grid-cols-3">
          {/* <ProductCard product={{}} />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard /> */}
        </div>

        <div className="spacer-3rem"></div>
        <div className="spacer-3rem"></div>
        <div className="spacer-3rem"></div>
      </div>
    </main>
  );
}

export default Shop;
