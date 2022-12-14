import Pomodoro from "./Components/Pomodoro";
import UpdateRest from "./Components/UpdateRest";
import UpdateTime from "./Components/UpdateTime";

const App = () => {
    return(
        <div id='appContainer'>
          <UpdateRest />
          <UpdateTime/>
          <Pomodoro />
        </div>
    )
}

export default App 