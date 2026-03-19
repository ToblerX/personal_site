import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { TagHeading } from "@/components/TagHeading";
import { TechBadge } from "@/components/TechBadge";
import {
  ExpandableCardGroup,
  type ExpandableItem,
} from "@/components/ExpandableCardGroup";

export function ProjectsPage() {
  const projectItems: ExpandableItem[] = projects.map((project) => ({
    id: project.id,
    title: project.name,
    preview: project.tagline,
    renderExpanded: () => (
      <div className="flex flex-col md:flex-row gap-6">
        <div className="shrink-0 w-full md:w-64 h-40 rounded-lg bg-card-border/50 border border-card-border flex items-center justify-center overflow-hidden">
          {project.image ? (
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="font-pixel text-[8px] text-muted-foreground">
              {project.name}
            </span>
          )}
        </div>

        <div className="flex-1 space-y-3">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.techBadges.map((tech) => (
              <TechBadge key={tech} name={tech} variant="orange" />
            ))}
          </div>
          <Link
            to={`/projects/${project.id}`}
            className="inline-block font-pixel text-[8px] text-neon-pink glow-pink hover:opacity-80 transition-opacity mt-2"
          >
            {">"} View details
          </Link>
        </div>
      </div>
    ),
  }));

  return (
    <div className="space-y-8">
      <TagHeading tag="PROJECTS" color="pink" />
      <ExpandableCardGroup items={projectItems} columns={4} />
    </div>
  );
}
