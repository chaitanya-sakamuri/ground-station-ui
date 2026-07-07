import { useEffect, useState } from "react";
import "./Header.css";

function Header() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <header className="header">

            <h1>GROUND STATION UI</h1>

            <div className="status">
                <span>ROS: 🟢 Connected</span>
                <span>Battery: 56%</span>
                <span>Latency: 39ms</span>
            </div>
            <div>
              <span>{time.toLocaleTimeString()}</span>
            </div>

        </header>
    );
}

export default Header;