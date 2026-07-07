import "./CircularGauge.css";

type CircularGaugeProps = {
  value: number;
  max: number;
  label: string;
  unit: string;
  color: string;
};

export default function CircularGauge({
  value,
  max,
  label,
  unit,
  color,
}: CircularGaugeProps) {

  const radius = 42;
  const stroke = 8;

  const circumference = 2 * Math.PI * radius;

  const progress = (value / max) * circumference;

  return (
    <div className="gauge">

      <svg width="100" height="100">

        {/* Background circle */}
        <circle
          className="bg-circle"
          cx="50"
          cy="50"
          r={radius}
          strokeWidth={stroke}
        />

        {/* Progress circle */}
        <circle
          className="progress-circle"
          cx="50"
          cy="50"
          r={radius}
          strokeWidth={stroke}
          stroke={color}
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
        />

      </svg>

      <div className="gauge-text">
        <span className="value">{value}</span>
        <span className="unit">{unit}</span>
      </div>

      <p>{label}</p>

    </div>
  );
}