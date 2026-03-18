import type { Education } from "@/data/profile";
import { TechBadge } from "@/components/TechBadge";
import { GraduationCap, Award, ExternalLink, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  Award,
};

function EducationCard({ edu }: { edu: Education }) {
  const Icon = iconMap[edu.icon] ?? GraduationCap;

  return (
    <div className="rounded-xl border-2 border-neon-purple border-glow-purple bg-card-bg p-5 space-y-3">
      {/* Header: icon + type label + logo placeholder */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon className="size-4 text-neon-purple" />
          <span className="font-pixel text-[8px] text-neon-purple glow-purple">
            {"<"}{edu.typeLabel}{">"}
          </span>
        </div>
        {edu.logo ? (
          <img
            src={edu.logo}
            alt={edu.institution}
            className="w-10 h-10 rounded object-contain bg-white/10"
          />
        ) : (
          <div className="w-10 h-10 rounded bg-card-border/50 border border-card-border flex items-center justify-center">
            <span className="text-[5px] text-muted-foreground font-pixel">LOGO</span>
          </div>
        )}
      </div>

      {/* Degree + link icon */}
      <div className="flex items-center gap-2">
        <p className="text-white text-sm font-medium">{edu.degree}</p>
        {edu.url && (
          <a
            href={edu.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neon-purple hover:text-neon-blue transition-colors shrink-0"
          >
            <ExternalLink className="size-4" />
          </a>
        )}
      </div>

      {/* Institution and year */}
      <p className="text-xs text-muted-foreground">
        {edu.institution}
        <br />
        {edu.status}: {edu.year}
      </p>

      {/* Topics */}
      {edu.topics && (
        <div>
          <p className="text-xs text-muted-foreground font-medium mb-2">
            {edu.topics.label}:
          </p>
          <div className="flex flex-wrap gap-1.5">
            {edu.topics.items.map((topic) => (
              <TechBadge key={topic} name={topic} variant="purple" />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

interface EducationTimelineProps {
  education: Education[];
}

export function EducationTimeline({ education }: EducationTimelineProps) {
  return (
    <>
      {/* Desktop */}
      <div className="hidden md:block">
        {/* Cards */}
        <div className="grid grid-cols-2 gap-6">
          {education.map((edu) => (
            <EducationCard key={edu.institution} edu={edu} />
          ))}
        </div>

        {/* Connectors + Timeline */}
        <div className="relative mt-0 pt-6">
          {/* Connector lines from cards to dots */}
          <div className="absolute left-1/4 top-0 w-px h-6 bg-neon-blue/40 -translate-x-px" />
          <div className="absolute left-3/4 top-0 w-px h-6 bg-neon-blue/40 -translate-x-px" />

          {/* Horizontal timeline bar */}
          <div className="relative">
            <div className="h-0.5 bg-neon-blue/30 w-full" />

            {/* Year dot + label — left (latest) */}
            <div className="absolute left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <span className="font-pixel text-[10px] text-neon-blue glow-blue mb-2 absolute -top-6 whitespace-nowrap">
                {education[0]?.year}
              </span>
              <div className="w-3 h-3 rounded-full bg-background border-2 border-neon-blue shadow-neon-blue" />
            </div>

            {/* Year dot + label — right */}
            <div className="absolute left-3/4 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <span className="font-pixel text-[10px] text-neon-blue glow-blue mb-2 absolute -top-6 whitespace-nowrap">
                {education[1]?.year}
              </span>
              <div className="w-3 h-3 rounded-full bg-background border-2 border-neon-blue shadow-neon-blue" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden space-y-4">
        {education.map((edu) => (
          <EducationCard key={edu.institution} edu={edu} />
        ))}
      </div>
    </>
  );
}
