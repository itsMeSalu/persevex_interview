import interfaceImage from '../assets/ai-preview/interface.webp'
import encoder from '../assets/ai-preview/encoder.webp'
import inference from '../assets/ai-preview/inference.webp'
import checks from '../assets/ai-preview/checks.webp'
import evaluation from '../assets/assessment.webp'
import collaboration from '../assets/team-debrief.webp'
import modeling from '../assets/remote-practice.webp'
import workspace from '../assets/hiring.webp'
import review from '../assets/review.webp'
import practice from '../assets/practice.webp'

export const artificialIntelligenceInterviewPath = '/interviews/artificial-intelligence'

export const artificialIntelligenceInterviewTrack = {
  title: 'Artificial Intelligence',
  shortTitle: 'Artificial Intelligence',
  program: 'artificial-intelligence',
  previewLabel: 'AI preview',
  preview: {
    label: 'AI inference simulation with an interface, input encoder, inference processor, and validation checks',
    startLabel: 'Run the AI pipeline',
    replayLabel: 'Replay the AI pipeline',
    clientImageHeight: 534,
    wideConnectors: true,
    images: [interfaceImage, encoder, inference, checks],
    stages: [
      'Ready to run the AI pipeline',
      'Interface sends the input for processing',
      'Encoder prepares the input for the model',
      'Inference processor sends the output for validation',
      'Validation checks finish',
      'Validated response returns through the pipeline',
      'Interface receives the response',
      'AI request completed',
    ],
  },
  heroDescription: 'Prepare for AI interviews by explaining how you frame a problem, choose a model for text or images, evaluate its answers, and deploy it responsibly.',
  projectDescription: 'Build practical AI systems and rehearse how you would explain their behavior, limitations, and safeguards in an interview.',
  topics: [
    ['Foundations', 'Problem framing and responsible AI'],
    ['Models', 'Neural networks, language, and vision'],
    ['Deployment', 'Inference, evaluation, and monitoring'],
  ],
  overviewHeading: ['Practice explaining', 'how AI systems work.'],
  overviewDescription: 'Start with the task, the data you can use, and the cost of a wrong answer. Then explain your baseline, what you would measure, and how the system should respond when it is uncertain.',
  focusAreas: [
    ['AI foundations', 'Frame an AI problem and explain where human judgment belongs.'],
    ['Machine learning fundamentals', 'Select features, compare baselines, and validate your results.'],
    ['Neural networks and deep learning', 'Explain architecture choices and when to fine-tune a pretrained model.'],
    ['Natural language processing', 'Compare text representations and evaluate language model outputs.'],
    ['AI applications and deployment', 'Serve predictions, monitor failures, and design a fallback.'],
  ],
  practiceSkills: ['Python', 'Scikit-learn', 'PyTorch', 'TensorFlow', 'Transformers', 'Computer Vision', 'Model Evaluation', 'MLOps'],
  curriculum: [
    {
      title: 'Foundations of AI',
      topics: ['How AI has evolved', 'Narrow AI and proposed broader forms of intelligence', 'Responsible AI and ethical trade-offs', 'Search and problem-solving strategies', 'Python for AI workflows', 'Linear algebra and calculus foundations'],
      prompt: 'When would you use a rules-based system instead of a model to route customer requests? Explain what would change your decision.',
    },
    {
      title: 'Machine Learning Fundamentals',
      topics: ['Learning from labeled and unlabeled data', 'Regression and classification', 'Tree-based models and random forests', 'Support vector methods', 'Building and selecting features', 'Evaluating and validating models', 'Regularization and overfitting', 'Implementing a baseline with scikit-learn'],
      prompt: 'Design a baseline for a noisy classification problem and explain how you would test it without leaking information.',
    },
    {
      title: 'Neural Networks and Deep Learning',
      topics: ['Layers and neural network structure', 'Activations and gradient-based training', 'Convolutional models for images', 'Recurrent networks and LSTMs', 'Adapting pretrained networks', 'Training with TensorFlow or PyTorch', 'GPU acceleration and model efficiency'],
      prompt: 'Explain how you would adapt an image model to a small dataset while controlling overfitting and inference latency.',
    },
    {
      title: 'Natural Language Processing',
      topics: ['Cleaning text and tokenization', 'Embeddings and language modeling', 'Categorizing text and sentiment', 'Extracting named entities', 'Transformers and BERT'],
      prompt: 'A text classifier fails on short, ambiguous messages. How would you diagnose whether the problem is the data, the labels, or the model?',
    },
    {
      title: 'AI Applications and Deployment',
      topics: ['Building computer vision workflows', 'Conversational interfaces and chatbots', 'Ranking and recommendation', 'Serving models through APIs', 'Monitoring models in production', 'Planning and reviewing AI projects'],
      prompt: 'Sketch a production AI service with output checks, model versioning, monitoring, and a fallback path.',
    },
  ],
  demo: {
    prompts: [
      'A support assistant gives confident answers when the right information is missing. How would you change the system and measure whether it improves?',
      'What should happen on low-confidence requests, and what would you monitor after launch?',
    ],
    feedback: [
      'Build an evaluation set with answerable and unanswerable questions. Measure answer correctness and whether the assistant recognizes missing evidence.',
      'Require answers to be supported by available information. Let the assistant ask for clarification, abstain, or hand the request to a person.',
      'Track unsupported answers, escalation outcomes, and response latency. Review failure examples before changing the model or rollout.',
    ],
  },
  projects: [
    { title: 'Image Recognition', image: evaluation, description: 'Fine-tune a classifier to recognize objects in images and review its mistakes under different lighting and viewpoints.', stack: ['Python', 'TensorFlow', 'OpenCV'], focus: 'Explain preprocessing, dataset coverage, and per-class metrics.' },
    { title: 'Support Chatbot', image: collaboration, description: 'Build a conversational assistant that answers common queries and escalates questions outside its supported topics.', stack: ['Python', 'Transformers', 'Flask'], focus: 'Discuss fallback behavior and how you evaluate answer quality.' },
    { title: 'Predictive Analytics', image: modeling, description: 'Forecast a demand signal from historical observations and compare the model against a simple baseline.', stack: ['Python', 'Pandas', 'Scikit-learn'], focus: 'Explain time-based evaluation and how you avoid leakage.' },
    { title: 'Recommendation System', image: workspace, description: 'Rank relevant items from user interactions and compare collaborative and content-based approaches.', stack: ['Python', 'NumPy', 'TensorFlow'], focus: 'Discuss ranking metrics and recommendations for new users.' },
    { title: 'Sentiment Analysis', image: review, description: 'Categorize the sentiment of customer feedback and review ambiguous examples with inconsistent labels.', stack: ['Python', 'NLTK', 'PyTorch'], focus: 'Explain annotation quality and performance by class.' },
    { title: 'Real-Time Face Detection', image: practice, description: 'Detect face locations in consented test footage and measure behavior across lighting and camera angles.', stack: ['Python', 'OpenCV'], focus: 'Explain privacy boundaries, false positives, and latency.' },
  ],
  questions: [
    ['What should I prepare for an AI interview?', 'Practice framing problems, comparing models, evaluating results, and explaining what happens when a model fails. Review the curriculum for AI foundations, neural networks, language, and deployment.'],
    ['How much Python and math do I need?', 'Start with basic Python, vectors, matrices, and probability. Practice explaining how these ideas show up in features, gradients, and evaluation.'],
    ['How does the AI mock interview work?', 'You’ll diagnose a support assistant that answers without enough evidence, then explain fallback and monitoring choices before reviewing example feedback.'],
    ['Which project should I start with?', 'Sentiment analysis is a manageable first project for practicing labels, baselines, and metrics. Move on to a chatbot or vision task when you are comfortable evaluating errors.'],
    ['Does the mock interview qualify me for a certificate?', 'The demo is for interview practice. AntIntern certificate eligibility depends on the requirements of the applicable course or internship.'],
  ],
}
