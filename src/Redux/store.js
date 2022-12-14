import { combineReducers, configureStore } from '@reduxjs/toolkit';
import pomodoroSlice from './PomodoroSlice'

const pomodoroReducers = combineReducers({
  Pomodoro: pomodoroSlice,
})

const store = configureStore({
 reducer: pomodoroReducers,
})

export default store;