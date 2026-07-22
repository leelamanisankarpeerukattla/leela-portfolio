export type Project = {
  title: string;
  description: string;
  highlights: string[];
  techStack: string[];
  links: Array<{
    label: string;
    url: string;
    kind: 'github' | 'external' | 'case-study';
  }>;
  featured?: boolean;
};

export type ExperienceItem = {
  role: string;
  employer: string;
  client?: string;
  dates: string;
  description: string;
};

export type EducationItem = {
  school: string;
  degree: string;
  dates: string;
  description: string;
};

export type ProofItem = {
  title: string;
  description: string;
  url?: string;
  date?: string;
  type: 'writing' | 'open-source' | 'achievement';
};

export type TimelineItem = {
  id: string;
  type: 'experience' | 'education';
  side: 'left' | 'right';
  startDate: string;
  endDate: string;
  dateLabel: string;
  title: string;
  organization: string;
  secondaryOrganization?: string;
  description: string;
};

export const profile = {
  name: 'Leela Mani Sankar Peerukattla',
  displayName: 'Leela Mani Sankar Peerukattla',
  initials: 'LMSP',
  role: 'Software Engineer',
  location: 'United States',
  email: 'leelamanisankarpeerukattla@gmail.com',
  headline: 'Software Engineer building scalable backend, distributed, and AI-enabled systems.',
  summary:
    'I design production-ready applications using Java, Spring Boot, Python, distributed architectures, cloud platforms, and modern engineering practices.',
  heroSecondary: 'Focused on backend engineering, system design, cloud-native development, and practical AI integration.',
  links: {
    github: 'https://github.com/leelamanisankarpeerukattla',
    linkedin: 'https://www.linkedin.com/in/leelamanisankar-peerukattla/',
    certifications:
      'https://www.linkedin.com/in/leelamanisankar-peerukattla/details/certifications/',
    email: 'mailto:leelamanisankarpeerukattla@gmail.com'
  },
  seo: {
    title: 'Leela Mani Sankar Peerukattla | Software Engineer',
    description:
      'Software Engineer building scalable backend systems, distributed services, cloud-native applications, and practical AI-enabled products.',
    keywords: [
      'Software Engineer',
      'Backend Engineer',
      'Java',
      'Spring Boot',
      'Distributed Systems',
      'Microservices',
      'REST APIs',
      'Kafka',
      'Cloud Engineering',
      'System Design',
      'AI Engineering'
    ],
    siteUrl: 'https://leela-portfolio-blond.vercel.app',
    ogImage: '/og-image.png'
  },
  coreTechnologies: [
    'Java',
    'Spring Boot',
    'Python',
    'REST APIs',
    'Kafka',
    'Redis',
    'PostgreSQL',
    'Docker',
    'Kubernetes',
    'AWS',
    'GCP',
    'React'
  ],
  projects: [
    {
      title: 'Enterprise Full-Stack Order Management System',
      description:
        'A production-style distributed order platform using Spring Boot microservices, Kafka, PostgreSQL, Redis, React, and containerized deployment workflows.',
      highlights: [
        'Designed separate order, inventory, payment, authentication, and gateway services.',
        'Implemented asynchronous order workflows using Kafka and service-level event communication.',
        'Added JWT/RBAC security, caching, health checks, CI, Docker, and Kubernetes support.'
      ],
      techStack: ['Java', 'Spring Boot', 'Kafka', 'PostgreSQL', 'Redis', 'Kubernetes'],
      links: [
        {
          label: 'GitHub',
          url: 'https://github.com/leelamanisankarpeerukattla/enterprise-order-management-system',
          kind: 'github'
        }
      ],
      featured: true
    },
    {
      title: 'Distributed API Rate Limiter & Protection Service',
      description:
        'A Redis-backed API protection service supporting distributed rate limiting across users, IP addresses, and endpoints.',
      highlights: [
        'Implemented Token Bucket and Sliding Window rate-limiting strategies.',
        'Used Redis Lua scripts for atomic and concurrency-safe request evaluation.',
        'Added standard rate-limit headers, metrics, health checks, and configurable failure behavior.'
      ],
      techStack: ['Java', 'Spring Boot', 'Redis', 'Lua', 'Docker', 'Micrometer'],
      links: [
        {
          label: 'GitHub',
          url: 'https://github.com/leelamanisankarpeerukattla/distributed-api-rate-limiter',
          kind: 'github'
        }
      ],
      featured: true
    },
    {
      title: 'AI-Enabled SaaS Marketplace Backend',
      description:
        'A marketplace engineering case study combining role-based workflows, REST APIs, PostgreSQL, and practical AI-assisted user experiences.',
      highlights: [
        'Supported customer, provider, subcontractor, and administrator workflows.',
        'Built API-driven onboarding, booking, messaging, review, and support flows.',
        'Integrated AI-assisted interactions with validation, documentation, and human-review considerations.'
      ],
      techStack: ['TypeScript', 'React', 'REST APIs', 'PostgreSQL', 'OpenAI API', 'LLM Workflows'],
      links: [
        {
          label: 'Case study',
          url: 'mailto:leelamanisankarpeerukattla@gmail.com?subject=AI-Enabled%20SaaS%20Marketplace%20Case%20Study',
          kind: 'case-study'
        }
      ],
      featured: true
    }
  ] satisfies Project[],
  experience: [
    {
      role: 'Software Engineer',
      employer: 'Community Dreams Foundation',
      dates: 'April 2026 – Present',
      description:
        'Building full-stack product workflows, REST APIs, and practical AI-assisted application features.'
    },
    {
      role: 'Software Engineer',
      employer: 'Infosys',
      client: 'Walmart Global Tech / Sam’s Club',
      dates: 'September 2021 – December 2023',
      description:
        'Built and supported Java and Spring Boot services for high-volume retail and e-commerce platform workflows.'
    }
  ] satisfies ExperienceItem[],
  education: [
    {
      school: 'University of Central Missouri',
      degree: 'Master of Science in Computer Science',
      dates: 'January 2024 – December 2025',
      description:
        'Focused on algorithms, distributed systems, software engineering, cloud computing, and machine learning.'
    },
    {
      school: 'Raghu Engineering College',
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      dates: 'July 2017 – July 2021',
      description:
        'Built foundations in programming, data structures, algorithms, databases, and software development.'
    }
  ] satisfies EducationItem[],
  timeline: [
    {
      id: 'community-dreams',
      type: 'experience',
      side: 'left',
      startDate: '2026-04',
      endDate: 'present',
      dateLabel: 'April 2026 – Present',
      title: 'Software Engineer',
      organization: 'Community Dreams Foundation',
      description:
        'Building full-stack product workflows, REST APIs, and practical AI-assisted application features.'
    },
    {
      id: 'ucm-masters',
      type: 'education',
      side: 'right',
      startDate: '2024-01',
      endDate: '2025-12',
      dateLabel: 'January 2024 – December 2025',
      title: 'Master of Science in Computer Science',
      organization: 'University of Central Missouri',
      description:
        'Focused on algorithms, distributed systems, software engineering, cloud computing, and machine learning.'
    },
    {
      id: 'infosys-walmart',
      type: 'experience',
      side: 'left',
      startDate: '2021-09',
      endDate: '2023-12',
      dateLabel: 'September 2021 – December 2023',
      title: 'Software Engineer',
      organization: 'Infosys',
      secondaryOrganization: 'Walmart Global Tech / Sam’s Club',
      description:
        'Built and supported Java and Spring Boot services for high-volume retail and e-commerce platform workflows.'
    },
    {
      id: 'raghu-bachelors',
      type: 'education',
      side: 'right',
      startDate: '2017-07',
      endDate: '2021-07',
      dateLabel: 'July 2017 – July 2021',
      title: 'Bachelor of Technology in Computer Science and Engineering',
      organization: 'Raghu Engineering College',
      description:
        'Built foundations in programming, data structures, algorithms, databases, and software development.'
    }
  ] satisfies TimelineItem[],
  engineeringWriting: [] satisfies ProofItem[],
  openSourceContributions: [] satisfies ProofItem[],
  achievements: [] satisfies ProofItem[]
} as const;

export type Profile = typeof profile;
