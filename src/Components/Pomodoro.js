import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startTimer, restartPomodoro } from '../Redux/PomodoroSlice';
import { GiTomato } from 'react-icons/gi';

const Pomodoro = () => {
    const dispatch = useDispatch();
    let {session, seconds, name, counter} = useSelector(state => state.Pomodoro);
  
    const [running, setRunning] = useState(false);

  
    // utiliza una variable para almacenar el identificador del intervalo
  
    const intervalRef = useRef();
    const audioRef = useRef();

    useEffect(() => {
      if (running && session >= 0 && seconds >= 0) {
        // guarda el identificador del intervalo en la propiedad .current de la referencia
        intervalRef.current = setInterval(() => {
          dispatch(startTimer());
        }, 1000);
      }else{
        // utiliza la referencia para cancelar el intervalo
        clearInterval(intervalRef.current);
      }
    }, [running, intervalRef, audioRef]);

    useEffect(() => {
        // ...
    
        // check if session and seconds are 0
        if (session === 0 && seconds === 0) {
          // play the sound
          audioRef.current.play();
        }
      }, [session, seconds]);
  
    return (
      <div id="pomodoro-container">
        <h1>My sessions</h1>
        <div id='tomato-container'>
          {[...Array(counter)].map((_, i) => (
              <GiTomato style={{color: 'red'}}/>
          ))}
        </div>
        <h1 id="timer-label">Pomodoro</h1>
        <h2 id="time-left" >
          {session}:{seconds < 0 && session === 0 ? 0 : seconds === 0 ? seconds + '0' : seconds > 10 ? seconds : '0' + seconds}{" "}
        </h2>
        {/* utiliza el estado local para controlar si el intervalo está en ejecución */}
        <div id='pomodoro-buttons'>
           <button id="start_stop" onClick={() => setRunning(true)}>
             Start
           </button>
           <button id="reset" onClick={() => setRunning(false)}>
             Stop
           </button>
           <button onClick={()=>{dispatch(restartPomodoro()); setRunning(false)}}>
             Restart
           </button>
           <audio id="beep" src="https://www.pacdv.com/sounds/interface_sound_effects/sound10.mp3" type="audio/mp3" ref={audioRef}></audio>
        </div>
        <h3>{name}</h3>
      </div>
    );
  };  

export default Pomodoro