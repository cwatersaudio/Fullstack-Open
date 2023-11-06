import React from "react"
import Part from "./Part"

export default function Content (props) {
    const [part1,part2,part3] = props.parts

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