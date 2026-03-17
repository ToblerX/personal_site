import { cn } from "@/lib/utils";

interface TagHeadingProps {
  tag: string;
  color?: "blue" | "pink" | "orange";
  className?: string;
}

const colorMap = {
  blue: "text-neon-blue glow-blue",
  pink: "text-neon-pink glow-pink",
  orange: "text-neon-orange glow-orange",
};

export function TagHeading({
  tag,
  color = "blue",
  className,
}: TagHeadingProps) {
  return (
    <h2
      className={cn(
        "font-pixel text-sm md:text-base tracking-wider",
        colorMap[color],
        className
      )}
    >
      {"<"}
      {tag}
      {">"}
    </h2>
  );
}
