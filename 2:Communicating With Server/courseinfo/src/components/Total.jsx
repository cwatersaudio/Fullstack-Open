import React from "react"

export default function Total ({parts}) { 
    console.log(parts);   
    let runningTotal = 0;
    parts.forEach(element => {
            runningTotal += element.exercises 
            console.log(runningTotal)
        }
        
        )
            
        return (
        <strong> Total number of exercises {runningTotal}</strong>
    )
}