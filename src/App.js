import Pomodoro from "./Components/Pomodoro";
import UpdateBreak from "./Components/UpdateBreak";
import UpdateTime from "./Components/UpdateTime";
import './Styles/App.css'

const App = () => {
    return(
        <div id='app-container'>
          <UpdateBreak />
          <UpdateTime/>
          <Pomodoro />
        </div>
    )
}

export default App 