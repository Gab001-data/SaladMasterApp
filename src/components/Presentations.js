import React, {useState} from "react";
import healthTalkPic from "../images/health_talk.png";
import dinnerCookingPic from "../images/cooking_dinner.png";
import * as FaIcon from "react-icons/fa";
import * as AiIcon from "react-icons/ai";
import * as GiIcon from "react-icons/gi";
import * as RiIcon from "react-icons/ri";
import * as IoIcon from "react-icons/io5";
import {Link} from "react-router-dom";


const Presentations=(props)=>{
    const[isExpand, setisExpand]=useState({0:true});
    const handleExpandDetails=(key)=>{
        setisExpand(preVal=>(
            {
              ...preVal,
              key:!preVal[key]  
            }
        ))
    }
    return (
        <>
            <div className="flexbox dashboard-title">
                <h1>{props.title}</h1>
                <Link className="btn-link" to="/partner_id/report"><FaIcon.FaDownload />Download Report</Link>
            </div>
           {props.dinners.map((item,index)=>{
                return (
                    <div className="dinner-list" key={index}>
                        <div className="flexbox title-container">
                            <div className="flexbox title-left">
                                <img src={(item.category).toLowerCase()==='dinner'? dinnerCookingPic:healthTalkPic} style={{width:"20px"}}/>
                                <h4>{item.custName}</h4>	
                            </div>
                            <div className="flexbox contact-action">
                                <IoIcon.IoMailUnreadOutline />
                                <FaIcon.FaPhone />
                                <FaIcon.FaWhatsapp />
                                <FaIcon.FaTelegramPlane />
                            </div>
                            {isExpand[index]? <AiIcon.AiOutlineMinus />:<AiIcon.AiOutlinePlus />}
                        </div>
                        {isExpand[index] && <div className="flexbox dinner-details">
                            <div className="cust-name">
                                <h4>{item.name}</h4>
                                <div className="socials" >
                                    <h4>Contact</h4>
                                    <p><Link to=""><FaIcon.FaPhone /> {item.contact.phone}</Link></p>
                                    <p><Link to=""><FaIcon.FaTwitter /> Twitter</Link></p>
                                    <p><Link to=""><FaIcon.FaWhatsapp /> Whatsapp</Link></p>
                                    <p><Link to=""><FaIcon.FaFacebookF /> Facebook</Link></p>
                                </div>
                            </div>
                            <div className="cust-contact">
                                <h4>Contact</h4>
                                <div className="cust-email">
                                    <h5>Email</h5>
                                    <Link to="">{item.contact.email}</Link>
                                </div>
                                <div className="cust-address">
                                    <p>{item.address}</p>
                                </div>
                            </div>
                        </div>
                        }
                    </div>
                )

           })} 
        </>
    )
}


export default Presentations;