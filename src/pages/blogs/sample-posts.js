import practice from '../../assets/practice.webp'
import assessment from '../../assets/assessment.webp'
import review from '../../assets/review.webp'
import collaboration from '../../assets/team-debrief.webp'

const guides = [
  ['technical-interview-preparation', 'How to structure your technical interview preparation', 'Turn a role description into a practical study plan.', practice, [
    ['Start with the role', 'Read the responsibilities and identify the skills the role actually uses. Group them into fundamentals, tools, and project discussions. Choose a small set of topics for each practice session.'],
    ['Practice explaining decisions', 'Work through a question aloud. State your assumptions, describe your approach, and explain how you would check the result. A correct answer is easier to assess when your reasoning is clear.'],
    ['Review your gaps', 'After practice, write down where you hesitated. Revisit one concept and try a related question. Use your interview feedback to make the next session more focused.'],
  ]],
  ['coding-interview-checklist', 'A practical checklist for coding interviews', 'Build a repeatable approach to understanding, solving, and checking coding problems.', assessment, [
    ['Clarify the problem', 'Restate the inputs and expected output. Ask about constraints and work through a small example before writing code. Include an empty input or boundary case when it is relevant.'],
    ['Build a clear solution', 'Begin with an approach you can explain. Identify its time and space requirements, then consider whether the constraints call for a different data structure or algorithm.'],
    ['Check the behavior', 'Trace the code with examples and inspect edge cases. Explain any assumptions and how the implementation responds to invalid inputs when the problem requires handling them.'],
  ]],
  ['resume-project-stories', 'Make your resume projects easier to discuss', 'Connect your project descriptions to the decisions you can explain in an interview.', review, [
    ['Describe your contribution', 'Write what you built and what you personally owned. Name the tools only when they help explain the work. Avoid claims you cannot support with an example.'],
    ['Show the reasoning', 'Prepare to discuss one trade-off, one bug, and one improvement. Explain what you considered and why you chose your approach.'],
    ['Keep the evidence ready', 'Check that repository and portfolio links work. Include setup instructions in your project and be ready to demonstrate its normal workflow.'],
  ]],
  ['portfolio-walkthrough', 'Prepare a clear portfolio walkthrough', 'Use a project to demonstrate practical skills and technical judgment.', practice, [
    ['Set the context', 'Explain who the project serves and the task it helps them complete. Show the main workflow before discussing implementation details.'],
    ['Choose useful details', 'Describe the architecture, data flow, and one difficult decision. Explain how you validated the behavior and what you would improve next.'],
    ['Invite questions', 'Leave room for the interviewer to explore your work. Answer from your actual experience and identify any areas you would need to investigate.'],
  ]],
  ['placement-preparation-routine', 'Build a sustainable placement preparation routine', 'Balance role research, practice, and reflection without losing focus.', collaboration, [
    ['Plan a manageable week', 'Choose a target role and set aside time for fundamentals, coding or domain questions, and project discussions. Keep the schedule realistic enough to repeat.'],
    ['Practice with a partner', 'Take turns asking questions and explaining answers. Give feedback about clarity, assumptions, and examples. Keep observations specific.'],
    ['Track the next step', 'Record what you learned and what still needs work. Review that list before your next session and choose one priority.'],
  ]],
]
export const samplePosts = guides.map(([slug, title, description, thumbnailUrl, sections]) => ({
  slug, title, description, thumbnailUrl, author: 'Sample preparation guide',
  content: sections.map(([heading, body]) => heading + '\n\n' + body).join('\n\n'),
  sections,
}))
