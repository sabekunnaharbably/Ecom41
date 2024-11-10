
import { useState, useRef } from 'react';
import './App.css'


function App() {

  let [count, setCount] = useState(0);

  let countRef = useRef(0);


  // useState
  let handleClick = () => {
    count++
    setCount(count)
  }
  // useState

  // UseRef

  let handleClick2 = () => {
    console.log(countRef.current++);


  }

  // UseRef

  return (
    <>
      <h1>useState</h1>
      <h3>{count}</h3>
      <button onClick={handleClick}>Click</button>

      {/* ----------------------
          ---------------------- */}

      <h1>UseRef</h1>
      <h3>{countRef.current}</h3>
      <button onClick={handleClick2}>Click</button>


    </>
  )
}

export default App
















