import cloudClient from '../assets/cloud-preview/client.webp'
import cloudBalancer from '../assets/cloud-preview/balancer.webp'
import cloudCompute from '../assets/cloud-preview/compute.webp'
import cloudStorage from '../assets/cloud-preview/storage.webp'
import planning from '../assets/practice.webp'
import monitoring from '../assets/assessment.webp'
import review from '../assets/review.webp'
import architecture from '../assets/hiring.webp'
import deployment from '../assets/remote-practice.webp'
import operations from '../assets/team-debrief.webp'

export const cloudInterviewPath = '/interviews/cloud-computing'

export const cloudInterviewTrack = {
  title: 'Cloud Computing',
  shortTitle: 'Cloud Computing',
  program: 'cloud-computing',
  previewLabel: 'Cloud preview',
  projectDescription: 'Build, deploy, and operate cloud workloads you can discuss in an interview.',
  preview: {
    label: 'Cloud request simulation with a client dashboard, load balancer, compute cluster, and storage',
    startLabel: 'Send a cloud request',
    replayLabel: 'Replay cloud request',
    clientImageHeight: 490,
    images: [cloudClient, cloudBalancer, cloudCompute, cloudStorage],
    stages: [
      'Ready to send a cloud request',
      'Client sends traffic to the load balancer',
      'Load balancer routes traffic to a healthy compute instance',
      'Compute instance requests data from cloud storage',
      'Cloud storage returns the data',
      'Compute instance returns the result through the load balancer',
      'Client receives the response',
      'Cloud request completed',
    ],
  },
  heroDescription: 'Prepare for cloud engineering interviews by designing reliable workloads, securing access, and explaining how you would deploy, monitor, and recover a production system.',
  topics: [
    ['Architecture', 'Compute, storage, and networking'],
    ['Security', 'Identity and least privilege'],
    ['Operations', 'Deployment and reliability'],
  ],
  overviewHeading: ['Practice designing', 'for the cloud.'],
  overviewDescription: 'A cloud interview asks you to explain why a design fits the workload. Clarify traffic, security, and recovery needs first. Then compare service choices and explain how you would test, monitor, and operate the system.',
  focusAreas: [
    ['Cloud fundamentals', 'Compare deployment models and explain who secures each layer.'],
    ['Core cloud services', 'Choose compute, storage, and network services for a workload.'],
    ['Identity and security', 'Explain least privilege, encryption, and network boundaries.'],
    ['Deployment and automation', 'Plan repeatable releases, health checks, and rollbacks.'],
    ['Resilience and cost', 'Explain recovery objectives, scaling decisions, and cost trade-offs.'],
  ],
  practiceSkills: ['AWS', 'Azure & Google Cloud', 'VPC Networking', 'IAM', 'Terraform', 'CI/CD', 'Observability', 'Disaster Recovery'],
  curriculum: [
    {
      title: 'Introduction to Cloud Computing',
      topics: ['What cloud computing provides', 'Public, private, and hybrid deployments', 'Comparing IaaS, PaaS, and SaaS', 'The shared responsibility model'],
      prompt: 'Choose a deployment and service model for a small team launching a customer portal. Explain what the team still owns.',
    },
    {
      title: 'Core Cloud Services',
      topics: ['Virtual machines and managed compute', 'Object and blob storage', 'Virtual networks, subnets, and routing', 'Managed cloud databases', 'Metrics and centralized logs'],
      prompt: 'Design a web application with public traffic and a private database. Explain how the network and storage fit together.',
    },
    {
      title: 'Cloud Security & Identity',
      topics: ['IAM roles and access policies', 'Encryption and key management', 'Security groups and firewalls', 'Governance and compliance controls', 'Cloud security review and least privilege'],
      prompt: 'Explain how a background service can access one storage bucket while keeping credentials out of its configuration.',
    },
    {
      title: 'Cloud Deployment & Automation',
      topics: ['Infrastructure as code with Terraform and CloudFormation', 'Cloud CI/CD workflows', 'Event-driven functions such as Lambda', 'Containers and Kubernetes', 'Load balancing and automatic scaling', 'Deploying a web application'],
      prompt: 'Describe a deployment pipeline that detects a failed release and restores the last healthy version.',
    },
    {
      title: 'Advanced Cloud Concepts',
      topics: ['Hybrid and multi-cloud trade-offs', 'Availability and disaster recovery', 'Cloud data and machine learning workloads', 'Cost controls and rightsizing', 'End-to-end cloud application capstone'],
      prompt: 'Plan for a regional outage. State your recovery time and recovery point objectives before choosing a design.',
    },
  ],
  demo: {
    prompts: [
      'Your application runs behind a load balancer across two availability zones. One zone stops responding during peak traffic. How should the system behave?',
      'What would you monitor, and how would you test that failover works before a real incident?',
    ],
    feedback: [
      'Describe how health checks remove unhealthy instances and how the remaining zone handles the extra load.',
      'Check that dependencies can tolerate the same failure, especially your database, queues, and session storage.',
      'Track error rate, latency, healthy targets, and capacity. Test with a controlled zone failure and define recovery criteria.',
    ],
  },
  projects: [
    { title: 'Three-tier cloud application', image: architecture, description: 'Deploy a web tier, application tier, and managed database behind a load balancer.', stack: ['AWS', 'EC2', 'RDS'], focus: 'Explain network boundaries and what happens if a zone fails.' },
    { title: 'Serverless event API', image: planning, description: 'Create an API that runs functions on demand and stores the results in a managed database.', stack: ['Lambda', 'API Gateway', 'DynamoDB'], focus: 'Discuss retries, duplicate events, and consistent writes.' },
    { title: 'Infrastructure with Terraform', image: review, description: 'Define a network and its services as reusable infrastructure code.', stack: ['Terraform', 'AWS', 'Git'], focus: 'Explain how you manage state, review changes, and detect drift.' },
    { title: 'Container deployment pipeline', image: deployment, description: 'Test, build, and deploy a container through an automated release workflow.', stack: ['GitHub Actions', 'Docker', 'ECS'], focus: 'Walk through health checks, release approval, and rollback.' },
    { title: 'Static site on a CDN', image: operations, description: 'Host a static site in object storage and serve it over HTTPS through a CDN.', stack: ['S3', 'CloudFront', 'Route 53'], focus: 'Explain cache invalidation and how you restrict access to the origin.' },
    { title: 'Cloud monitoring and alerts', image: monitoring, description: 'Build a dashboard and alerts for application errors, latency, and resource use.', stack: ['CloudWatch', 'Prometheus', 'Grafana'], focus: 'Explain what should page someone and how to avoid noisy alerts.' },
  ],
  questions: [
    ['What topics come up in cloud computing interviews?', 'Expect questions on compute, storage, networking, IAM, automated deployments, and incident recovery. Practice explaining why you would choose one service over another.'],
    ['Do I need experience with every cloud provider?', 'Start with one provider so you can explain a design in detail. Then map the same compute, storage, networking, and identity concepts to the other providers.'],
    ['How does the cloud mock interview work?', 'You’ll reason through an availability-zone failure, answer a follow-up about monitoring and testing, and compare your answer with example feedback.'],
    ['Which project is a good place to start?', 'Start with static hosting if you are new to cloud deployments. Move on to the three-tier application to practice networking, load balancing, and database decisions together.'],
    ['Does the mock interview qualify me for a certificate?', 'The demo is for practice. Persevex assesses certificate eligibility against the requirements of its course or internship. Check Certificate Details for the available certificate types.'],
  ],
}
