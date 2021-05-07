import React, { useState } from "react";
import family from "../images/family.jpg";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link, Router } from "react-router-dom";
import {motion} from "framer-motion";
import Title from "./Title";
import HeroText from "./HeroText";
import HeroImage from "./HeroImage";


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
function Hero(props){
    const [currentItem, setCurrentItem]=useState(0);
    const [currentText, setCurrentText]=useState(0);
    function handleClick(event){
        const {id}=event.target;
        setCurrentItem(id);
    }
    function displayNextItem(){
        setCurrentItem(currentItem===(props.heroInfo.length-1)? 0:currentItem+1)
    }
    function displayNextText(){
        setCurrentText(currentText===(props.heroInfo.length-1)? 0:currentText+1);
    }
    setTimeout(displayNextItem,5000)
    setTimeout(displayNextText,6000);
    console.log("heroTime "+currentItem)
    console.log("heroText "+currentText)
    return (
        <session className="hero-container">
        {/*hero content-Image & text */}
            {props.heroInfo.map((heroItem,index)=>{
                return (
                    <>
                        <div className={currentItem===index? "heroTitle-active":"heroTitle" }>
                        {currentItem===index && <div className='hero-section' key={index} id={index}>
                            <div className='hero-text'>
                                <div className={currentItem===index? "heroTitle-active":"heroTitle"}>
                                    {currentItem===index && (<Title sliderInfo={heroItem} />)}
                                </div>
                                <div className={currentItem===index? "heroTextContent-active":"heroTextContent"} >
                                    {currentItem===index && (<HeroText sliderInfo={heroItem} />)}
                                </div>
                                {/*Button animation */}
                                <div className={currentItem===index? "heroButton-active":"heroButton"}>
                                    {index===0? 
                                    (<Button variant="outlined" style={{borderColor: '#ff7d01', color: '#ff7d01'}} href= {heroItem.buttonLink}>
                                        {heroItem.buttonLabel}
                                    </Button>): index===1? (<Button variant="contained" style={{backgroundColor: '#ff7d01', color: '#fff'}} href={heroItem.buttonLink}>
                                        {heroItem.buttonLabel}
                                    </Button>) : (<div className="btn-business">
                                        <Button variant="outlined" style={{borderColor: '#ff7d01', color: '#ff7d01'}} href={heroItem.buttonLabel.button1.Link}>
                                            {heroItem.buttonLabel.button1.name}
                                        </Button>
                                        <Button variant="contained" style={{backgroundColor: '#ff7d01', color: '#fff'}} href={heroItem.buttonLabel.button2.link}>
                                            {heroItem.buttonLabel.button2.name}
                                        </Button>
                                    </div>) }
                                    {/*{index===1 && 
                                    <Button variant="contained" style={{backgroundColor: '#ff7d01', color: '#fff'}} href={heroItem.buttonLink}>
                                        {heroItem.buttonLabel}
                                    </Button>}
                                    {index===2 && 
                                    <div className="btn-business">
                                        <Button variant="outlined" style={{borderColor: '#ff7d01', color: '#ff7d01'}} href={heroItem.buttonLabel.button1.Link}>
                                            {heroItem.buttonLabel.button1.name}
                                        </Button>
                                        <Button variant="contained" style={{backgroundColor: '#ff7d01', color: '#fff'}} href={heroItem.buttonLabel.button2.link}>
                                            {heroItem.buttonLabel.button2.name}
                                        </Button>
                                    </div>}*/}
                                </div>                    
                            </div>
                            <div className={currentItem===0? "hero-img1":currentItem===1? "hero-img":"hero-img2"} >
                                    {currentItem===index && (<HeroImage sliderInfo={heroItem} />)}
                            </div>
                        </div>}

                        </div>
                    </>  
                )
            })
            }                  
            {/* Slider indicator section */}
            <div className='hero-indicator'>
                <span className={currentItem===0? 'indicator-active':'indicator'} id="0" onClick={handleClick}></span>
                <span className={currentItem===1? 'indicator-active':'indicator'} id="1" onClick={handleClick}></span>
                <span className={currentItem===2? 'indicator-active':'indicator'} id="2" onClick={handleClick}></span>
            </div>
            
        </session>
    )
}

export default Hero;