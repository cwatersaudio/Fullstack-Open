import React from 'react'
import './App.css'
import Feedback from './components/Feedback'
import Statistics from './components/Statistics'

function App() {
  const [feedback,updateFeedback] = React.useState({good:0,neutral:0,bad:0})
  const {good,neutral,bad} = feedback
  let totalVotes = good + neutral + bad

  return (
    <>
      <Feedback feedback={feedback} updateFeedback={updateFeedback}/>
      <Statistics good={good} neutral={neutral} bad={bad} totalVotes={totalVotes}/>
    </>
  )
}

export default App
