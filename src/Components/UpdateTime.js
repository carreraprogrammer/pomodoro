import { useDispatch, useSelector } from 'react-redux';
import { incrementSession, decrementSession} from  '../Redux/PomodoroSlice'
import { BiUpArrow } from 'react-icons/bi'
import { BiDownArrow } from 'react-icons/bi'

const UpdateTime = () => {

    const dispatch = useDispatch();
    const session = useSelector(state => state.Pomodoro.initSession)
    return (
      <div id='session-container'>
        <h1 id='session-label'>Session Length</h1>
        <button id='session-increment' onClick={() => dispatch(incrementSession())}><BiUpArrow /></button>
        <h2 id='session-length'>{session}</h2>
        <button id='session-decrement' onClick={() => dispatch(decrementSession())}><BiDownArrow /></button>
      </div>
    )
}

export default UpdateTime