
import  { createSlice } from '@reduxjs/toolkit';

const initialState = {
  session: 5,
  break: 5,
  seconds: 0,
  running: true,
}

export const pomodoroSlice = createSlice (
 { 
  name: 'Pomodoro/getTimes',
  initialState,
  reducers: {
    incrementBreak(state){
      const newState = {...state, break: state.break + 1};
      return newState
    },
    decrementBreak(state){
      const newState = {...state, break: state.break -1};
      return newState
    },
    incrementSession(state){
      const newState = {...state, session: state.session + 1};
      return newState
    },
    decrementSession(state){
      const newState = {...state, session: state.session -1};
      return newState
    },
    restart(state){
      const newState = {...state}
      return newState
    },
    startTimer: (state) => {
      state.seconds -= 1;
      if (state.seconds < 0) {
          state.session -= 1;
          state.seconds = 59;
      }
      if(state.running === false){
        return {...state, running: true}
        
      }
    },
   changeRunning: (state) => {
      return {...state, running: !state.running}
   }
  }
  }
)

export default pomodoroSlice.reducer;
export const { incrementBreak, decrementBreak, incrementSession, decrementSession, restart, startTimer, changeRunning} = pomodoroSlice.actions