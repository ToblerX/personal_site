export interface RoadmapNode {
  date: string;
  title: string;
  description: string;
  side: "left" | "right";
}

export interface RoadmapPhase {
  name: string;
  nodes: RoadmapNode[];
  completed?: boolean;
}

export interface ProjectTech {
  name: string;
  description: string;
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image?: string;
  repoUrl: string;
  liveUrl: string;
  techBadges: string[];
  techStack: ProjectTech[];
  roadmap: RoadmapPhase[];
  opened?: boolean;
  repoNote?: string;
  techStackNote?: string;
  privateNote?: string;
}

export const projects: Project[] = [
  {
    id: "teachapp",
    name: "Teachapp",
    tagline: "Management application for private tutors and their students",
    opened: true,
    description:
      "A full-scale management application designed for private tutors to manage their students, track progress, and automate administrative tasks. Features include an automated gradebook, gamification system, role-based profiles, and a custom registration flow.",
    privateNote: "The repository is private as the source code is not available for sharing due to commercial plans for the project.\n* A live demo will be published once the first user feedback iteration is complete and the planned features are fully implemented.",
    repoUrl: "#",
    liveUrl: "#",
    techBadges: ["NEXT.js", "FastAPI", "PostgreSQL", "Redis"],
    techStack: [
      {
        name: "NEXT.js & Tailwind.css & shadcn",
        description:
          "Built the responsive UI/UX with server-side rendering, component library, and utility-first styling for a seamless tutor dashboard experience.",
      },
      {
        name: "FastAPI",
        description:
          "Developed a high-performance RESTful API with secure no-password authentication and Clean Architecture patterns.",
      },
      {
        name: "PostgreSQL & SQLAlchemy & Alembic",
        description:
          "Designed the relational data model for students, tutors, grades, and sessions. Managed schema migrations with Alembic.",
      },
      {
        name: "Redis & S3 (Seaweed)",
        description:
          "Implemented caching layer with Redis for session management and integrated S3-compatible storage via Seaweed for file uploads.",
      },
      {
        name: "Docker & Caddy",
        description:
          "Containerized the entire application stack and deployed on a Linux server with Caddy as the reverse proxy.",
      },
      {
        name: "Ruff & pytest",
        description:
          "Maintained code quality with Ruff for linting/static analysis and pytest for test-driven development.",
      },
    ],
    roadmap: [
      {
        name: "Development",
        nodes: [
          {
            date: "Dec 2025",
            title: "Project initialization",
            description:
              "Set up monorepo structure, configured Docker environment, and established Clean Architecture with CQRS patterns.",
            side: "left",
          },
          {
            date: "Dec 2025",
            title: "Authentication system",
            description:
              "Implemented secure no-password authentication flow with role-based access control.",
            side: "right",
          },
          {
            date: "Jan 2026",
            title: "Core API & database",
            description:
              "Built RESTful API endpoints for student/tutor management, gradebook, and session tracking.",
            side: "left",
          },
          {
            date: "Jan 2026",
            title: "Frontend dashboard",
            description:
              "Developed responsive tutor dashboard with NEXT.js, Tailwind.css, and shadcn components.",
            side: "right",
          },
        ],
      },
      {
        name: "Testing",
        nodes: [
          {
            date: "Feb 2026",
            title: "Unit & integration tests",
            description:
              "Wrote comprehensive test suites with pytest covering API endpoints and business logic.",
            side: "left",
          },
          {
            date: "Feb 2026",
            title: "Quality assurance",
            description:
              "Conducted code reviews, static analysis with Ruff, and end-to-end testing.",
            side: "right",
          },
        ],
      },
      {
        name: "Deployment",
        nodes: [
          {
            date: "Mar 2026",
            title: "Infrastructure setup",
            description:
              "Configured Linux server, Docker containers, and Caddy reverse proxy for production.",
            side: "left",
          },
          {
            date: "Mar 2026",
            title: "Launch & monitoring",
            description:
              "Deployed application, set up monitoring, and began iterating on user feedback.",
            side: "right",
          },
        ],
      },
      {
        name: "Growth",
        completed: false,
        nodes: [
          {
            date: "Apr 2026",
            title: "App optimization",
            description:
              "Applied key improvements and refinements based on early user feedback and real-world usage patterns.",
            side: "left",
          },
          {
            date: "Q2 2026",
            title: "AI-powered homework checking",
            description:
              "Integrating external AI services to enable automatic homework verification and grading.",
            side: "right",
          },
          {
            date: "Q3 2026",
            title: "Public tutor access",
            description:
              "Opening the platform for other tutors to register and use the tool for their own students.",
            side: "left",
          },
          {
            date: "Q3 2026",
            title: "Tutor feedback iteration",
            description:
              "Gathering and applying feedback from the tutor community to improve workflows and usability.",
            side: "right",
          },
          {
            date: "Q4 2026+",
            title: "Continuous feature development",
            description:
              "New features and improvements will keep coming as the platform evolves — stay tuned!",
            side: "left",
          },
        ],
      },
    ],
  },
  {
    id: "merchivana",
    name: "MerchIvana",
    tagline: "Full-scale e-commerce web application for a blogger's merch shop",
    opened: true,
    description:
      "A complete e-commerce platform built for a content creator's merchandise store. Includes product catalog, shopping cart, payment integration via Mono Acquiring, logistics via Nova Post API, and a comprehensive admin panel.",
    privateNote: "This project is currently in development. No code, visuals, or specific insights can be shared before the official release and the commercial client's agreement.",
    repoUrl: "#",
    liveUrl: "#",
    techBadges: ["NEXT.js", "FastAPI", "Redis", "Docker"],
    techStack: [
      {
        name: "NEXT.js & Tailwind.css & shadcn",
        description:
          "Built the storefront with server-side rendering for SEO, responsive product pages, and a smooth checkout flow.",
      },
      {
        name: "FastAPI",
        description:
          "Implemented Clean Architecture with CQRS patterns for order processing, inventory management, and admin operations.",
      },
      {
        name: "Redis & Celery",
        description:
          "Integrated caching for product data and async task processing with Celery for email notifications and order confirmation.",
      },
      {
        name: "Mono Acquiring & Nova Post API",
        description:
          "Integrated Stripe-like payment processing via Mono Acquiring and automated shipping/logistics through Nova Post API.",
      },
      {
        name: "S3 (Seaweed) & SMTP",
        description:
          "Managed product images and media via S3-compatible storage. Integrated SMTP for transactional emails.",
      },
      {
        name: "Docker & Caddy",
        description:
          "Deployed with Docker containers on Linux server with Caddy for SSL termination and reverse proxy.",
      },
    ],
    roadmap: [
      {
        name: "Development",
        completed: true,
        nodes: [
          {
            date: "Jan 2026",
            title: "Project setup & architecture",
            description:
              "Established Clean Architecture with CQRS, set up Docker development environment, and configured a test-driven development workflow with pytest from the start.",
            side: "left",
          },
          {
            date: "Jan 2026",
            title: "Product catalog & storefront",
            description:
              "Built product listing, detail pages, and shopping cart with NEXT.js. Covered new endpoints and business logic with unit and integration tests.",
            side: "right",
          },
          {
            date: "Feb 2026",
            title: "Payment & logistics integration",
            description:
              "Integrated Mono Acquiring for payments and Nova Post API for shipping automation. Wrote tests for payment flows, webhook handling, and shipping state transitions.",
            side: "left",
          },
          {
            date: "Feb 2026",
            title: "Admin panel",
            description:
              "Developed comprehensive admin panel for CRUD operations and entity management. Added test coverage for admin-specific permissions and data validation.",
            side: "right",
          },
          {
            date: "Mar 2026",
            title: "Sales & promo codes",
            description:
              "Implemented discount engine with promo code generation, validation, and usage tracking. Tests written for edge cases including expiration, stacking rules, and rate limits.",
            side: "left",
          },
          {
            date: "Mar 2026",
            title: "Mailing & advertising",
            description:
              "Built mailing system for promotional campaigns and order-related notifications via Celery async tasks and SMTP integration. Tested delivery pipelines and template rendering.",
            side: "right",
          },
        ],
      },
      {
        name: "Testing",
        completed: false,
        nodes: [
          {
            date: "Apr 2026",
            title: "End-to-end regression",
            description:
              "Ran full regression suite accumulated through TDD across all modules. Verified cross-feature interactions between payments, promo codes, and mailing.",
            side: "left",
          },
          {
            date: "Apr 2026",
            title: "Load & stress testing",
            description:
              "Verified Redis caching, Celery task processing, and payment flows under simulated traffic to ensure production readiness.",
            side: "right",
          },
        ],
      },
      {
        name: "Deployment",
        completed: false,
        nodes: [
          {
            date: "Apr 2026",
            title: "Production deployment",
            description:
              "Deployed to Linux server with Docker, configured Caddy, and set up monitoring.",
            side: "left",
          },
          {
            date: "Apr 2026",
            title: "Continuous iteration",
            description:
              "Ongoing feature development and performance optimization based on analytics.",
            side: "right",
          },
        ],
      },
    ],
  },
  {
    id: "edwise",
    name: "Edwise",
    tagline: "EdTech web application for educational institutions",
    description:
      "A full-scale edtech platform developed within a 3-person team for educational institutions. Features organization management, users importing from a provided database, administrative systems, forum with media support, real-time message translation, and AWS S3 integration.",
    repoUrl: "https://github.com/ToblerX/edwise_copy",
    repoNote: "Original repository is private. The link leads to a copied version.",
    liveUrl: "https://www.youtube.com/watch?v=YXmNWDW7Fx8",
    techBadges: ["FastAPI", "AWS S3", "PostgreSQL", "LibreTranslate"],
    techStackNote: "The displayed tech stack reflects my personal contributions according to my role in the team. The full tech specification can be found in the repository.",
    techStack: [
      {
        name: "FastAPI",
        description:
          "Implemented core server-side logic for organization management and administrative systems with strict role distribution.",
      },
      {
        name: "AWS S3",
        description:
          "Integrated S3 bucket storage for forum media and attachments, enabling scalable centralized data management.",
      },
      {
        name: "SMTP & Forum System",
        description:
          "Built communication services and forum with media support, comments, and full-text search functionality.",
      },
      {
        name: "LibreTranslate API",
        description:
          "Integrated external translation API for real-time message translation across multiple languages.",
      },
      {
        name: "PostgreSQL & SQLAlchemy",
        description:
          "Designed relational schema for organizations, users, forums, and media with efficient query patterns.",
      },
    ],
    roadmap: [
      {
        name: "Development",
        nodes: [
          {
            date: "Jun 2025",
            title: "Team formation & architecture",
            description:
              "Formed 3-person team, defined role distribution, and established project architecture.",
            side: "left",
          },
          {
            date: "Jul 2025",
            title: "Core organization management",
            description:
              "Built server-side logic for organizations, users, and administrative workflows.",
            side: "right",
          },
          {
            date: "Sep 2025",
            title: "Forum & communication",
            description:
              "Implemented forum system with media support, SMTP integration, and search.",
            side: "left",
          },
          {
            date: "Nov 2025",
            title: "Translation & S3 integration",
            description:
              "Added real-time translation via LibreTranslate and AWS S3 for media storage.",
            side: "right",
          },
        ],
      },
      {
        name: "Testing",
        nodes: [
          {
            date: "Dec 2025",
            title: "Integration testing",
            description:
              "Tested cross-service communication, S3 uploads, and translation accuracy.",
            side: "left",
          },
          {
            date: "Jan 2026",
            title: "User acceptance testing",
            description:
              "Validated workflows with sample educational institutions and gathered feedback.",
            side: "right",
          },
        ],
      },
      {
        name: "Deployment",
        nodes: [
          {
            date: "Jan 2026",
            title: "Staging deployment",
            description:
              "Deployed to staging environment for final validation before production release.",
            side: "left",
          },
          {
            date: "Feb 2026",
            title: "Production release",
            description:
              "Released to production with monitoring and documentation. Note: this project is solely educational and was not planned to fulfill any commercial goals — no real clients were involved.",
            side: "right",
          },
        ],
      },
    ],
  },
  {
    id: "homework-api",
    name: "Homework API",
    tagline: "AI-driven API for English skill feedback using PyTorch & Anthropic",
    description:
      "An AI-powered API that provides concise feedback on productive English skills. Features essay analysis from submitted text photos via Google Cloud OCR and speech analysis from voice recordings for real-time performance evaluation.",
    privateNote: "This project is currently fully private due to future plans for personal use.",
    repoUrl: "#",
    liveUrl: "#",
    techBadges: ["Python", "PyTorch", "Anthropic API", "Google Cloud"],
    techStack: [
      {
        name: "PyTorch",
        description:
          "Used PyTorch to fine-tune, test, and compare external NLP models for analyzing English text quality, grammar patterns, and structured feedback scoring.",
      },
      {
        name: "Anthropic API",
        description:
          "Leveraged Claude for generating detailed, contextual feedback on essays and speech transcripts.",
      },
      {
        name: "Google Cloud (Vision & Speech)",
        description:
          "Integrated Google Cloud Vision API for OCR on submitted essay photos and Speech-to-Text for voice recording analysis.",
      },
      {
        name: "FastAPI",
        description:
          "Built the REST API layer for receiving submissions, processing through the AI pipeline, and returning structured feedback.",
      },
    ],
    roadmap: [
      {
        name: "Development",
        nodes: [
          {
            date: "Apr 2025",
            title: "API architecture & AI pipeline",
            description:
              "Designed the API structure and AI processing pipeline with PyTorch and Anthropic API.",
            side: "left",
          },
          {
            date: "Apr 2025",
            title: "Essay analysis feature",
            description:
              "Implemented photo submission → OCR → text analysis → feedback generation pipeline.",
            side: "right",
          },
          {
            date: "May 2025",
            title: "Speech analysis feature",
            description:
              "Built voice recording → speech-to-text → pronunciation evaluation → feedback pipeline.",
            side: "left",
          },
        ],
      },
      {
        name: "Testing",
        nodes: [
          {
            date: "May 2025",
            title: "AI accuracy validation",
            description:
              "Tested feedback quality across diverse English proficiency levels and accents.",
            side: "right",
          },
        ],
      },
      {
        name: "Deployment",
        nodes: [
          {
            date: "May 2025",
            title: "API deployment",
            description:
              "Deployed the API and configured cloud service connections. Currently only open for personal use.",
            side: "left",
          },
        ],
      },
    ],
  },
];
