import React, {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import {IconsData} from "../Data/AlertData";
import * as FaIcon from "react-icons/fa";
import * as AiIcon from "react-icons/ai";
import * as IoIcon from "react-icons/io";
import * as HiIcon from "react-icons/hi";
import * as FcIcon from "react-icons/fc";
import {BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    }
}));
const DashboardSideBar=(props)=>{
    const [isDropdown, setIsDropdown]=useState({});

    const handleMenuDropdown=(event)=>{
        let id=event.currentTarget.id
        setIsDropdown((preVal)=>({
                ...preVal,
                [id]:!preVal[id]
        }));
        console.log(isDropdown);
    }
    return (
        <>
            <div className="consultant-info">
                <Avatar src={props.consultant.photo} style={{margin: "auto auto 10px",width: "60px",height: "60px"}} />
                <p>{props.consultant.level} <AiIcon.AiFillCheckCircle style={{color:""}} /></p>
                <Link to="/dashboard/profile" className="btn-profile">Update Profile</Link>
            </div>
            <div className="sidebar-menu">
                {props.sidebarData.map((item,index)=>{
                    return (
                        <div className=" flexbox sidebar-item" key={index}>
                            <span className="sidebar-icon">{item.icon}</span>
                            {!item.subMenu? <Link to={item.path} className="sidebar-link">{item.title}</Link>:<div className="flexbox submenu-title" ><span>{item.title}</span><span onClick={handleMenuDropdown} id={index} className="arrow-icon" >{isDropdown[index]? <FaIcon.FaAngleDown />:<FaIcon.FaAngleRight />}</span></div> }
                            <div className={isDropdown[index]? "sidebar-dropdown-item slide-down":"sidebar-dropdown-item"} >
                                {
                                    isDropdown[index] && item.subMenu && item.subMenu.map((subItem,index)=>(
                                        <Link to={subItem.path} className="flexbox submenu-link">{subItem.icon}<span>{subItem.title}</span></Link>
                                    ))
                                }
                            </div>
                        </div>
                    )
                })}
            </div>

        </>
    )

}


export default DashboardSideBar;