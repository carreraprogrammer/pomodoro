// PomodoroSlice.js

import  { createSlice } from '@reduxjs/toolkit';

const initialState = {
  session: 5,
  breakTime: 5,
  seconds: 0,
  running: false,
}

export const pomodoroSlice = createSlice (
 { 
  name: 'Pomodoro/getTimes',
  initialState,
  reducers: {
    incrementBreak(state){
      const newState = {...state, breakTime: state.breakTime + 1};
      return newState
    },
    decrementBreak(state){
      const newState = {...state, breakTime: state.breakTime -1};
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
    startTimer(state) {
      const newState = {...state};
        newState.seconds -= 1;

      if (newState.seconds < 0 && newState.session > 0) {
          newState.session -= 1;
          newState.seconds = 10;
      }else if(newState.session === 0 && newState.seconds === 0){
        return {...newState, session: newState.breakTime}
      }else {
        return newState
      }
      return newState;
    },
    stopTimer(state) {
      return {...state};
    },
    changeRunning(state) {
      const newState = {...state};
      newState.running = !state.running;
      return newState;
    }
  }
  }
)

export default pomodoroSlice.reducer;
export const { incrementBreak, decrementBreak, incrementSession, decrementSession, startTimer, stopTimer, changeRunning } = pomodoroSlice.actions;
