import React from "react";
import Banner from "../components/home-page/Banner";
import FeaturedBrands from "../components/home-page/FeaturedBrands";
import FeaturedCategories from "../components/home-page/FeaturedCategories";
import VideoBanner from "../components/home-page/VideoBanner";

function Home() {
  return (
    <div className="relative" style={{ top: "5rem" }}>
      <Banner />

      <div class="spacer-3rem"></div>
      <div class="spacer-3rem"></div>
      <div class="spacer-3rem"></div>

      <main>
        <FeaturedCategories />

        <div class="spacer-3rem"></div>
        <div class="spacer-3rem"></div>
        <div class="spacer-3rem"></div>

        <FeaturedBrands />
        <div class="spacer-3rem"></div>
        <div class="spacer-3rem"></div>
        <div class="spacer-3rem"></div>

        <VideoBanner />
        <div class="spacer-3rem"></div>
        <div class="spacer-3rem"></div>
        <div class="spacer-3rem"></div>
      </main>
    </div>
  );
}

export default Home;
