import { useDispatch, useSelector } from 'react-redux';
import { incrementSession, decrementSession} from  '../Redux/PomodoroSlice'

const UpdateTime = () => {

    const dispatch = useDispatch();
    const session = useSelector(state => state.Pomodoro.session)
    return (
      <div id='session-container'>
        <h1 id='session-label'>Session Length</h1>
        <button id='session-increment'>Increment</button>
        <h2 id='session-length'>{session}</h2>
        <button id='session-decrement'>Decrement</button>
      </div>
    )
}

export default UpdateTime