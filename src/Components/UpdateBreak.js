import { useDispatch, useSelector } from 'react-redux';
import { incrementBreak, decrementBreak} from  '../Redux/PomodoroSlice'
import { BiUpArrow } from 'react-icons/bi'
import { BiDownArrow } from 'react-icons/bi'

const UpdateBreak= () => {

  const dispatch = useDispatch()

  const breakLength = useSelector((state) => state.Pomodoro.breakTime);

  console.log(breakLength)
  return (
    <div id='break-container'>
      <h1 id='break-label'>Break Length</h1>
      <div id='break-buttons'>
        <button id='break-increment' onClick={() => {dispatch(incrementBreak())}}><BiUpArrow style={{marginTop: '5px'}}/></button>
        <h2 id='break-length'>{breakLength}</h2>
        <button id='break-decrement' onClick={() => {dispatch(decrementBreak())}}><BiDownArrow style={{marginTop: '5px'}} /></button>
      </div>
    </div>
  )
}

export default UpdateBreak