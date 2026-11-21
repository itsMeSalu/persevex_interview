import IotTelemetryPreview from '../components/IotTelemetryPreview.jsx'
import assessment from '../assets/assessment.webp'
import practice from '../assets/practice.webp'
import workspace from '../assets/hiring.webp'
import collaboration from '../assets/team-debrief.webp'
import operations from '../assets/remote-practice.webp'
import review from '../assets/review.webp'

export const iotInterviewPath = '/interviews/internet-of-things'

export const iotInterviewTrack = {
  title: 'Internet of Things (IoT)',
  shortTitle: 'IoT',
  program: 'iot',
  previewLabel: 'Telemetry preview',
  Preview: IotTelemetryPreview,
  heroDescription: 'Prepare for IoT interviews by tracing how an ESP32 reads a sensor, sends events over MQTT, and updates a dashboard. Practice explaining device behavior when connectivity drops, readings are unreliable, or commands arrive late.',
  projectDescription: 'Build connected-device examples you can explain from sensor readings and messages through dashboard behavior and deployment.',
  topics: [
    ['Devices', 'Microcontrollers, sensors, and actuators'],
    ['Connectivity', 'MQTT, wireless links, and gateways'],
    ['Operations', 'Dashboards, security, and deployment'],
  ],
  overviewHeading: ['Practice connecting', 'devices to decisions.'],
  overviewDescription: 'Follow a reading from the device to the dashboard. Explain how you validate the reading, choose a communication method, and handle retries or outages. Then describe how you would verify the system before deploying it.',
  focusAreas: [
    ['IoT and microcontrollers', 'Explain how a device samples, processes, and sends readings.'],
    ['Sensors and communication', 'Choose a sensor and link based on range, power, and reliability.'],
    ['Cloud platforms and protocols', 'Trace how a broker routes telemetry to cloud services.'],
    ['Visualization and device control', 'Show data freshness and confirm whether commands took effect.'],
    ['Security and deployment', 'Explain device identity, access limits, and how to monitor a rollout.'],
  ],
  practiceSkills: ['ESP32', 'Sensor Calibration', 'MQTT', 'Wi-Fi & BLE', 'Edge Gateways', 'Telemetry', 'IoT Dashboards', 'Device Identity'],
  curriculum: [
    {
      title: 'Introduction to IoT & Microcontrollers',
      topics: ['Device, gateway, and cloud roles', 'ESP32 and a microcontroller’s I/O', 'Reading digital and analog inputs', 'Sampling and scheduling', 'Debugging a small firmware project'],
      prompt: 'Walk through how a microcontroller turns a sensor reading into a timestamped event.',
    },
    {
      title: 'Sensors, Actuators, and Communication',
      topics: ['Selecting and calibrating sensors', 'Low-voltage outputs and actuator states', 'Serial communication between components', 'Choosing Wi-Fi, BLE, or a long-range link', 'Power and reliability trade-offs'],
      prompt: 'Choose a link for a battery-powered room sensor and explain what would change your decision.',
    },
    {
      title: 'IoT Cloud Platforms & Protocols',
      topics: ['MQTT topics and publish-subscribe', 'Broker and gateway responsibilities', 'Delivery guarantees and duplicate messages', 'Connecting devices to cloud ingestion', 'Buffering readings during outages'],
      prompt: 'A device reconnects and sends the same reading twice. How should the application handle it?',
    },
    {
      title: 'Data Visualization & Device Control',
      topics: ['Structuring telemetry and timestamps', 'Displaying trends and data freshness', 'Thresholds and notifications', 'Acknowledging device commands', 'Testing offline and error states'],
      prompt: 'A dashboard says a device is on but the command was never acknowledged. How would you display its state?',
    },
    {
      title: 'IoT Security and Project Deployment',
      topics: ['Device identity and credential handling', 'Encrypted transport and topic access control', 'Tracking firmware versions', 'Monitoring devices after deployment', 'Planning a staged rollout and recovery'],
      prompt: 'How would you provision devices so each can publish only its own readings and be revoked independently?',
    },
  ],
  demo: {
    prompts: [
      'An ESP32 weather station loses Wi-Fi for 20 minutes. How would you keep its data usable and prevent the dashboard from showing stale readings as live?',
      'After reconnecting, the device sends duplicate readings out of order. How would you recover?',
    ],
    feedback: [
      'Give readings a device ID, timestamp, and sequence number. Keep a bounded local buffer and show the dashboard’s last reported time.',
      'On reconnection, deduplicate records and sort by the reading timestamp. Distinguish the event time from the time it reached the server.',
      'Test disconnects, reboots, duplicate delivery, and buffer limits. Explain what happens when the outage lasts longer than the available storage.',
    ],
  },
  projects: [
    { title: 'Smart Home Automation Demo', image: practice, description: 'Use a low-voltage classroom device to show command, acknowledgment, and offline states.', stack: ['ESP32', 'MQTT', 'Node-RED'], focus: 'Explain how the interface distinguishes pending and confirmed state.' },
    { title: 'Weather Monitoring Station', image: assessment, description: 'Track temperature, humidity, and pressure and display recent readings on a dashboard.', stack: ['ESP32', 'BME280', 'Telemetry'], focus: 'Explain sampling, calibration, and stale-data handling.' },
    { title: 'Wearable Sensor Prototype', image: workspace, description: 'Send sample activity readings from a wearable prototype to a companion display.', stack: ['BLE', 'Arduino', 'C/C++'], focus: 'Explain battery trade-offs and the limits of prototype readings.' },
    { title: 'Smart Agriculture Monitoring', image: operations, description: 'Track soil moisture and test irrigation alerts with a simulated actuator.', stack: ['ESP32', 'Moisture Sensor', 'MQTT'], focus: 'Explain thresholds and how to avoid repeated switching.' },
    { title: 'Asset Tracking Dashboard', image: collaboration, description: 'Use synthetic location data to show where a package was last reported.', stack: ['Simulated GPS', 'Firebase', 'Maps'], focus: 'Discuss data freshness, reporting frequency, and privacy.' },
    { title: 'Home Motion Alert Demo', image: review, description: 'Build a classroom motion alert with event logging and a notification panel.', stack: ['PIR Sensor', 'ESP32', 'Dashboard'], focus: 'Explain false alerts, data retention, and what users can control.' },
  ],
  questions: [
    ['What should I prepare for an IoT interview?', 'Review microcontrollers, sensor sampling, wireless communication, MQTT, and device security. Practice tracing a reading from hardware to the dashboard.'],
    ['Can I start before I have hardware?', 'Yes. Use a simulator or sample telemetry to practice message handling, dashboards, and offline behavior. Hardware adds practical work on calibration, power, and connectivity.'],
    ['How does the IoT mock interview work?', 'You’ll work through a weather station losing Wi-Fi, then explain buffering, ordering, and duplicate delivery before reviewing example feedback.'],
    ['Which project is a good starting point?', 'Use the Weather Monitoring Station to practice telemetry and dashboards, or the smart home demo to practice device commands and acknowledgments.'],
    ['Does the mock interview qualify me for a certificate?', 'The mock interview is for practice. Persevex certificate eligibility depends on the applicable course or internship requirements.'],
  ],
}
