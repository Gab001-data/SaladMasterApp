import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

function Button(){
    return (
        <Link to="/SignUp">
            <button className="btn-signup">
                Sign Up
            </button>
        </Link>
        
    )
}

export default Button