import React from "react";
import "./Score.css";

//Set update of score when an image is clicked
const Score = props => (
    <div className="score">
        {props.type}: {props.score}
    </div>
)

export default Score;