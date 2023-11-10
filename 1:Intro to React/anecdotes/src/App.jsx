import { useState } from 'react'



const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const anecdoteArray = anecdotes.map((item,index) => { //adds vote and id property to each anecdote
    return {anecdote:item,
            vote:0,
            id:index}
  })

  let randIndex = ""


  const [anecdoteData, updateAnecdoteData] = useState({anecdoteArray,selected:{anecdote:"No anecdote selected yet!"}})
  console.log(anecdoteData.anecdoteArray)
  console.log(anecdoteData.selected)
 
 function handleClick () {
    randIndex = Math.floor(Math.random() * anecdoteArray.length)
    
    updateAnecdoteData(prevData => {
      return {
        ...prevData,
        selected: prevData.anecdoteArray[randIndex]
      }
    }) 
  }

  function handleVote () {
      updateAnecdoteData(prevData => {
        const {id,vote} = selected
        return {
          ...prevData,
          [prevData[anecdoteArray][id][vote]]: vote +1
        }
      })
  }

  return (
    <div>
      {<p>{anecdoteData.selected.anecdote}</p>}
      <button onClick={handleClick}>New anecdote</button>
      <button onClick={handleVote}>Vote</button>
    </div>
  )
}

export default App