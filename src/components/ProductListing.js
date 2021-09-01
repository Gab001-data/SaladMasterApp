import React, {useState} from "react";
import ProductData from "../Data/ProductData";
import ProductRows from "./ProductRows";
import "../css/ProductListing.css";

function ProductListing(){
    const [activeTab, setactiveTab]=useState("setTab");
    function handleClick(event){
        const name= event.currentTarget.id;
        console.log(name);
        setactiveTab(name);
    }
    function productRows(props, data){
        const productData= data.filter((item)=>(
            item.type===props
        ));
        console.log("Product Data",productData);
        const rowNo= Math.ceil(productData.length/3);
        const setItem=[];
        let itemNo=3;
        let index=0;
        let counter=0;
        productData.map((item,j)=>console.log)
        for(let i=0;i<rowNo;i++){
            let colItem=[];
            for(let j=0;j<productData.length;j++){
                counter= j>=index? counter+1: counter;
                console.log(j,index,counter, counter>0 && counter <= itemNo);
                console.log(j>=index);
                if(counter>0 && counter <= itemNo){
                    colItem.push(productData[j]);
                }
            };
            // productData.map((item,j)=>{
            //     counter= j>=index? counter++: counter;
            //     return counter>0 && counter <= itemNo? item: null
            // })
            counter=0;
            index+=itemNo;
            setItem.push(colItem);
        }
        console.log(setItem);
        //return setItem;
    }
    return(
        <section className="product-section">
            <div className="product-tabs">
                <div id="setTab" className={activeTab==="setTab"? "item-tab active-ProductTab":"item-tab"} onClick={handleClick}><h4 style={{color:activeTab==="setTab"? " #ff7d01":"#000"}}>Cookware Set</h4></div>
                <div id="itemTab" className={activeTab==="itemTab"? "item-tab active-ProductTab":"item-tab"} onClick={handleClick}><h4 style={{color:activeTab==="itemTab"? " #ff7d01":"#000"}}>Individual Item</h4></div>
            </div>
            <div className="product-listing">
                <div className={activeTab==="setTab"? "activeTab-animation":"inactive-tab"}>
                    {
                        activeTab==="setTab" && <ProductRows type="set" productData={ProductData} />
                        
                    }
                </div>
                <div className={activeTab==="itemTab"? "activeTab-animation":"inactive-tab"}>
                    {
                        activeTab==="itemTab" && <ProductRows type="item" productData={ProductData} />
                    }
                </div>

            </div>
            
            
            
        </section>
    )
}

export default ProductListing;