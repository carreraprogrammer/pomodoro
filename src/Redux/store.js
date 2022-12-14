import { combineReducers, combineReducers, configureStore } from '@reduxjs/toolkit';
import pomodoroSlice from './PomodoroSlice'

const combineReducers = combineReducers({
  Pomodoro: pomodoroSlice,
})
const store = configureStore({
 reducer: eventsReducers,
})

export default store;