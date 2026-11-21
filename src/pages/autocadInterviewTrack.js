import AutoCadPreview from '../components/AutoCadPreview.jsx'
import assessment from '../assets/assessment.webp'
import practice from '../assets/practice.webp'
import workspace from '../assets/hiring.webp'
import collaboration from '../assets/team-debrief.webp'
import operations from '../assets/remote-practice.webp'
import review from '../assets/review.webp'

export const autocadInterviewPath = '/interviews/autocad'

export const autocadInterviewTrack = {
  title: 'AutoCAD: 2D & 3D Design',
  shortTitle: 'AutoCAD',
  program: 'autocad',
  previewLabel: 'Drafting preview',
  Preview: AutoCadPreview,
  heroDescription: 'Start with accurate 2D drawings in AutoCAD, then turn closed profiles into 3D solids. Learn to organize layers, annotate dimensions, edit parts, and deliver scaled PDFs and rendered views you can explain in a CAD interview.',
  projectDescription: 'Build drawing and modeling examples you can walk through in an interview, from setup and precision checks to plotted sheets and visual reviews.',
  topics: [
    ['2D Drafting', 'Precise geometry, layers, and annotation'],
    ['3D Modeling', 'Extrusions, solid edits, and clearances'],
    ['Drawing Handoff', 'Scaled layouts, PDFs, and rendered views'],
  ],
  overviewHeading: ['Practice moving', 'from drawing to model.'],
  overviewDescription: 'Work from a sketch to a dimensioned drawing, build or revise a solid, and prepare the views a reviewer or fabricator needs. Projects span floor plans, mechanical parts, assemblies, and site layouts. For each, practice explaining how you checked units, scale, and critical dimensions before handoff.',
  focusAreas: [
    ['2D drafting', 'Set up units, draw accurate geometry, and organize layers.'],
    ['Annotation and plotting', 'Build legible sheets with consistent scales and lineweights.'],
    ['3D modeling', 'Use coordinate systems and make solids from closed profiles.'],
    ['Solid editing', 'Modify geometry and verify the result after a revision.'],
    ['Rendering and handoff', 'Choose views, materials, and outputs appropriate for the audience.'],
  ],
  practiceSkills: ['AutoCAD', 'Object Snaps', '2D Drafting', 'Layers & Blocks', 'Dimensioning', 'Layouts & Plotting', '3D Solids', 'Rendering'],
  curriculum: [
    {
      title: 'AutoCAD Fundamentals & 2D Drafting',
      topics: ['Drawing setup and units', 'Coordinate entry and precision tools', 'Basic shapes and polylines', 'Object snaps and tracking', 'Editing geometry and organizing layers'],
      prompt: 'Explain how you would draw a bracket profile from a dimensioned sketch and verify hole positions.',
    },
    {
      title: 'Advanced 2D Techniques & Plotting',
      topics: ['Reusable blocks and attributes', 'Dimensions and annotation styles', 'External references and drawing organization', 'Paper space and viewport scale', 'Plot styles and PDF export'],
      prompt: 'A drawing looks correct on screen but the PDF prints at the wrong scale. What would you check?',
    },
    {
      title: 'Introduction to 3D Modeling',
      topics: ['Navigating 3D views', 'User coordinate systems', 'Preparing a closed profile', 'Extruding and revolving solids', 'Verifying geometry in multiple views'],
      prompt: 'Walk through turning a 2D profile into a solid while preserving the important dimensions.',
    },
    {
      title: 'Advanced 3D Modeling & Editing',
      topics: ['Combining and subtracting solids', 'Editing faces and edges', 'Fillets and chamfers', 'Aligning parts in an assembly', 'Checking clearances and revisions'],
      prompt: 'Two assembled parts interfere after a revision. Describe how you would locate the conflict and check the correction.',
    },
    {
      title: 'Rendering and Visualization',
      topics: ['Choosing materials and finishes', 'Setting lighting and camera views', 'Rendering for a design review', 'Preparing exploded and sectional views', 'Exporting drawings and models for handoff'],
      prompt: 'How would you present one model differently for a design review and a fabrication handoff?',
    },
  ],
  demo: {
    prompts: [
      'A drawing has the right dimensions in model space, but the exported PDF prints at the wrong scale. How would you diagnose it?',
      'Once the scale is fixed, what checks would you perform before sending the drawing to someone who will build from it?',
    ],
    feedback: [
      'Check drawing units, viewport scale, page setup, and the print setting. Avoid applying fit-to-page scaling to a drawing that must print at a fixed scale.',
      'Verify one known dimension in the output and make sure annotation remains readable at the intended sheet size.',
      'Confirm the revision, views, layers, and any critical dimensions or tolerances before handing off the file.',
    ],
  },
  projects: [
    { title: 'Architectural Floor Plan', image: practice, description: 'Draft a floor plan with walls, doors, windows, and a dimensioned sheet layout.', stack: ['AutoCAD', 'Layers', 'DWG'], focus: 'Explain how you checked dimensions, scale, and lineweights.' },
    { title: 'Mechanical Part Modeling', image: assessment, description: 'Build a 3D bracket from a 2D profile and prepare orthographic views for review.', stack: ['AutoCAD', 'Solid Modeling', 'Dimensioning'], focus: 'Explain how you verified hole positions and critical dimensions.' },
    { title: '3D Interior Scene', image: workspace, description: 'Model an interior and prepare a rendered view with appropriate lighting and finishes.', stack: ['AutoCAD', 'Materials', 'Rendering'], focus: 'Describe how your views communicate the design.' },
    { title: 'Assembly Drawing and Parts List', image: operations, description: 'Arrange a multi-part model and create an exploded view with a bill of materials.', stack: ['AutoCAD', 'Assemblies', 'BOM'], focus: 'Discuss how you keep the parts list aligned with revisions.' },
    { title: 'Site Plan Layout', image: collaboration, description: 'Draft property lines, building footprints, and circulation on a scaled site sheet.', stack: ['AutoCAD', 'Coordinate Geometry', 'Layouts'], focus: 'Explain how you confirmed alignment and drawing scale.' },
    { title: 'Process Piping Diagram', image: review, description: 'Draft a process schematic using consistent equipment, piping, and instrument symbols.', stack: ['AutoCAD', 'Blocks', 'P&ID'], focus: 'Explain how someone can trace the flow and identify components.' },
  ],
  questions: [
    ['What should I prepare for an AutoCAD interview?', 'Practice accurate 2D drafting, layers, blocks, annotation, plotting, and basic solid modeling. Be ready to show both the drawing and your checks.'],
    ['Should I learn 2D drafting before 3D modeling?', 'Start with units, coordinates, and closed 2D profiles. Those skills make it easier to create and verify 3D geometry.'],
    ['How does the AutoCAD mock interview work?', 'You’ll troubleshoot a plotted drawing with the wrong scale, then explain which checks matter before handoff.'],
    ['Which project is a good starting point?', 'Try a floor plan to practice layers and plotting, or a simple bracket to connect 2D drafting with 3D modeling.'],
    ['Does the mock interview qualify me for a certificate?', 'The mock interview is for practice. Persevex certificate eligibility depends on the applicable course or internship requirements.'],
  ],
}
