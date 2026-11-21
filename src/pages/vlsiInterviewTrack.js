import VlsiPreview from '../components/VlsiPreview.jsx'
import wafer from '../assets/vlsi-preview/wafer.png'
import board from '../assets/iot-telemetry/board.webp'
import assessment from '../assets/assessment.webp'
import practice from '../assets/practice.webp'
import review from '../assets/review.webp'
import workspace from '../assets/hiring.webp'

export const vlsiInterviewPath = '/interviews/vlsi-design'

export const vlsiInterviewTrack = {
  title: 'Very Large Scale Integration (VLSI) Design',
  shortTitle: 'VLSI Design',
  program: 'vlsi-design',
  Preview: VlsiPreview,
  heroDescription: 'Prepare for chip design interviews by tracing a circuit from its RTL description to a physical layout. Practice explaining how you would verify its behavior, read timing reports, and make trade-offs across power, performance, and area.',
  projectDescription: 'Design, simulate, and synthesize small digital circuits. Practice explaining your design choices using waveforms, coverage, and timing reports.',
  topics: [
    ['RTL design', 'Digital logic and Verilog'],
    ['Verification', 'Testbenches and assertions'],
    ['Implementation', 'Synthesis and physical design'],
  ],
  overviewHeading: ['Follow a digital design', 'from RTL to layout.'],
  overviewDescription: 'Start with a specification, describe the hardware in RTL, and check its behavior in simulation. Then read the synthesized netlist and timing report to explain how your choices affect the physical design.',
  focusAreas: [
    ['Digital logic and CMOS', 'Explain how logic gates, registers, and switching activity affect a circuit.'],
    ['RTL design', 'Write synthesizable Verilog and explain how reset and clocking shape behavior.'],
    ['Functional verification', 'Use testbenches, assertions, and coverage to catch corner cases.'],
    ['Synthesis and timing', 'Read setup and hold reports and identify the paths that need attention.'],
    ['Physical design', 'Explain how placement, clock distribution, and routing affect timing and area.'],
  ],
  practiceSkills: ['CMOS Logic', 'Verilog', 'SystemVerilog', 'Testbenches', 'Assertions', 'Logic Synthesis', 'Static Timing Analysis', 'Place and Route'],
  curriculum: [
    {
      title: 'Digital Logic and CMOS Fundamentals',
      topics: ['Combinational logic', 'Flip-flops and registers', 'Finite-state machines', 'CMOS gates and switching', 'Power, performance, and area'],
      prompt: 'How do switching activity and load capacitance affect dynamic power?',
    },
    {
      title: 'RTL Design with Verilog',
      topics: ['Modules and parameters', 'Blocking and nonblocking assignments', 'Reset behavior', 'Datapaths and control', 'Ready/valid handshakes'],
      prompt: 'How would you prevent data from being dropped when a downstream block applies backpressure?',
    },
    {
      title: 'Functional Verification',
      topics: ['Self-checking testbenches', 'Reference models and scoreboards', 'Corner-case stimulus', 'SystemVerilog assertions', 'Functional coverage'],
      prompt: 'How would you verify simultaneous read and write operations on a FIFO near its full and empty boundaries?',
    },
    {
      title: 'Logic Synthesis and Static Timing',
      topics: ['RTL-to-netlist mapping', 'Clock and I/O constraints', 'Setup and hold checks', 'Reading path slack', 'Pipelining and timing trade-offs'],
      prompt: 'A path has negative setup slack after synthesis. What would you check before changing the RTL?',
    },
    {
      title: 'Physical Design and Sign-Off',
      topics: ['Floorplanning', 'Standard-cell placement', 'Clock-tree synthesis', 'Routing and parasitics', 'DRC and LVS checks'],
      prompt: 'A path passed timing before routing and fails afterward. What could have changed?',
    },
  ],
  demo: {
    prompts: [
      'A synthesized data path misses setup timing at the target clock period. How would you read the timing report and decide whether to pipeline it?',
      'If you add a pipeline stage, how would you check that valid signals and data still arrive together?',
    ],
    feedback: [
      'Check the clock constraints and identify the startpoint, endpoint, and largest contributors to delay before changing the design.',
      'Balance the stages and account for the additional latency. Update the valid or handshake logic alongside the datapath.',
      'Use a scoreboard and assertions to check ordering, backpressure, and reset behavior, then rerun synthesis and timing analysis.',
    ],
  },
  projects: [
    { title: 'Parameterized ALU', image: board, description: 'Implement arithmetic and logic operations and verify signed overflow and edge cases.', stack: ['Verilog', 'Simulation'], focus: 'Explain how operand width affects hardware cost.' },
    { title: 'Synchronous FIFO', image: practice, description: 'Design a FIFO and verify simultaneous reads and writes at capacity boundaries.', stack: ['Verilog', 'Assertions'], focus: 'Explain how full and empty flags are computed.' },
    { title: 'Pipelined Multiplier', image: wafer, description: 'Compare combinational and pipelined multiplier implementations.', stack: ['RTL', 'Synthesis', 'STA'], focus: 'Compare latency, throughput, and area.' },
    { title: 'Round-Robin Arbiter', image: workspace, description: 'Allocate a shared resource across several requesters and check fairness under contention.', stack: ['SystemVerilog', 'Testbench'], focus: 'Explain how you would test fairness after reset.' },
    { title: 'Timing Closure Exercise', image: assessment, description: 'Read a failing setup path, adjust the design, and compare timing reports.', stack: ['Yosys', 'OpenSTA'], focus: 'Identify what drives the critical path delay.' },
    { title: 'Counter Layout Walkthrough', image: review, description: 'Take a small counter from RTL through synthesis, placement, and routing.', stack: ['Verilog', 'OpenROAD'], focus: 'Explain why routed timing can differ from synthesis estimates.' },
  ],
  questions: [
    ['What should I know before starting?', 'Basic Boolean logic and familiarity with combinational and sequential circuits will help. Start with gates and registers before moving into RTL.'],
    ['Do I need an FPGA or commercial EDA tools?', 'You can practice RTL, simulation, synthesis, and timing analysis with open-source tools on your computer. An FPGA is optional for hardware testing.'],
    ['What does the mock interview cover?', 'You will investigate a setup timing failure, explain a pipelining decision, and describe how to verify the revised design.'],
    ['Which project should I start with?', 'Start with the Parameterized ALU for RTL and simulation, then try the Synchronous FIFO for control logic and corner cases.'],
    ['Does the mock interview qualify me for a certificate?', 'Certificate eligibility depends on the applicable course or internship requirements. The mock interview is for practice.'],
  ],
}
