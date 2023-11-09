import React from 'react'
import Button from './Button'

export default function Feedback({feedback,updateFeedback}) {
    

    function handleClick(event) {
        let eventName = event.target.name
        console.log(eventName) //here 'eventName' appears to be a string
        console.log(feedback) //monitoring state
        console.log(feedback[eventName]) 
        updateFeedback(prevFeedback => {
            return{
                ...prevFeedback,
                [eventName]: prevFeedback[eventName] + 1 
            }
            
        })
        
        }
    
    
    return (
        <>
            <h2>Give Feedback:</h2>
            <Button handleClick={handleClick} name="good" title="Good"/>
            <Button handleClick={handleClick} name="neutral" title="Neutral"/>
            <Button handleClick={handleClick} name="bad" title="Bad"/>
        
        </>
    )
    }
