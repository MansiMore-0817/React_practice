import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { use } from 'react'

function App() {

    // hooks like useState, useEffect, useRef, useContext, useReducer, useMemo, useCallback

    // useState is a hook which is used to manage the state of a component
    // state is a way to store data in a component
    // when the state of a component changes, the component re-renders

    // useState is a function which takes an initial value as an argument and returns an array of two values
    // the first value is the current state and the second value is a function which is used to update the state  
    const [counter, setCounter] = useState(5);  // usestate is a function which returns an array of two values

    // console.log(useState(5));  // [5, f]  f is a function which is used to update the value of counter

    const addValue = () => {
        setCounter(counter + 1);
        console.log("value added", counter);
    }

    const removeValue = () => {
        setCounter(counter - 1);
        console.log("value removed", counter);
    }

  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter : {counter}</h2>
      <button onClick={addValue}>Increment {counter}</button>
      <br/>
      <button onClick={removeValue}>Decrement {counter}</button>
      <p>footer : {counter}</p>
    </>
  )
}

export default App
