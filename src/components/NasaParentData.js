import React, {useState, useEffect} from "react";
import axios from "axios";
import NasaChild from "./NasaChild";


export default function NasaParentData () {
    const [nasaData, setNasaData] = useState([]);

    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        .then(res => {
            const data = res.data;
            console.log(data);
            setNasaData(data)
        })
    }, [])
    return (
            <div className = "entry">
                <NasaChild  imgUrl={nasaData.hdurl} date={nasaData.date} explanation={nasaData.explanation}/>
                </div>
    )
}





