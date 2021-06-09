import React from "react";
import Hero from "./Hero";
import { HeroData } from "./HeroData";
import Services from "./Services";
import Meal from "./Meal";
import Blog from "./Blog";
import Testimonial from "./Testimonial";
import Partners from "./Partners";

export default function Home(){
    return (
        <>
          <Hero heroInfo={HeroData} />
          <Services />
          <Meal />
          <Blog />
          <Testimonial />
          <Partners />
        </>
    )
}