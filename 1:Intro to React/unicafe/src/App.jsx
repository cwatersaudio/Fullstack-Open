import React from 'react'
import './App.css'
import Feedback from './components/Feedback'
import Stats from './components/Stats'

function App() {
  const [feedback,updateFeedback] = React.useState({good:0,neutral:0,bad:0})
  const {good,neutral,bad} = feedback
  return (
    <>
      <Feedback feedback={feedback} updateFeedback={updateFeedback}/>
      <Stats good={good} neutral={neutral} bad={bad}/>
    </>
  )
}

export default App
