import React from "react";
import DashboardNav from "./DashboardNav";
import "../css/bootstrap.min.css";
import "../css/dashboardAdmin.css";
import AlertData from "../Data/AlertData";
import ConsultantsData from "../Data/ConsultantsData";
import DashboardSideBar from "./DashboardSideBar";
import ConsultantSideBarData from "../Data/ConsultantSideBarData";
import * as FaIcon from "react-icons/fa";
import * as AiIcon from "react-icons/ai";
import * as GiIcon from "react-icons/gi";
import * as RiIcon from "react-icons/ri";
//import {Link} from "react-router-dom";
import {Bar} from "react-chartjs-2";
import Metrics from "./Metrics";
import PresentationData from "../Data/PresentationData";
import SalesData from "../Data/SalesData";
import CommissionData from "../Data/CommissionData";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import DashboardFooter from "./DashboardFooter";
import DashboardHome from "./DashboardHome";
import {BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from "react-router-dom";
import RegisterDinner from "./RegisterDinner";
import Presentations from "./Presentations";


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    }
  }));
const DashboardAdmin = ()=>{
    let consultant_id=1;                                    //consultant ID
    let consultant=ConsultantsData.filter(consult=>consult.id===consultant_id)[0]; //consultant
    const months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const getMonthlyMetrics=(consultantId,metricObj,info)=>{
        //compute monthly stats and metric obj
        const monthlyStats={0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0}; //initialize month values
        const monthlyDetails={};
        const monthlyCookedStats={0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0};
        const monthlyCookedDetails={};
        metricObj.map((item,index)=>{    //collect all dinner bookings belonging to a consultant
            let month=info==="sales"? new Date(item.date).getMonth(): new Date(item.bookDate).getMonth();
            if(info==="sales"){ //obtain sales metrics since structure differs from other metrics
                if(item.consultants.owner && item.consultants.owner.id===consultantId){
                    if(!monthlyDetails[month]){
                        monthlyDetails[month]=[]; //list to hold all dinners by consultant in the current month
                    }
                    monthlyStats[month]+=1
                    monthlyDetails[month].push(item);
                }
            }else
            {
                if(item.consultant && item.consultant.id===consultantId){
                    if(!monthlyDetails[month]){
                        monthlyDetails[month]=[];
                        monthlyCookedDetails[month]=[];
                    }
                    monthlyStats[month]+=1
                    monthlyDetails[month].push(item);
                    if(item.status.toLowerCase()==="booked"){//filter for cooked dinners
                        monthlyCookedStats[month]+=1;
                        monthlyCookedDetails[month].push(item);
                    }
                }
            }  
        })
        return [monthlyStats,monthlyDetails,monthlyCookedStats,monthlyCookedDetails];

    }   
    function getConsultantStat(consultantId,metricObj,info){
        let count=0;
        let consultantMetrics=[];       //collection for dinners booked by consultants per month
        metricObj.map((item,index)=>{    //collect all dinner bookings belonging to a consultant
            
            if(info==="sales"){ //obtain sales metrics since structure differs from other metrics
                if(item.consultants.owner && item.consultants.owner.id===consultantId){
                    consultantMetrics.push(item);
                    count++;
                }
            }else
            {
                if(item.consultant && item.consultant.id===consultantId){
                    consultantMetrics.push(item);
                    count++;
                }
            }  
        })
        return {
            itemCount:count,
            metrics:consultantMetrics
        }
    }
    const ArrayData=(obj)=>{ //create an array of monthly dinner stats for visualization
        const list=[];
        for(let props in obj){
            list.push(obj[props]);
        }
        return list;
    }
    //Cummulative Metric data-dinner booked,cooked,sales and commission
    const {itemCount:dinnerCount,metrics:consultantDinners}=getConsultantStat(consultant_id,PresentationData);
    //dinner cooked & booked -merics n/b search should be based on months
    let cookedCount=0;
    let bookedCount=0;
    const cookedDinners=[];
    const bookedDinners=[];
    consultantDinners.map((item,index)=>{
        if((item.status).toLowerCase()==='cooked'){
            cookedDinners.push(item);
            cookedCount++;
        }
        if((item.status).toLowerCase()==='booked'){
            bookedDinners.push(item);
            bookedCount++;
        }
    });
    const sortedBooking=bookedDinners.sort((a,b)=>(Date(a.bookDate)- Date(b.bookDate))*(-1));
    console.log(sortedBooking);
    //product sales-metrics
    const {itemCount:salesCount,metrics:consultantSales}=getConsultantStat(consultant_id,SalesData,"sales");
    //available commissions-metrics
    let commissionSum=0;
    const {itemCount:comCount,metrics:consultantCommission}=getConsultantStat(consultant_id,CommissionData);
    //monthly consultant data
    const [monthlySalesstats, monthlySalesData]=getMonthlyMetrics(consultant_id,SalesData,"sales");
    const [monthlyDinnerStats,monthlyDinnerData,monthlyCookedStats,monthlyCookedDetails]=getMonthlyMetrics(consultant_id,PresentationData);
    //generate label data for visualization purposes
    const salesData=ArrayData(monthlySalesstats);
    const dinnerData=ArrayData(monthlyDinnerStats);
    const cookedData=ArrayData(monthlyCookedStats);
    let {path, url}=useRouteMatch();
    console.log(path,url);
    return(
        <section className="section-container">
            <div className="nav-sidebar">
                <DashboardSideBar consultant={ConsultantsData[0]} sidebarData={ConsultantSideBarData} />
            </div>
            <div className="main-content">
                {/*----------------------- Navigation  -------------------------------- */}
                <DashboardNav consultant={ConsultantsData[0]} alert={AlertData} />
                {/*-----------------------Dashboard main content ------------------------ */}
                <div className="dashboard-content">
                    <Switch>
                        <Route exact path={path} >
                            <DashboardHome title={"Dashboard" } salesCount={salesCount} dinnerCount={dinnerCount} cookedCount={cookedCount} salesData={salesData} cookedData={cookedData} dinnerData={dinnerData} monthlyDinnerData={monthlyDinnerData} consultant={consultant} />
                        </Route>
                        <Route exact path={`${path}/health-demo/register`} >
                            <RegisterDinner title="Register Dinner" />
                        </Route>
                        <Route exact path={`${path}/health-demo`} >
                            <Presentations title="Dinners/Presentations" dinners={bookedDinners} />
                        </Route>
                    </Switch>
                </div>
                <DashboardFooter />
            </div>
        </section>
    )
}

export default DashboardAdmin