import "./Diagnostics.css"

function Diagnostics() {
  return (
    <section className="panel right-panel">
      <h2>DIAGNOSTICS</h2>

      <div className="status-row">
          <span>Camera</span>
          <span>🟢</span>
      </div>

      <div className="status-row">
          <span>Motors</span>
          <span>🔴</span>
      </div>

      <div className="status-row">
          <span>ROS Node</span>
          <span>🟢</span>
      </div>

      <div className="status-row">
          <span>Servo</span>
          <span>🟡</span>
      </div>

      <div className="status-row">
          <span>LiDAR</span>
          <span>🟡</span>
      </div>

      <div className="status-row">
          <span>GPS</span>
          <span>🟢</span>
      </div>

    </section>
  );
}

export default Diagnostics;