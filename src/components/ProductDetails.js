import React, {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ProductData from "../Data/ProductData";
import {Link} from "react-router-dom";
import ReviewData from "../Data/ReviewData";
import Ratings from "./Ratings";
import Avatar from '@material-ui/core/Avatar';
import InputForm from "./InputForm";


const useStyles = makeStyles((theme) => ({
    button: {
        borderRadius: "10px",
        color: "#fff",
        backgroundColor: "#ff7d01",
        marginLeft: "1.5rem"
    },
    buttonReview: {
        backgroundColor: "#28696d",
        color: "#fff",
    }

  }));
  

export default function ProductDetails(props){
    const classes= useStyles();
    const [imgId, setimgId]=useState(0);
    const [noOfItems, setnoOfItems]=useState(1);
    const [activeTab, setactiveTab]=useState("product");
    const [showForm, setShowForm]=useState(false);
    let count=0;            //number of reviews for the particular product.
    const rate=365;
    let sumRatings=0;             //sum of likes/rating divide by total reviews.
    let otherProductCount=0       // holds for number of other product item to be displayed.
    ReviewData.map((review)=>{
        if(props.id===review.productId){
            sumRatings+=review.rating;
            count++;
        }
    })
    const avgRatings=Math.round(sumRatings/count);

    function handlePlus(){
        setnoOfItems(noOfItems=>Number(noOfItems)+1);
    }
    function handleMinus(){
        setnoOfItems(noOfItems=>noOfItems!==1? noOfItems-1:1);
    }
    function handleValueChange(event){
        let val= event.target.value;
        setnoOfItems(val>0? val:1);
    }
    function handleFocus(){
        setnoOfItems(null);
    }
    function handleClick(event){
        setimgId(event.currentTarget.id);
    }
    function handleTabClick(event){
        setactiveTab(event.target.id);
    }
    function showReviewForm(event){
        event.preventDefault();
        console.log(!showForm)
        setShowForm(!showForm);
        
    }
    return (
        <section className="product">
        {/*Product image section */}
            <div className="product-details">
                <div className="product-img">
                    <div className="display-img">
                        <img alt="Product_img" src={ProductData[props.id].img[imgId]} height="100%" width="100%" />
                    </div>
                    <div className="thumbnails">
                        {ProductData[props.id].img.map((item,index)=>(
                            <div className="thumbnails-item" key={index}>
                                <img onClick={handleClick} alt={"product-item"} id={index} src={item} width="100%" height="100%s" />
                            </div>
                        ))}
                    </div>
                </div>
                {/*Product information section */}
                <div className="product-info">
                    <h5  className="product-status">{ProductData[props.id].stock>0? "stocked":"sold out"}</h5>
                    <div className="details">
                        <h1 className="product-title">{ProductData[props.id].name}</h1>
                        <div className="ratings">
                            <Ratings rating={avgRatings} />
                            <span className="review-no">({count}) reviews</span>
                        </div>
                        <p className="product-description">{ProductData[props.id].productInfo}</p>
                        <p className="product-amt"><span className="naira">N</span>{ProductData[props.id].amt}  <span className="dollar-price">$ {(ProductData[props.id].amt/rate).toFixed(2)}</span></p>
                    </div>
                    <div className="Add-to-chart">
                            <span className="change-value first" onClick={handlePlus}>+</span>
                            <input className="item-value" type="text" name="numOfItems" value={noOfItems} onChange={handleValueChange} onFocus={handleFocus}></input>
                            <span className="change-value" onClick={handleMinus}>-</span>
                            <Button variant="contained" className={classes.button} href="/products/product-details/productId">Add to Chart</Button>
                    </div>
                    <div className="share-product">
                        <div className="share-text">
                            <p>SHARE: </p>
                        </div>
                        <div className="social-icons share-icons">
                            <Link to="/socials/twitter">
                            <i className="fab fa-twitter" style={{color:"rgb(37, 150, 190)"}}></i>
                            </Link> 
                            <Link to="/socials/facebook">
                                <i className="fab fa-facebook"></i>
                            </Link> 
                            <Link to="/socials/instagram">
                                <i className="fab fa-instagram" style={{color:"rgb(37, 150, 190)"}} ></i>
                            </Link> 
                            <Link to="/socials/youtube">
                                <i className="fab fa-youtube" style={{color:"#f50707"}}></i>
                            </Link> 
                        </div>
                    </div>
                </div>
            </div>

            {/*Product review section */}

            <div className="product-review">
                <div className="tabs">
                    <div className={activeTab==="product"? "active-tab":"review-tab"} id="product" onClick={handleTabClick}>Features</div>
                    <div className={activeTab==="review"? "active-tab":"review-tab"} id="review" onClick={handleTabClick}>Reviews</div>
                </div>
                <div className="feature-review">
                    {
                        activeTab==="product" && 
                        <div style={{width:"80%", margin:"Auto"}}>
                            <div className="product-features">
                                {ProductData[props.id].features}
                            </div>
                        </div>
                    }
                    {
                        activeTab==="review" &&
                        <div style={{width:"80%", margin:"Auto"}}>
                            <div className="review-content">
                                {ReviewData.map((item,index)=>{
                                    return item.productId===props.id? 
                                    <div key={index} className="review-item">
                                        <div className="reviewer-info">
                                            <Avatar src="" />
                                            <div className="reviewer">
                                                <h5>{item.reviewer.name}</h5>
                                                <Ratings rating={item.rating} color="rgb(242, 242, 242, 0.7)"/>
                                            </div>
                                            <p className="review-date">{item.Date}</p>
                                        </div>
                                        <div className="review-text">
                                            <p>
                                                {item.content}
                                            </p>
                                        </div>
                                        
                                    </div>: null
                                })}
                            </div>
                            <div className="review-button">
                                <button className="btn-showForm " onClick={showReviewForm}>Add  Review</button>
                            </div>
                            <div className="review-form">
                                {showForm && <InputForm id={props.id} />}
                            </div>
                        </div>
                    }
                </div>

            </div>
            {/* Other Product section */}
            <div className="other-product-listings">
                <div className="other-title">
                    <h1>You may also like</h1>
                    <span className="other-line"></span>
                </div>
                <div className="other-products">
                    {ProductData.map((item,index)=>{
                        otherProductCount+=1;
                       return index!==props.id && otherProductCount<=5 && <div className="other-product-info" key={item.id}>
                            <img src={item.img[0]} alt={item.name} width="100%" height="80%"/>
                            <h4 className="other-product-title">{item.name}</h4>
                            <Button href={"/products/"+item.name} color="primary" style={{fontSize: "small"}}>
                                See more
                            </Button>
                        </div>
                    })}
                </div>
            </div>
        </section>
    )
}