import React from "react";
import {Link} from "react-router-dom";
import * as FaIcon from "react-icons/fa";
import * as AiIcon from "react-icons/ai";
import * as GiIcon from "react-icons/gi";
import * as RiIcon from "react-icons/ri";



const RegisterDinner=(props)=>{
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
                <form>
                    <div className="form-group">
                        <label style={{marginRight: "0.7rem"}} htmlFor="inputAddress">Select Gender<span className="required">*</span></label>
                        <div className="form-check form-check-inline">
                            <input
                            className="form-check-input"
                            type="checkbox"
                            id="male"
                            defaultValue="option1"
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
                            defaultValue="option2"
                            />
                            <label className="form-check-label" htmlFor="female">
                            F
                            </label>
                        </div>
                    </div>
                    <div className="flexbox row-col2">
                        <div className="form-group col2">
                            <label htmlFor="inputEmail4">FirstName<span className="required">*</span></label>
                            <input required type="text" className="form-control" id="inputFname" placeholder="firstName" />
                        </div>
                        <div className="form-group col2">
                            <label htmlFor="inputPassword4">LastName</label>
                            <input type="text" className="form-control" id="inputLname" placeholder="LastName" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPhone">Phone No<span className="required">*</span></label>
                        <input type="text" className="form-control" id="inputPhone" placeholder="08193887433" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputEmail">Email</label>
                        <input type="email" className="form-control" id="inputEmail" placeholder="someone@gmail.com" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputAddress">Address</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputAddress2">Address 2 (Lead generation)</label>
                        <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                    </div>
                    <div className="flexbox row-col3">
                        <div className="form-group col3">
                            <label htmlFor="inputCity">City</label>
                            <input type="text" className="form-control" id="inputCity" />
                        </div>
                        <div className="form-group col3 small">
                            <label htmlFor="inputState">State</label>
                            <input type="text" id="inputState" className="form-control" />
                        </div>
                        <div className="form-group col3 smaller">
                            <label htmlFor="inputZip">Zip</label>
                            <input type="text" className="form-control" id="inputZip" />
                        </div>
                    </div>
                    <div className="form-group col2">
                        <label htmlFor="inputDate">Book Date</label>
                        <input required type="datetime-local" className="form-control" id="inputDate" value="2021-08-31T17:00" />
                    </div>

                    <button type="submit" className="btn btn-submit">Submit</button>
                </form>
            </div>
        </>
    )
}


export default RegisterDinner;