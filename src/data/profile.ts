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
  role: "Fullstack Engineer",
  photo: "/nobg_retouched_squeezed.png",
  summary:
    "Fullstack Engineer with 3+ years of experience developing scalable solutions. My main specialization is backend engineering using FastAPI framework in combination with other infrastructure tools, such as Docker, PostgreSQL, Celery, Redis, AWS, Google Cloud (GCD), etc. Moreover, I possess experience in other programming fields. For example, frontend development using TypeScript/JavaScript, Next.js, React.js, Tailwind.css and other related libraries. In addition, I am keen on broadening my knowledge in other technologies as well. For instance, I have experience in usage of PyTorch, pandas, numpy, matplotlib, etc. to work with data pipelines in my projects. Furthermore, I have hands-on experience with Linux servers, Caddy and containerization tools for apps deployment. Regardless the type of job I do, I stick to the best engineering practices. During the development process, I always use Git for version control; Clean Code principles, patterns like CQRS and REST, linting for code readability and maintainability; Test-Driven Development techniques for ensuring software reliability and minimizing bugs. To sum up, technical skills are not the only thing I thrive in. My experience of working in development teams of different kinds gives me strong communication, cross-functional collaboration, effective problem-solving, and the adaptability to seamlessly integrate into any workflow.",

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
    { name: "Next.js", category: "framework" },
    { name: "React.js", category: "framework" },
    { name: "Git", category: "tool" },
    { name: "Tailwind.css", category: "framework" },
    { name: "PyTorch", category: "framework" },
    { name: "AWS", category: "cloud" },
    { name: "PostgreSQL", category: "database" },
    { name: "MySQL", category: "database" },
    { name: "SQLite", category: "database" },
    { name: "MSSQL", category: "database" },
    { name: "MongoDB", category: "database" },
    { name: "SQLAlchemy", category: "framework" },
    { name: "S3", category: "cloud" },
    { name: "Seaweed", category: "cloud" },
    { name: "Google Cloud (GCD)", category: "cloud" },
    { name: "Docker", category: "tool" },
    { name: "Linux", category: "tool" },
    { name: "Redis", category: "database" },
    { name: "Celery", category: "tool" },
    { name: "shadcn", category: "framework" },
    { name: "pytest", category: "tool" },
    { name: "Bash", category: "tool" },
    { name: "Copilot", category: "tool" },
    { name: "Claude Code", category: "tool" },
    { name: "Ruff", category: "tool" },
    { name: "pandas", category: "tool" },
    { name: "numpy", category: "tool" },
    { name: "matplotlib", category: "tool" },
    { name: "Caddy", category: "tool" },
    { name: "ngrok", category: "tool" },
  ] satisfies TechItem[],
};
