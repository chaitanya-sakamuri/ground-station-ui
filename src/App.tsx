import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  return (
    <div className="app">

      {/* Header */}
      <header className="header">
        <h1>GROUND STATION UI</h1>

        <div className="status">
          <span>ROS: 🟢 Connected</span>
          <span>Battery: 86%</span>
          <span>Latency: 32ms</span>
        </div>
      </header>


      {/* Main Dashboard */}
      <main className="dashboard">


        {/* Left Panel */}
        <section className="panel left-panel">
          <h2>ROBOT STATUS</h2>

          <p>Robot: SO-101</p>
          <p>Mode: Manual</p>
          <p>Speed: 0.0 m/s</p>

          <hr />

          <h3>JOINTS</h3>

          <p>Joint 1: 45°</p>
          <p>Joint 2: 20°</p>
          <p>Joint 3: 90°</p>

        </section>



        {/* Camera */}
        <section className="panel camera">

          <h2>CAMERA FEED</h2>

          <div className="camera-box">
            CAMERA STREAM
          </div>

        </section>



        {/* Right Panel */}
        <section className="panel right-panel">

          <h2>DIAGNOSTICS</h2>

          <p>Camera 🟢</p>
          <p>Motors 🟢</p>
          <p>ROS Node 🟢</p>
          <p>Servo 🟡</p>

        </section>


      </main>



      {/* Command Console */}
      <section className="console">

        <h2>COMMAND TERMINAL</h2>

        <input placeholder="Enter command..." />

        <button>
          SEND
        </button>

      </section>


    </div>
  )
}

export default App