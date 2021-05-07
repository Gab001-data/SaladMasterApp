import React, { useState } from "react";
import cookware from "../images/cookware.jpg";
import { TestimonialData } from "./TestimonialData";


function Testimonial(){
    //let preImg="";
    //let currentImg="";
    //let nextImg="";
    //let counter=0;
    const [currentItem, setCurrentItem]=useState(0);
    const [currentImg, setCurrentImg]=useState(0);
    function displayItem(){
        setCurrentItem(currentItem===(TestimonialData.length-1)? 0:currentItem+1)
    }
    function displayImg(){
        setCurrentImg(currentImg===(TestimonialData.length-1)? 0:currentImg+1);
    }
    setTimeout(displayItem,7000);
    setTimeout(displayImg,7250);
    console.log("heroTime1 "+currentItem);
    console.log("heroText2 "+currentImg);
    return (
        
        <section className="testimonial-section">
            <div className="testimonial-title">
                <div class="triangle-up"></div>
                <h1>What Our Customers are saying</h1>
            </div>
            <div className="testimonial-content">
                <h2>Join our community today!. Your health will thank you</h2>
                {TestimonialData.map((item,index)=>{
                    return (
                        <div key={index} className={currentItem===index? "testimonial-active":"testimonial"}>
                            {currentItem===index &&
                                <p>{item.testimonial}</p>
                            }
                        </div>
                    )

                })}
                {
                    TestimonialData.map((imgItem,index)=>{
                        return (
                            <div key={index} className={currentImg===index? "currentImg-active":"currentImg"}>
                                {currentImg===index &&
                                    <div>
                                        <div className="testimonial-imgs">
                                            <div className="previous-img">
                                                <div className="img-cover"></div>
                                                <img className="testimonial-img" src={currentImg===0? TestimonialData[TestimonialData.length-1].img:TestimonialData[currentImg-1].img} height="100%" width="100%" alt="" />
                                            </div>
                                            <div className="current-img">
                                                <img className="testimonial-img" src={imgItem.img} height="100%" width="100%" alt="" />
                                            </div>
                                            <div className="next-img">
                                                <div className="img-cover"></div>
                                                <img className="testimonial-img" src={currentImg===TestimonialData.length-1? TestimonialData[0].img:TestimonialData[currentImg+1].img} height="100%" width="100%" alt="" />
                                            </div>
                                        </div>
                                        <p className="customer-name">{imgItem.customerName}</p>
                                    </div>  
                                }
                            </div>
                        )
                    })
                }
                
            </div>
        </section>
    )
}

export default Testimonial;