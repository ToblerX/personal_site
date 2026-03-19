import { mainSkills, extraCategories } from "@/data/skills";

type NeonColor = "blue" | "pink" | "orange";

const colorClass: Record<NeonColor, string> = {
  blue: "text-neon-blue",
  pink: "text-neon-pink",
  orange: "text-neon-orange",
};

// Build map: lowercase skill name → tailwind class
const skillColor = new Map<string, string>();
for (const s of mainSkills) skillColor.set(s.toLowerCase(), colorClass.blue);
for (const cat of extraCategories)
  for (const s of cat.skills) skillColor.set(s.toLowerCase(), colorClass[cat.color]);

// Regex: longest names first to avoid partial matches (e.g. "PostgreSQL" before "SQL")
const pattern = new RegExp(
  `(${[...skillColor.keys()]
    .sort((a, b) => b.length - a.length)
    .map((s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|")})`,
  "gi"
);

export function HighlightedText({ text }: { text: string }) {
  const parts = text.split(pattern);
  return (
    <>
      {parts.map((part, i) => {
        const cls = skillColor.get(part.toLowerCase());
        return cls ? (
          <span key={i} className={cls}>
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        );
      })}
    </>
  );
}
