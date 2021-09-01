import React from "react";
import * as FaIcon from "react-icons/fa";
import * as AiIcon from "react-icons/ai";
import * as IoIcon from "react-icons/io";
import * as HiIcon from "react-icons/hi";
import * as FcIcon from "react-icons/fc";
import * as GiIcon from "react-icons/gi";
import ConsultantsData from "./ConsultantsData";


const AlertData=[
    {
        consultant:ConsultantsData[0],
        category:'Dinner',
        content:'Dinner booked for Mrs Yewande',
        date: 'Mon 24 June 2021'
    },
    {
        consultant:ConsultantsData[0],
        category:'Commission',
        content:'NGN 200,000 is availble for widthwal for May',
        date: 'Mon 24 June 2021'
    },
    {
        consultant:ConsultantsData[0],
        category:'Commission',
        content:'NGN 50,000 advance commission has been processed',
        date: 'Mon 24 June 2021'
    },
    {
        consultant:ConsultantsData[0],
        category:'Health Talk',
        content:'Health talk booked for Rhythex consulting',
        date: 'Mon 24 June 2021'
    }

]

const IconsData=[
    {
        category:'Dinner',
        icon: <FcIcon.FcVoicePresentation />
    },
    {
        category:'Commission',
        icon: <FcIcon.FcCurrencyExchange />
    },
    {
        category:'Health Talk',
        icon: <FcIcon.FcAdvertising />
    },
    {
        category:'Price Change',
        icon: <FcIcon.FcAdvertising />
    },
]


export default AlertData;
export {IconsData};