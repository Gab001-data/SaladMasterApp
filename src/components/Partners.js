import React from "react";
import America_cancer from "../images/partners/America_cancer.png";
import America_diabitis from "../images/partners/America_diabitis.png";
import Physicians_committee from "../images/partners/Physicians_committee.png";
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Link } from "react-router-dom";

function Partners(){
    return (
        <section className="partners-section">
            <div className="partner-title">
                <h1>We Work With the Best Partners</h1>
                <span></span>
                <p>
                    As a Saladmaster Dealership, we believe in investing in people to make their lives. Our commitment to being a socially-responsible, impactful organization extends beyond one-off efforts. Our team of Dealerships are passionate about being a force for good.
                    <br/>
                    <br/>
                    Together with Saladmaster, we are honored to partner with exceptional organizations that are making life better for people around the world.
                </p>
                <Router>
                    <Link variant="outlined" style={{padding:'20px',background:'#fff', border: '1px solid #ff7d01', color: '#ff7d01'}} to="/partner">
                        See More
                    </Link>
                </Router>
                
            </div>
            <div className="partner-logo">
                <div className="logo">
                    <img src={America_cancer} width="100%" height="100%" alt="America_cancer" />
                </div>
                <div className="logo">
                    <img src={America_diabitis} width="100%" height="100%" alt="America_diabitis" />
                </div>
                <div className="logo3">
                    <img src={Physicians_committee} width="100%" height="100%" alt="Physicians_committee" />
                </div>
            </div>
        </section>
    )
}

export default Partners;