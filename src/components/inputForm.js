import React, {useState} from "react";
import Ratings from "./Ratings";


function InputForm(props){
    const [ratings, setRating]= useState(0);
    const [formDetails, setformDetails]=useState({productId:props.id});
    function handleRatings(obj){
        const id=Number(obj.target.id);
        setRating(id);
        setformDetails(formDetails=>({...formDetails,rating:id}))
        console.log(ratings);
    }
    function handleSubmit(event){
        event.preventDefault();
        console.log(formDetails);
        
    }
    function handleChange(event){
        const name=event.target.name
        setformDetails(formDetails=>({...formDetails,[name]:event.target.value}));
        console.log(formDetails)
    }
    return (
        <div className="review-form">
            <form onSubmit={handleSubmit}>
                <div className="form-elememt">
                    <span>Title:</span>
                    <input type="text" name="title" required onChange={handleChange} value={formDetails.title}/>
                </div>
                <div className="form-elememt comment" style={{justifyContent: "flex-start",
    paddingLeft: "10.5rem"}}>
                    <span>Comment:</span>
                    <textarea style={{width: "55%",height: "25vh",borderColor: "lightblue"}} name="content" row="6" col="30" onChange={handleChange} value={formDetails.content}> </textarea>
                </div>
                <div className="form-elememt">
                    <span>Name:</span>
                    <input type="text" name="name" required onChange={handleChange} value={formDetails.name} />
                </div>
                <div className="form-elememt">
                    <span>Email:</span>
                    <input type="email" name="email" placeholder="someone@gmail.com" required onChange={handleChange} value={formDetails.email}/>
                </div>
                <div className="form-elememt" style={{justifyContent: "flex-start",
    paddingLeft: "12.2rem"}}>
                    <span>Rating:</span> 
                    <Ratings rating={ratings} type="input" handleClick={handleRatings} />
                </div>
                <input type="text" name="rating" value={ratings} hidden></input>
                <input type="submit" value="Submit review" className="submit-btn"/> 
            </form>
        </div>
    )
}

export default InputForm;