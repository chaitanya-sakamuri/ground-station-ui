import "./Environment.css";
import CircularGauge from "./CircularGauge";

export default function Environment() {
  return (
<section className="panel environment">

    <h2>ENVIRONMENT</h2>

    <div className="gauge-grid">

        <CircularGauge
            label="Temperature"
            value={24}
            max={50}
            unit="°C"
            color="#55ff55"
        />

        <CircularGauge
            label="Pressure"
            value={1012}
            max={1200}
            unit="hPa"
            color="#ffaa33"
        />

        <div className="bottom-gauge">
            <CircularGauge
                label="Humidity"
                value={61}
                max={100}
                unit="%"
                color="#3fa9ff"
            />
        </div>

    </div>

</section>
  );
}