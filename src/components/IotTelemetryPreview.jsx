import consoleImage from '../assets/iot-telemetry/console.webp'
import gateway from '../assets/iot-telemetry/gateway.webp'
import board from '../assets/iot-telemetry/board.webp'
import sensor from '../assets/iot-telemetry/sensor.webp'
import './IotTelemetryPreview.css'

export default function IotTelemetryPreview() {
  return (
    <figure id="sample" className="iot-telemetry" aria-label="An environmental sensor sends readings through an ESP32 and gateway to a dashboard">
      <div className="iot-telemetry-link iot-telemetry-sensor-link" aria-hidden="true"><i /></div>
      <div className="iot-telemetry-link iot-telemetry-board-link" aria-hidden="true"><i /></div>
      <div className="iot-telemetry-link iot-telemetry-console-link" aria-hidden="true"><i /></div>
      <span className="iot-telemetry-hub-ring" aria-hidden="true" />
      <img src={sensor} className="iot-telemetry-node iot-telemetry-sensor" alt="" width="370" height="240" />
      <img src={board} className="iot-telemetry-node iot-telemetry-board" alt="" width="370" height="211" />
      <img src={gateway} className="iot-telemetry-node iot-telemetry-gateway" alt="" width="370" height="249" />
      <img src={consoleImage} className="iot-telemetry-node iot-telemetry-console" alt="" width="900" height="476" />
    </figure>
  )
}
