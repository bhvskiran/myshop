import React from "react";
import Header from "../components/Layout/Header";
import Hero from "../components/Home/Hero";
import Categories from "../components/Home/Categories";
import BestDeals from "../components/Home/BestDeals";
import FeaturedProduct from "../components/Home/FeaturedProduct";
import Events from "../components/Home/Events";
import Sponsored from "../components/Home/Sponsored";
import Footer from "../components/Layout/Footer";

const HomePage = () => {
  return (
    <div>
      <Header activeHeading={1} />
      <Hero />
      <Categories />
      <BestDeals />
      <Events />
      <FeaturedProduct />
      <Sponsored />
      <Footer />
    </div>
  );
};

export default HomePage;
