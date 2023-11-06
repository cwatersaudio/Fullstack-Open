import React from "react"
import Part from "./Part"

export default function Content (props) {
    const [part1,part2,part3] = props.parts

    return (
        <>
            <Part part={part1}/>
            <Part part={part2}/>
            <Part part={part3}/>    
        </>
    )
}