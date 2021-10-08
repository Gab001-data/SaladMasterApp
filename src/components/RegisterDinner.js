import React, {useState,useEffect} from "react";
import {Link} from "react-router-dom";
import * as FaIcon from "react-icons/fa";
import * as AiIcon from "react-icons/ai";
import * as GiIcon from "react-icons/gi";
import * as RiIcon from "react-icons/ri";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";


const RegisterDinner=(props)=>{
    const [dinnerData, setDinnerData, getValue]=useState({});
    // useEffect(()=>{
    //     setDinnerData({bookDate:""})
    // })
    const handleSelectDate=(e)=>{
        let date= String(e._d).split(" ");
        let bookDate=`${date[2]}-${date[1]}-${date[3]}`;
        let dinnerTime=`${date[4]}`;
        setDinnerData((preVal)=>({
            ...preVal,
            bookDate:bookDate,
            dinnerTime:dinnerTime
        }))
    }
    //handle input change of controlled elements
    const handleChange=(event)=>{
        let name=event.currentTarget.name;
        let val=event.currentTarget.value;
        setDinnerData((preVal)=>(
            {
                ...preVal,
                [name]:name==="custName" && preVal.custName? preVal.custName+" "+val:val
            }
        ))
    }
    //handle form submission
    const handleSubmit =(event)=>{
        event.preventDefault();
        console.log(dinnerData) //send data via axios request
    }
    return (
        <>
            <div className="flexbox dashboard-title">
                <h1>{props.title}</h1>
                <Link className="btn-link" to="/partner_id/report"><FaIcon.FaDownload />Download Report</Link>
            </div>
            <div className="container-form">
                <div className="flexbox form-title">
                    <h5>Customer Info</h5>
                    <span className="line"></span>
                </div>
                <p className="instruction">fields marked <span className="required">*</span> are compulsory. you are required to specify value for them</p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label style={{marginRight: "0.7rem"}} htmlFor="inputAddress">Select Gender<span className="required">*</span></label>
                        <div className="form-check form-check-inline">
                            <input
                            className="form-check-input"
                            type="checkbox"
                            id="male"
                            defaultValue="male"
                            name="gender"
                            onChange={handleChange}
                            checked={dinnerData.gender==="male"}
                            />
                            <label className="form-check-label" htmlFor="male">
                            M
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                            className="form-check-input"
                            type="checkbox"
                            id="female"
                            defaultValue="female"
                            name="gender"
                            onChange={handleChange}
                            checked={dinnerData.gender==="female"}
                            />
                            <label className="form-check-label" htmlFor="female">
                            F
                            </label>
                        </div>
                    </div>
                    <div className="flexbox row-col2">
                        <div className="form-group col2">
                            <label htmlFor="inputEmail4">FirstName<span className="required">*</span></label>
                            <input required type="text" className="form-control" id="inputFname" placeholder="firstName" name="custFname" onChange={handleChange} value={dinnerData.custFname} />
                        </div>
                        <div className="form-group col2">
                            <label htmlFor="inputPassword4">LastName</label>
                            <input type="text" className="form-control" id="inputLname" placeholder="LastName" name="custLname" onChange={handleChange} value={dinnerData.custLname}  />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPhone">Phone No<span className="required">*</span></label>
                        <input type="text" className="form-control" id="inputPhone" placeholder="08193887433" name="phoneNo" onChange={handleChange} value={dinnerData.phoneNo} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputEmail">Email</label>
                        <input type="email" className="form-control" id="inputEmail" placeholder="someone@gmail.com" name="email" onChange={handleChange} value={dinnerData.email} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputAddress">Address</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" name="address1" onChange={handleChange} value={dinnerData.address1} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputAddress2">Address 2 (Lead generation)</label>
                        <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" name="leadLocation" onChange={handleChange} value={dinnerData.leadLocation} />
                    </div>
                    <div className="flexbox row-col3">
                        <div className="form-group col3">
                            <label htmlFor="inputCity">City</label>
                            <input type="text" className="form-control" id="inputCity" name="city" onChange={handleChange} value={dinnerData.city}/>
                        </div>
                        <div className="form-group col3 small">
                            <label htmlFor="inputState">State</label>
                            <input type="text" id="inputState" className="form-control" name="state" onChange={handleChange} value={dinnerData.state}/>
                        </div>
                        <div className="form-group col3 smaller">
                            <label htmlFor="inputZip">Zip</label>
                            <input type="text" className="form-control" id="inputZip" name="zip" onChange={handleChange} value={dinnerData.zip}/>
                        </div>
                    </div>
                    <div className="flexbox row-col2">
                        <div className="form-group col2">
                            <label htmlFor="inputDate">Book Date</label>
                            <Datetime input={true} closeOnSelect={true} style={{}} onChange={handleSelectDate} name="bookDate" />
                        </div>
                        <div className="form-group col2">
                            <select className="form-select select" aria-label="Default select example" name="status" onChange={handleChange}>
                                <option defaultValue>Select Dinner Status</option>
                                <option value="lead">Lead</option>
                                <option value="referral">Referral</option>
                                <option value="booked">Booked</option>
                                <option value="rescheduled">Rescheduled</option>
                            </select>  
                        </div>
                    </div>
                    <div className="flexbox row-col2">
                        <div className="form-group col2 span-2">
                            <label htmlFor="referrerName">Referer Name</label>
                            <input type="text" className="form-control" id="referrerName" placeholder="Referer Name" name="refererName" onChange={handleChange} value={dinnerData.refererName}/>
                        </div>
                        <div className="form-group col2 span-1">
                            <label htmlFor="refererCode">Referer Code</label>
                            <input type="text" className="form-control refer-code" id="refererCode" placeholder="Referer code" name="refererCode" onChange={handleChange} value={dinnerData.refererCode}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="refererAddress">Referrer Address</label>
                        <input type="text" className="form-control" id="refererAddress" placeholder="Apartment, studio, or floor" name="refererAddress" onChange={handleChange} value={dinnerData.refererAddress}/>
                    </div>
                    

                    <button type="submit" className="btn btn-submit">Submit</button>
                </form>
            </div>
        </>
    )
}


export default RegisterDinner;