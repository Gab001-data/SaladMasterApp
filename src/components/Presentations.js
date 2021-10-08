import React, {useState} from "react";
import healthTalkPic from "../images/health_talk.png";
import dinnerCookingPic from "../images/cooking_dinner.png";
import * as FaIcon from "react-icons/fa";
import * as AiIcon from "react-icons/ai";
import * as GiIcon from "react-icons/gi";
import * as RiIcon from "react-icons/ri";
import * as IoIcon from "react-icons/io5";
import * as FiIcon from "react-icons/fi";
import {Link} from "react-router-dom";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import RequestModal from "./RequestModal";


const Presentations=(props)=>{
    const[isExpand, setisExpand]=useState({0:true});
    const handleExpandDetails=(event)=>{
        let val=event.currentTarget.id;
        setisExpand(preVal=>(
            {
              ...preVal,
              [val]:!preVal[val]  
            }
        ));
        console.log(val);
    }
    const handleSendMail=()=>{
        document.location="mailto:"+props.dinners[0].contact.email;
    }
    return (
        <>
            <div className="flexbox dashboard-title">
                <h1>{props.title}</h1>
                <Link className="btn-link" to="/partner_id/report"><FaIcon.FaDownload />Download Report</Link>
            </div>
            <div className="flexbox date-filter">
                <label htmlFor="inputDate">Filter Date</label>
                <Datetime input={true} closeOnSelect={true} style={{}} onChange={(e)=>props.filterDinnerData(e)} />
                <p className="show-all" onClick={()=>props.handleShowAll()}>Show All</p> 
            </div>
            <div className="dinner-container"> 
                {props.dinners.map((item,index)=>{
                        return (
                            <div className="dinner-list" key={index}>
                                
                                <div className="flexbox title-container">
                                    <div className="flexbox title-left">
                                        <img src={(item.category).toLowerCase()==='dinner'? dinnerCookingPic:healthTalkPic} />
                                        <h4>{item.custFname+" "+item.custLname}</h4>	
                                    </div>
                                    <div className="flexbox contact-action">
                                        <IoIcon.IoMailUnreadOutline onClick={handleSendMail} />
                                        <FaIcon.FaPhone />
                                        <FaIcon.FaWhatsapp />
                                        <FaIcon.FaTelegramPlane />
                                    </div>
                                    {isExpand[index]? <AiIcon.AiOutlineMinus id={index} style={{cursor: "pointer"}} onClick={handleExpandDetails}/>:<AiIcon.AiOutlinePlus id={index} style={{cursor: "pointer"}} onClick={handleExpandDetails} />}
                                </div>
                                <div className={isExpand[index]? "expand-container":"dinner-details-container"} >
                                    {isExpand[index] && <div className="flexbox dinner-details">
                                        <div className="cust-contact" >
                                            <h4>Contact</h4>
                                            <p><Link to=""><AiIcon.AiOutlinePhone /> {item.contact.phone}</Link></p>
                                            <p><Link to=""><IoIcon.IoMailUnreadOutline /> {item.contact.email}</Link></p>
                                            <div className="social-accounts">
                                                <p><Link to=""><FiIcon.FiTwitter /> Twitter</Link></p>
                                                <p><Link to=""><FaIcon.FaWhatsapp /> Whatsapp</Link></p>
                                                <p><Link to=""><FiIcon.FiFacebook /> Facebook</Link></p>
                                            </div>
                                        </div>
                                        <div className="dinner-info">
                                            <h4>Dinner Info</h4>
                                            <div className="cust-address">
                                                <p><AiIcon.AiOutlineHome />  {item.address}</p>
                                                <p><FaIcon.FaRegCalendarAlt />  {item.bookDate}</p>
                                                <p><IoIcon.IoTimeOutline />  {item.dinnerTime}</p>
                                            </div>
                                            <p>Category: {item.category}</p>
                                        </div>
                                        <RequestModal dinner={item} />
                                    </div>
                                    }
                                </div>
                                
                            </div>
                        )
                })} 
           </div>
        </>
    )
}


export default Presentations;