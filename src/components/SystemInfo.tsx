import "./SystemInfo.css";

export default function SystemInfo() {
  return (
    <section className="panel system-info">
      <h2>SYSTEM INFO</h2>

      <div className="sys-item">
        <span>CPU Usage</span>

        <div className="sys-right">
          <span>32%</span>
          <div className="progress">
            <div className="fill cpu"></div>
          </div>
        </div>
      </div>

      <div className="sys-item">
        <span>RAM Usage</span>

        <div className="sys-right">
          <span>45%</span>
          <div className="progress">
            <div className="fill ram"></div>
          </div>
        </div>
      </div>

      <div className="sys-item">
        <span>Storage</span>

        <div className="sys-right">
          <span>62%</span>
          <div className="progress">
            <div className="fill storage"></div>
          </div>
        </div>
      </div>

      <div className="sys-item">
        <span>Signal Strength</span>

        <div className="signal">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  );
}