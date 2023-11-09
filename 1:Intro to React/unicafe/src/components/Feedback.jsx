import React from 'react'
import Button from './Button'

export default function Feedback({feedback,updateFeedback}) {
    

    function handleClick(event) {
        let eventName = event.target.name
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
