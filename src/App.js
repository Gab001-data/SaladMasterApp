import React, { useState } from "react";
import Navbar from "./components/Navbar"
import {BrowserRouter as Router} from "react-router-dom";
import "./App.css";
import Hero from "./components/Hero";
import { HeroData } from "./components/HeroData";
import Services from "./components/Services";
import Meal from "./components/Meal";
import Blog from "./components/Blog";
import Testimonial from "./components/Testimonial";
import Partners from "./components/Partners";

function App() {
  /*const [currentItem, setCurrentItem]= useState(0);
  function displayHero(){
    console.log(currentItem);
    setCurrentItem(currentItem===(HeroData.length-1)? 0:currentItem+1);
  };
  setTimeout(displayHero,5000);*/
  return (
    <>
      <Router>
        <Navbar />
      </Router>
      <Hero heroInfo={HeroData} />
      <Services />
      <Meal />
      <Blog />
      <Testimonial />
      <Partners />
    </>

  );
}

export default App;
