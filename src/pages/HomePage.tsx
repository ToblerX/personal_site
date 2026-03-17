import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { TagHeading } from "@/components/TagHeading";
import { TechStackGrid } from "@/components/TechStackGrid";
import { InfoCard } from "@/components/InfoCard";
import { ContactLinks } from "@/components/ContactLinks";
import { ProjectCard } from "@/components/ProjectCard";

export function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center gap-8 pt-8">
        <div className="relative shrink-0">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-xl overflow-hidden border-2 border-neon-blue border-glow-blue">
            <img
              src={profile.photo}
              alt={profile.name}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        <div className="text-center md:text-left space-y-4">
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
      </section>

      {/* Info Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <InfoCard title="EDUCATION">
          <div className="space-y-3">
            {profile.education.map((edu) => (
              <div key={edu.institution}>
                <p className="text-white text-sm font-medium">{edu.degree}</p>
                <p className="text-xs text-muted-foreground">
                  {edu.institution} &middot; {edu.year}
                </p>
              </div>
            ))}
          </div>
        </InfoCard>

        <InfoCard title="LANGUAGES">
          <div className="space-y-2">
            {profile.languages.map((lang) => (
              <div key={lang.name} className="flex items-center justify-between">
                <span className="text-white text-sm">
                  <span className="font-pixel text-[8px] text-neon-orange mr-2">
                    {lang.code}
                  </span>
                  {lang.name}
                </span>
                <span className="text-xs text-muted-foreground">
                  {lang.level}
                </span>
              </div>
            ))}
          </div>
        </InfoCard>

        <InfoCard title="CONTACT" className="sm:col-span-2 lg:col-span-1">
          <ContactLinks />
        </InfoCard>
      </section>

      {/* Tech Stack */}
      <section className="space-y-6">
        <TagHeading tag="SKILLS" color="orange" />
        <TechStackGrid items={profile.techStack} />
      </section>

      {/* Featured Projects */}
      <section id="projects" className="space-y-6">
        <TagHeading tag="PROJECTS" color="pink" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
