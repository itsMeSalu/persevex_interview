const topics = ['Full Stack', 'Data Analytics', 'Interview Readiness', 'Project Discussion', 'Cloud Computing', 'Resume Preparation', 'Coding Practice', 'Mock Interview', 'Career Preparation']
const categories = ['Course', 'Mentorship', 'Placement']
const prompts = ['Practice explaining your approach and the assumptions behind it.', 'Review a project decision and consider how to explain the trade-offs.', 'Use feedback to choose one skill to revisit in your next session.']
export const students = topics.map((course, index) => ({
 id: index + 1, name: 'Sample learner ' + (index + 1), role: 'Illustrative preparation scenario',
 company: 'Sample content', course, rating: 0, review: prompts[index % 3],
 categories: [categories[index % 3]], category: categories[index % 3],
 initials: 'SL', colorClass: 'bg-orange-600', logoSrc: '', time: 'Sample',
 hashtag: '#InterviewPreparation', reactions: 0, comments: 0, color: '#fff0df', ink: '#fa7405',
}))
export const testimonials = students
