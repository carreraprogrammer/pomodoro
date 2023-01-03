// PomodoroSlice.js

import  { createSlice } from '@reduxjs/toolkit';

const initialState = {
  session: 25,
  breakTime: 5,
  initSession: 25,
  initBreak: 5,
  seconds: 0,
  running: false,
  name: 'TIME TO WORK!',
  counter: 0,
}

export const pomodoroSlice = createSlice (
 { 
  name: 'Pomodoro/getTimes',
  initialState,
  reducers: {
    incrementBreak(state){
      const newState = {...state, breakTime: state.breakTime + 1, initBreak: state.breakTime +1};
      return newState
    },
    decrementBreak(state){
      if(state.initBreak >= 2)
      {const newState = {...state, breakTime: state.breakTime -1, initBreak: state.breakTime - 1};
      return newState}
    },
    incrementSession(state){
      const newState = {...state, session: state.session + 1, initSession: state.session + 1};
      return newState
    },
    decrementSession(state){
      if(state.initSession >= 2)
      {const newState = {...state, session: state.session -1, initSession: state.session - 1};
      return newState}
    },
    startTimer(state) {
      const newState = {...state};
        newState.seconds -= 1;

      if (newState.seconds < 0 && newState.session > 0) {
          newState.session -= 1;
          newState.seconds = 59;
      }else if(newState.session === 0 && newState.seconds  < 0 && newState.name === "TIME TO WORK!"){
        return {...newState, name: "IT'S TIME TO REST!", session: newState.initBreak, seconds: 0, counter: newState.counter + 1}
      }else if(newState.session === 0 && newState.seconds < 0 && newState.name === "IT'S TIME TO REST!") {
        return {...newState, name: "TIME TO WORK!", session: newState.initSession, seconds: 0}
      }else {
        return newState
      }
      return newState;
    },
    restartPomodoro(state) {
      return {...state, session: state.initSession, seconds: 0, name: 'TIME TO WORK!', counter: 0};
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
export const { incrementBreak, decrementBreak, incrementSession, decrementSession, startTimer, restartPomodoro, changeRunning,  } = pomodoroSlice.actions;
