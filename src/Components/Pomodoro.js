import { useDispatch, useSelector } from 'react-redux';
import { startTimer } from '../Redux/PomodoroSlice';

const Pomodoro = () => {
    const dispatch = useDispatch();
    const session = useSelector(state => state.Pomodoro.session);
    const seconds = useSelector(state => state.Pomodoro.seconds);

    const start = () => {
        if (session > 0) {
            dispatch(startTimer());
            setTimeout(start, 1000);
        }
    }

    return (
      <div id='pomodoro-container'>
        <h1 id='timer-label'>Pomodoro</h1>
        <h2 id='time-left'>{session}:{seconds} </h2>
        <button id='start_stop' onClick={start}>Start</button>
        <button id='reset'>Reset</button>
      </div>
    );
};

export default Pomodoro