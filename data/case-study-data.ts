// src/data/case-study-data.ts

export interface CaseStudySection {
  id: string;
  title: string;
  type: 'text' | 'list' | 'rich-text';
  content?: string;
  description?: string;
  items?: string[];
}

export interface CaseStudySEO {
  title: string;
  description: string;
  keywords: string[];
}

export interface CaseStudyGallery {
  id: number;
  image: string;
  alt: string;
}

export interface CaseStudyStats {
  label: string;
  value: string;
}

export interface CaseStudy {
  id: number;
  slug: string;
  title: string;
  shortTitle?: string;
  category: string;
  date: string;
  readTime: string;
  img: string;
  bannerImage?: string;
  link: string;

  excerpt: string;
  overview: string;

  client?: string;
  location?: string;
  year?: string;
  industry?: string;

  services?: string[];
  technologies?: string[];
  tags?: string[];

  seo: CaseStudySEO;

  gallery?: CaseStudyGallery[];
  stats?: CaseStudyStats[];

  dataAos?: string;
  dataAosDelay?: number;

  sections: CaseStudySection[];
}

const caseStudyData: CaseStudy[] = [
  {
    id: 1,
    slug: 'engineers-hive',
    title: 'Engineers Hive',
    shortTitle: 'Engineers Hive',
    category: 'Web • Platform',
    date: '25 May 2025',
    readTime: '12 min read',

    img: 'https://images.prismic.io/proxen/ahl_cgeQX7-eWbdT_EngineersHive.jpg?auto=format,compress',

    bannerImage:
      'https://images.prismic.io/proxen/ahl_cgeQX7-eWbdT_EngineersHive.jpg?auto=format,compress',

    link: '/case-study/engineers-hive',

    excerpt:
      'A specialized engineering networking and knowledge-sharing platform built for professionals in power plants, utilities, and industrial sectors.',

    overview:
      'Engineers Hive is a purpose-built professional networking platform designed to connect engineering experts across power plants, utilities, and industrial sectors. The platform enables structured knowledge sharing, expert hiring, and community-driven learning — all within a domain-specific ecosystem that generic platforms like LinkedIn cannot offer.',

    client: 'Engineers Hive',
    location: 'Global',
    year: '2025',
    industry: 'Engineering & Technology',

    services: [
      'UI/UX Design',
      'Web Development',
      'Platform Architecture',
      'Community System Design',
      'Brand Identity',
    ],

    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'Figma',
    ],

    tags: [
      'Platform',
      'Networking',
      'Engineering',
      'SaaS',
      'Community',
    ],

    seo: {
      title:
        'Engineers Hive Case Study | Proxen Digital',

      description:
        'Discover how Proxen Digital designed and built Engineers Hive — a specialized networking and knowledge-sharing platform for engineering professionals in power plants, utilities, and industrial sectors.',

      keywords: [
        'engineering platform case study',
        'professional networking app',
        'knowledge sharing platform',
        'industrial SaaS development',
        'engineering community system',
      ],
    },

    gallery: [
      {
        id: 1,
        image:
          'https://images.prismic.io/proxen/ahl_cgeQX7-eWbdT_EngineersHive.jpg?auto=format,compress',
        alt: 'Engineers Hive Platform Overview',
      },
      {
        id: 2,
        image:
          'https://images.prismic.io/proxen/ahl_cgeQX7-eWbdT_EngineersHive.jpg?auto=format,compress',
        alt: 'Engineers Hive Core Categories & Features',
      },
    ],

    stats: [
      {
        label: 'Expert Categories',
        value: '20+',
      },
      {
        label: 'Platform Engagement',
        value: '3.5X',
      },
      {
        label: 'Professional Network',
        value: '10K+',
      },
    ],

    dataAos: 'fade-up',
    dataAosDelay: 500,

    sections: [
      {
        id: 'overview',
        title: 'Client Overview',
        type: 'text',
        content:
          'Engineers Hive is a specialized professional networking platform built exclusively for engineering experts working in power plants, utilities, and heavy industrial environments. Unlike general-purpose networks, it provides structured, industry-specific tools for knowledge exchange, expert discovery, and career development within the engineering domain.',
      },
      {
        id: 'challenge',
        title: 'The Challenge',
        type: 'text',
        content:
          'Engineering professionals in industrial sectors lacked a dedicated space to connect, share domain knowledge, and access expert-level opportunities. Existing platforms were too generic, unstructured, and unable to support the niche technical needs of power plant engineers, utility specialists, and industrial professionals. The client needed a platform that felt native to the engineering world — credible, structured, and purpose-built.',
      },
      {
        id: 'approach',
        title: 'Our Approach',
        type: 'text',
        content:
          'We began with deep discovery sessions to map out the core journeys of engineering professionals — from knowledge seekers to expert contributors and hirers. This informed the platform\'s information architecture, feature prioritization, and community taxonomy. We designed a system that balances professional networking with structured knowledge sharing, making it both a marketplace and a learning ecosystem.',
      },
      {
        id: 'solution',
        title: 'What We Delivered',
        type: 'list',
        description:
          'We designed and developed a full-featured engineering platform covering identity, product, and community systems.',
        items: [
          'Industry-specific brand identity with a hexagonal motif reflecting engineering precision',
          'Structured expert networking with verified professional profiles',
          'Core knowledge categories across 20+ engineering disciplines including Power Systems, Manufacturing, Automation, and more',
          'Industrial training ecosystem with curated modules for upskilling',
          'Engineering community system with forums, Q&A boards, and expert-led discussions',
          'Global exposure features enabling cross-border collaboration and hiring',
          'Responsive web platform with intuitive navigation for technical professionals',
        ],
      },
      {
        id: 'results',
        title: 'Results',
        type: 'list',
        description:
          'Engineers Hive launched to strong reception within the industrial engineering community.',
        items: [
          'Established a growing network of verified engineering professionals across 10+ countries',
          'Onboarded experts across 20+ specialized engineering categories at launch',
          'Platform engagement rates exceeded benchmarks by 3.5x compared to general professional networks',
          'Training ecosystem modules achieved high completion rates due to role-specific content relevance',
          'Positive response from power plant and utility firms for expert hiring features',
        ],
      },
    ],
  },

  {
    id: 2,
    slug: 'skoolsy',
    title: 'Skoolsy',
    shortTitle: 'Skoolsy',
    category: 'Web • Mobile App',
    date: '20 May 2025',
    readTime: '14 min read',

    img: 'https://images.prismic.io/proxen/ahl_bAeQX7-eWbdM_skoolsy.jpg?auto=format,compress',

    bannerImage:
      'https://images.prismic.io/proxen/ahl_bAeQX7-eWbdM_skoolsy.jpg?auto=format,compress',

    link: '/case-study/skoolsy',

    excerpt:
      'An all-in-one school management ecosystem with a modern web platform and mobile app designed to simplify academics, assessments, attendance, communication, and student engagement.',

    overview:
      'Skoolsy is a comprehensive school management platform built to digitally transform how schools operate. From student and parent portals to smart assessment systems and attendance tracking, Skoolsy brings every stakeholder — teachers, students, and parents — onto a single, seamlessly integrated platform.',

    client: 'Skoolsy',
    location: 'Global',
    year: '2025',
    industry: 'EdTech',

    services: [
      'UI/UX Design',
      'Web Development',
      'Mobile App Development',
      'System Architecture',
      'Brand Identity',
    ],

    technologies: [
      'React',
      'React Native',
      'TypeScript',
      'Node.js',
      'MongoDB',
      'Figma',
    ],

    tags: [
      'EdTech',
      'School Management',
      'Mobile App',
      'SaaS',
      'Web Platform',
    ],

    seo: {
      title:
        'Skoolsy Case Study | Proxen Digital',

      description:
        'See how Proxen Digital built Skoolsy — a full-featured school management ecosystem with web and mobile apps for students, teachers, and parents.',

      keywords: [
        'school management system case study',
        'EdTech platform development',
        'school mobile app',
        'student parent portal',
        'attendance management software',
      ],
    },

    gallery: [
      {
        id: 1,
        image:
          'https://images.prismic.io/proxen/ahl_bAeQX7-eWbdM_skoolsy.jpg?auto=format,compress',
        alt: 'Skoolsy Web and Mobile Platform',
      },
      {
        id: 2,
        image:
          'https://images.prismic.io/proxen/ahl_bAeQX7-eWbdM_skoolsy.jpg?auto=format,compress',
        alt: 'Skoolsy Dashboard and Student Portal',
      },
    ],

    stats: [
      {
        label: 'Students Served',
        value: '100K+',
      },
      {
        label: 'Schools Onboarded',
        value: '50+',
      },
      {
        label: 'Admin Time Saved',
        value: '60%',
      },
    ],

    dataAos: 'fade-up',
    dataAosDelay: 550,

    sections: [
      {
        id: 'overview',
        title: 'Client Overview',
        type: 'text',
        content:
          'Skoolsy is an all-in-one school management platform serving over 100,000 students across 50+ schools. The platform was designed to replace fragmented, manual school processes with a unified digital ecosystem that empowers teachers to teach, students to learn, and parents to stay engaged — all from a single dashboard.',
      },
      {
        id: 'challenge',
        title: 'The Challenge',
        type: 'text',
        content:
          'Schools were relying on disconnected tools for attendance, assessments, fee management, and communication — creating administrative overload and poor visibility for parents and students. The client needed a cohesive, intuitive platform that could serve multiple roles simultaneously without complexity, and work seamlessly across both web browsers and mobile devices.',
      },
      {
        id: 'approach',
        title: 'Our Approach',
        type: 'text',
        content:
          'We mapped the end-to-end workflows of every stakeholder: school administrators, class teachers, subject teachers, students, and parents. By understanding the daily friction points in each role, we designed a layered permission system and role-based dashboard experience that surfaces only the most relevant tools to each user. Special emphasis was placed on mobile-first design to support on-the-go access for parents and teachers.',
      },
      {
        id: 'solution',
        title: 'What We Delivered',
        type: 'list',
        description:
          'A full-stack school management ecosystem built for scale, accessibility, and ease of use.',
        items: [
          'Responsive web platform with role-based dashboards for admins, teachers, students, and parents',
          'Cross-platform mobile app (iOS & Android) with real-time notifications and offline support',
          'Smart Assessment System with customizable tests, automated grading, and performance analytics',
          'Student & Parent Portal with progress tracking, homework submission, and direct messaging',
          'Attendance Management module with one-tap marking and automated parent alerts',
          'Integrated fee management and academic calendar system',
          'Modular pricing plans allowing schools of all sizes to onboard affordably',
        ],
      },
      {
        id: 'results',
        title: 'Results',
        type: 'list',
        description:
          'Skoolsy became one of the most trusted school management platforms in its target markets.',
        items: [
          'Successfully onboarded 50+ schools serving over 100,000 students',
          'Reduced administrative workload by approximately 60% through process automation',
          'Parents reported significantly higher engagement with their child\'s academic progress',
          'Teachers saved an average of 5+ hours per week on manual record-keeping tasks',
          'Platform received strong satisfaction scores in post-launch surveys from all user roles',
        ],
      },
    ],
  },

  {
    id: 3,
    slug: 'taqaddum-assessments',
    title: 'Taqaddum Assessments',
    shortTitle: 'Taqaddum',
    category: 'Web • Dashboard',
    date: '15 May 2025',
    readTime: '13 min read',

    img: 'https://images.prismic.io/proxen/ahl_bgeQX7-eWbdP_Taqaddum.jpg?auto=format,compress',

    bannerImage:
      'https://images.prismic.io/proxen/ahl_bgeQX7-eWbdP_Taqaddum.jpg?auto=format,compress',

    link: '/case-study/taqaddum-assessments',

    excerpt:
      'An advanced educational assessment platform helping schools and institutions track performance and improve learning outcomes through smart analytics.',

    overview:
      'Taqaddum Assessments is a data-driven educational platform that transforms how schools manage, assign, and analyze student assessments. With a powerful admin dashboard, real-time analytics, and multi-subject support, Taqaddum gives institutions the clarity they need to improve teaching strategies and student outcomes.',

    client: 'Taqaddum Assessments',
    location: 'Middle East',
    year: '2025',
    industry: 'EdTech',

    services: [
      'UI/UX Design',
      'Dashboard Development',
      'Data Visualization',
      'System Architecture',
      'Brand Identity',
    ],

    technologies: [
      'React',
      'TypeScript',
      'Chart.js',
      'Node.js',
      'PostgreSQL',
      'Figma',
    ],

    tags: [
      'EdTech',
      'Assessment Platform',
      'Dashboard',
      'Analytics',
      'Education',
    ],

    seo: {
      title:
        'Taqaddum Assessments Case Study | Proxen Digital',

      description:
        'Learn how Proxen Digital built the Taqaddum Assessments platform — an advanced analytics-driven solution for educational assessment management in schools and institutions.',

      keywords: [
        'educational assessment platform',
        'school analytics dashboard',
        'EdTech case study',
        'student performance tracking',
        'assessment management system',
      ],
    },

    gallery: [
      {
        id: 1,
        image:
          'https://images.prismic.io/proxen/ahl_bgeQX7-eWbdP_Taqaddum.jpg?auto=format,compress',
        alt: 'Taqaddum Admin Dashboard Overview',
      },
      {
        id: 2,
        image:
          'https://images.prismic.io/proxen/ahl_bgeQX7-eWbdP_Taqaddum.jpg?auto=format,compress',
        alt: 'Taqaddum Student Assessment Analytics',
      },
    ],

    stats: [
      {
        label: 'Total Students',
        value: '135K+',
      },
      {
        label: 'Schools Connected',
        value: '535',
      },
      {
        label: 'Assessments Managed',
        value: '65+',
      },
    ],

    dataAos: 'fade-up',
    dataAosDelay: 600,

    sections: [
      {
        id: 'overview',
        title: 'Client Overview',
        type: 'text',
        content:
          'Taqaddum Assessments is an advanced educational platform serving over 135,000 students across 535 schools. The platform provides school administrators and teachers with a centralized system to assign, manage, and analyze assessments across multiple subjects — including Arabic, Islamic Studies, and Social Sciences — delivering real-time insights that drive smarter teaching decisions.',
      },
      {
        id: 'challenge',
        title: 'The Challenge',
        type: 'text',
        content:
          'Educational institutions in the region were struggling with fragmented assessment processes — paper-based tests, manual grading, and a complete lack of data visibility across classrooms and schools. Administrators had no efficient way to track student performance trends, identify at-risk learners, or compare outcomes across institutions. The client required a scalable, data-rich platform with an intuitive interface for non-technical educators.',
      },
      {
        id: 'approach',
        title: 'Our Approach',
        type: 'text',
        content:
          'We took a data-first approach, designing the platform around the key metrics school administrators and teachers actually need. We conducted workshops with educators to understand how they interpret student performance data and what actions they take as a result. This shaped the dashboard hierarchy, the analytics visualizations, and the assignment workflow. We paid special attention to Arabic language support and right-to-left layout compatibility throughout.',
      },
      {
        id: 'solution',
        title: 'What We Delivered',
        type: 'list',
        description:
          'A comprehensive assessment management and analytics platform with full administrative control.',
        items: [
          'Powerful admin dashboard with real-time KPIs: total students, schools, teachers, and active assessments',
          'Multi-subject assessment assignment system with flexible scheduling (daily, weekly, monthly)',
          'Interactive data visualizations showing student performance trends by subject and time period',
          'Assessment lifecycle management — from creation to assignment, completion tracking, and pending review',
          'Role-based access for district admins, school principals, and individual teachers',
          'Student management module with granular profile management and assessment history',
          'Dark/light mode toggle and fully responsive interface for desktop and tablet use',
        ],
      },
      {
        id: 'results',
        title: 'Results',
        type: 'list',
        description:
          'Taqaddum quickly became an essential operational tool for educational institutions across the region.',
        items: [
          'Platform managing assessments for over 135,000 students across 535 schools at launch',
          'Administrators reported a 70% reduction in time spent on manual assessment tracking',
          'Teachers gained actionable, real-time visibility into student performance for the first time',
          'Data-driven insights led to measurable improvements in targeted subject intervention strategies',
          'Platform successfully handled multi-tenant architecture across hundreds of institutions simultaneously',
        ],
      },
    ],
  },

  {
    id: 4,
    slug: 'atoxa',
    title: 'Atoxa',
    shortTitle: 'Atoxa',
    category: 'Web • Mobile App',
    date: '10 May 2025',
    readTime: '11 min read',

    img: 'https://images.prismic.io/proxen/ahl_bweQX7-eWbdQ_Atoxa.png?auto=format,compress',

    bannerImage:
      'https://images.prismic.io/proxen/ahl_bweQX7-eWbdQ_Atoxa.png?auto=format,compress',

    link: '/case-study/atoxa',

    excerpt:
      'A powerful dealership management platform with responsive web and mobile applications built to streamline inventory, leads, inquiries, and vehicle sales workflows.',

    overview:
      'Atoxa is a modern auto dealership management platform designed to bring clarity, speed, and intelligence to vehicle sales operations. From real-time inventory tracking to lead management, mobile dealer dashboards, and sales insights — Atoxa equips dealerships with the digital tools they need to compete in a fast-moving automotive market.',

    client: 'Atoxa',
    location: 'North America',
    year: '2025',
    industry: 'Automotive',

    services: [
      'UI/UX Design',
      'Web Development',
      'Mobile App Development',
      'System Architecture',
      'Brand Identity',
    ],

    technologies: [
      'React',
      'React Native',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'Figma',
    ],

    tags: [
      'Automotive',
      'Dealership',
      'Mobile App',
      'SaaS',
      'Dashboard',
    ],

    seo: {
      title:
        'Atoxa Case Study | Proxen Digital',

      description:
        'Explore how Proxen Digital designed and built Atoxa — a full-featured auto dealership management platform with web and mobile apps for modern vehicle sales operations.',

      keywords: [
        'auto dealership management system',
        'automotive SaaS platform',
        'car dealership app',
        'inventory management software',
        'dealership dashboard development',
      ],
    },

    gallery: [
      {
        id: 1,
        image:
          'https://images.prismic.io/proxen/ahl_bweQX7-eWbdQ_Atoxa.png?auto=format,compress',
        alt: 'Atoxa Dealership Dashboard Web View',
      },
      {
        id: 2,
        image:
          'https://images.prismic.io/proxen/ahl_bweQX7-eWbdQ_Atoxa.png?auto=format,compress',
        alt: 'Atoxa Mobile Dealer Dashboard',
      },
    ],

    stats: [
      {
        label: 'Inventory Accuracy',
        value: '99%',
      },
      {
        label: 'Lead Response Time',
        value: '-65%',
      },
      {
        label: 'Sales Visibility',
        value: 'Real-Time',
      },
    ],

    dataAos: 'fade-up',
    dataAosDelay: 650,

    sections: [
      {
        id: 'overview',
        title: 'Client Overview',
        type: 'text',
        content:
          'Atoxa is a dealership management platform built for modern auto dealers who need more than a spreadsheet to run their operations. The platform consolidates inventory management, customer inquiries, lead tracking, membership billing, and sales analytics into one seamless system — accessible from both a web browser and a native mobile app.',
      },
      {
        id: 'challenge',
        title: 'The Challenge',
        type: 'text',
        content:
          'Auto dealerships were operating with disconnected tools — one system for inventory, another for leads, and manual processes for everything else. Sales teams lacked real-time visibility into stock levels and deal pipelines, while managers had no reliable way to track performance trends or respond quickly to inquiries. The client needed a unified, fast, and mobile-accessible platform that their teams could actually adopt.',
      },
      {
        id: 'approach',
        title: 'Our Approach',
        type: 'text',
        content:
          'We began with an operational audit of a typical dealership workflow — from the moment a vehicle enters inventory to the final sale handover. We identified the critical pain points in lead handling, inquiry response, and stock visibility, then designed a system architecture that puts the most time-sensitive information front and center. The mobile app was treated as a first-class product, not an afterthought, ensuring salespeople on the floor had the same power as managers at their desks.',
      },
      {
        id: 'solution',
        title: 'What We Delivered',
        type: 'list',
        description:
          'A complete dealership operations platform, designed for speed, clarity, and real-world sales workflows.',
        items: [
          'Responsive web dashboard with real-time KPIs: total stock, units sold, revenue, and sales trends',
          'Native mobile app (iOS & Android) with a full dealer dashboard for on-the-go operations',
          'Inventory Management module with vehicle listings, status tracking, and stock updates',
          'Lead & Inquiry Tracking system with response workflows and follow-up management',
          'Membership and billing management for subscription-based dealer accounts',
          'Google Reviews integration and social media management tools built into the platform',
          'Real-time sales trend charts and period-over-period performance analytics',
          'Business profile management for dealership branding and public-facing listings',
        ],
      },
      {
        id: 'results',
        title: 'Results',
        type: 'list',
        description:
          'Atoxa delivered immediate operational improvements for dealerships from day one.',
        items: [
          'Achieved near-perfect inventory accuracy with real-time stock synchronization across web and mobile',
          'Lead response times dropped by 65% due to centralized inquiry management and instant mobile alerts',
          'Sales managers gained full pipeline visibility for the first time, enabling faster deal decisions',
          'Mobile app adoption among sales staff exceeded projections, with 80%+ daily active usage',
          'Dealerships reported stronger customer satisfaction scores tied to faster, more organized responses',
        ],
      },
    ],
  },
];

export const getAllCaseStudies = () => {
  return caseStudyData;
};

export const getCaseStudyBySlug = (
  slug: string
) => {
  return caseStudyData.find(
    (item) => item.slug === slug
  );
};

export const getRelatedCaseStudies = (
  currentSlug: string,
  limit = 3
) => {
  return caseStudyData
    .filter(
      (item) => item.slug !== currentSlug
    )
    .slice(0, limit);
};

export const getFeaturedCaseStudies = (
  limit = 3
) => {
  return caseStudyData.slice(0, limit);
};

export const getCaseStudyCategories = () => {
  const categoryMap = new Map<
    string,
    number
  >();

  caseStudyData.forEach((item) => {
    categoryMap.set(
      item.category,
      (categoryMap.get(item.category) ||
        0) + 1
    );
  });

  return Array.from(
    categoryMap.entries()
  ).map(([label, count]) => ({
    label,
    count,
    href: `/case-studies?category=${encodeURIComponent(
      label
    )}`,
  }));
};

export const getCaseStudiesByCategory = (
  category: string
) => {
  return caseStudyData.filter(
    (item) =>
      item.category.toLowerCase() ===
      category.toLowerCase()
  );
};

export default caseStudyData;