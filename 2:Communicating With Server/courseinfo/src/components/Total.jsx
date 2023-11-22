import React from "react"

export default function Total (props) { 
        const [part1,part2,part3] = props.parts
        
        const exerciseTotal = props.reduce
    
        return (
        <strong> Total number of exercises {part1.exercises + part2.exercises + part3.exercises}</strong>
    )
}