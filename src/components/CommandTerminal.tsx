import "./CommandTerminal.css";

function CommandTerminal() {
  return (
    <section className="command-container">

      <div className="terminal-box">
        <h2>COMMAND TERMINAL</h2>

        <div className="terminal-input">
          <input placeholder="Enter command..." />
          <button>SEND</button>
        </div>
      </div>


      <div className="mission-controls">

        <button className="start-btn">
          ▶ START MISSION
        </button>

        <button className="stop-btn">
          ■ STOP MISSION
        </button>

      </div>

    </section>
  );
}

export default CommandTerminal;