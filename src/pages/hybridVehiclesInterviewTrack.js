import HybridVehiclePreview from '../components/HybridVehiclePreview.jsx'
import assessment from '../assets/assessment.webp'
import operations from '../assets/remote-practice.webp'

export const hybridVehiclesInterviewPath = '/interviews/hybrid-electric-vehicles'

export const hybridVehiclesInterviewTrack = {
  title: 'Hybrid Electric Vehicles',
  shortTitle: 'Hybrid Electric Vehicles',
  program: 'hev',
  previewLabel: 'Power flow preview',
  heroEntrance: false,
  Preview: HybridVehiclePreview,
  heroDescription: 'Prepare for hybrid vehicle interviews by explaining how the engine, electric motor, battery, and inverter share work. Compare hybrid architectures, follow energy during acceleration and braking, and practice reasoning through diagnostic evidence.',
  projectDescription: 'Use battery and powertrain simulations to practice explaining your assumptions, trade-offs, and validation checks.',
  topics: [
    ['Powertrain', 'Engine, motor, and hybrid layouts'],
    ['Energy', 'Battery management and regenerative braking'],
    ['Diagnostics', 'Telemetry and maintenance decisions'],
  ],
  overviewHeading: ['Practice following', 'the flow of energy.'],
  overviewDescription: 'Start with what the vehicle is doing and trace which components supply, convert, or recover energy. Then explain how temperature, charge level, and control limits change what the system can do.',
  focusAreas: [
    ['Electric vehicle fundamentals', 'Compare hybrid and battery-electric vehicles and identify the major subsystems.'],
    ['Battery systems and management', 'Explain state of charge, battery health, and thermal limits.'],
    ['Motors and power electronics', 'Describe what the inverter does during drive and regenerative braking.'],
    ['Hybrid architectures and control', 'Trace power flow in series, parallel, and power-split layouts.'],
    ['Diagnostics and maintenance', 'Interpret vehicle data and explain how to investigate a fault safely.'],
  ],
  practiceSkills: ['Hybrid Architectures', 'Battery Management', 'State of Charge', 'Inverters', 'Regenerative Braking', 'Drive Cycles', 'Powertrain Simulation', 'Diagnostics'],
  curriculum: [
    {
      title: 'Introduction to EV Technology',
      topics: ['Hybrid and battery-electric vehicle types', 'Major vehicle subsystems', 'Energy and power in a drive cycle', 'Charging requirements by architecture', 'Efficiency and emissions trade-offs'],
      prompt: 'Compare a conventional hybrid with a plug-in hybrid for stop-and-go driving. What data would you need to estimate the difference?',
    },
    {
      title: 'Battery Systems & Management',
      topics: ['Cell, module, and pack concepts', 'Voltage, capacity, and usable energy', 'State of charge and state of health', 'Temperature limits and thermal management', 'Battery monitoring and protection'],
      prompt: 'A hybrid limits electric assist on a cold morning. Which battery signals would you examine before assuming there is a fault?',
    },
    {
      title: 'Electric Motors & Power Electronics',
      topics: ['Motor torque and speed', 'Inverter operation', 'DC–DC converters and auxiliary loads', 'Regenerative braking', 'Conversion losses and efficiency maps'],
      prompt: 'Trace the path from the wheels to the battery when regenerative braking is active.',
    },
    {
      title: 'Hybrid Architectures & Control',
      topics: ['Series hybrid layouts', 'Parallel hybrid layouts', 'Series-parallel and power-split layouts', 'Drive modes and torque sharing', 'Control trade-offs over a drive cycle'],
      prompt: 'Explain how a parallel hybrid might decide when to use the motor, the engine, or both.',
    },
    {
      title: 'EV Diagnostics & Maintenance',
      topics: ['Interpreting fault records and vehicle data', 'Recognizing sensor inconsistencies', 'High-voltage safety boundaries', 'Maintenance documentation', 'Verifying repairs with qualified procedures'],
      prompt: 'What data would distinguish a normal reduction in regenerative braking from a fault that should be escalated?',
    },
  ],
  demo: {
    prompts: [
      'A hybrid vehicle recovers less energy during braking after a full charge. How would you explain this to an interviewer?',
      'If regeneration remains limited after the battery charge falls, what else would you check?',
    ],
    feedback: [
      'Explain that the battery management system can limit charge acceptance near full charge, so friction brakes may provide more of the stopping force.',
      'Check battery temperature, charge-power limits, selected drive mode, vehicle speed, and whether the behavior is expected for that model.',
      'Compare expected behavior with vehicle logs and document when you would refer the issue for qualified diagnosis.',
    ],
  },
  projects: [
    { title: 'Battery Pack Design Study', image: assessment, description: 'Model capacity, voltage, and thermal limits for a small vehicle in simulation.', stack: ['Battery Modeling', 'BMS', 'Thermal Simulation'], focus: 'Explain how your assumptions affect usable energy and charge acceptance.' },
    { title: 'EV Powertrain Simulation', image: operations, description: 'Compare drive-cycle energy use with and without regenerative braking in a virtual model.', stack: ['Simulink', 'Drive Cycles', 'Regeneration'], focus: 'Explain which losses and limits drive the results and how you would validate the model.' },
  ],
  questions: [
    ['What should I prepare for a hybrid vehicle interview?', 'Review hybrid architectures, battery management, motors, inverters, and regenerative braking. Practice tracing energy flow in different drive modes.'],
    ['How is a hybrid different from a battery-electric vehicle?', 'A hybrid combines an engine and an electric drive system. A battery-electric vehicle uses electricity for propulsion without a combustion engine.'],
    ['How does the mock interview work?', 'You’ll explain why regenerative braking can be limited, answer a diagnostic follow-up, and compare your reasoning with example feedback.'],
    ['Which projects can I discuss in an interview?', 'The battery study helps you explain pack assumptions and limits. The powertrain simulation helps you explain drive cycles, losses, and energy recovery.'],
    ['Does the mock interview qualify me for a certificate?', 'The mock interview is for practice. AntIntern certificate eligibility depends on the course or internship requirements.'],
  ],
}
