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
}

export interface Language {
  name: string;
  level: string;
  code: string;
}

export interface TechItem {
  name: string;
  category: "language" | "framework" | "database" | "tool" | "cloud" | "api";
}

export const profile = {
  name: "Yaroslav Fedorov",
  role: "Software Engineer",
  photo: "/assets/photo.png",
  summary:
    "Software Engineer with 3+ years of experience developing scalable solutions. Focused on server-side architecture with comprehensive frontend knowledge. Experienced in AI-driven services through Anthropic API, Google Cloud, and PyTorch for NLP and image analysis solutions.",

  contact: {
    email: "fyaroslav.offers@gmail.com",
    phone: "+48 793 698 794",
    linkedin: "https://linkedin.com/in/yaroslav-fedorov",
    github: "https://github.com/yaroslav-fedorov",
    instagram: "https://instagram.com/yaroslav.fedorov",
  } satisfies ContactInfo,

  education: [
    {
      institution: "WSB Merito University",
      degree: "Bachelor of Computer Science",
      year: "2026",
    },
    {
      institution: "Coursera (Meta)",
      degree: "React Specialization",
      year: "2025",
    },
  ] satisfies Education[],

  languages: [
    { name: "English", level: "C2 Proficiency", code: "EN" },
    { name: "Polish", level: "C1 Advanced", code: "PL" },
    { name: "Ukrainian", level: "Native", code: "UA" },
  ] satisfies Language[],

  techStack: [
    { name: "Python", category: "language" },
    { name: "TypeScript", category: "language" },
    { name: "SQL", category: "language" },
    { name: "Bash", category: "language" },
    { name: "FastAPI", category: "framework" },
    { name: "React.js", category: "framework" },
    { name: "NEXT.js", category: "framework" },
    { name: "Tailwind.css", category: "framework" },
    { name: "SQLAlchemy", category: "framework" },
    { name: "PyTorch", category: "framework" },
    { name: "shadcn", category: "framework" },
    { name: "AWS", category: "cloud" },
    { name: "S3", category: "cloud" },
    { name: "Google Cloud", category: "cloud" },
    { name: "Docker", category: "tool" },
    { name: "Git", category: "tool" },
    { name: "Celery", category: "tool" },
    { name: "pytest", category: "tool" },
    { name: "Ruff", category: "tool" },
    { name: "Linux", category: "tool" },
    { name: "PostgreSQL", category: "database" },
    { name: "MySQL", category: "database" },
    { name: "MongoDB", category: "database" },
    { name: "Redis", category: "database" },
    { name: "Anthropic API", category: "api" },
    { name: "RESTful API", category: "api" },
  ] satisfies TechItem[],
};
