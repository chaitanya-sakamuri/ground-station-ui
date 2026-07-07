import "./RobotStatus.css"


function RobotStatus() {
  return (
    <section className="panel left-panel">
      <h2>ROBOT STATUS</h2>

      
      <p>Mission State: 🟢 IDLE</p>
      <p>Speed: 0.0 m/s</p>

      <hr />

      <h3>JOINTS</h3>

      <p>Joint 1: 45°</p>
      <p>Joint 2: 20°</p>
      <p>Joint 3: 90°</p>
    </section>
  );
}

export default RobotStatus;