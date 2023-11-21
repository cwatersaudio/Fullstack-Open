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


  const [anecdoteData, updateAnecdoteData] = useState({anecdoteArray,selected:{anecdote:"No anecdote selected yet!"},mostVotes:{}}) //initializes state as an object containing an array of anecdote objects, a 'selected' object, and a 'mostVotes' object
  console.log(anecdoteData)
 
 function handleClick () {
    randIndex = Math.floor(Math.random() * anecdoteArray.length) //generates a random integer and assigns it to the global 'randIndex' variable
    
    updateAnecdoteData(prevData => {
      return {
        ...prevData,
        selected: prevData.anecdoteArray[randIndex]
      }
    }) 
  }

  function handleVote (id) {
    const newAnecdotes = [...anecdoteData.anecdoteArray]
    newAnecdotes[id].vote = newAnecdotes[id].vote + 1
    console.log(newAnecdotes[id])
    
    
    updateAnecdoteData(prevData => {
      return {
        ...prevData,
        anecdoteArray: newAnecdotes,
        selected: newAnecdotes[id],
        mostVotes: voteTally(newAnecdotes)
      }
    })
  }

  function voteTally (arr) {
      const maxID = arr.reduce((maxIndex, elem, i, arr) => 
        elem.vote > arr[maxIndex].vote ? i : maxIndex, 0); 

        return anecdoteData.anecdoteArray[maxID]
    } 
    

  return (
    <div>
      <h2>Anecdote of the Day</h2>
      <p>{anecdoteData.selected.anecdote}</p>
      {anecdoteData.selected.id > -1 && <p>Current vote is: {anecdoteData.selected.vote}</p>}
      <button onClick={handleClick}>New anecdote</button>
      <button onClick={() => (handleVote(anecdoteData.selected.id))}>Vote</button>
      {anecdoteData.mostVotes.id && <h2>The anecdote with the most votes is:</h2> }
      {anecdoteData.mostVotes && <p>{anecdoteData.mostVotes.anecdote}</p>}
    </div>
  )
}

export default App