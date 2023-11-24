import React from "react"
import Part from "./Part"

export default function Content ({parts}) {

    const partDisplay = parts.map(item => {
            return (
                <Part name={item.name} key={item.id} exercises={item.exercises}/>
            )
        })
    
    return (
        <>
            {partDisplay}  
        </>
    )
}