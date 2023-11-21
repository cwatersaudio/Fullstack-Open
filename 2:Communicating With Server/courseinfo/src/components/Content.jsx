import React from "react"
import Part from "./Part"

export default function Content (props) {

    const partDisplay = props.parts.map(item => {
            return (
                <Part part={item}/>
            )
        })
    
    return (
        <>
            {partDisplay}  
        </>
    )
}