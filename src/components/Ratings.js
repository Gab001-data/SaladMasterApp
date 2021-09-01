import React from "react";

function Ratings(props){
    return(
        <div>
            <i id="1" className="fas fa-star" style={{color: props.rating>=1? "#ffcc00": props.color? props.color:"#d9d9d9", cursor:props.type? "pointer":"default"}} onClick={props.type==="input"? (event)=>props.handleClick(event):null }></i>
            <i id="2" className="fas fa-star" style={{color: props.rating>=2? "#ffcc00": props.color? props.color:"#d9d9d9", cursor:props.type? "pointer":"default"}} onClick={props.type==="input"? (event)=>props.handleClick(event):null }></i>
            <i id="3" className="fas fa-star" style={{color: props.rating>=3? "#ffcc00": props.color? props.color:"#d9d9d9", cursor:props.type? "pointer":"default"}} onClick={props.type==="input"? (event)=>props.handleClick(event):null }></i>
            <i id="4" className="fas fa-star" style={{color: props.rating>=4? "#ffcc00": props.color? props.color:"#d9d9d9", cursor:props.type? "pointer":"default"}} onClick={props.type==="input"? (event)=>props.handleClick(event):null }></i>
            <i id="5" className="fas fa-star" style={{color: props.rating>=5? "#ffcc00": props.color? props.color:"#d9d9d9", cursor:props.type? "pointer":"default"}} onClick={props.type==="input"? (event)=>props.handleClick(event):null }></i>
        </div>
    )
}

export default Ratings;