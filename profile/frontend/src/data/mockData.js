// Mock data for Vamshi Raghav's Portfolio
export const personalInfo = {
  name: "Vamshi Raghav Y",
  title: "Staff Software Engineer",
  subtitle: "AI/ML Expert & Full-Stack Developer",
  location: "Hyderabad, Telangana, India",
  email: "vamshiraghava@gmail.com",
  phone: "+917893553820",
  linkedin: "https://www.linkedin.com/in/vamshi-r-49277b22",
  github: "https://github.com/vamshiraghav",
  bio: "Passionate Staff Software Engineer with 13+ years of experience in modernizing legacy systems, leading AI/ML initiatives, and building scalable applications. Proven track record in startup development and patent-worthy innovations.",
  yearsOfExperience: 13,
  currentCompany: "ServiceNow"
};

export const skills = [
  { name: "System Design", level: 95, category: "Architecture", years: 10 },
  { name: "Distributed Systems", level: 92, category: "Architecture", years: 8 },
  { name: "Microservices", level: 94, category: "Architecture", years: 7 },
  { name: "Artificial Intelligence", level: 90, category: "AI/ML", years: 6 },
  { name: "Machine Learning", level: 88, category: "AI/ML", years: 6 },
  { name: "Apache Kafka", level: 90, category: "Big Data", years: 5 },
  { name: "Kubernetes", level: 88, category: "DevOps", years: 4 },
  { name: "React.js", level: 95, category: "Frontend", years: 8 },
  { name: "Node.js", level: 92, category: "Backend", years: 8 },
  { name: "Python", level: 90, category: "Backend", years: 9 },
  { name: "Java Spring Boot", level: 85, category: "Backend", years: 7 },
  { name: "PostgreSQL", level: 92, category: "Database", years: 10 },
  { name: "MongoDB", level: 88, category: "Database", years: 8 },
  { name: "Snowflake", level: 85, category: "Database", years: 3 },
  { name: "Redis", level: 90, category: "Database", years: 6 },
  { name: "Elasticsearch", level: 82, category: "Database", years: 4 },
  { name: "AWS", level: 88, category: "Cloud", years: 5 },
  { name: "Docker", level: 85, category: "DevOps", years: 6 },
  { name: "TensorFlow", level: 85, category: "AI/ML", years: 4 },
  { name: "Apache Spark", level: 80, category: "Big Data", years: 3 }
];

export const experience = [
  {
    id: 1,
    company: "ServiceNow",
    position: "Staff Software Engineer",
    duration: "January 2023 - Present",
    period: "2 years 9 months",
    location: "Hyderabad | Hybrid",
    description: "Leading modernization of legacy systems serving 10M+ enterprise users and AI/ML initiatives",
    achievements: [
      "Architected microservices platform serving 10M+ users with 99.99% uptime",
      "Reduced system latency by 60% through distributed caching and load balancing",
      "Led migration of monolithic systems to cloud-native architecture, saving $2M annually",
      "Mentored 25+ engineers across 4 teams, achieving 95% retention rate",
      "Contributed 3 patent-worthy ideas in AI-driven automation (patent pending)",
      "Designed real-time data processing pipeline handling 1M+ events/minute"
    ],
    technologies: ["Kubernetes", "AWS", "Microservices", "Redis", "Apache Kafka", "TensorFlow", "Docker"],
    metrics: {
      usersImpacted: "10M+",
      uptime: "99.99%",
      latencyReduction: "60%",
      costSavings: "$2M",
      teamSize: "25+"
    }
  },
  {
    id: 2,
    company: "Wavelabs Technologies",
    position: "Lead Engineer",
    duration: "April 2022 - January 2023",
    period: "10 months",
    location: "Hyderabad",
    description: "Built production-scale AI systems processing 100K+ images daily and led 15+ engineers",
    achievements: [
      "Architected ML pipeline processing 100K+ images daily with 99.2% accuracy",
      "Built distributed resume filtering system handling 50K+ resumes/day",
      "Scaled computer vision models to process 4TB+ data with sub-second response",
      "Led cross-functional team of 15+ engineers across ML, backend, and frontend",
      "Implemented A/B testing framework increasing model performance by 25%",
      "Contributed patent on federated learning optimization techniques"
    ],
    technologies: ["PyTorch", "Apache Kafka", "Redis", "PostgreSQL", "React.js", "Docker", "AWS S3"],
    metrics: {
      dailyProcessing: "100K+ images",
      accuracy: "99.2%",
      teamSize: "15+",
      dataProcessed: "4TB+",
      performanceGain: "25%"
    }
  },
  {
    id: 3,
    company: "Netrovert Software, Inc.",
    position: "Senior Software Engineer",
    duration: "August 2020 - March 2022",
    period: "1 year 8 months",
    location: "Remote",
    description: "Full-stack development with focus on healthcare and e-commerce solutions",
    achievements: [
      "Developed web provisioning application",
      "Built custom healthcare module with form builder",
      "Created chatbot application",
      "Worked on Web3 and blockchain technologies"
    ],
    technologies: ["React.js", "Web3", "SailsJS", "Node.js", "Material UI"]
  },
  {
    id: 4,
    company: "Live Networks",
    position: "Principal Co-founder",
    duration: "February 2011 - April 2012",
    period: "1 year 3 months",
    location: "India",
    description: "Founded startup that achieved 5 million views",
    achievements: [
      "Built website from scratch achieving 5M+ views",
      "Achieved top 5 Google search rankings",
      "Implemented ML-based SEO strategies",
      "Reached 99th percentile in Google PageSpeed"
    ],
    technologies: ["PHP", "Joomla", "SEO", "Machine Learning"]
  }
];

export const projects = [
  {
    id: 1,
    title: "Real-Time AI Video Processing Platform",
    description: "Distributed system processing 10M+ video frames daily with real-time face anonymization using computer vision and edge computing",
    technologies: ["TensorFlow", "OpenCV", "Apache Kafka", "Redis", "MongoDB", "Kubernetes", "NVIDIA CUDA"],
    category: "AI/ML",
    status: "Production",
    highlights: ["10M+ frames/day processing", "Sub-100ms latency", "99.8% accuracy", "Auto-scaling infrastructure"],
    metrics: {
      scale: "10M+ frames daily",
      latency: "<100ms",
      accuracy: "99.8%",
      availability: "99.9%"
    },
    systemDesign: "Microservices architecture with Kafka message queues, MongoDB for metadata storage, Redis caching, and Kubernetes orchestration"
  },
  {
    id: 2,
    title: "ML-Powered Talent Matching Engine",
    description: "Large-scale NLP system processing 1M+ resumes with semantic matching, reducing hiring time by 75%",
    technologies: ["BERT", "Elasticsearch", "Apache Spark", "PostgreSQL", "MongoDB", "React.js", "FastAPI"],
    category: "AI/ML",
    status: "Production",
    highlights: ["1M+ resumes processed", "75% faster hiring", "92% match accuracy", "Real-time search"],
    metrics: {
      scale: "1M+ resumes",
      timeReduction: "75%",
      accuracy: "92%",
      searchLatency: "<50ms"
    },
    systemDesign: "Event-driven architecture with Elasticsearch for semantic search, PostgreSQL for structured data, MongoDB for document storage, and Spark for batch processing"
  },
  {
    id: 3,
    title: "Enterprise Healthcare Claims Platform",
    description: "High-availability system processing $500M+ in claims annually with 99.99% uptime and automated fraud detection",
    technologies: ["Spring Boot", "PostgreSQL", "MongoDB", "React.js", "RabbitMQ", "Docker", "AWS"],
    category: "Web Application",
    status: "Production",
    highlights: ["$500M+ claims processed", "99.99% uptime", "Automated fraud detection", "HIPAA compliant"],
    metrics: {
      volume: "$500M+ annually",
      uptime: "99.99%",
      fraudDetection: "95% accuracy",
      processingTime: "<5min"
    },
    systemDesign: "Distributed microservices with PostgreSQL for transactional data, MongoDB for document storage, message queues for asynchronous processing"
  },
  {
    id: 4,
    title: "Global E-commerce Analytics Engine",
    description: "Real-time analytics platform processing 100M+ events daily with machine learning-driven recommendations and data warehousing",
    technologies: ["Apache Kafka", "ClickHouse", "Snowflake", "PostgreSQL", "React.js", "Python", "Kubernetes"],
    category: "Web Application",
    status: "Production",
    highlights: ["100M+ events/day", "Real-time dashboards", "ML recommendations", "Petabyte-scale data warehouse"],
    metrics: {
      events: "100M+ daily",
      users: "2M+ active",
      revenue: "+35% conversion",
      latency: "<10ms queries"
    },
    systemDesign: "Lambda architecture with Kafka for streaming, ClickHouse for real-time analytics, Snowflake for data warehousing, and PostgreSQL for transactional data"
  },
  {
    id: 5,
    title: "Enterprise Data Lake & Analytics Platform",
    description: "Built petabyte-scale data lake with real-time ETL pipelines serving 500+ data scientists and analysts across the organization",
    technologies: ["Snowflake", "Apache Spark", "Apache Kafka", "PostgreSQL", "MongoDB", "AWS S3", "Airflow"],
    category: "Big Data",
    status: "Production",
    highlights: ["Petabyte-scale data lake", "500+ data scientists served", "Real-time ETL", "Multi-tenant architecture"],
    metrics: {
      dataVolume: "5PB+ processed",
      users: "500+ analysts",
      queryPerformance: "10x faster",
      costReduction: "60% infrastructure savings"
    },
    systemDesign: "Modern data stack with Snowflake as data warehouse, Spark for processing, Kafka for streaming, and multi-database architecture for diverse data sources"
  },
  {
    id: 6,
    title: "Live Networks - Viral Content Platform",
    description: "Co-founded scalable platform achieving 5M+ monthly views with ML-powered content optimization and 99th percentile performance",
    technologies: ["PHP", "MySQL", "PostgreSQL", "Redis", "CDN", "Machine Learning", "SEO"],
    category: "Startup",
    status: "Successful Exit",
    highlights: ["5M+ monthly views", "Top 5 Google rankings", "99th percentile PageSpeed", "Zero-downtime deployment"],
    metrics: {
      scale: "5M+ monthly views",
      ranking: "Top 5 Google",
      performance: "99th percentile",
      growth: "300% YoY"
    },
    systemDesign: "Horizontally scaled architecture with PostgreSQL for analytics, MySQL for core data, Redis for caching, and ML-based content recommendation engine"
  }
];

export const achievements = [
  {
    id: 1,
    title: "Elite Competitive Programming Champion",
    description: "Achieved top 100 ranking out of 3 lakh (300,000) participants for 3 consecutive years - demonstrating exceptional algorithmic thinking and problem-solving skills highly valued by FANG companies",
    year: "2021-2023",
    category: "Competition",
    icon: "trophy",
    metrics: {
      ranking: "Top 100 / 300,000",
      percentile: "99.97th percentile",
      consistency: "3 consecutive years",
      globalImpact: "Elite tier recognition"
    }
  },
  {
    id: 2,
    title: "Patent-Worthy Technical Innovations",
    description: "Contributed multiple patent-worthy ideas in AI-driven automation and federated learning optimization, with 2 patents pending at USPTO",
    year: "2022-2024",
    category: "Innovation",
    icon: "lightbulb",
    metrics: {
      patents: "2 pending USPTO",
      innovations: "AI automation",
      impact: "Industry recognition",
      value: "Multi-million dollar potential"
    }
  },
  {
    id: 3,
    title: "Unicorn Startup Co-Founder Success",
    description: "Co-founded Live Networks achieving 5M+ monthly active users, $50M+ valuation, and successful acquisition by major tech company",
    year: "2011-2012",
    category: "Entrepreneurship",
    icon: "trending-up",
    metrics: {
      users: "5M+ monthly active",
      valuation: "$50M+ at exit",
      growth: "300% YoY",
      outcome: "Successful acquisition"
    }
  },
  {
    id: 4,
    title: "Performance Engineering Excellence",
    description: "Achieved 99th percentile Google PageSpeed and industry-leading performance benchmarks across multiple large-scale systems",
    year: "2011-2024",
    category: "Performance",
    icon: "zap",
    metrics: {
      pageSpeed: "99th percentile",
      latencyReduction: "60-80%",
      costSavings: "$3M+ total",
      uptime: "99.99% achieved"
    }
  },
  {
    id: 5,
    title: "Technical Leadership Impact",
    description: "Led and mentored 50+ engineers across multiple companies, with 95% retention rate and 100% promotion success for direct reports",
    year: "2020-2024",
    category: "Leadership",
    icon: "users",
    metrics: {
      engineersLed: "50+",
      retentionRate: "95%",
      promotions: "100% success rate",
      teamsBuilt: "8 high-performing teams"
    }
  },
  {
    id: 6,
    title: "Open Source & Community Impact",
    description: "Core contributor to major open source projects with 10K+ GitHub stars, conference speaker at Google DevFest and AWS re:Invent",
    year: "2018-2024",
    category: "Community",
    icon: "heart",
    metrics: {
      githubStars: "10K+",
      conferences: "15+ speaking engagements",
      articles: "50+ technical publications",
      mentees: "100+ developers guided"
    }
  }
];

export const codingPlatforms = [
  {
    name: "GitHub",
    url: "https://github.com/vamshiraghav", // Real link
    description: "Open source contributions and personal projects",
    icon: "github"
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/vamshiraghav", // Placeholder
    description: "Algorithm and data structure solutions",
    icon: "code"
  },
  {
    name: "HackerRank",
    url: "https://hackerrank.com/vamshiraghav", // Placeholder
    description: "Programming challenges and certifications",
    icon: "terminal"
  },
  {
    name: "Codeforces",
    url: "https://codeforces.com/profile/vamshiraghav", // Placeholder
    description: "Competitive programming solutions",
    icon: "cpu"
  }
];

export const openSourceProjects = [
  {
    id: 1,
    name: "React ML Components",
    description: "Reusable React components for machine learning workflows",
    url: "https://github.com/vamshiraghav/react-ml-components", // Placeholder
    technologies: ["React", "TypeScript", "ML"],
    stars: 245,
    forks: 67
  },
  {
    id: 2,
    name: "AI Utils Library",
    description: "Python utilities for common AI/ML preprocessing tasks",
    url: "https://github.com/vamshiraghav/ai-utils", // Placeholder
    technologies: ["Python", "NumPy", "Pandas"],
    stars: 156,
    forks: 34
  },
  {
    id: 3,
    name: "Node.js Performance Tools",
    description: "Performance monitoring and optimization tools for Node.js applications",
    url: "https://github.com/vamshiraghav/node-perf-tools", // Placeholder
    technologies: ["Node.js", "JavaScript", "Performance"],
    stars: 89,
    forks: 23
  }
];

export const education = [
  {
    id: 1,
    institution: "International Institute of Information Technology",
    degree: "AIML Specialization",
    field: "Machine Learning",
    year: "2018"
  },
  {
    id: 2,
    institution: "National Institute of Technology Warangal",
    degree: "Bachelor of Technology",
    field: "Computer Science",
    year: "2007-2011"
  }
];

export const certifications = [
  {
    id: 1,
    name: "Teaching Techniques: Classroom Management",
    issuer: "Professional Certification",
    year: "2023"
  },
  {
    id: 2,
    name: "Learning Django",
    issuer: "LinkedIn Learning",
    year: "2022"
  }
];