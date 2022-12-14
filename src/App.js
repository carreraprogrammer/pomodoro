import Pomodoro from "./Components/Pomodoro";
import UpdateBreak from "./Components/UpdateBreak";
import UpdateTime from "./Components/UpdateTime";
import { Provider } from 'react-redux';
import store from "./Redux/store";
import './Styles/App.css'

const App = () => {
    return(
      <Provider store={store}>
        <div id='app-container'>
          <UpdateBreak />
          <UpdateTime/>
          <Pomodoro />
        </div>
      </Provider>
    )
}

export default App 