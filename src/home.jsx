import React from "react";
import Header from "./components/header";
import Hero from "./components/Hero";
import Category from "./components/Category";
import MostSearchedCar from "./components/MostSearchedCar";

function Home() {
  return (
    <div>
      {/* Header Displayed */}
      <Header />

      {/* Hero Section Displayed */}
      <Hero />

      {/* Categories Section Displayed */}
      <Category />

      {/* MostSearchedCar Section Displayed */}
      <MostSearchedCar/>
    </div>
  );
}

export default Home;
