import React from "react";
import Ratings from "./Ratings";
import ReviewData from "../Data/ReviewData";
import {Link} from "react-router-dom";
function ProductRows(props){
    const productData= props.productData.filter((item)=>(
        item.type===props.type
    ));
    const productRatings={};        //get product ratings for all products with reviews;
    const avgProductRatings={};     //get the average ratings for all products.
    ReviewData.forEach(item => {
        if(!productRatings[item.productId]){
            productRatings[item.productId]=[0,0];  //array will hold the sum and count for ratings
        }
        productRatings[item.productId]=[productRatings[item.productId][0]+item.rating,productRatings[item.productId][1]+1];
    });
    for(let item in productRatings){
        avgProductRatings[item]= Math.round(productRatings[item][0]/productRatings[item][1]);
    }
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
            if(counter>0 && counter <= itemNo){
                colItem.push(productData[j]);
            }
        };
        counter=0;
        index+=itemNo;
        setItem.push(colItem);
    }
    return (
        <div>
            {
                setItem.map((item,index)=>(
                    <div key={index} className={item.length===3? "product-row-three":"product-row"}>
                        {
                            item.map(product=>(
                                <div key={product.id} className={item.length===3? "product-item-three":"product-item"}>
                                    <div className="product-head">
                                        <span className="stock-status"><i class={product.stock>0? "fas fa-check-circle":"fas fa-times"} style={{color:product.stock>0?  "#00a73e":"red"}}></i> {product.stock>0? "stocked":"out of stock"}</span>
                                    </div>
                                    <div className="product-section-img">
                                        <img src={product.img[0]} alt={product.name} width="100%" height="100%"></img>
                                    </div>
                                    <h4 className="product-name">{product.name}</h4>
                                    <div className="product-other-info">
                                        <Ratings rating={avgProductRatings[product.id]} />
                                        <Link to="/product/product-name/order" ><i class="fas fa-shopping-cart" style={{color:"grey", fontSize:"x-large"}}></i></Link>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default ProductRows;