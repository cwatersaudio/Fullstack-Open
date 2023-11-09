import React from 'react'

export default function Statistics({good,neutral,bad}) {
    let totalVotes = good + neutral + bad

    const feedbackAverage = () => {
        return(
            (good - bad)/totalVotes
        )
        }
    return (
        <>
        <h2>Statistics:</h2>
           <section> 
                <p>Good: {good}</p>
                <p>Bad: {bad}</p>
                <p>Neutral: {neutral}</p>
                <p>Total Votes: {totalVotes} </p>
            </section>
            <section>
                <p>Positive: {good/totalVotes}%</p>
                <p>Average: {feedbackAverage()}</p>

            </section>
        </>
    )
}