import React, {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import {IconsData} from "../Data/AlertData";
import * as FaIcon from "react-icons/fa";
import * as AiIcon from "react-icons/ai";
import * as IoIcon from "react-icons/io";
import * as HiIcon from "react-icons/hi";
import * as FcIcon from "react-icons/fc";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    }
  }));
const DashboardNav=(props)=>{
    const [showSideBar, setShowSideBar]=useState(false);
    const [showAlert, setShowAlert]=useState(false);
    const [searchVal, setSearchVal]=useState("");
    const [newMsgCount, setNewMsgCount]=useState({
        oldCount:props.alert.length,
        newCount:props.alert.length
    }); //considering read and unread messages
    const [showLogout, setShowLogout]=useState(false);
    const handleChange=(event)=>{
        let val=event.target.value;
        setSearchVal(val);
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
    }
    const handleLogout=()=>{
        setShowLogout(!showLogout);
    }
    function handleShowAlert(event){
        event.preventDefault();
        setShowAlert(!showAlert);
        setNewMsgCount((msg)=>({
            ...msg,
            newCount:0
        }))
        console.log(showAlert);
    }
    return (
        <>
            <nav className="flexbox dashboard-nav">
                <div className=" flexbox mobile-items">
                    <FaIcon.FaBars className="mobile-dropdown-toggle" />
                    <AiIcon.AiOutlineSearch className="mobile-search-icon" />
                </div>
                <div className="left-nav-item">
                    <form className="search-form" onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input type="text" name="search" value={searchVal} onChange={handleChange} placeholder="search for..." />
                            <button type="submit" className="btn-search"><AiIcon.AiOutlineSearch className="" /></button>
                        </div>
                    </form>
                </div>
                <div className="flexbox right-nav-item" >
                    <div className="notification-alert">
                        <FaIcon.FaBell style={{fontSize:"large", cursor:"pointer",color: "rgba(0,0,0,0.3)"}} onClick={handleShowAlert} />
                        <span className="notification-badge">{newMsgCount.newCount}+</span>
                        {/*------------------------Alert message dropdown --------------------*/}
                        <div className={showAlert? "dropdown-container slidedown": "dropdown-container"} >
                            {
                                showAlert && 
                                <div className="alert-dropdown">
                                    <h5>Alert center</h5>
                                    {props.alert.map((alert,index)=>(
                                        <Link to="/dashboard" className="flexbox alert-item" key={index}>
                                            {IconsData.map((icon)=>(
                                                alert.category===icon.category? <span className="alert-icon">{icon.icon}</span>:null
                                            ))}
                                            <div className="alert-info">
                                                <h6>{alert.date}</h6>
                                                <span>{alert.content}</span>
                                            </div>
                                        </Link>
                                    ))}
                                    <Link to='/dashboar/alerts' className="see-all-alert">See All</Link>
                                </div>
                            }
                        </div>
                        
                    </div>
                    <div className="message">
                        <FaIcon.FaEnvelope style={{fontSize:"large", cursor:"pointer",color: "rgba(0,0,0,0.3)"}}/>
                        <span className="notification-badge">{newMsgCount.newCount}+</span>                    
                    </div>
                    <div className="flexbox profile-logout">
                        <span className="consultant-name">{props.consultant.name.firstName} {props.consultant.name.lastName}</span>
                        <Avatar className="avatar" src={props.consultant.photo} onClick={handleLogout} />
                        {/*----------------------- Logout dropdown---------------------------- */}
                        <div className={showLogout? "dropdown-logout slidedown":"dropdown-logout"}>
                            {showLogout && 
                            <div className="dropdown-logout-container">
                                <Link to="" className="flexbox Logout-menu">
                                    <FaIcon.FaUser className="profile-icon" />
                                    <span>Profile</span>
                                </Link>
                                <Link to="" className="flexbox Logout-menu">
                                    <AiIcon.AiFillSetting className="profile-icon" />
                                    <span>Settings</span>
                                </Link>
                                <Link to="" className="flexbox Logout-menu">
                                    <AiIcon.AiOutlineBars className="profile-icon" />
                                    <span>Activity Log</span>
                                </Link>
                                <hr />
                                <Link to="" className="flexbox Logout-menu">
                                    <IoIcon.IoIosLogOut className="profile-icon" />
                                    <span>Logout</span>
                                </Link>
                            </div> 
                            }              
                        </div>  
                    </div>
                </div>

            </nav>
        </>
    )
}

export default DashboardNav;