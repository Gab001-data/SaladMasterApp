import React, {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import * as FaIcon from "react-icons/fa";
import * as AiIcon from "react-icons/ai";
import * as IoIcon from "react-icons/io5";
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

const ProductSales= (props)=>{
    const [showPayments, setShowPayment]=useState({});
    const [salesId,setSalesId]=useState();
    const sumCount=(arr)=>{
        let sum=0;
        let count=0;
        arr.map((item)=>{
            sum+=item.amount;
            count++;
        });
        return [sum,count];
    }
    const handleShowPayments=(id)=>{
        setSalesId(id);
        setShowPayment({[id]:!showPayments[id]});
    }
    return (
        <div className="product-container">
            {showPayments[salesId] && <div className="payments-history">
                <table class="table table-hover payment-table">
                    <caption>Payment history</caption>
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Date</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Payment method</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.sales.filter(item=>item.id===salesId)[0].installments.map((payment,index)=><tr> {/*filter payments for particular payment (id)*/}
                            <th scope="row">{index+1}</th>
                            <td>{payment.date}</td>
                            <td>{payment.amount}</td>
                            <td>{payment.type}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>}
            <div className="flexbox dashboard-title">
                <h1>{props.title}</h1>
                <Link className="btn-link" to="/partner_id/sales/register"><IoIcon.IoPaperPlaneSharp style={{marginTop:'3px'}} />Register Sales</Link>
            </div>
            {props.sales.map((item,index)=>{
                return(
                    <div className="flexbox sales-item">
                        <div className="flexbox sales-container">
                            <div className="sold-product">
                                <div className="flexbox sale-product-info">
                                    <div className="avatar">
                                        {!item.set.img[0] && <FaIcon.FaRegUser className="avatar-default" />}
                                        <img src={item.set.img[0]} width="100%" height="100%" />
                                    </div>
                                    <div className="product-sale-info">
                                        <h4 className="sales-header">Product Info</h4>
                                        <p>{item.set.name}</p>
                                        <div className="product-feature">
                                            <p>{item.set.features}</p>
                                        </div>
                                        <p>{item.set.amt}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flexbox customer-sale">
                                <div className="avatar">
                                    {!item.customer.img && <FaIcon.FaRegUser className="avatar-default" />}
                                    <img src={item.customer.img} width="100%" height="100%" />
                                </div>
                                <div className="customer-sale-info">
                                    <h4 className="sales-header">Customer Info</h4>
                                    <p>{item.customer.name.firstName+" "+item.customer.name.lastName}</p>
                                    <div className="flexbox customer-icon"><IoIcon.IoLocation /><p>{item.customer.address}</p></div>
                                    <div className="flexbox customer-icon"><AiIcon.AiOutlineMail /><p>{item.customer.contact.email}</p></div>
                                    <div className="flexbox customer-icon"><AiIcon.AiOutlinePhone /><p>{item.customer.contact.phone}</p></div>
                                </div>
                            </div>
                            <div className="sale-info">
                                <h4>Sales Details</h4>
                                <div className="flexbox2">
                                    <h6>Assistant:</h6>
                                    <p>{item.consultants.assistance['name'].firstName+" "+item.consultants.assistance['name'].lastName}</p>
                                </div>
                                <div className="flexbox2">
                                    <h6>Status:</h6>
                                    <p>{item.status}</p>
                                </div>
                                <div>
                                    <h6>Total Payment</h6>
                                    <div className="flexbox2">
                                        <h6>{item.status==="part-payment"? sumCount(item.installments)[0]:item.set.amt}</h6>
                                        {
                                            item.status==="part-payment" && <p>Payment count: {sumCount(item.installments)[1]}</p>
                                        }
                                    </div>
                                </div>
                                <div className="flexbox2">
                                    <h6>Sales Date:</h6>
                                    <p>{item.date}</p>
                                </div>
                            </div>
                            <div className="flexbox row2">
                                <ul className="flexbox status-info">
                                    <li>Delivery: {item.deliveryStatus}</li>
                                    <li>Installation: {item.installationStatus}</li>
                                </ul>
                                <div className="flexbox sales-action">
                                   <p onClick={()=>handleShowPayments(item.id)}>Payment history</p>
                                   <Link to="">Update</Link>  
                                </div>
                            </div>
                            
                        </div>
                    </div>
                )
            })}
            
        </div>
    )  
};



export default ProductSales;