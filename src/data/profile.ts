export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  instagram: string;
}

export interface Education {
  institution: string;
  degree: string;
  year: string;
  typeLabel: string;
  status: string;
  url: string;
  icon: string;
  logo?: string;
  topics?: {
    label: string;
    items: string[];
  };
}

export interface Language {
  name: string;
  level: string;
  code: string;
  segments: number; // filled segments out of 6
  color: "blue" | "orange" | "pink";
}

export interface TechItem {
  name: string;
  category: "language" | "framework" | "database" | "tool" | "cloud" | "api";
}

export const profile = {
  name: "Yaroslav Fedorov",
  role: "Software Engineer",
  photo: "/nobg_retouched_squeezed.png",
  summary:
    "Software Engineer with 3+ years of experience developing scalable solutions. Focused on server-side architecture with comprehensive frontend knowledge. Experienced in AI-driven services through Anthropic API, Google Cloud, and PyTorch for NLP and image analysis solutions.",

  contact: {
    email: "fyaroslav.offers@gmail.com",
    phone: "+48 793 698 794",
    linkedin: "https://www.linkedin.com/in/yaroslav-fedorov-3056472b9/",
    github: "https://github.com/ToblerX",
    instagram: "https://www.instagram.com/yarodevs/",
  } satisfies ContactInfo,

  education: [
    {
      institution: "WSB Merito University",
      degree: "Bachelor of Computer Science",
      year: "2026",
      typeLabel: "UNIVERSITY DEGREE",
      status: "Expected",
      url: "https://www.merito.pl/",
      icon: "GraduationCap",
      logo: "/wsb_logo.jpg",
      topics: {
        label: "Core Subjects",
        items: ["Data Structures", "Algorithms", "Key Projects"],
      },
    },
    {
      institution: "Coursera (Meta)",
      degree: "React Specialization",
      year: "2025",
      typeLabel: "CERTIFICATE",
      status: "Completed",
      url: "https://coursera.org/share/e55ebad5ef0191a59de706c1322ec642",
      icon: "Award",
      logo: "/meta_logo.avif",
      topics: {
        label: "Key Topics",
        items: ["Redux", "JSX", "Hooks"],
      },
    },
  ] satisfies Education[],

  languages: [
    { name: "English", level: "C2 Proficiency", code: "EN", segments: 5, color: "blue" },
    { name: "Polish", level: "C1 Advanced", code: "PL", segments: 4, color: "orange" },
    { name: "Ukrainian", level: "Native", code: "UA", segments: 6, color: "pink" },
  ] satisfies Language[],

  techStack: [
    { name: "Python", category: "language" },
    { name: "TypeScript", category: "language" },
    { name: "SQL", category: "language" },
    { name: "FastAPI", category: "framework" },
    { name: "React.js", category: "framework" },
    { name: "NEXT.js", category: "framework" },
    { name: "Tailwind.css", category: "framework" },
    { name: "PyTorch", category: "framework" },
    { name: "shadcn", category: "framework" },
    { name: "AWS", category: "cloud" },
    { name: "S3", category: "cloud" },
    { name: "Google Cloud", category: "cloud" },
    { name: "Docker", category: "tool" },
    { name: "Git", category: "tool" },
    { name: "Celery", category: "tool" },
    { name: "pytest", category: "tool" },
    { name: "Linux", category: "tool" },
    { name: "PostgreSQL", category: "database" },
    { name: "MySQL", category: "database" },
    { name: "MongoDB", category: "database" },
    { name: "Redis", category: "database" },
    { name: "SQLAlchemy", category: "framework" },
    { name: "Bash", category: "tool" },
    { name: "Copilot", category: "tool" },
    { name: "Ruff", category: "tool" },
  ] satisfies TechItem[],
};
