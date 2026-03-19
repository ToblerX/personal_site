import { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { TagHeading } from "@/components/TagHeading";
import { TechBadge } from "@/components/TechBadge";
import { TechAccordion } from "@/components/TechAccordion";
import { Timeline } from "@/components/Timeline";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import { PixelInProgress } from "@/components/PixelInProgress";

export function ProjectsPage() {
  const [activeProjectId, setActiveProjectId] = useState(projects[0].id);
  const activeProject = projects.find((p) => p.id === activeProjectId)!;

  return (
    <div className="space-y-6">
      {/* Back button */}
      <Link
        to="/"
        className="inline-block font-pixel text-[10px] text-neon-orange glow-orange hover:opacity-80 transition-opacity"
      >
        {"<"} BACK {"/>"}
      </Link>

      {/* Projects heading */}
      <TagHeading tag="PROJECTS" color="pink" />

      {/* Two-column layout */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left: project list */}
        <div className="md:w-64 shrink-0 flex flex-col gap-2">
          {projects.map((project) => {
            const isActive = project.id === activeProjectId;
            const isOpened = project.opened;

            return (
              <button
                key={project.id}
                onClick={() => setActiveProjectId(project.id)}
                className={cn(
                  "w-full text-left px-4 py-3 rounded-lg border transition-all duration-300",
                  isActive
                    ? "border-neon-pink/60 bg-neon-pink/5 shadow-[0_0_12px_rgba(255,0,128,0.15)]"
                    : isOpened
                      ? "border-neon-orange/40 bg-neon-orange/5 hover:border-neon-orange/60"
                      : "border-card-border bg-card hover:border-neon-pink/30"
                )}
              >
                <div className="flex items-center justify-between gap-2">
                  <p
                    className={cn(
                      "font-pixel text-[10px] transition-colors",
                      isActive
                        ? "text-neon-pink glow-pink"
                        : isOpened
                          ? "text-neon-orange glow-orange"
                          : "text-white"
                    )}
                  >
                    {project.name}
                  </p>
                  {isOpened && <PixelInProgress />}
                </div>
                <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                  {project.tagline}
                </p>
              </button>
            );
          })}
        </div>

        {/* Right: project detail panel */}
        <div className="flex-1 min-w-0 space-y-10">
          {/* Header */}
          <section className="space-y-4">
            <h2 className="font-pixel text-lg md:text-xl text-neon-pink glow-pink">
              {"<"}{activeProject.name}{">"}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {activeProject.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {activeProject.techBadges.map((tech) => (
                <TechBadge key={tech} name={tech} variant="orange" />
              ))}
            </div>
            {activeProject.privateNote ? (
              <div className="space-y-1.5 pt-2">
                {activeProject.privateNote.split("\n").map((line, i) => (
                  <p key={i} className="text-xs text-muted-foreground italic">
                    <span className="text-neon-pink glow-pink">*</span> {line.replace(/^\*\s*/, "")}
                  </p>
                ))}
              </div>
            ) : (
              <>
                <div className="flex items-start gap-3 pt-2">
                  <Button
                    variant="outline"
                    className="border-neon-blue/40 text-neon-blue hover:border-glow-blue transition-all duration-300"
                    asChild
                  >
                    <a
                      href={activeProject.repoUrl}
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
                      href={activeProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="size-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
                {activeProject.repoNote && (
                  <p className="text-xs text-muted-foreground italic">
                    <span className="text-neon-pink glow-pink">*</span> {activeProject.repoNote}
                  </p>
                )}
              </>
            )}
          </section>

          {/* Tech Stack Accordion */}
          <section className="space-y-6">
            <TagHeading tag="TECH STACK" color="blue" />
            {activeProject.techStackNote && (
              <p className="text-xs text-muted-foreground italic">
                <span className="text-neon-pink glow-pink">*</span> {activeProject.techStackNote}
              </p>
            )}
            <TechAccordion techStack={activeProject.techStack} />
          </section>

          {/* Roadmap */}
          <section className="space-y-6">
            <TagHeading tag="ROADMAP" color="orange" />
            <Timeline phases={activeProject.roadmap} />
          </section>
        </div>
      </div>
    </div>
  );
}
