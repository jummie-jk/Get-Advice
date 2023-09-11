
import './App.css';
import { useState } from 'react';


const App = () => {
  const [advice, setAdvice] = useState("")
  const [count, setCount] = useState(0)
  
async function getAdvice(){
  const res = await fetch('https://api.adviceslip.com/advice');
  const data = await res.json()
  setAdvice(data.slip.advice);
  setCount(count => (count + 1));
}
useState(function (){
  getAdvice()}, []
)

  return (
    <div className="App">
     <div  className='adviceBox'><h1 className='adviceText'>{advice}</h1></div>
     <button onClick={getAdvice} className='btn'>Get Advice</button>
    <p>You have gotten <span className='countNum'><strong>{count}</strong></span> pieces of advice</p>
    </div>
  );
}

export default App;
