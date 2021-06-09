import React, {useState} from "react";
import Ratings from "./Ratings";

function InputForm(){
    const [ratings, setRating]= useState(0);
    function handleRatings(id){
        setRating(Number(id));
    }
    return (
        <div>
            <form>
                <div class="form-group">
                    <label for="title">Title</label>
                    <input type="text" class="form-control" id="title" />
                </div>
                <div class="form-group">
                    <label for="reviewContent">Example textarea</label>
                    <textarea class="form-control" id="reviewContent" rows="5"></textarea>
                </div>
                <div class="form-group">
                    <label for="naem">Name</label>
                    <input type="text" class="form-control" id="name" />
                </div>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div class="form-group">
                    <label for="title">Overall Rating</label>
                    <div>
                        <Ratings rating={ratings} assignRating={handleRatings} />
                    </div>
                    <input type="text" class="form-control" id="title" hidden />
                </div>
            </form>

        </div>
    )
}

export default InputForm;