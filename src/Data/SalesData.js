import React from "react";
import ConsultantsData from "./ConsultantsData";
import ProductData from "./ProductData";
import CustomerData from "./CustomerData";


const SalesData=[
    {
        id:1,
        consultants: {owner:ConsultantsData[0],assistance:ConsultantsData[0]},
        status:"part-payment",
        installments:[
            {
                amount:500000, 
                date:"24-mar-2021", 
                type:'transfer'
            },
            {
                amount:500000, 
                date:"24-apr-2021", 
                type:'transfer'
            }
        ],
        customer: CustomerData[0],
        set: ProductData[0],
        deliveryStatus:"pending",
        installationStatus:"pending",
        date:'11-june-2021'
    }
]

export default SalesData;