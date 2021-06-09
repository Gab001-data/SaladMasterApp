import React, { useState } from "react";
import Navbar from "./components/Navbar"
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Footer from "./components/Footer";
import SignUP from "./components/SignUp";
import SignIn from "./components/SignIn";
import ProductDetails from "./components/ProductDetails";
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
        <Switch>
          <Route path="/SignUp">
            <SignUP />
          </Route>
          <Route path="/SignIn">
            <SignIn />
          </Route>
          <Route path="/products/personal-set">
            <ProductDetails id={0} />
            <Footer />
          </Route>
          <Route path="/">
            <Home />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </>

  );
}

export default App;
