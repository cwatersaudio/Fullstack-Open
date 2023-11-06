import React from "react"

export default function Total (props) { //didn't destructure props this time...trying things out
    
    return (
        <p>Total number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    )
}