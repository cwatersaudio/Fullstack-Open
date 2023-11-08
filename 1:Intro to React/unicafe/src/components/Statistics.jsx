import React from 'react'

export default function Statistics({good,neutral,bad}) {
    return (
        <>
        <h2>Statistics:</h2>
            <p>Good: {good}</p>
            <p>Bad: {bad}</p>
            <p>Neutral: {neutral}</p>
        
        </>
    )
}