import React from "react";
import * as FaIcon from "react-icons/fa";
import * as AiIcon from "react-icons/ai";
import * as GiIcon from "react-icons/gi";
import * as RiIcon from "react-icons/ri";
import {Link} from "react-router-dom";
import {Bar} from "react-chartjs-2";
import Metrics from "./Metrics";
import PresentationData from "../Data/PresentationData";
import SalesData from "../Data/SalesData";
import CommissionData from "../Data/CommissionData";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const DashboardHome=(props)=>{
    return (
        <>
                    <div className="flexbox dashboard-title">
                        <h1>{props.title}</h1>
                        <Link className="btn-link" to="/partner_id/report"><FaIcon.FaDownload />Download Report</Link>
                    </div>
                    {/*------------------Metric section--------------------------------- */}
                    <div className="flexbox metric-container">
                        <div className="flexbox metric-item" style={{borderLeft:"4px solid #006266"}}>
                            <div className="metric-content">
                                <span style={{color:'#006266'}}>Sales (Monthly)</span>
                                <h5>{props.salesCount<9? "0"+String(props.salesCount):props.salesCount}</h5>
                            </div>
                            <FaIcon.FaBriefcase />
                        </div>
                        <div className="flexbox metric-item" style={{borderLeft:"4px solid #0652DD"}}>
                            <div className="metric-content">
                                <span style={{color:'#0652DD'}}>Avl Commission</span>
                                <h5><span className="currency">N</span>{150000}</h5>
                            </div>
                            <FaIcon.FaDollarSign />
                        </div>
                        <div className="flexbox metric-item" style={{borderLeft:"4px solid #009432"}}>
                            <div className="metric-content">
                                <span style={{color:'#009432'}}>Bookings</span>
                                <h5>{props.dinnerCount<9? "0"+String(props.dinnerCount):props.dinnerCount}</h5>
                            </div>
                            <AiIcon.AiOutlineSchedule />
                        </div>
                        <div className="flexbox metric-item" style={{borderLeft:"4px solid #5758BB"}}>
                            <div className="metric-content">
                                <span style={{color:'#5758BB'}}>Cookings</span>
                                <h5>{props.cookedCount<9? "0"+String(props.cookedCount):props.cookedCount}</h5>
                            </div>
                            <GiIcon.GiCook/>
                        </div>
                    </div>
                    {/*--------Metric data visualization section------------------------- */}
                    <div className="flexbox visualizations">
                        <Bar data={{
                            labels:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
                            datasets:[{
                                label:'Monthly Sales',
                                data: props.salesData,   //[100,20,45,67,100,120,10,230,56,98,3,56],
                                backgroundColor: 'rgb(237, 76, 103)',
                                borderColor: 'rgb(237, 76, 103)',
                                borderWidth: '2px',
                                width: '4px'
                            },
                            {
                                label:'Cooked dinners',
                                data: props.cookedData, //[10,209,5,17,120,10,140,250,156,18,30,156],
                                backgroundColor: 'rgb(6, 82, 221)',
                                borderColor: 'rgb(6, 82, 221)',
                                borderWidth: '2px',
                                width: '4px'
                            },
                            {
                                label:'Booked dinners',
                                data: props.dinnerData, //[80,209,35,87,12,60,54,10,16,48,30,156],
                                backgroundColor: 'rgb(0, 148, 50)',
                                borderColor: 'rgb(0, 148, 50)',
                                borderWidth: '2px',
                                width: '4px'
                            }
                            ]                            
                        }} 
                         options={{
                             scales:{
                                 xAxes:[{
                                     scaleLabel:{
                                         labelString:'Months',
                                         display:true
                                     },
                                     gridLines:{
                                         color:'',
                                         display: false
                                     }
                                 }],
                                 yAxes:[{
                                     scaleLabel:{
                                         labelString:'No of dinners',
                                         display:true       
                                     }
                                 }]
                             }
                         }}   
                        />
                    </div>
                    {/*------------------Metric data table & Recruits info ----------------------------*/}
                    <div className="flexbox table-container">
                        <div className="table-dinner">
                            <div className="flexbox">
                                <span className="table-caption">Booked Presentations</span>
                                <Link to="/dashboard/partner-id/dinners" className="btn-link view-all" >
                                    View all
                                </Link>
                            </div>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Customer Name</th>
                                        <th scope="col">Booked Date</th>
                                        <th scope="col">Dinner Time</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        props.monthlyDinnerData[5].map((dinner,index)=>{ //5 represent the month number for which dinner data in the monthlyDinnerData is displayed
                                            return (
                                                dinner.status.toLowerCase()==='booked'? 
                                                <tr>
                                                    <td>{dinner.custName}</td>
                                                    <td>{dinner.bookDate}</td>
                                                    <td>{dinner.dinnerTIme}</td>
                                                    <td><span className={new Date()> new Date(dinner.bookedDate)?"rescheduled-dinner":"booked-dinner"}>
                                                    {new Date()> new Date(dinner.bookedDate)? "Rescheduled":"Booked"}
                                                    </span></td>
                                                    <td className="flexbox actions">
                                                        <Link to="/partner_id/dinner/edit"><FaIcon.FaEdit /></Link>
                                                        <Link to="/partner_id/dinner/details"><AiIcon.AiFillEye /></Link>
                                                        <Link to="/partner_id/dinner/delete"><RiIcon.RiDeleteBin6Line /></Link>
                                                    </td>
                                                </tr>:null
                                            )
                                        })
                                    }
                                </tbody>
                            </table>            
                        </div>
                        <div className="recruits-info">
                            <h4>Active Recruitments</h4>
                            {
                                props.consultant.recruits.map((recruit,index)=> <div className="flexbox recruit-details" key={index}><Avatar src={recruit.photo} />
                                    <div className="personal-info">
                                        <span className="recruit-name">{recruit.name.firstName}</span>
                                        <span className="stateOfOrigin">{recruit.StateofOrigin}</span>
                                    </div>
                                </div>)
                            }
                        </div>          
                    </div>
        </>          
    )
}

export default DashboardHome;