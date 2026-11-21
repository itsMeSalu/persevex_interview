import dashboard from '../assets/ml-preview/dashboard.webp'
import features from '../assets/ml-preview/features.webp'
import model from '../assets/ml-preview/model.webp'
import registry from '../assets/ml-preview/registry.webp'
import planning from '../assets/practice.webp'
import evaluation from '../assets/assessment.webp'
import review from '../assets/review.webp'
import workspace from '../assets/hiring.webp'
import modeling from '../assets/remote-practice.webp'
import collaboration from '../assets/team-debrief.webp'

export const machineLearningInterviewPath = '/interviews/machine-learning'

export const machineLearningInterviewTrack = {
  title: 'Machine Learning',
  shortTitle: 'Machine Learning',
  program: 'machine-learning',
  previewLabel: 'Model preview',
  preview: {
    label: 'Machine learning pipeline simulation with a dashboard, feature preparation, model training, and a model registry',
    startLabel: 'Run the machine learning pipeline',
    replayLabel: 'Replay the machine learning pipeline',
    clientImageHeight: 475,
    images: [dashboard, features, model, registry],
    stages: [
      'Ready to run the pipeline',
      'Dashboard submits data for preparation',
      'Feature processor sends transformed data to the training node',
      'Training node evaluates the model and saves it to the registry',
      'Registry confirms the new model version',
      'Evaluation results return through the pipeline',
      'Dashboard receives the metrics',
      'Machine learning run completed',
    ],
  },
  heroDescription: 'Prepare for machine learning interviews by explaining how you clean data, choose a model, evaluate results, and keep predictions reliable in production.',
  projectDescription: 'Build models you can discuss in an interview, from your first baseline to deployment and monitoring.',
  topics: [
    ['Data', 'Preparation and validation'],
    ['Modeling', 'Algorithms and evaluation'],
    ['MLOps', 'Deployment and monitoring'],
  ],
  overviewHeading: ['Practice explaining', 'how models learn.'],
  overviewDescription: 'An ML interview often starts with an ambiguous problem. Define what success means, choose a baseline, set up a sound evaluation, and explain how you would detect a model failing in production.',
  focusAreas: [
    ['Machine learning foundations', 'Frame the problem and prepare data without leaking information.'],
    ['Supervised models', 'Choose a baseline and defend your validation metric.'],
    ['Unsupervised methods', 'Find structure in unlabeled data and check that it is useful.'],
    ['Deep learning', 'Explain architecture choices, training, and transfer learning.'],
    ['Production machine learning', 'Plan deployment, monitoring, and retraining.'],
  ],
  practiceSkills: ['Python', 'Pandas', 'Scikit-learn', 'Model evaluation', 'TensorFlow & Keras', 'NLP', 'Forecasting', 'MLOps'],
  curriculum: [
    {
      title: 'Introduction to Machine Learning',
      topics: ['Core ML vocabulary', 'Supervised, unsupervised, and reinforcement learning', 'Stages of an ML workflow', 'The Python ML ecosystem', 'Preparing and transforming data'],
      prompt: 'Frame a prediction problem and explain how you would prepare the data before choosing a model.',
    },
    {
      title: 'Supervised Learning Algorithms',
      topics: ['Linear and logistic regression', 'Trees and random forests', 'Support vector machines', 'Nearest-neighbor methods', 'Naive Bayes', 'Bagging and boosting', 'Validation and model selection'],
      prompt: 'Choose a baseline and evaluation metric for an imbalanced classification task. How would you compare models fairly?',
    },
    {
      title: 'Unsupervised Learning',
      topics: ['K-means, DBSCAN, and hierarchical clustering', 'PCA and t-SNE for dimensionality reduction', 'Discovering association rules', 'Finding anomalous observations', 'Checking the quality of unsupervised results'],
      prompt: 'How would you test whether customer clusters are useful when there are no labels?',
    },
    {
      title: 'Deep Learning Fundamentals',
      topics: ['Neural network structure and training', 'TensorFlow and Keras workflows', 'Convolutional models for images', 'Recurrent models for sequences', 'Adversarial networks for generation', 'Transfer learning and fine-tuning'],
      prompt: 'You have a small labeled image dataset. Explain how you would adapt a pretrained model and check for overfitting.',
    },
    {
      title: 'Advanced Machine Learning Topics',
      topics: ['Reinforcement learning basics', 'Text and language applications', 'Computer vision tasks', 'Forecasting over time', 'Deploying and operating models', 'Responsible model development'],
      prompt: 'A model performs well offline but degrades after deployment. Explain what you would monitor and how you would investigate.',
    },
  ],
  demo: {
    prompts: [
      'A churn model has 96% accuracy, but it misses most customers who cancel. How would you evaluate it and decide whether it is useful?',
      'How would you prevent data leakage and check that model performance stays stable after deployment?',
    ],
    feedback: [
      'Compare against a simple baseline and report precision and recall for the churn class. Choose a decision threshold based on the cost of missed churn and unnecessary outreach.',
      'Split by time when predicting future churn, and exclude signals that only become available after cancellation.',
      'Monitor input drift and performance once outcome labels arrive. Keep a versioned model and a rollback plan.',
    ],
  },
  projects: [
    { title: 'Product Recommendations', image: workspace, description: 'Rank products using customer interaction data and compare your results with a popularity baseline.', stack: ['Python', 'Pandas', 'Scikit-learn'], focus: 'Explain cold starts and how you measure ranking quality.' },
    { title: 'Image Classification', image: evaluation, description: 'Fine-tune an image classifier and inspect where it makes mistakes.', stack: ['Python', 'TensorFlow', 'Keras'], focus: 'Discuss augmentation, class imbalance, and train-test separation.' },
    { title: 'Sentiment Analysis', image: review, description: 'Classify sentiment in customer feedback and compare a simple text baseline with a stronger model.', stack: ['Python', 'NLTK', 'Scikit-learn'], focus: 'Explain how you handle sarcasm and ambiguous labels.' },
    { title: 'Customer Churn Prediction', image: planning, description: 'Predict which customers are likely to cancel using features available at decision time.', stack: ['Python', 'XGBoost', 'Pandas'], focus: 'Defend your threshold, metric, and plan for leakage checks.' },
    { title: 'Stock Price Forecasting Exercise', image: modeling, description: 'Use historical data to compare a time-series model with a naive forecast.', stack: ['Python', 'NumPy', 'TensorFlow'], focus: 'Explain chronological validation and why beating a baseline matters.' },
    { title: 'Intent-Based Chatbot', image: collaboration, description: 'Classify common support requests and route low-confidence messages to a fallback.', stack: ['Python', 'Rasa', 'spaCy'], focus: 'Explain how you measure intent quality and handle unfamiliar requests.' },
  ],
  questions: [
    ['What should I prepare for a machine learning interview?', 'Practice problem framing, data preparation, model selection, validation, and deployment. Be ready to explain your assumptions and how you would measure success.'],
    ['How much Python and math should I know?', 'Start with Python data manipulation, probability, and basic statistics. Use the curriculum to connect those fundamentals to model behavior and evaluation.'],
    ['How does the mock interview work?', 'You’ll diagnose a churn model that misses most cancellations, answer a follow-up about leakage and monitoring, and compare your reasoning with example feedback.'],
    ['Which project should I start with?', 'Start with sentiment analysis or churn prediction to practice a clear baseline and evaluation plan. Move on to recommendations, vision, forecasting, or the chatbot once you can explain your approach.'],
    ['Does the mock interview qualify me for a certificate?', 'The mock interview is a practice exercise. Persevex certificate eligibility depends on the applicable course or internship requirements.'],
  ],
}
