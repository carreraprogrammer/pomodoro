
import  { createSlice } from '@reduxjs/toolkit';

const initialState = {
  time: 25,
  break: 5,
  session: 25,
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
    restart(state){
      const newState = {...state}
      return newState
    }
  }
}
)

export default pomodoroSlice.reducer;
export const { incrementBreak, decrementBreak, restart } = pomodoroSlice.actions