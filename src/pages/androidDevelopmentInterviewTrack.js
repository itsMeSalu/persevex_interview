import AndroidPreview from '../components/AndroidPreview.jsx'
import assessment from '../assets/assessment.webp'
import practice from '../assets/practice.webp'
import workspace from '../assets/hiring.webp'
import collaboration from '../assets/team-debrief.webp'
import operations from '../assets/remote-practice.webp'
import review from '../assets/review.webp'

export const androidDevelopmentInterviewPath = '/interviews/android-development'

export const androidDevelopmentInterviewTrack = {
  title: 'Android Development',
  shortTitle: 'Android Development',
  program: 'android-development',
  previewLabel: 'App preview',
  Preview: AndroidPreview,
  heroDescription: 'Prepare for Android interviews by explaining how you build Kotlin screens, manage app state, and keep features working when the network drops. Practice talking through architecture, testing, and release decisions.',
  projectDescription: 'Build Android apps you can walk through in an interview, from screen behavior and persistence to networking and release readiness.',
  topics: [
    ['Kotlin', 'Lifecycle and mobile fundamentals'],
    ['App architecture', 'UI state, navigation, and local data'],
    ['Delivery', 'Networking, testing, and release'],
  ],
  overviewHeading: ['Practice building', 'reliable Android apps.'],
  overviewDescription: 'An Android interview asks what your app does while it loads, goes offline, or gets recreated. Explain where state lives, how data changes reach the screen, and how you would reproduce and test failures.',
  focusAreas: [
    ['Android and Kotlin fundamentals', 'Explain app structure, null safety, and lifecycle events.'],
    ['Layouts and navigation', 'Build responsive screens and handle loading, empty, and error states.'],
    ['App architecture and local data', 'Describe how ViewModels, repositories, and local storage work together.'],
    ['Networking and Firebase', 'Explain shared data, retries, authentication, and asynchronous work.'],
    ['Testing and publishing', 'Plan device tests, investigate performance, and prepare a release.'],
  ],
  practiceSkills: ['Kotlin', 'Android Studio', 'Material Design', 'Jetpack Navigation', 'Room', 'Retrofit', 'Coroutines', 'Firebase'],
  curriculum: [
    {
      title: 'Android and Kotlin Fundamentals',
      topics: ['Android Studio, Gradle, and emulators', 'Kotlin types, functions, and null safety', 'Project structure and the manifest', 'Activities, intents, and lifecycle', 'Investigating behavior with Logcat', 'Git for Android projects'],
      prompt: 'Explain what happens to an activity when the device rotates and what state you would preserve.',
    },
    {
      title: 'Layouts, UI Components, and Navigation',
      topics: ['Responsive layouts and ConstraintLayout', 'Material UI components', 'Lists with RecyclerView and adapters', 'Fragments and Jetpack Navigation', 'Validation and UI states', 'Implementing a screen from a design'],
      prompt: 'Sketch a settings screen that remains usable while saving and gives the user a way to recover if saving fails.',
    },
    {
      title: 'App Architecture and Local Data',
      topics: ['Organizing an app with MVVM', 'ViewModels, LiveData, and StateFlow', 'Storing records with Room and SQLite', 'Preferences with DataStore', 'Repositories and data sources', 'Offline-first behavior'],
      prompt: 'Design a notes screen that shows cached data immediately and updates when a background sync succeeds.',
    },
    {
      title: 'Networking and Firebase',
      topics: ['Calling REST APIs with Retrofit', 'Parsing JSON and handling failures', 'Asynchronous work with coroutines', 'Authentication with Firebase', 'Real-time data with Firestore', 'Loading and caching images'],
      prompt: 'A screen issues two requests in quick succession. Explain how you would cancel stale work and show the right result.',
    },
    {
      title: 'Testing, Performance, and Publishing',
      topics: ['Unit and UI testing', 'Investigating slow screens and memory use', 'Permissions and privacy', 'Signed APK and app bundle builds', 'Play Store listing and release checks'],
      prompt: 'An app feels slow on a lower-end device. Explain what you would measure and how you would verify a fix.',
    },
  ],
  demo: {
    prompts: [
      'A user adds a task while offline and restarts the app before reconnecting. How would you keep the task visible and sync it later?',
      'The server accepts the task, but the response is lost. How would you retry without creating a duplicate?',
    ],
    feedback: [
      'Save the task and its sync state locally so the UI can still render it after a restart.',
      'Use durable background work with a network constraint. Update the local record once the server confirms the change.',
      'Use a stable operation ID and make the server handle retries safely. Test reconnection, app restarts, and lost responses.',
    ],
  },
  projects: [
    { title: 'Personal Expense Tracker', image: practice, description: 'Record transactions locally and show spending summaries by category.', stack: ['Kotlin', 'Room', 'Material Design'], focus: 'Explain the local schema and how totals stay up to date.' },
    { title: 'Weather Forecast App', image: assessment, description: 'Fetch forecasts for saved locations and handle slow connections and stale data.', stack: ['Kotlin', 'Retrofit', 'Coroutines'], focus: 'Walk through loading, errors, and refresh behavior.' },
    { title: 'Task Planner App', image: workspace, description: 'Save tasks offline and schedule reminders that survive app restarts.', stack: ['Kotlin', 'Room', 'WorkManager'], focus: 'Explain persistence and your background scheduling choices.' },
    { title: 'News Reader App', image: operations, description: 'Build a paginated news feed with article views, bookmarks, and refresh.', stack: ['Kotlin', 'Retrofit', 'Jetpack Navigation'], focus: 'Explain navigation state, paging, and offline bookmarks.' },
    { title: 'Chat App Prototype', image: collaboration, description: 'Create a messaging app with sign-in, conversation lists, and real-time updates.', stack: ['Kotlin', 'Firebase Auth', 'Firestore'], focus: 'Discuss message ordering, reconnects, and notifications.' },
    { title: 'Food Delivery UI App', image: review, description: 'Build a mobile menu, cart, and checkout flow with clear feedback and navigation.', stack: ['Kotlin', 'Material Components', 'Jetpack Navigation'], focus: 'Explain cart state and how users recover from checkout errors.' },
  ],
  questions: [
    ['What should I prepare for an Android interview?', 'Review Kotlin, lifecycle, navigation, state management, networking, local storage, and testing. Practice explaining how an app behaves when connectivity changes.'],
    ['Where should I start if I’m new to Android?', 'Start with a simple Kotlin screen and one user action. Then add navigation, local persistence, and an API call so you can explain how the pieces fit together.'],
    ['How does the Android mock interview work?', 'You’ll design offline task creation, answer a follow-up about duplicate retries, and compare your reasoning with example feedback.'],
    ['Which project is a good starting point?', 'Start with the Expense Tracker to practice local data and screen state. Try the Task Planner next to explain durable background work and offline behavior.'],
    ['Does the mock interview qualify me for a certificate?', 'The mock interview is for practice. AntIntern certificate eligibility depends on the requirements of the applicable course or internship.'],
  ],
}
