import React from "react";
import Header from "../components/Layout/Header";
import Hero from "../components/Home/Hero";
import Categories from "../components/Home/Categories";
import BestDeals from "../components/Home/BestDeals";
import FeaturedProduct from "../components/Home/FeaturedProduct";
import Events from "../components/Home/Events";

const HomePage = () => {
  return (
    <div>
      <Header activeHeading={1} />
      <Hero />
      <Categories />
      <BestDeals />
      <Events />
      <FeaturedProduct />
    </div>
  );
};

export default HomePage;
