import React from 'react'

export default function Feedback(props) {
    const [feedback,updateFeedback] = React.useState({good:0,neutral:0,bad:0})
    

    function handleClick(event) {
        let eventName = event.target.name
        console.log(eventName) //here 'eventName' appears to be a string
        console.log(feedback) //monitoring state
        console.log(feedback.eventName) //returns 'NaN'
        console.log(feedback.good) //returns 1 (i.e. returns value of 'good')
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
            <button name="good" onClick={handleClick}>Good</button>
            <button name="neutral" onClick={handleClick}>Neutral</button>
            <button name="bad" onClick={handleClick}>Bad</button>
        
        </>
    )
    }
