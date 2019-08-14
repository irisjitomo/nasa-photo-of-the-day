import React from "react";

const NasaChild = props => {
    return(
        <div>
        <img src={props.imgUrl}></img>
        <h2 className="date">{props.date}</h2>
        <p className='explanation'>{props.explanation}</p>
        </div>
    )
}

export default NasaChild