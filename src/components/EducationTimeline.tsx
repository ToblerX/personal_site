import { useState, useRef, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import type { Education } from "@/data/profile";
import { TechBadge } from "@/components/TechBadge";
import { GraduationCap, Award, ExternalLink, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  Award,
};

/* ── Popup card shown on hover (rendered via portal) ── */
function EducationPopup({
  edu,
  anchorRect,
  visible,
  onMouseEnter,
  onMouseLeave,
}: {
  edu: Education;
  anchorRect: DOMRect;
  visible: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  const Icon = iconMap[edu.icon] ?? GraduationCap;

  return createPortal(
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={cn(
        "fixed rounded-xl border-2 border-neon-purple border-glow-purple bg-card-bg px-5 py-4 transition-opacity duration-150 w-[320px]",
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
      style={{
        bottom: window.innerHeight - anchorRect.top + 12,
        left: anchorRect.left + anchorRect.width / 2 - 160,
        zIndex: 9999,
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
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

      {/* Institution + link */}
      <p className="text-xs text-muted-foreground mb-1">
        {edu.institution}
        {edu.url && (
          <a
            href={edu.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neon-purple hover:text-neon-blue transition-colors ml-1.5 inline-block align-middle"
          >
            <ExternalLink className="size-3" />
          </a>
        )}
      </p>
      <p className="text-xs text-muted-foreground mb-3">
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
    </div>,
    document.body
  );
}

/* ── Main component ── */
interface EducationTimelineProps {
  education: Education[];
}

export function EducationTimeline({ education }: EducationTimelineProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [popupVisible, setPopupVisible] = useState(false);
  const [anchorRect, setAnchorRect] = useState<DOMRect | null>(null);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);

  const clearCloseTimer = useCallback(() => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
  }, []);

  const close = useCallback(() => {
    setPopupVisible(false);
    setTimeout(() => setHoveredIdx(null), 150);
  }, []);

  const handleNodeEnter = useCallback(
    (idx: number) => {
      clearCloseTimer();
      const el = nodeRefs.current[idx];
      if (el) setAnchorRect(el.getBoundingClientRect());
      setHoveredIdx(idx);
      requestAnimationFrame(() => setPopupVisible(true));
    },
    [clearCloseTimer]
  );

  const handleNodeLeave = useCallback(() => {
    clearCloseTimer();
    closeTimeout.current = setTimeout(close, 150);
  }, [clearCloseTimer, close]);

  const handlePopupEnter = useCallback(() => {
    clearCloseTimer();
  }, [clearCloseTimer]);

  const handlePopupLeave = useCallback(() => {
    close();
  }, [close]);

  useEffect(() => {
    return () => {
      if (closeTimeout.current) clearTimeout(closeTimeout.current);
    };
  }, []);

  return (
    <>
      {/* ── Desktop: horizontal timeline ── */}
      <div className="hidden md:flex flex-col justify-end h-full">
        {/* Nodes with logos, dots, and labels */}
        <div className="relative flex justify-around">
          {/* Horizontal connecting line — positioned at the dot row */}
          <div
            className="absolute left-0 right-0 h-0.5 bg-neon-purple/30"
            style={{ top: "calc(40px + 12px + 7px)" }}
          />

          {education.map((edu, idx) => {
            const isActive = hoveredIdx === idx;
            return (
              <div
                key={edu.institution}
                ref={(el) => { nodeRefs.current[idx] = el; }}
                onMouseEnter={() => handleNodeEnter(idx)}
                onMouseLeave={handleNodeLeave}
                className="flex flex-col items-center cursor-default relative z-10"
              >
                {/* Logo */}
                {edu.logo && (
                  <img
                    src={edu.logo}
                    alt={edu.institution}
                    className={cn(
                      "w-10 h-10 rounded object-contain bg-white/10 mb-3 transition-all duration-200",
                      isActive ? "ring-2 ring-neon-blue shadow-neon-blue" : "opacity-70"
                    )}
                  />
                )}

                {/* Dot */}
                <div
                  className={cn(
                    "w-3.5 h-3.5 rounded-full border-2 transition-all duration-200",
                    isActive
                      ? "border-neon-blue bg-neon-blue/30 shadow-neon-blue scale-125"
                      : "border-neon-purple bg-background shadow-neon-purple"
                  )}
                />

                {/* Year + Title label below dot */}
                <div className="mt-3 text-center">
                  <p
                    className={cn(
                      "font-pixel text-[10px] transition-all duration-200",
                      isActive
                        ? "text-neon-blue glow-blue"
                        : "text-neon-purple glow-purple"
                    )}
                  >
                    {edu.year}
                  </p>
                  <p
                    className={cn(
                      "text-xs mt-1 max-w-[180px] transition-all duration-200",
                      isActive ? "text-white" : "text-muted-foreground"
                    )}
                  >
                    {edu.degree}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Popup portal */}
        {hoveredIdx !== null && anchorRect && (
          <EducationPopup
            edu={education[hoveredIdx]}
            anchorRect={anchorRect}
            visible={popupVisible}
            onMouseEnter={handlePopupEnter}
            onMouseLeave={handlePopupLeave}
          />
        )}
      </div>

      {/* ── Mobile: stacked cards ── */}
      <div className="md:hidden space-y-4">
        {education.map((edu) => {
          const Icon = iconMap[edu.icon] ?? GraduationCap;
          return (
            <div
              key={edu.institution}
              className="rounded-xl border-2 border-neon-purple border-glow-purple bg-card-bg p-4 space-y-2"
            >
              <div className="flex items-center gap-2">
                <Icon className="size-4 text-neon-purple" />
                <span className="font-pixel text-[8px] text-neon-purple glow-purple">
                  {"<"}{edu.typeLabel}{">"}
                </span>
              </div>
              <p className="text-white text-sm font-medium">{edu.degree}</p>
              <p className="text-xs text-muted-foreground">
                {edu.institution} — {edu.status}: {edu.year}
              </p>
              {edu.topics && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {edu.topics.items.map((topic) => (
                    <TechBadge key={topic} name={topic} variant="purple" />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
