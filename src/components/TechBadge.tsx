import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface TechBadgeProps {
  name: string;
  variant?: "blue" | "pink" | "orange";
}

const colorMap = {
  blue: "border-neon-blue/50 text-neon-blue hover:border-glow-blue",
  pink: "border-neon-pink/50 text-neon-pink hover:border-glow-pink",
  orange: "border-neon-orange/50 text-neon-orange hover:border-glow-orange",
};

export function TechBadge({ name, variant = "blue" }: TechBadgeProps) {
  return (
    <Badge
      variant="outline"
      className={cn(
        "bg-card-bg font-body text-xs transition-all duration-300 cursor-default",
        colorMap[variant]
      )}
    >
      {name}
    </Badge>
  );
}
