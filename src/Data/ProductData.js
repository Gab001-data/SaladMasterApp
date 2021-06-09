import React from "react";
import s_classicSet from "../images/Products/s_classicSet.png";
import s_executiveChefSet from "../images/Products/s_executiveChefSet.png";
import s_masterSet from "../images/Products/s_masterSet.png";
import s_personalSet from "../images/Products/s_personalSet.png"; 
import s_professionalSet from "../images/Products/s_professionalSet.png";
import s_5QrtGourmetWok from "../images/Products/s_5QrtGourmetWok.jpg";
import s_10QrtRoasterWithCover from "../images/Products/s_10QrtRoasterWithCover.jpg";
import s_electricSkillet from "../images/Products/s_electricSkillet.jpg";
import s_9QrtBraiserPanWithCover from "../images/Products/s_9QrtBraiserPanWithCover.jpg";


const ProductData=[
    {
        name: "Personal Set",
        productInfo: "For individuals and couples moving into their first home, empty nesters looking to downsize, or families needing to prepare smaller quantities of food.",
        features: "For individuals and couples moving into their first home, empty nesters looking to downsize, or families needing to prepare smaller quantities of food, this set includes the basic pieces to get you started. Set includes: 1 Qt. (.9L) Sauce Pan with Cover, 3 Qt. (2.8L) Sauce Pan with Cover, 3 Qt. (1.8L) Perforated Basket, 9 in. (22.9cm) Skillet with Cover, Stainless Steel Powdered Cleaner, two long handles, two side handles.",
        stock: 30,
        img: [s_personalSet,s_5QrtGourmetWok,s_10QrtRoasterWithCover,s_electricSkillet,s_9QrtBraiserPanWithCover],
        amt: 2000
    },
    {
        name: "Classic Set",
        productInfo: "Ideally suited for mid-sized families, this set provides all of the pieces needed for everyday cooking.",
        features: "Ideally suited for mid-sized families, this set provides all of the pieces needed for everyday cooking. Set includes: 2 Qt. (1.8L) Sauce Pan with Cover, 4 Qt. (3.8L) Roaster with Cover, 5 Qt. (4.7L) Roaster with Cover, 11 in. (27.9cm) Skillet with Cover, Stainless Steel Powdered Cleaner, two long handles and four side handles.",
        stock: 20,
        img: [s_classicSet, s_5QrtGourmetWok,s_10QrtRoasterWithCover,s_electricSkillet,s_9QrtBraiserPanWithCover],
        amt: 2000
    },
    {
        name: "Executive Chef Set",
        productInfo: "For anyone craving to replace their entire kitchen, this set furnishes the cookware pieces needed to prepare any kind of recipe, and includes many specialty and accessory pieces that meet your cooking needs. Even if you’re not exactly a chef, this set could make you feel like one.",
        features: "",
        stock: 10,
        img: [s_executiveChefSet,s_5QrtGourmetWok,s_10QrtRoasterWithCover,s_electricSkillet,s_9QrtBraiserPanWithCover],
        amt: 2000  
    },
    {
        name: "Master Set",
        productInfo: "For the everyday cook or experienced chef looking for optimum versatility, this set equips your kitchen and includes the essential pieces needed for cooking all types of recipes.",
        features: "For the everyday cook or experienced chef looking for optimum versatility, this set equips your kitchen and includes the essential pieces needed for cooking all types of recipes. Set includes: 1 Qt. (.9L) Sauce Pan with Cover, 3 Qt. (2.8L) Sauce Pan with Cover, 3 Qt. (1.8L) Perforated Basket, 7 Qt. (6.6L) Roaster with Cover, 10 Qt. (9.5L) Roaster with Cover, 9 in. (22.9cm) Skillet with Cover, 11 in. (27.9cm) Skillet with Cover, 12 in. (30.5cm) Electric Oil Core Skillet, Stainless Steel Powdered Cleaner, three long handles, six side handles.",
        stock: 10,
        img: [s_masterSet, s_5QrtGourmetWok,s_10QrtRoasterWithCover,s_electricSkillet,s_9QrtBraiserPanWithCover],
        amt: 2000

    },
    {
        name: "Professional Set",
        productInfo: "For the everyday cook or experienced chef looking for optimum versatility, this set equips your kitchen and includes the essential pieces needed for cooking all types of recipes.",
        features: "For the everyday cook or experienced chef looking for optimum versatility, this set equips your kitchen and includes the essential pieces needed for cooking all types of recipes. Set includes: 1 Qt. (.9L) Sauce Pan with Cover, 3 Qt. (2.8L) Sauce Pan with Cover, 3 Qt. (1.8L) Perforated Basket, 7 Qt. (6.6L) Roaster with Cover, 10 Qt. (9.5L) Roaster with Cover, 9 in. (22.9cm) Skillet with Cover, 11 in. (27.9cm) Skillet with Cover, 12 in. (30.5cm) Electric Oil Core Skillet, Stainless Steel Powdered Cleaner, three long handles, six side handles.",
        stock: 5,
        img: [s_professionalSet,s_5QrtGourmetWok,s_10QrtRoasterWithCover,s_electricSkillet,s_9QrtBraiserPanWithCover],
        amt: 2000
    }
]

export default ProductData;