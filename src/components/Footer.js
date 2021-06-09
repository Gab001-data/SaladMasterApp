import React from "react";
import {Link} from "react-router-dom";

function Footer(){
    return (
        <section className="footer-section">
            <div className="socials">
                <div className="social-title">
                    <h1>Follow Us on Our Socials</h1>
                    <span></span>
                </div>
                <div className="social-icons">
                    <Link to="/socials/twitter">
                        <i className="fab fa-twitter fa-3x" style={{color:"rgb(37, 150, 190)"}}></i>
                    </Link> 
                    <Link to="/socials/facebook">
                        <i className="fab fa-facebook fa-3x"></i>
                    </Link> 
                    <Link to="/socials/instagram">
                        <i className="fab fa-instagram fa-3x" style={{color:"rgb(37, 150, 190)"}} ></i>
                    </Link> 
                    <Link to="/socials/youtube">
                        <i className="fab fa-youtube fa-3x" style={{color:"#f50707"}}></i>
                    </Link> 
                </div>
            </div>
            <div className="footer-links">
                <div className="faq-contact">
                    <h3>Support</h3>
                    <Link to="/faq"><p>Help & FAQ</p></Link>
                    <Link to="/contact-us"><p>Contact-Us</p></Link>
                    <Link to="/programs"><p>Event/Programs</p></Link>
                </div>
                <div className="navigations">
                    <h3>Company</h3>
                    <Link to="/blog"><p>Blog</p></Link>
                    <Link to="/partner"><p>Become a Partner</p></Link>
                    <Link to="/careers"><p>Careers</p></Link>
                    <Link to="/about"><p>About-Us</p></Link>
                </div>
                <div className="tutorials">
                    <h3>Learn</h3>
                    <Link to="/cook-schook"><p>Cook School</p></Link>
                    <Link to="/food-challenge"><p>Food Challenge</p></Link>
                    <Link to="/meal-today"><p>Meal of the Day</p></Link>
                </div>
                <div className="subscription">
                    <h3>Subscribe to Our Newsletter!</h3>
                    <p>Get the upto date information on Diet, exercise and lifestyle to stay healthy and fight against lifestyle disease.</p>
                    <form onSubmit={"handleSubmission"}>
                        <div className="email-info">
                            <input type="email" placeholder="someone@gmail.com" name="email"></input>
                            <input type="Submit" className="submit-btn" value="Submit"></input>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
};

export default Footer;