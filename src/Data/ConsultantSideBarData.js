import React from "react";
import * as FaIcon from "react-icons/fa";
import * as AiIcon from "react-icons/ai";
import * as IoIcon from "react-icons/io";
import * as HiIcon from "react-icons/hi";
import * as FcIcon from "react-icons/fc";
import * as GiIcon from "react-icons/gi";
import * as IoIcon5 from "react-icons/io5";
const ConsultantSideBarData=[
    {
        title:'Dashboard',
        path:"/partners/id",
        icon: <AiIcon.AiOutlineDashboard />
    },
    {
        title:'Health presentations',
        path:'',
        subMenu:[
            {
                title:'Register Demo',
                path:'/partners/id/health-demo/register',
                icon: <AiIcon.AiOutlineAccountBook />
            },
            {
                title:'Scheduled Demo',
                path:'/partners/id/health-demo',
                icon: <IoIcon5.IoTimeOutline />
            },

        ],
        icon: <HiIcon.HiOutlinePresentationChartBar />
    },
    {
        title:'Performance metrics',
        path:'',
        subMenu:[
            {
                title:'Product sales',
                path:'/partners/id/metrics/sales',
                icon: <FaIcon.FaHandsHelping />
            },
            {
                title:'Cooked shows',
                path:'/partners/id/metrics/cooked',
                icon: <GiIcon.GiCook/>
            },
            {
                title:'Recruitment activity',
                path:'/partners/id/metrics/recruits',
                icon: <GiIcon.GiConversation />
            },
            {
                title:'Report',
                path:'/partners/id/reports',
                icon: <IoIcon5.IoDocumentTextSharp />
            }

        ],
        icon: <AiIcon.AiOutlineLineChart />
    },
    {
        title:'Commission',
        icon: <GiIcon.GiMoneyStack />,
        subMenu:[
            {
                title:'Eligible commission',
                path:'/partners/id/commission',
                icon: <FaIcon.FaMoneyBillAlt />
            },
            {
                title:'Request Advance',
                path:'/partners/id/commission/advance',
                icon: <IoIcon5.IoDocumentTextSharp />
            },
        ]
    },
    {
        title:'CSR score',
        path:'/partners/id/csr',
        icon: <IoIcon5.IoDocumentTextSharp />
    }
]

export default ConsultantSideBarData;