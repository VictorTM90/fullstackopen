import React, {useState}from 'react';
import ReactDOM from 'react-dom/client';

const StatisticLine = ({text, value}) => {
    return <>
    <tr>
      <th>{text}</th>
      <td>{value}</td>
    </tr>
    </>

}
const Statistics = (props) => {

  const { good, bad, neutral } = props 
  const total = good + neutral + bad
  const average = (good - bad ) / total
  const positive = 100 * (good / total)
 
  return(
    <>
      { total > 0 
        ? <table>
          <caption>
            <h1>statistics</h1>
          </caption>
          <tbody>
          <StatisticLine text = {'good'} value = { good } />
            <StatisticLine text = {'neutral'} value = { neutral } />
            <StatisticLine text = {'bad'} value = { bad } />
            <StatisticLine text = {'total'} value = { total } />
            <StatisticLine text = {'average'} value = { average } />
            <StatisticLine text = {'positive'} value = { positive } />

          </tbody>
          
            
          
        </table>
        : <p> No feedback given </p> 
        }
      </>
)

}

const Button = ({handleClick , text}) =>( <button onClick={()=> handleClick(text)}>{text}</button> )



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
 

  const handleClick = value => {
    if (value === 'good') setGood(good + 1)       
    if (value === 'neutral') setNeutral(neutral +1)
    if (value === 'bad') setBad(bad + 1)
  }

  return (
    <div>
      <section>
        <h1>give feedback</h1>
        <Button handleClick = { handleClick} text = {'good'} ></Button>
        <Button handleClick = { handleClick}  text = {'neutral'}></Button>
        <Button handleClick = { handleClick} text = {'bad'}  ></Button>
      </section>
      <Statistics good ={good} bad = {bad} neutral ={neutral} />
    </div>
  )
}





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);


