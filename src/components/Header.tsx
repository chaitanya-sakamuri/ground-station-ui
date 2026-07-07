import "./Header.css"


function Header() {
  return (
    <header className="panel header">
      <h1>GROUND STATION UI</h1>

      <div className="status">
        <span>ROS: 🟢 Connected</span>
        <span>Battery: 56%</span>
        <span>Latency: 39ms</span>
      </div>
    </header>
  );
}

export default Header;