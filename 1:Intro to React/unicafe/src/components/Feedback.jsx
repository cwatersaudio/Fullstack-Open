import React from 'react'

export default function Feedback(props) {
    const [feedback,updateFeedback] = React.useState({good:0,neutral:0,bad:0})
    

    function butClick(event) {
        let eventName = event.target.name
        console.log(feedback)
        console.log(eventName)
        updateFeedback(prevFeedback => {
            return {
                ...prevFeedback,
                [eventName]: prevFeedback.eventName + 1
            }
        })
        }
    
    
    return (
        <>
            <h2>Give Feedback:</h2>
            <button name="good" onClick={butClick}>Good</button>
            <button name="neutral" onClick={butClick}>Neutral</button>
            <button name="bad" onClick={butClick}>Bad</button>
        
        </>
    )
    }
