import React from 'react';
import family from "../images/family.jpg";
import saladMasterCooking from "../images/saladMasteCooking.jpg";
import saladMasterBusiness from "../images/saladMasterBusiness.jpg";

export const HeroData=[
    {
        imgName: saladMasterCooking,
        textTitle: "Enhance and utilize the medicinal capacity of your food",
        textContent: "We provide state of the art cookwares that optimize the medicinal properties in your food to fight against livestyle diseases.",
        buttonLabel: "Learn More",
        buttonLink: "/learn"
    },
    {
        imgName: family,
        textTitle: "We unite families through healthy eating",
        textContent: "Our state of the art cooking equipments allows for efficient ease of use ensuring all family members can take part in cooking",
        buttonLabel: "Show Me How!",
        buttonLink: "/events/cookschool"
    },
    {
        imgName: saladMasterBusiness,
        textTitle: "Gain financial freedom. Become a partner",
        textContent: "We provide opportunities through our numerous partnership programs through which you can earn, amass wealth and maintain a healthy lifestyle at thesame time.",
        buttonLabel: {
            button1:{
                name:"Lean More",
                link:"/business"
            },
            button2:{
                name:"Sign Up",
                link:"/register"
            }
        }
    }
]