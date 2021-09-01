import React from "react";
import * as FaIcon from "react-icons/fa";

const colors=['#006266','#0652DD','#009432','#5758BB']
const Metrics= (props)=>{
    return (
        <div className="flexbox metric-item" style={{borderLeft:"1px solid "+colors[props.id]}}>
            <div className="metric-content">
                <span style={{color:colors[props.id]}}>{props.title}</span>
                <h5>{props.val}</h5>
            </div>
        </div>
    )
}

export default Metrics;