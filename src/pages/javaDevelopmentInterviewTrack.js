import ide from '../assets/java-preview/workspace.webp'
import compiler from '../assets/java-preview/compiler.webp'
import runtime from '../assets/java-preview/runtime.webp'
import storage from '../assets/java-preview/storage.webp'
import assessment from '../assets/assessment.webp'
import practice from '../assets/practice.webp'
import workspace from '../assets/hiring.webp'
import collaboration from '../assets/team-debrief.webp'
import operations from '../assets/remote-practice.webp'
import review from '../assets/review.webp'

export const javaDevelopmentInterviewPath = '/interviews/java-development'

export const javaDevelopmentInterviewTrack = {
  title: 'Java Development',
  shortTitle: 'Java Development',
  program: 'java-development',
  previewLabel: 'Java preview',
  preview: {
    label: 'Java application workflow with an editor, compiler, runtime, and database',
    startLabel: 'Run the Java application preview',
    replayLabel: 'Replay the Java application preview',
    clientImageHeight: 550,
    wideConnectors: true,
    images: [ide, compiler, runtime, storage],
    stages: [
      'Ready to run the Java application',
      'Editor sends source code to the compiler',
      'Compiled Java code starts in the runtime',
      'Application requests records from the database',
      'Database returns the result',
      'Java service processes the records',
      'Result returns to the development workspace',
      'Java application run completed',
    ],
  },
  heroDescription: 'Prepare for Java interviews by explaining how you model a problem, choose collections, handle failures, and build a Spring Boot service backed by a relational database.',
  projectDescription: 'Practice Java projects you can discuss from class design and validation through API behavior, database access, and testing.',
  topics: [
    ['Core Java', 'Syntax, objects, and collections'],
    ['Backend', 'Spring Boot, REST, and SQL'],
    ['Delivery', 'Testing, security, and deployment'],
  ],
  overviewHeading: ['Practice building', 'reliable Java services.'],
  overviewDescription: 'Java interviews ask you to move from a small problem to maintainable code. Explain your class boundaries, data structures, and error handling, then show how you would test your choices.',
  focusAreas: [
    ['Core Java fundamentals', 'Explain types, control flow, methods, and runtime behavior.'],
    ['Object-oriented programming', 'Model a domain with clear responsibilities and interfaces.'],
    ['Collections and persistence', 'Choose collections, handle errors, and persist data with SQL and JDBC.'],
    ['Spring Boot and REST APIs', 'Separate HTTP requests, business rules, and database access.'],
    ['Testing, security, and deployment', 'Explain how you verify, secure, and release a backend service.'],
  ],
  practiceSkills: ['Java', 'OOP', 'Collections', 'SQL & JDBC', 'Spring Boot', 'REST APIs', 'JUnit', 'Maven'],
  curriculum: [
    {
      title: 'Core Java Fundamentals',
      topics: ['Java toolchain and the JVM', 'Variables and primitive types', 'Operators and expressions', 'Conditions and loops', 'Methods and parameters', 'Arrays and strings'],
      prompt: 'Design a Java method to summarize scores. Explain how you handle empty input and invalid values.',
    },
    {
      title: 'Object-Oriented Programming in Java',
      topics: ['Classes and objects', 'Constructors and initialization', 'Encapsulation and access modifiers', 'Inheritance and polymorphism', 'Interfaces and abstract classes', 'Composition and class responsibilities'],
      prompt: 'Model a library checkout workflow. What belongs in a book, a loan, and a service class?',
    },
    {
      title: 'Collections, Files, and Database Connectivity',
      topics: ['Lists, sets, and maps', 'Generics and type safety', 'Exceptions and resource management', 'Reading and writing files', 'SQL and relational modeling', 'JDBC and prepared statements', 'Transactions and database errors'],
      prompt: 'When would you use a map instead of a list for a lookup, and when would you move it to the database?',
    },
    {
      title: 'Spring Boot and REST APIs',
      topics: ['Spring Boot and dependency injection', 'Controllers, services, and repositories', 'REST methods and status codes', 'DTOs and request validation', 'Persistence with Spring Data JPA', 'Consistent API error responses'],
      prompt: 'Design an endpoint that creates a task. Explain what each layer does and how invalid input is returned.',
    },
    {
      title: 'Testing, Security, and Deployment',
      topics: ['Unit testing with JUnit', 'Integration tests and test isolation', 'Authentication and authorization', 'Logging and debugging', 'Maven builds and Git workflows', 'Configuration and deployment'],
      prompt: 'A release breaks a database-backed endpoint. Explain how you would diagnose the regression and verify the fix.',
    },
  ],
  demo: {
    prompts: [
      'A Spring Boot endpoint sometimes creates duplicate orders when a client retries. How would you design the service so the retry is safe?',
      'What would you test when two identical requests arrive at the same time, and what should the client receive?',
    ],
    feedback: [
      'Give each logical order request an idempotency key and return the existing outcome when the same request is retried.',
      'Use a database uniqueness constraint and a transaction so concurrent requests cannot both create an order.',
      'Test concurrent submissions, a retry after a successful response is lost, and reuse of the same key with different request data.',
    ],
  },
  projects: [
    { title: 'Student Management System', image: practice, description: 'Track students, courses, and results with Java classes and collections.', stack: ['Java', 'Collections', 'JUnit'], focus: 'Explain class responsibilities and your choice of collection.' },
    { title: 'Banking Console Application', image: assessment, description: 'Model accounts and transactions with input validation and file persistence in a practice app.', stack: ['Java', 'File I/O', 'JUnit'], focus: 'Discuss error handling and tests for balance updates.' },
    { title: 'Employee Payroll System', image: workspace, description: 'Store employee records in a relational database and generate payroll summaries.', stack: ['Java', 'JDBC', 'MySQL'], focus: 'Explain the schema and calculation tests.' },
    { title: 'Task Manager REST API', image: operations, description: 'Build an API for projects and tasks with filtering and validation.', stack: ['Spring Boot', 'Spring Data JPA', 'PostgreSQL'], focus: 'Walk through the API contract and error responses.' },
    { title: 'E-commerce Backend Service', image: collaboration, description: 'Model products, carts, and orders in a Spring Boot backend.', stack: ['Java', 'Spring Boot', 'MySQL'], focus: 'Explain order retries and inventory consistency.' },
    { title: 'Library Management API', image: review, description: 'Create endpoints for catalog search, borrowing, and returns.', stack: ['Spring Boot', 'JPA', 'JUnit'], focus: 'Explain lending rules and integration tests.' },
  ],
  questions: [
    ['What should I prepare for a Java interview?', 'Review Java syntax, object-oriented design, collections, exceptions, SQL, and Spring Boot. Be ready to explain your class and data structure choices.'],
    ['Do I need Spring Boot experience to start?', 'Start with Java classes, methods, and collections. Once you can build and test a console application, use Spring Boot to expose the same business logic through an API.'],
    ['How does the Java mock interview work?', 'You’ll reason through duplicate orders in a Spring Boot service, answer a question about concurrent retries, and compare your solution with example feedback.'],
    ['Which project is a good starting point?', 'Start with Student Management to practice class design and collections. Move to the Task Manager REST API when you are ready to add persistence and HTTP behavior.'],
    ['Does the mock interview qualify me for a certificate?', 'The mock interview is for practice. AntIntern certificate eligibility depends on the applicable course or internship requirements.'],
  ],
}
