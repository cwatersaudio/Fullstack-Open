import React from 'react'

export default function Statistics({good,neutral,bad, totalVotes}) {

    const feedbackAverage = () => {
        return(
            (good - bad)/totalVotes
        )
        }
    return (
        <>
        <h2>Statistics:</h2>
           {totalVotes ? <section> 
                <p>Good: {good}</p>
                <p>Bad: {bad}</p>
                <p>Neutral: {neutral}</p>
                <p>Total Votes: {totalVotes} </p>
            
            
                <p>Positive: {good/totalVotes}%</p>
                <p>Average: {feedbackAverage()}</p>

            </section>  : <p>No votes yet!</p>}
        </>
    )
}