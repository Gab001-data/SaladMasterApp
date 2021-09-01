import React from "react";
import cookware1 from "../images/cookware1.jpg";
import food from "../images/food.JPG";
import food_challenge1 from "../images/food_challenge1.JPG"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  outline:{
    border:"2px solid #96d701",
    color:"#96d701",
  }

  },
}));

function Services(){
    const classes= useStyles();
    return (
        <section className="services">
            <div className="services-title">
                <h1>Your Food as Medicine. Eat healthy, Stay healthy</h1>
                <p>We provide service that improves your health and helps you fight and prevent lifestyle disease</p>
            </div>
            <div className="row-container">
               {/*Products */}
              <div className="col-container">
                  <img src={cookware1} width="100%" height="250px" alt="" />
                  <div className="services-content">
                      <h1>Premium Titanium 360 Stainless Steel Ti</h1>
                      <p>Our state of the art cookware is made up of a combination of Titanium and Stainless surgical steel that <span className="keywords">preserves the purity of food, eliminate bad cholestrol/fat while retaining the vitamin and minerals</span>  needed to keep the body fit and healthy.</p>
                      <div className="product-btn">
                        <Button variant="outlined" style={{borderColor: '#ff7d01', color: '#ff7d01'}} href="/learn/product">
                              Learn More
                        </Button>
                        <Button variant="contained" style={{backgroundColor: '#ff7d01', color: '#fff'}} href="/product">
                          Show Products
                        </Button> 
                      </div>
                  </div>
              </div>
              {/*Cook School */}
              <div className="col-container col2">
                  <img src={food} width="100%" height="250px" alt="" />
                  <div className="services-content content2">
                      <h1>Cook School</h1>
                      <p>We train you and your chef on how to effectively use our state of the art cookware to prepare <span className="keywords">tasty, healthy meals, maximize vitamins and minerals in food, elimate fat, cut your kitchen time to half and reduce energy consumption by 70%</span>.</p>
                      <div className="product-btn">
                        <Button variant="outlined" style={{borderColor: '#ff7d01', color: '#ff7d01'}} href="/learn/cook_school">
                              Learn More
                        </Button>
                      </div>
                  </div>
              </div>
              {/* 30 days food challange */}
              <div className="col-container">
                  <img src={food_challenge1} width="100%" height="250px" alt="" />
                  <div className="services-content">
                      <h1>Thirty (30) days food challange</h1>
                      <p><span className="keywords">Build a stronger immune system to fight lifestyle diseases. </span>Detoxify your body feeding purely on plant based food and our special diet program for a period of 30 days.</p>
                      <div className="product-btn">
                        <Button variant="outlined" style={{borderColor: '#ff7d01', color: '#ff7d01'}} href="/learn/food_challenge">
                              Learn More
                        </Button>
                        
                      </div>
                  </div>
              </div>
            </div>
        </section>
    )
}

export default Services;