import React from "react";

function Ratings(props){
    return(
        <div>
            <i className="fas fa-star" style={{color: props.rating>=1? "#ffcc00":"#d9d9d9"}} id="1" onClick={(event)=>{props.assignRating(event.target.id)}}></i>
            <i className="fas fa-star" style={{color: props.rating>=2? "#ffcc00":"#d9d9d9"}} id="2" onClick={(event)=>{props.assignRating(event.target.id)}}></i>
            <i className="fas fa-star" style={{color: props.rating>=3? "#ffcc00":"#d9d9d9"}} id="3" onClick={(event)=>{props.assignRating(event.target.id)}}></i>
            <i className="fas fa-star" style={{color: props.rating>=4? "#ffcc00":"#d9d9d9"}} id="4" onClick={(event)=>{props.assignRating(event.target.id)}}></i>
            <i className="fas fa-star" style={{color: props.rating>=5? "#ffcc00":"#d9d9d9"}} id="5" onClick={(event)=>{props.assignRating(event.target.id)}}></i>
        </div>
    )
}

export default Ratings;