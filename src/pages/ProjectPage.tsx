import { useParams, Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { TagHeading } from "@/components/TagHeading";
import { TechAccordion } from "@/components/TechAccordion";
import { Timeline } from "@/components/Timeline";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";

export function ProjectPage() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center py-20 space-y-4">
        <p className="font-pixel text-sm text-neon-pink glow-pink">
          {"<404>"}
        </p>
        <p className="text-muted-foreground">Project not found</p>
        <Button variant="outline" asChild>
          <Link to="/">
            <ArrowLeft className="size-4 mr-2" />
            Back to Home
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {/* Back link */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-neon-blue transition-colors"
      >
        <ArrowLeft className="size-4" />
        Back to projects
      </Link>

      {/* Header */}
      <section className="space-y-4">
        <h1 className="font-pixel text-lg md:text-xl text-neon-pink glow-pink">
          {"<"}{project.name}{">"}
        </h1>
        <p className="text-muted-foreground max-w-2xl leading-relaxed">
          {project.description}
        </p>

        <div className="flex gap-3 pt-2">
          <Button
            variant="outline"
            className="border-neon-blue/40 text-neon-blue hover:border-glow-blue transition-all duration-300"
            asChild
          >
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="size-4" />
              Repository
            </a>
          </Button>
          <Button
            variant="outline"
            className="border-neon-pink/40 text-neon-pink hover:border-glow-pink transition-all duration-300"
            asChild
          >
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="size-4" />
              Live Demo
            </a>
          </Button>
        </div>
      </section>

      {/* Tech Stack Accordion */}
      <section className="space-y-6">
        <TagHeading tag="TECH STACK" color="blue" />
        <TechAccordion techStack={project.techStack} />
      </section>

      {/* Roadmap */}
      <section className="space-y-6">
        <TagHeading tag="ROADMAP" color="orange" />
        <Timeline phases={project.roadmap} />
      </section>
    </div>
  );
}
