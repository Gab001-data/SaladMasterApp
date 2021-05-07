import React, {useState} from "react";
import cooking_oil from "../images/cooking_oil.jpg";
import Button from '@material-ui/core/Button';
import {Posts} from "./PostsData";


function Blog(){
    const [currentItem, setCurrentItem]=useState(0);
    function displayRight(){
        setCurrentItem(currentItem===(Posts.length-1)? 0:currentItem+1);
    }
    function displayLeft(){
        setCurrentItem(currentItem===0? Posts.length-1:currentItem-1);
    }
    return (
        <section className="blog-post">
            <div className="blog-content">
            <h1>Blog Post</h1>
            {
                Posts.map((post,index)=>{
                    return (
                        <div key={index} id={index} className={currentItem===index? "post-active":"post"}>
                            {currentItem===index && 
                            <div>
                                <h3>{post.title}</h3>
                                <div className="blog-image">
                                    <img src={post.img} width="100%" height="100%" alt="blog-img" />
                                </div>
                                <div className="blog-btn">
                                    <Button variant="contained" style={{color: '#fff', backgroundColor:"#ff7d01"}} href="/post/id">
                                        See More <i className="fas fa-arrow-right"></i>
                                    </Button>
                                </div>
                            </div>
                            }
                        </div>   
                    )  
                })
            }
                
            </div>
            <i class="fas fa-chevron-left fa-5x arrow-left" onClick={displayLeft} ></i>
            <i class="fas fa-chevron-right fa-5x arrow-right" onClick={displayRight}></i>
        </section>
    )
}

export default Blog;