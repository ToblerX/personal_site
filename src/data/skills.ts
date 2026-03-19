export interface SkillCategory {
  label: string;
  skills: string[];
  color: "blue" | "pink" | "orange";
}

export const mainSkills: string[] = [
  "Python",
  "TypeScript",
  "SQL",
  "FastAPI",
  "Next.js",
  "React.js",
];

export const extraCategories: SkillCategory[] = [
  {
    label: "TECHNOLOGIES",
    skills: ["Git", "Tailwind.css", "PyTorch", "AWS"],
    color: "pink",
  },
  {
    label: "DATABASE",
    skills: ["PostgreSQL", "MySQL", "SQLite", "MSSQL", "MongoDB", "SQLAlchemy"],
    color: "orange",
  },
  {
    label: "INFRASTRUCTURE",
    skills: ["S3", "Seaweed", "Google Cloud (GCD)", "Docker", "Linux", "Redis", "Celery"],
    color: "blue",
  },
  {
    label: "RELEVANT",
    skills: ["shadcn", "pytest", "Bash", "Copilot", "Claude Code", "Ruff", "pandas", "numpy", "matplotlib", "Caddy", "ngrok"],
    color: "orange",
  },
];
