import type { TechItem } from "@/data/profile";
import { TechBadge } from "./TechBadge";

interface TechStackGridProps {
  items: TechItem[];
}

const categoryColor: Record<TechItem["category"], "blue" | "pink" | "orange"> =
  {
    language: "blue",
    framework: "pink",
    database: "orange",
    tool: "orange",
    cloud: "blue",
    api: "pink",
  };

export function TechStackGrid({ items }: TechStackGridProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <TechBadge
          key={item.name}
          name={item.name}
          variant={categoryColor[item.category]}
        />
      ))}
    </div>
  );
}
