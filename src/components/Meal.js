import React, {useState} from "react";
import meal from "../images/meal.png";
import Button from '@material-ui/core/Button';

function Meal(){
    const[isvisible, setIsVisible]=useState(true);
    function displayTitle(){
        setIsVisible(!isvisible);
    }
    setTimeout(displayTitle,1000);
    return (
        <section className="today-meal">
            <div className="meal-header">
                <div className={isvisible? "display-title":"hide-title"}>
                    Meal of the Day!
                </div>
            </div>
            <div className="meal-content">
                <div className="meal-img">
                    <img src={meal} width="100%" height="100%" alt="today's meal" />
                </div>
                <div className="Meal-text">
                    <h1>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    </h1>
                    <p>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                    </p>
                    <div className="product-btn">
                        <Button variant="contained" style={{backgroundColor: '#20af2f',color: '#fff'}} href="/today_meal">
                              Learn More
                        </Button>
                    </div>
                </div>
            </div>

        </section>

    )
}

export default Meal;