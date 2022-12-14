
import  { createSlice } from '@reduxjs/toolkit';

const defaultState = {
  time: 25,
  rest: 5,
  session: 25,
}

export const pomodoroSlice = createSlice (
 { 
  name: 'Pomodoro/getTimes',
  defaultState,
  reducers: {
    increment(state, { payload }){
      const newState = {...state, payload: state.payload + 1};
      return newState
    },
    decrement(state, { payload }){
      const newState = {...state, payload: state.payload -1};
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
export const { increment, decrement, restart } =eventSlice.actions