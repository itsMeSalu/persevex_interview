import DronePreview from '../components/DronePreview.jsx'
import assessment from '../assets/assessment.webp'
import practice from '../assets/practice.webp'
import collaboration from '../assets/team-debrief.webp'
import operations from '../assets/remote-practice.webp'
import review from '../assets/review.webp'

export const droneMechanicsInterviewPath = '/interviews/drone-mechanics'

export const droneMechanicsInterviewTrack = {
  title: 'Drone Mechanics & Engineering',
  shortTitle: 'Drone Mechanics',
  program: 'drone-mechanics',
  previewLabel: 'Quadcopter preview',
  Preview: DronePreview,
  heroDescription: 'Understand how a quadcopter’s frame, propulsion, electronics, and flight controller work together. Practice explaining assembly checks, interpreting flight data, and troubleshooting faults for technician and engineering interviews.',
  projectDescription: 'Work through civilian training projects you can explain in an interview, from frame inspection and electrical checks to simulated flight diagnostics.',
  topics: [
    ['Mechanics', 'Airframes, lift, and propulsion'],
    ['Electronics', 'Power, sensors, and flight control'],
    ['Diagnostics', 'Inspection, logs, and fault isolation'],
  ],
  overviewHeading: ['Practice tracing', 'how a drone works.'],
  overviewDescription: 'Follow the system from the frame and motors through the power distribution and flight controller. Then use inspection notes, sensor readings, and logs to decide which subsystem to check and what evidence would confirm a repair.',
  focusAreas: [
    ['UAV fundamentals', 'Explain lift, stability, and why airframe geometry matters.'],
    ['Propulsion and electronics', 'Describe the roles of motors, propellers, speed controllers, and batteries.'],
    ['Avionics and flight control', 'Explain how sensor readings help the controller maintain attitude.'],
    ['Assembly and configuration', 'Inspect connections and verify a trainer against its setup checklist.'],
    ['Troubleshooting and maintenance', 'Read logs, isolate faults, and document checks after a repair.'],
  ],
  practiceSkills: ['Aerodynamics', 'Airframe Inspection', 'Brushless Motors', 'ESCs', 'Flight Controllers', 'Sensor Calibration', 'Flight Logs', 'Maintenance'],
  curriculum: [
    {
      title: 'UAV Fundamentals & Aerodynamics',
      topics: ['Civilian UAV roles and operating environments', 'Quadcopter frames and structural loads', 'Lift, drag, and attitude axes', 'Hover and stability', 'Preflight risk assessment'],
      prompt: 'Explain how a quadcopter changes roll, pitch, and yaw and what signs would make you stop a training flight.',
    },
    {
      title: 'Propulsion Systems & Electronics',
      topics: ['Brushless motor and propeller roles', 'Electronic speed controllers', 'Battery ratings and condition', 'Power distribution concepts', 'Safe electrical inspection'],
      prompt: 'Explain how a flight controller command becomes a change in thrust. Where could a fault interrupt that chain?',
    },
    {
      title: 'Avionics & Flight Controllers',
      topics: ['Controller inputs and outputs', 'Gyroscopes and accelerometers', 'Sensor calibration and orientation', 'Feedback control concepts', 'Reading telemetry and flight logs'],
      prompt: 'An attitude display disagrees with the trainer’s orientation. How would you differentiate a sensor issue from a configuration issue?',
    },
    {
      title: 'Assembly, Soldering & Configuration',
      topics: ['Frame assembly and hardware checks', 'Recognizing reliable solder joints', 'Cable strain relief and connector inspection', 'Configuration review with a simulator', 'Bench checks with propellers removed'],
      prompt: 'Walk through the inspection you would perform before a newly assembled trainer is cleared for a controlled check.',
    },
    {
      title: 'Troubleshooting, Repair & Maintenance',
      topics: ['Organizing a fault investigation', 'Separating mechanical and electrical symptoms', 'Interpreting vibration and error logs', 'Maintenance and parts inspection', 'Verifying and documenting a repair'],
      prompt: 'A trainer develops a vibration after maintenance. What evidence would help you narrow it down without continuing to fly it?',
    },
  ],
  demo: {
    prompts: [
      'A training quadcopter develops a noticeable vibration after a propeller replacement. How would you diagnose the issue before returning it to flight?',
      'The configuration looks consistent, but vibration appears on only one arm. What checks would help distinguish a propeller issue from a motor or frame issue?',
    ],
    feedback: [
      'Take the trainer out of service and inspect the part, fasteners, and arm before powered checks. Confirm the replacement matches the manufacturer’s specification.',
      'Compare inspection findings with existing logs. Look for a localized mechanical issue before changing controller settings.',
      'Document the suspected cause, the corrective action, and the instructor-approved verification before the trainer returns to service.',
    ],
  },
  projects: [
    { title: 'Quadcopter Frame Assembly', image: practice, description: 'Assemble a training frame and document its geometry, fastening, and inspection checks.', stack: ['CAD', 'Frame Inspection', 'Mechanical Assembly'], focus: 'Explain how you verify alignment and structural condition.' },
    { title: 'Power Distribution Bench Review', image: assessment, description: 'Inspect a de-energized training board and document connector, continuity, and solder-joint checks.', stack: ['Multimeter', 'Wiring Diagrams', 'Bench Checks'], focus: 'Describe the checks you complete before applying power.' },
    { title: 'Flight Controller Simulation', image: operations, description: 'Compare sensor orientation and attitude feedback in a virtual quadcopter.', stack: ['Flight Simulator', 'IMU', 'Flight Logs'], focus: 'Explain how you would distinguish sensor orientation from controller behavior.' },
    { title: 'Video and Telemetry Review', image: collaboration, description: 'Review classroom video and telemetry samples for signal loss and reporting gaps.', stack: ['Sample Telemetry', 'Video Review', 'Diagnostics'], focus: 'Explain which observations would justify a bench inspection.' },
    { title: 'Radio and Failsafe Tabletop', image: review, description: 'Use a simulator to review control mapping and document what the trainer should do when the link is lost.', stack: ['Simulator', 'Control Mapping', 'Failsafe Review'], focus: 'Describe how you would verify the expected response without an uncontrolled test flight.' },
  ],
  questions: [
    ['What should I prepare for a drone mechanics interview?', 'Review airframes, propulsion, power systems, sensors, and troubleshooting. Be ready to explain how you would verify a fault or repair safely.'],
    ['Do I need to have flown a drone before?', 'You can start with component identification, a simulator, and supervised assembly or inspection exercises. Flight experience can help put those lessons in context.'],
    ['How does the mock interview work?', 'You’ll investigate a vibration on a trainer, explain your inspection priorities, and compare your reasoning with example feedback.'],
    ['Which project is a good starting point?', 'Start with frame inspection or a flight-controller simulation so you can explain the role of each major subsystem.'],
    ['Does the mock interview qualify me for a certificate?', 'The mock interview is for practice. Persevex certificate eligibility depends on the applicable course or internship requirements.'],
  ],
}
