import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0,0,0,0,0,0,0,0])
  const handleRandom = () => {
    setSelected(Math.floor(Math.random()*anecdotes.length))
  }
  const handleVote = () => { 
    const total = [...points]
    total[selected] +=1
    setPoints( total )
  }

  const MostPopularAndecdote = Math.max(...points)
  const mostPopular =  points.findIndex(point => point === MostPopularAndecdote) 

  return (
    <div>
    <h4>Random anecdote:</h4>
      {anecdotes[selected]}
      <span>Votes: {points[selected]}</span>
      <section >
        <button onClick = {()=>handleVote() }>Vote</button>
        <button onClick = {()=>handleRandom()}>Next anecdote</button>
      </section>
      <h4>Most Popular</h4>
      {MostPopularAndecdote ? anecdotes[mostPopular] : 'Vote!'}
    </div>
  )

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

