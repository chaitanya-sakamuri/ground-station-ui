import './App.css'
import Header from "./components/Header";
import RobotStatus from "./components/RobotStatus";
import CameraFeed from "./components/CameraFeed";
import Diagnostics from './components/Diagnostics';
import CommandTerminal from './components/CommandTerminal';
import Environment from "./components/Environment";
import SystemInfo from "./components/SystemInfo";

function App() {
  return (
    <div className="app">
      <Header />
     <main className="dashboard">

        <div className="left-column">
          <RobotStatus />
          <Environment />
        </div>

        <CameraFeed />

        <div className="right-column">
            <Diagnostics />
            <SystemInfo />
        </div>

    <CommandTerminal />

</main>
    </div>
  )
}

export default App