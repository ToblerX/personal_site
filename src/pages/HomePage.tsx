import { Link } from "react-router-dom";
import { profile } from "@/data/profile";
import { TagHeading } from "@/components/TagHeading";
import { SkillsSection } from "@/components/SkillsSection";
import { ContactLinks } from "@/components/ContactLinks";
import { HighlightedText } from "@/components/HighlightedText";
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
        <div className="flex flex-col justify-evenly h-full">
          {profile.languages.map((lang) => {
            const total = 6;
            const pct = Math.round((lang.segments / total) * 100);
            const textColor: Record<string, string> = {
              blue: "text-neon-blue glow-blue",
              orange: "text-neon-orange glow-orange",
              pink: "text-neon-pink glow-pink",
            };
            return (
              <div key={lang.name} className="space-y-1.5">
                <div className="flex items-baseline justify-between">
                  <div className="text-white text-sm font-medium">
                    <span className="font-pixel text-[8px] text-muted-foreground mr-1.5">
                      {lang.code}
                    </span>
                    {lang.name}
                  </div>
                  <div className={`font-pixel text-[7px] ${textColor[lang.color]}`}>
                    {lang.level}
                  </div>
                </div>
                <div className={`neon-bar-track neon-bar-${lang.color}`}>
                  <div
                    className="neon-bar-fill"
                    style={{ width: `${pct}%` }}
                  >
                    <div className="neon-bar-liquid" />
                    <div className="neon-bar-wave" />
                  </div>
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

  return (
    <div className="flex flex-col">
      {/* Hero Section + Info Cards */}
      <section className="flex flex-col md:flex-row items-start justify-center gap-8 pt-8">
        <div className="relative shrink-0 self-center md:self-stretch">
          <div className="w-64 md:w-72 h-full max-h-[500px] rounded-xl overflow-hidden border-2 border-neon-blue border-glow-blue">
            <img
              src={profile.photo}
              alt={profile.name}
              className="w-full h-full object-cover"
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
            <p className="text-muted-foreground leading-relaxed max-h-[7.5rem] overflow-y-auto pr-2 scrollbar-neon-purple">
              <HighlightedText text={profile.summary} />
            </p>
          </div>

          {/* Info cards stacked, expand inline */}
          <ExpandableCardGroup items={infoItems} columns={4} compact panelPosition="below" defaultActiveId="skills" />
        </div>
      </section>

      {/* Projects Link — full viewport width, vertically centered in remaining space */}
      <section id="projects" className="py-12 relative left-1/2 right-1/2 -mx-[50vw] w-screen px-3">
        <Link to="/projects" className="block w-full">
          <TagHeading tag="GO TO PROJECTS" color="pink" className="text-[4.8vw] md:text-4xl hover:opacity-80 transition-opacity text-center whitespace-nowrap animate-subtle-bob" />
        </Link>
      </section>
    </div>
  );
}
