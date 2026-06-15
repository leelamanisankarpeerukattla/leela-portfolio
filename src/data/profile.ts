// Edit this file to update portfolio content.
// Add/remove projects, skills, certifications, focus areas, and links here.
// Keep credentialUrl empty unless you have the real credential URL.

export type Project = {
  title: string;
  subtitle: string;
  category: 'Backend' | 'Full-Stack' | 'AI' | 'Simulation';
  status: string;
  statusTone: 'public' | 'private' | 'program';
  problem: string;
  built: string;
  highlights: string[];
  whyItMatters: string;
  techStack: string[];
  links: Array<{
    label: string;
    url: string;
    kind: 'github' | 'external' | 'request';
  }>;
};

export type Experience = {
  company: string;
  role: string;
  client?: string;
  dates: string;
  location: string;
  summary: string;
  bullets: string[];
  techStack: string[];
};

export type SkillGroup = {
  name: string;
  skills: string[];
};

export type Certification = {
  title: string;
  issuer: string;
  issued: string;
  expires?: string;
  credentialId?: string;
  credentialUrl: string;
  skills: string[];
};

export type Education = {
  school: string;
  degree: string;
  dates: string;
  relevantAreas: string[];
  gpa?: string;
};

export const profile = {
  name: 'Leela Mani Sankar Peerukattla',
  displayName: 'Leela Mani Sankar Peerukattla',
  initials: 'LMSP',
  role: 'Software Engineer',
  location: 'United States',
  email: 'leelamanisankarpeerukattla@gmail.com',
  headline:
    'Software Engineer building backend-focused full-stack systems, REST APIs, cloud-ready services, and practical AI workflows.',
  longHeadline:
    'Software Engineer | Intelligent Applications, REST APIs & Cloud Engineering | Java, Python, Spring Boot, React, TypeScript | AWS, GCP, Kubernetes, Docker, CI/CD | OpenAI API, AI Agents, RAG, LLM Workflows',
  summary:
    'I’m a software engineer focused on Java, Spring Boot, Python, React, TypeScript, REST APIs, microservices, distributed systems, cloud delivery, and AI-assisted product workflows. I enjoy turning unclear product needs into reliable backend services, clean APIs, and maintainable full-stack applications.',
  lastUpdated: 'June 2026',
  links: {
    github: 'https://github.com/leelamanisankarpeerukattla',
    linkedin: 'https://www.linkedin.com/in/leelamanisankar-peerukattla/',
    resume: '/resume.pdf',
    email: 'mailto:leelamanisankarpeerukattla@gmail.com'
  },
  seo: {
    title: 'Leela Mani Sankar Peerukattla | Software Engineer',
    description:
      'Software Engineer focused on Java, Spring Boot, Python, REST APIs, microservices, cloud-ready systems, React, TypeScript, and practical AI workflows.',
    keywords: [
      'Software Engineer',
      'Backend Engineer',
      'Full Stack Engineer',
      'Java Developer',
      'Spring Boot Developer',
      'Python Developer',
      'REST APIs',
      'Microservices',
      'Kafka',
      'Redis',
      'PostgreSQL',
      'Docker',
      'Kubernetes',
      'AWS',
      'GCP',
      'AI Engineer',
      'LLM Workflows',
      'RAG',
      'OpenAI API'
    ],
    siteUrl: 'http://localhost:3000',
    ogImage: '/og-image.png'
  },
  topSkills: [
    'Java',
    'Spring Boot',
    'REST APIs',
    'Python',
    'React',
    'TypeScript',
    'Kafka',
    'Redis',
    'PostgreSQL',
    'Docker',
    'Kubernetes',
    'AWS',
    'GCP',
    'CI/CD',
    'OpenAI API',
    'AI Agents',
    'RAG'
  ],
  about: [],
  projects: [
    {
      title: 'Enterprise Full-Stack Order Management System',
      subtitle: 'Production-style microservices order platform with event-driven workflows.',
      category: 'Full-Stack',
      status: 'Public Repository',
      statusTone: 'public',
      problem:
        'Modern order platforms need reliable service boundaries, asynchronous communication, secure access, data consistency, and repeatable deployment workflows.',
      built:
        'A distributed order management platform with separate services for order, inventory, payment, authentication, and gateway responsibilities, connected through Kafka and backed by PostgreSQL/Redis.',
      highlights: [
        'Designed microservice-style architecture with clear domain boundaries.',
        'Implemented event-driven workflows using Kafka topics.',
        'Added JWT/RBAC authentication and authorization patterns.',
        'Used PostgreSQL and Redis for persistence and caching paths.',
        'Included Docker Compose, Kubernetes manifests, health checks, and GitHub Actions CI.'
      ],
      whyItMatters:
        'Shows backend architecture, distributed systems thinking, API design, event-driven workflows, and cloud-ready deployment practices.',
      techStack: [
        'Java 17',
        'Spring Boot',
        'Kafka',
        'React',
        'TypeScript',
        'PostgreSQL',
        'Redis',
        'Docker',
        'Kubernetes',
        'GitHub Actions',
        'API Gateway',
        'JWT/RBAC',
        'Flyway',
        'JPA'
      ],
      links: [
        {
          label: 'GitHub repository',
          url: 'https://github.com/leelamanisankarpeerukattla/enterprise-order-management-system',
          kind: 'github'
        }
      ]
    },
    {
      title: 'Distributed API Rate Limiter & Protection Service',
      subtitle: 'Backend API protection service using Redis-backed rate limiting.',
      category: 'Backend',
      status: 'Public Repository',
      statusTone: 'public',
      problem:
        'APIs need predictable traffic control, abuse protection, fair usage enforcement, and observable request decisions.',
      built:
        'A distributed rate limiting service supporting per-user, per-IP, and per-endpoint quotas with atomic Redis Lua scripts and standard rate-limit headers.',
      highlights: [
        'Implemented token bucket and sliding-window rate-limiting strategies.',
        'Used Redis Lua scripts for atomic request evaluation.',
        'Added quota support by user, IP, and endpoint.',
        'Returned standard rate-limit headers for client visibility.',
        'Exposed health and metrics endpoints for operational monitoring.',
        'Designed fail-open/fail-closed behavior options.'
      ],
      whyItMatters:
        'Shows systems design, API security, low-latency backend logic, concurrency handling, Redis usage, and observability.',
      techStack: [
        'Java 17',
        'Spring Boot',
        'Redis',
        'Lua',
        'Docker',
        'GitHub Actions',
        'Micrometer',
        'Actuator',
        'Token Bucket',
        'Sliding Window'
      ],
      links: [
        {
          label: 'GitHub repository',
          url: 'https://github.com/leelamanisankarpeerukattla/distributed-api-rate-limiter',
          kind: 'github'
        }
      ]
    },
    {
      title: 'JPMorgan Chase Midas Core Simulation',
      subtitle: 'Financial-style backend simulation with Kafka transaction processing.',
      category: 'Simulation',
      status: 'Forage Program',
      statusTone: 'program',
      problem:
        'Financial-style systems require reliable event processing, validation, persistence, and balance retrieval workflows.',
      built:
        'A backend simulation that consumes Kafka transaction events, validates and persists transaction data, integrates incentive logic, and exposes balance retrieval behavior.',
      highlights: [
        'Built Kafka-based transaction listener and processing flow.',
        'Persisted transaction data using Spring Data JPA and H2.',
        'Created REST endpoint for balance retrieval and validation.',
        'Used embedded Kafka tests for integration-style verification.',
        'Debugged event flow and persistence behavior across service boundaries.'
      ],
      whyItMatters:
        'Shows backend integration, event processing, testing, persistence, and enterprise-style workflow implementation.',
      techStack: [
        'Spring Boot',
        'Kafka',
        'Spring Data JPA',
        'H2',
        'REST APIs',
        'Embedded Kafka Tests',
        'Java'
      ],
      links: [
        {
          label: 'GitHub repository',
          url: 'https://github.com/leelamanisankarpeerukattla/forage-midas',
          kind: 'github'
        }
      ]
    },
    {
      title: 'AI-Enabled SaaS Marketplace Backend',
      subtitle: 'Marketplace workflow and AI-assisted product engineering case study.',
      category: 'AI',
      status: 'Private / Case Study Available on Request',
      statusTone: 'private',
      problem:
        'Marketplace platforms need reliable role-based workflows for customers, providers, admins, onboarding, booking, messaging, review, and support operations.',
      built:
        'Backend and product workflow contributions for a marketplace-style platform involving customer/provider/admin flows, API-driven features, onboarding, messaging, incidents, reviews, secure media handling, and AI-assisted interactions.',
      highlights: [
        'Worked on customer, provider, subcontractor, and admin workflow logic.',
        'Supported booking, listing availability, onboarding, messaging, incidents, and review workflows.',
        'Integrated AI-assisted workflows for guided interactions and automated support experiences.',
        'Worked with PostgreSQL/Supabase-backed data models and secure media handling.',
        'Created QA coverage, edge-case validation, workflow documentation, and defect prioritization notes.'
      ],
      whyItMatters:
        'Shows real product engineering, role-based backend logic, AI workflow integration, customer-facing automation, and practical delivery.',
      techStack: [
        'React',
        'TypeScript',
        'REST APIs',
        'PostgreSQL/Supabase',
        'OpenAI API',
        'LLM Workflows',
        'Role-Based Workflows',
        'QA',
        'Documentation'
      ],
      links: [
        {
          label: 'Case Study Available on Request',
          url: 'mailto:leelamanisankarpeerukattla@gmail.com?subject=AI-Enabled%20SaaS%20Marketplace%20Case%20Study',
          kind: 'request'
        }
      ]
    }
  ] satisfies Project[],
  experience: [
    {
      company: 'Community Dreams Foundation',
      role: 'Software Engineer',
      dates: 'April 2026 - Present',
      location: 'United States',
      summary:
        'Contributing to product workflows, API-driven features, and AI-assisted engineering work in a nonprofit software environment.',
      bullets: [
        'Build and support full-stack product workflows involving REST APIs, React-based interfaces, backend logic, and data-driven features.',
        'Contribute to AI-assisted and automation-oriented workflows using LLM tools, prompt engineering, and practical AI integration patterns.',
        'Work on user-facing and admin-facing flows involving validation, documentation, QA, issue tracking, and iterative feature improvement.',
        'Collaborate with stakeholders to convert non-technical requirements into scoped, maintainable software tasks.',
        'Support clean handoff notes, testing steps, and implementation documentation for ongoing platform work.'
      ],
      techStack: ['React', 'TypeScript', 'REST APIs', 'Backend Logic', 'LLM Tools', 'QA', 'Documentation']
    },
    {
      company: 'Infosys',
      role: 'Digital Specialist Engineer',
      client: 'Walmart Global Tech / Sam’s Club Platform',
      dates: 'September 2021 - December 2023',
      location: 'India / Enterprise Client Engineering',
      summary:
        'Built and supported enterprise backend services, APIs, and platform workflows for retail/e-commerce systems.',
      bullets: [
        'Built and supported backend services for catalog/item platform workflows using Java, Spring Boot, REST APIs, GraphQL, PostgreSQL/DB2, Redis, and event-driven patterns.',
        'Developed API and service-layer logic for high-volume enterprise application workflows used across e-commerce platform systems.',
        'Worked with Kafka-based asynchronous processing patterns to support downstream data updates and integration workflows.',
        'Improved backend reliability through debugging, query optimization, integration testing, API validation, logging, and production support.',
        'Contributed to frontend/API integration work using React, TypeScript, and JavaScript for internal platform workflows.',
        'Used Jenkins, Git, Docker, GCP, Agile/Scrum practices, and CI/CD workflows for delivery and maintenance.',
        'Collaborated with product, QA, platform, and engineering teams to clarify requirements, resolve issues, and ship maintainable services.'
      ],
      techStack: [
        'Java',
        'Spring Boot',
        'REST APIs',
        'GraphQL',
        'Kafka',
        'Redis',
        'PostgreSQL',
        'IBM DB2',
        'React',
        'TypeScript',
        'Docker',
        'GCP',
        'Jenkins'
      ]
    }
  ] satisfies Experience[],
  skillGroups: [
    {
      name: 'Languages',
      skills: ['Java', 'Python', 'TypeScript', 'JavaScript', 'SQL', 'C', 'C++', 'Bash']
    },
    {
      name: 'Backend & APIs',
      skills: [
        'Spring Boot',
        'REST APIs',
        'GraphQL',
        'Microservices',
        'API Development',
        'Backend Software Engineering',
        'Service-Oriented Architecture',
        'JWT/RBAC',
        'JPA',
        'Hibernate',
        'Node.js'
      ]
    },
    {
      name: 'Distributed Systems',
      skills: ['Kafka', 'Redis', 'Event-Driven Architecture', 'Distributed Systems', 'Caching', 'Rate Limiting', 'Async Processing']
    },
    {
      name: 'Databases',
      skills: ['PostgreSQL', 'MySQL', 'IBM DB2', 'MongoDB', 'SQL & NoSQL Databases', 'DBMS', 'H2']
    },
    {
      name: 'Cloud & DevOps',
      skills: ['AWS', 'GCP', 'Oracle Cloud Infrastructure', 'Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'CI/CD', 'Git', 'Linux']
    },
    {
      name: 'Frontend',
      skills: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'AngularJS', 'API-Driven UI']
    },
    {
      name: 'Testing & Reliability',
      skills: ['JUnit', 'Mockito', 'Postman', 'Integration Testing', 'API Testing', 'Debugging', 'Logging', 'Monitoring', 'Micrometer', 'Actuator']
    },
    {
      name: 'AI & Data',
      skills: ['OpenAI API', 'AI Agents', 'RAG', 'LLM Workflows', 'Prompt Engineering', 'AI Prompting', 'AI Pair Programming', 'Machine Learning', 'Apache Spark', 'Google BigQuery', 'Elasticsearch']
    },
    {
      name: 'Foundations',
      skills: ['Data Structures and Algorithms', 'Object-Oriented Programming', 'Problem Solving', 'Software Development', 'SDLC', 'Agile/Scrum']
    }
  ] satisfies SkillGroup[],
  certifications: [
    {
      title: 'Certificate of Completion: AI Fluency Framework & Foundations',
      issuer: 'Anthropic',
      issued: 'Jun 2026',
      credentialId: 'kyr2ms9wd9rn',
      credentialUrl: '',
      skills: ['AI Fluency', 'Responsible AI', 'AI Collaboration']
    },
    {
      title: 'Certificate of Completion: Claude 101',
      issuer: 'Anthropic',
      issued: 'Jun 2026',
      credentialId: 'gcvgty2iswyv',
      credentialUrl: '',
      skills: ['Claude', 'AI Tools', 'AI Productivity']
    },
    {
      title: 'Prompt Engineering for Everyone',
      issuer: 'Cognitive Class',
      issued: 'Jan 2026',
      credentialId: 'abc0ea2094474240a41cfa4350190b36',
      credentialUrl: '',
      skills: ['AI Prompting', 'Prompt Engineering']
    },
    {
      title: 'JPMorganChase - Software Engineering Job Simulation',
      issuer: 'Forage',
      issued: 'Jan 2026',
      credentialId: 'xkxcmeDTTGEXbTzze',
      credentialUrl: '',
      skills: ['Spring Boot', 'REST APIs', 'Kafka', 'Backend Engineering']
    },
    {
      title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
      issuer: 'Oracle',
      issued: 'Nov 2025',
      expires: 'Nov 2027',
      credentialUrl: '',
      skills: ['OCI', 'AI Foundations', 'Cloud AI']
    },
    {
      title: 'Oracle Cloud Infrastructure 2025 Certified Foundations Associate',
      issuer: 'Oracle',
      issued: 'Sep 2025',
      expires: 'Sep 2027',
      credentialUrl: '',
      skills: ['OCI', 'Cloud Foundations']
    },
    {
      title: 'Problem Solving through Programming in C',
      issuer: 'NPTEL',
      issued: 'Apr 2019',
      credentialUrl: '',
      skills: ['C', 'Problem Solving']
    },
    {
      title: 'Data Base Management System',
      issuer: 'NPTEL',
      issued: 'Sep 2019',
      credentialUrl: '',
      skills: ['DBMS', 'Databases']
    }
  ] satisfies Certification[],
  education: [
    {
      school: 'University of Central Missouri',
      degree: 'Master of Science, Computer Science',
      dates: 'January 2024 - December 2025',
      relevantAreas: [
        'Advanced Algorithms',
        'Software Testing',
        'Machine Learning',
        'Programming Foundations for Data Science & AI',
        'Cloud/Distributed Systems'
      ],
      gpa: ''
    },
    {
      school: 'Raghu Engineering College',
      degree: 'Bachelor of Technology, Computer Science and Engineering',
      dates: 'June 2017 - July 2021',
      relevantAreas: ['Java', 'Python', 'R', 'Data Structures and Algorithms', 'RDBMS', 'Software Development Practices', 'C', 'C++'],
      gpa: ''
    }
  ] satisfies Education[],
  currentFocus: [
    {
      title: 'Backend Systems',
      details: 'Java, Spring Boot, REST APIs, Microservices, Kafka, Redis'
    },
    {
      title: 'Cloud-Ready Delivery',
      details: 'Docker, Kubernetes, CI/CD, GCP, AWS, deployment-ready services'
    },
    {
      title: 'AI Product Workflows',
      details: 'OpenAI API, Claude, AI Agents, RAG, LLM workflows, prompt automation'
    },
    {
      title: 'Interview & Engineering Growth',
      details: 'DSA, system design, API design, testing, production support, clean architecture'
    }
  ]
} as const;

export type Profile = typeof profile;
