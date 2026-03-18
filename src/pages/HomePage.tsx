import { Link } from "react-router-dom";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { TagHeading } from "@/components/TagHeading";
import { SkillsSection } from "@/components/SkillsSection";
import { ContactLinks } from "@/components/ContactLinks";
import { TechBadge } from "@/components/TechBadge";
import { EducationTimeline } from "@/components/EducationTimeline";
import {
  ExpandableCardGroup,
  type ExpandableItem,
} from "@/components/ExpandableCardGroup";

export function HomePage() {
  const infoItems: ExpandableItem[] = [
    {
      id: "skills",
      title: "SKILLS",
      preview: profile.techStack
        .slice(0, 6)
        .map((t) => t.name)
        .join(", ") + "...",
      renderExpanded: () => <SkillsSection />,
    },
    {
      id: "education",
      title: "EDUCATION",
      preview: profile.education.map((e) => e.degree).join(", "),
      renderExpanded: () => (
        <EducationTimeline education={profile.education} />
      ),
    },
    {
      id: "languages",
      title: "LANGUAGES",
      preview: profile.languages.map((l) => l.code).join(" · "),
      renderExpanded: () => (
        <div className="space-y-5">
          {profile.languages.map((lang) => {
            const total = 6;
            const colorMap = {
              blue: { bg: "bg-neon-blue", shadow: "shadow-neon-blue", text: "text-neon-blue", glow: "glow-blue" },
              orange: { bg: "bg-neon-orange", shadow: "shadow-neon-orange", text: "text-neon-orange", glow: "glow-orange" },
              pink: { bg: "bg-neon-pink", shadow: "shadow-neon-pink", text: "text-neon-pink", glow: "glow-pink" },
            };
            const c = colorMap[lang.color];
            return (
              <div key={lang.name} className="flex items-center gap-4">
                <div className="min-w-[120px] shrink-0">
                  <div className="text-white text-sm font-medium">
                    <span className="font-pixel text-[8px] text-muted-foreground mr-1.5">
                      {lang.code}
                    </span>
                    {lang.name}
                  </div>
                  <div className={`font-pixel text-[7px] ${c.text} ${c.glow} mt-0.5`}>
                    {lang.level}
                  </div>
                </div>
                <div className="flex gap-1.5 flex-1 justify-end">
                  {Array.from({ length: total }, (_, i) => (
                    <div
                      key={i}
                      className={`h-5 flex-1 max-w-[28px] rounded-full ${
                        i < lang.segments
                          ? `${c.bg} ${c.shadow}`
                          : "bg-white/10"
                      }`}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      ),
    },
    {
      id: "contact",
      title: "CONTACT",
      preview: "Email · GitHub · LinkedIn",
      renderExpanded: () => <ContactLinks />,
    },
  ];

  const projectItems: ExpandableItem[] = projects.map((project) => ({
    id: project.id,
    title: project.name,
    preview: project.tagline,
    renderExpanded: () => (
      <div className="flex flex-col md:flex-row gap-6">
        {/* Placeholder image */}
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

        {/* Project details */}
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
    <div className="space-y-32">
      {/* Hero Section + Info Cards */}
      <section className="flex flex-col md:flex-row items-start justify-center gap-8 pt-8">
        <div className="relative shrink-0 self-center md:self-start">
          <div className="w-64 md:w-72 rounded-xl overflow-hidden border-2 border-neon-blue border-glow-blue">
            <img
              src={profile.photo}
              alt={profile.name}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="flex-1 text-center md:text-left space-y-8">
          <div className="space-y-4">
            <h1 className="font-pixel text-lg md:text-2xl text-white">
              {profile.name}
            </h1>
            <p className="font-pixel text-xs text-neon-pink glow-pink">
              {"<"}{profile.role}{">"}
            </p>
            <p className="text-muted-foreground max-w-lg leading-relaxed">
              {profile.summary}
            </p>
          </div>

          {/* Info cards stacked, expand inline */}
          <ExpandableCardGroup items={infoItems} columns={4} compact panelPosition="below" defaultActiveId="skills" />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="space-y-8">
        <TagHeading tag="PROJECTS" color="pink" />
        <ExpandableCardGroup items={projectItems} columns={4} />
      </section>
    </div>
  );
}
