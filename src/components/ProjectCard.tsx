import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TechBadge } from "./TechBadge";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link to={`/projects/${project.id}`}>
      <Card className="bg-card-bg border-card-border transition-all duration-300 hover:border-glow-pink hover:scale-[1.02] cursor-pointer h-full">
        <CardHeader>
          <CardTitle className="font-pixel text-xs text-neon-pink glow-pink">
            {"<"}
            {project.name}
            {">"}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-muted-foreground">{project.tagline}</p>
          <div className="flex flex-wrap gap-1.5">
            {project.techBadges.map((tech) => (
              <TechBadge key={tech} name={tech} variant="orange" />
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
