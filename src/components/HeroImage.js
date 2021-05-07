import React from "react";

function HeroImage(props){
    return (
            <img src={props.sliderInfo.imgName} height='100%' width='100%' alt='hero-img'></img>
    )
}

export default HeroImage;