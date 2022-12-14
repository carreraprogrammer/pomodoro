import { useSelector } from 'react-redux';

const Pomodoro = () => {
    const session = useSelector(state => state.Pomodoro.session)
    return (
      <div id='pomodoro-container'>
        <h1 id='timer-label'>Pomodoro</h1>
        <h2 id='time-left'>{session}:00 </h2>
        <button id='start_stop'>Start</button>
        <button id='reset'>Reset</button>
      </div>
    )
}

export default Pomodoro