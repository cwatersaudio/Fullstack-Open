import React from "react"

export default function Total ({parts}) { 
    console.log(parts);   
    let exerciseTotal = parts.reduce((total,item) => {
            return total + item.exercises 
        },0)
        
        
            
        return (
        <strong> Total number of exercises {exerciseTotal}</strong>
    )
}