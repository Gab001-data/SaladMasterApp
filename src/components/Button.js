import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

function Button(){
    return (
        <Link to="/SignUp">
            <button className="btn">
                Sign Up
            </button>
        </Link>
        
    )
}

export default Button