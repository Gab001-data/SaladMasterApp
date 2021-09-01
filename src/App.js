import React, { useState } from "react";
import Navbar from "./components/Navbar"
import {BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Footer from "./components/Footer";
import SignUP from "./components/SignUp";
import SignIn from "./components/SignIn";
import ProductDetails from "./components/ProductDetails";
import ProductListing from "./components/ProductListing";
import ConsultantDashboard from "./components/ConsultantDashboard";
import DashboardAdmin from "./components/DashboardAdmin";
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
        <Switch>
          <Route path="/SignUp">
            <Navbar />
            <SignUP />
          </Route>
          <Route path="/SignIn">
            <Navbar />
            <SignIn />
          </Route>
          <Route path="/products/personal-set">
            <Navbar />
            <ProductDetails id={0} />
            <Footer />
          </Route>
          <Route path="/products">
            <Navbar />
            <ProductListing />
            <Footer />
          </Route>
          <Route path="/partners/id">
            {/*<ConsultantDashboard />*/}
            <DashboardAdmin />
          </Route>
          <Route path="/">
            <Navbar />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </>

  );
}

export default App;
