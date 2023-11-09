import React from 'react'
import StatisticLine from './StatisticLine'

export default function Statistics({good,neutral,bad,totalVotes}) {

    const feedbackAverage = () => {
        return(
            (good - bad)/totalVotes
        )
        }
    return (
        <>
        <h2>Statistics:</h2>
           {totalVotes ? <table>
            <tbody>
                <StatisticLine title="Good" value={good}/>
                <StatisticLine title="Bad" value={bad}/>
                <StatisticLine title="Neutral" value={neutral}/>
                <StatisticLine title="Total Votes" value={totalVotes}/>
                <StatisticLine title="Positive" value={good/totalVotes}/>
                <StatisticLine title="Average" value={feedbackAverage()}/>
            </tbody> 
            </table>  : <p>No votes yet!</p>}
            

        </>
    )
}