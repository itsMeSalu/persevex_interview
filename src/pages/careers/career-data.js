export const careerRoles = [
  {
    id: "fe-dev",
    title: "Frontend Developer",
    department: "Engineering",
    type: "Full-time",
    location: "Remote (India)",
    description:
      "Build learner-facing interview preparation experiences with React, Tailwind CSS, and animation.",
    requirements: [
      "2+ years with React / Next.js",
      "Strong TypeScript fundamentals",
      "Experience with Tailwind CSS",
      "Eye for detail and animation",
    ],
  },
  {
    id: "content-lead",
    title: "Curriculum Content Lead",
    department: "Education",
    type: "Full-time",
    location: "Remote (India)",
    description:
      "Create clear interview questions, project walkthroughs, and practical preparation resources.",
    requirements: [
      "3+ years in EdTech or curriculum design",
      "Experience with technical subjects (CS, AI, or Engineering)",
      "Strong writing and structuring skills",
      "Passion for education",
    ],
  },
  {
    id: "placement-exec",
    title: "Placement Executive",
    department: "Careers",
    type: "Full-time",
    location: "Hybrid (Pune / Remote)",
    description:
      "Build and manage relationships with hiring partners. Facilitate mock interviews, resume reviews, and direct referrals for our student community.",
    requirements: [
      "1+ years in placement / talent acquisition",
      "Strong network in IT / business domains",
      "Excellent communication skills",
      "Comfort with targets",
    ],
  },
  {
    id: "social-intern",
    title: "Social Media & Marketing Intern",
    department: "Marketing",
    type: "Internship",
    location: "Remote",
    description:
      "Run AntIntern's LinkedIn, Instagram, and YouTube presence. Create student success stories, reels, and campus outreach campaigns.",
    requirements: [
      "Active understanding of LinkedIn and Instagram growth",
      "Basic video editing skills",
      "Excellent written English",
      "Currently enrolled or recently graduated",
    ],
  },
  {
    id: "hr-exec",
    title: "Human Resource Executive",
    department: "Human Resources",
    type: "Full-time",
    location: "Hybrid (Bangalore / Remote)",
    description:
      "Build and manage our hiring pipeline, onboarding processes, and employee experience. Help candidates understand the application process.",
    requirements: [
      "2+ years in recruitment or HR operations",
      "Experience with end-to-end hiring cycles",
      "Strong communication and organizational skills",
      "Passion for building team culture",
    ],
  },
  {
    id: "bd-exec",
    title: "Business Development Executive",
    department: "Business Development",
    type: "Full-time",
    location: "Hybrid (Bangalore / India)",
    description:
      "Drive student acquisition and institutional partnerships. Manage outreach campaigns, convert prospects, and be the face of AntIntern growth across colleges.",
    requirements: [
      "1+ years in sales or business development",
      "Strong communication and persuasion skills",
      "Ability to work with targets and track metrics",
      "Understanding of EdTech landscape",
    ],
  },
];
export function filterCareerRoles(roles, {query='',department='',type='',location='',remoteOnly=false}) {
  const search=query.toLowerCase();
  return roles.filter(role => (role.title.toLowerCase().includes(search) || role.description.toLowerCase().includes(search) || role.department.toLowerCase().includes(search))
    && (!department || role.department===department) && (!type || role.type===type) && (!location || role.location===location)
    && (!remoteOnly || role.location.toLowerCase().includes('remote')));
}
