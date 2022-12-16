import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startTimer } from '../Redux/PomodoroSlice';

const Pomodoro = () => {
    const dispatch = useDispatch();
    let {session, breakTime, seconds } = useSelector(state => state.Pomodoro);
  
    const [running, setRunning] = useState(false);
    const [runningBreak, setRunningBreak] = useState(true)

  
    // utiliza una variable para almacenar el identificador del intervalo
  
    const intervalRef = useRef();

    useEffect(() => {
      if (running && session > 0 && seconds >= 0) {
        // guarda el identificador del intervalo en la propiedad .current de la referencia
        intervalRef.current = setInterval(() => {
          dispatch(startTimer());
        }, 1000);
      } else {
        // utiliza la referencia para cancelar el intervalo
        clearInterval(intervalRef.current);
      }
    }, [running, intervalRef]);
  
  
    return (
      <div id="pomodoro-container">
        <h1 id="timer-label">Pomodoro</h1>
        <h2 id="time-left">
          {session === 0 && seconds === 0 ? breakTime : session}:{seconds < 0 && session === 0 ? 0 : seconds}{" "}
        </h2>
        {/* utiliza el estado local para controlar si el intervalo está en ejecución */}
        <button id="start_stop" onClick={() => setRunning(true)}>
          Start
        </button>
        <button id="reset" onClick={() => setRunning(false)}>
          Stop
        </button>
      </div>
    );
  };  

export default Pomodoro