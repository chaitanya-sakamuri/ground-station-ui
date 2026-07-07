import './App.css'
import Header from "./components/Header";
import RobotStatus from "./components/RobotStatus";
import CameraFeed from "./components/CameraFeed";
import Diagnostics from './components/Diagnostics';
import CommandTerminal from './components/CommandTerminal';

function App() {
  return (
    <div className="app">

      <Header />
    
      <main className="dashboard">
      <RobotStatus />
      <CameraFeed />
      <Diagnostics />
      <CommandTerminal />
      </main>
    </div>
  )
}

export default App