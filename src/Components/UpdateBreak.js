import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementBreak, decrementBreak} from  '../Redux/PomodoroSlice'

const UpdateBreak= () => {

  const dispatch = useDispatch()

  const breakLength = useSelector((state) => state.Pomodoro.break);

  console.log(breakLength)
  return (
    <div id='break-container'>
      <h1 id='break-label'>Break Length</h1>
      <button id='break-increment' onClick={() => {dispatch(incrementBreak())}}>Increment</button>
      <h2 id='break-length'>{breakLength}</h2>
      <button id='break-decrement' onClick={() => {dispatch(decrementBreak())}}>Decrement </button>
    </div>
  )
}

export default UpdateBreak