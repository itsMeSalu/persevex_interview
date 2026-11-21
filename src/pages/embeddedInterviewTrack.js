import EmbeddedPreview from '../components/EmbeddedPreview.jsx'
import board from '../assets/iot-telemetry/board.webp'
import sensor from '../assets/iot-telemetry/sensor.webp'
import gateway from '../assets/iot-telemetry/gateway.webp'
import bench from '../assets/embedded-preview/test-bench.png'
import practice from '../assets/practice.webp'
import review from '../assets/review.webp'

export const embeddedInterviewPath = '/interviews/embedded-systems'

export const embeddedInterviewTrack = {
  title: 'Embedded Systems Design',
  shortTitle: 'Embedded Systems',
  program: 'embedded-systems',
  Preview: EmbeddedPreview,
  heroDescription: 'Prepare for embedded systems interviews by tracing what happens between a hardware input and a firmware response. Practice working with registers, timers, interrupts, and serial peripherals, then explain how you would verify the result on a real board.',
  projectDescription: 'Build small firmware projects and practice explaining their timing, hardware interfaces, and failure handling.',
  topics: [
    ['Hardware', 'Microcontrollers and peripherals'],
    ['Firmware', 'Embedded C and interrupts'],
    ['Debugging', 'Timing, signals, and fault recovery'],
  ],
  overviewHeading: ['Practice reasoning from', 'signal to firmware.'],
  overviewDescription: 'Start with an input signal and follow it through a peripheral, an interrupt, and the application. Explain what needs to happen on time, what can wait, and what you would measure to check that the design works.',
  focusAreas: [
    ['Microcontroller architecture', 'Read a memory map and identify the peripheral registers you need.'],
    ['Embedded C and memory', 'Explain bit masks, volatile access, and storage choices.'],
    ['Timers and interrupts', 'Keep interrupt handlers short and verify timing with a trace.'],
    ['Peripheral communication', 'Compare UART, SPI, and I²C and diagnose common bus failures.'],
    ['Real-time systems and debugging', 'Coordinate tasks and design a safe recovery path.'],
  ],
  practiceSkills: ['Embedded C', 'GPIO', 'ADC', 'PWM', 'Interrupts', 'UART', 'SPI', 'I²C', 'RTOS', 'Logic Analysis'],
  curriculum: [
    {
      title: 'Microcontrollers and Board Bring-Up',
      topics: ['CPU, flash, and SRAM', 'Memory-mapped I/O', 'Clocks and reset', 'GPIO pins and pull resistors', 'Datasheet and schematic reading'],
      prompt: 'A GPIO output never changes. Which hardware and register settings would you check first?',
    },
    {
      title: 'Embedded C and Register-Level Programming',
      topics: ['Bit masks and register updates', 'Volatile and memory-mapped I/O', 'Stack and static storage', 'Fixed-size buffers', 'State machines and error handling'],
      prompt: 'How would you change one register field while preserving neighboring bits?',
    },
    {
      title: 'Timers, Interrupts, and Signal Sampling',
      topics: ['Timer prescalers and compare values', 'PWM output', 'Interrupt latency', 'ADC sampling', 'Debouncing and event queues'],
      prompt: 'How would you sample a sensor on schedule while keeping the main loop responsive?',
    },
    {
      title: 'Peripheral Interfaces and Bus Debugging',
      topics: ['UART framing', 'SPI clock modes', 'I²C addressing and acknowledgments', 'Timeouts and retry limits', 'Reading a logic analyzer trace'],
      prompt: 'An I²C peripheral stops acknowledging requests. How would you isolate the problem?',
    },
    {
      title: 'Real-Time Tasks and Firmware Reliability',
      topics: ['Task priorities and deadlines', 'Queues and shared state', 'Watchdogs and reset reasons', 'Hardware-in-the-loop checks', 'Measuring timing under load'],
      prompt: 'A background task causes missed deadlines. How would you reproduce and measure the issue?',
    },
  ],
  demo: {
    prompts: [
      'A microcontroller samples a sensor every 10 ms and prints readings over UART. The sampling interval becomes inconsistent when the serial output is busy. How would you redesign it?',
      'How would you detect buffer overflow and show that sampling stays on schedule under load?',
    ],
    feedback: [
      'Use a hardware timer to schedule sampling and keep formatting and UART output out of the interrupt handler.',
      'Pass readings through a fixed-size queue. Define an overflow policy and count drops so they are visible during testing.',
      'Measure the sampling interval with a GPIO toggle and logic analyzer while saturating the serial output. Compare the observed jitter with the timing requirement.',
    ],
  },
  projects: [
    { title: 'Timer-Driven Data Logger', image: sensor, description: 'Sample analog input on a fixed timer and stream buffered readings over serial.', stack: ['ADC', 'Timers', 'UART'], focus: 'Explain how slow output affects buffers and sample timing.' },
    { title: 'PWM Duty Cycle Controller', image: bench, description: 'Use push buttons to adjust LED brightness and capture the output waveform.', stack: ['GPIO', 'PWM', 'Embedded C'], focus: 'Explain prescaler choice and debounce behavior.' },
    { title: 'I²C Sensor Driver', image: board, description: 'Read a sensor register and handle missing acknowledgments with bounded retries.', stack: ['I²C', 'Embedded C', 'Logic Analyzer'], focus: 'Explain how the trace distinguishes a wiring problem from an address error.' },
    { title: 'Interrupt-Driven Serial Console', image: gateway, description: 'Build a command interface with a receive buffer and input validation.', stack: ['UART', 'Interrupts', 'Ring Buffer'], focus: 'Describe how the interrupt and command parser share data.' },
    { title: 'RTOS Device Monitor', image: practice, description: 'Schedule sampling and reporting as separate tasks and measure deadline misses.', stack: ['FreeRTOS', 'Queues', 'Timing'], focus: 'Explain how task priorities affect jitter.' },
    { title: 'Watchdog Recovery Test', image: review, description: 'Simulate a stalled task and log the reset reason on reboot.', stack: ['Watchdog', 'Reset Flags', 'Fault Testing'], focus: 'Explain how you would distinguish recovery from a reset loop.' },
  ],
  questions: [
    ['What should I know before starting?', 'Basic C and familiarity with digital inputs and outputs will help. Start with board bring-up and GPIO before working through interrupts and serial buses.'],
    ['Do I need a physical board?', 'You can practice state machines and register concepts with a simulator. A development board and a logic analyzer help with measuring signals and troubleshooting peripherals.'],
    ['What does the mock interview cover?', 'You will diagnose inconsistent sensor sampling, redesign the firmware around a timer and a bounded queue, and explain how you would verify timing.'],
    ['Which project should I start with?', 'Start with the PWM Duty Cycle Controller for GPIO and timers, or use the Timer-Driven Data Logger to practice sampling and buffering.'],
    ['Does the mock interview qualify me for a certificate?', 'The mock interview is for practice. Certificate eligibility depends on the applicable course or internship requirements.'],
  ],
}
