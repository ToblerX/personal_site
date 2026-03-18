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
  "React.js",
];

export const extraCategories: SkillCategory[] = [
  {
    label: "FRAMEWORKS",
    skills: ["NEXT.js", "Tailwind.css", "SQLAlchemy", "PyTorch", "shadcn"],
    color: "pink",
  },
  {
    label: "DATABASES",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
    color: "orange",
  },
  {
    label: "INFRASTRUCTURE",
    skills: ["AWS", "S3", "Google Cloud", "Docker", "Linux"],
    color: "blue",
  },
  {
    label: "TOOLS",
    skills: ["Git", "Celery", "pytest", "Bash", "Copilot", "Ruff"],
    color: "orange",
  },
];
