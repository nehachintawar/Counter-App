 import {useState} from 'react';
import Calculator from './Calculator.jsx'

export default function App () {


  const [count, setCount] = useState(0);

  const [stepIndex, setStepIndex] = useState(0);

  const handleChange = (e) => {
    setStepIndex(Number(e.target.value));
  }

  const increment = () => {
    setCount(prev => prev + stepIndex);
  }

   const decrement = () => {
    setCount(prev => Math.max(0, prev - stepIndex));
  }

   const reset = () => {
    setCount(0);
  }

  return (

    <div className='flex justify-center'>
    <h1>Counter App</h1>
    <p>Choose your increment and start counting!</p>
    <h2>Count: {count}</h2>
   <select value={stepIndex} onChange={handleChange} className="p-2 border rounded">
          <option value={1}>1</option>
          <option value={3}>3</option>
          <option value={5}>5</option>
          <option value={10}>10</option>
        </select>
    <br />
    <button onClick={increment}>+ Increment</button>
    <button onClick={decrement}>- Decrement</button>
    <br />
    <button onClick={reset}>Reset</button>
    <p>Current step: +1</p>
    <Calculator />
    </div>

  )
}