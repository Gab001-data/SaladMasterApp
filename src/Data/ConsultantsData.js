import React from "react";
import consulImg from "../images/exercise.jpg";
import maryImg from "../images/family.jpg";

const ConsultantsData=[
    {
        id:1,
        name: {firstName:"John", lastName:"Samson"},
        address:"N0 2 Moses Onumiya streets Otukpo",
        StateofOrigin: "Benue",
        DOB:"01-jan-2021",
        contact: {phone:"08023475683", email:"johnsamson@gmail.com"},
        photo: consulImg,
        level: "Consultant",
        recruits:[
            {
                id:3,
                name: {firstName:"John", lastName:"Samson"},
                address:"N0 2 Moses Onumiya streets Otukpo",
                StateofOrigin: "Benue",
                DOB:"01-jan-2021",
                contact: {phone:"08023475683", email:"johnsamson@gmail.com"},
                photo: consulImg,
                level: "Consultant",
                recruits:[],
                sponsor: {},
            },
            {
                id:5,
                name: {firstName:"Maryanabell", lastName:"Peter"},
                address:"N0 6 solid road Lagos",
                StateofOrigin: "Lagos",
                DOB:"01-mar-2021",
                contact: {phone:"08023475683", email:"mpeter@gmail.com"},
                photo: maryImg,
                level: "Consultant",
                recruits:[],
                sponsor: {},
            }
        ],
        sponsor: 
        {
            id:3,
            name: {firstName:"John", lastName:"Samson"},
            address:"N0 2 Moses Onumiya streets Otukpo",
            StateofOrigin: "Benue",
            DOB:"01-jan-2021",
            contact: {phone:"08023475683", email:"johnsamson@gmail.com"},
            photo: consulImg,
            level: "Consultant",
            recruits:[],
            sponsor: {},
        }

    }
]


export default ConsultantsData;