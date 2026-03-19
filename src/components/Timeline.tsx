import type { RoadmapPhase } from "@/data/projects";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineProps {
  phases: RoadmapPhase[];
}

export function Timeline({ phases }: TimelineProps) {
  return (
    <div className="relative">
      {/* Center line */}
      <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/20 md:-translate-x-px" />

      {phases.map((phase, phaseIndex) => {
        // If completed is undefined, treat as completed (default for older projects)
        const isCompleted = phase.completed ?? true;

        return (
          <div key={phase.name}>
            {/* Phase divider */}
            <div className="relative flex items-center justify-start md:justify-center py-6">
              <div
                className={cn(
                  "relative z-10 bg-background border px-4 py-3 ml-12 md:ml-0",
                  isCompleted
                    ? "border-neon-orange/50"
                    : "border-white/15"
                )}
              >
                <div className="flex items-center gap-2">
                  {phaseIndex > 0 && (
                    <ChevronDown
                      className={cn(
                        "size-3 absolute -top-4 left-1/2 -translate-x-1/2 hidden md:block",
                        isCompleted ? "text-neon-orange" : "text-white/20"
                      )}
                    />
                  )}
                  <span
                    className={cn(
                      "font-pixel text-[10px] uppercase tracking-widest",
                      isCompleted
                        ? "text-neon-orange glow-orange"
                        : "text-white/30"
                    )}
                  >
                    {phase.name}
                  </span>
                </div>
              </div>
            </div>

            {/* Nodes */}
            {phase.nodes.map((node, nodeIndex) => (
              <div
                key={`${phase.name}-${nodeIndex}`}
                className="relative grid grid-cols-[40px_1fr] md:grid-cols-[1fr_40px_1fr] gap-0 py-4"
              >
                {/* Left content (desktop only) */}
                <div className="hidden md:flex justify-end pr-6">
                  {node.side === "left" && (
                    <div className="text-right max-w-xs">
                      <p
                        className={cn(
                          "font-pixel text-[10px] mb-1",
                          isCompleted ? "text-neon-orange" : "text-white/25"
                        )}
                      >
                        {node.date}
                      </p>
                      <p
                        className={cn(
                          "text-sm font-medium mb-1",
                          isCompleted ? "text-white" : "text-white/40"
                        )}
                      >
                        {node.title}
                      </p>
                      <p
                        className={cn(
                          "text-xs leading-relaxed",
                          isCompleted ? "text-muted-foreground" : "text-white/20"
                        )}
                      >
                        {node.description}
                      </p>
                    </div>
                  )}
                </div>

                {/* Center dot */}
                <div className="flex items-start justify-center pt-1">
                  <div className="relative">
                    {/* Horizontal connector line */}
                    <div
                      className={cn(
                        "hidden md:block absolute top-1.5 w-4 h-px",
                        isCompleted ? "bg-white/30" : "bg-white/10",
                        node.side === "left"
                          ? "right-full mr-0.5"
                          : "left-full ml-0.5"
                      )}
                    />
                    <div
                      className={cn(
                        "w-3 h-3 rounded-full bg-background border-2",
                        isCompleted
                          ? "border-neon-orange shadow-neon-orange"
                          : "border-white/20"
                      )}
                    />
                  </div>
                </div>

                {/* Right content (desktop) / All content (mobile) */}
                <div className="pl-4 md:pl-6">
                  {/* Mobile: always show */}
                  <div className="md:hidden">
                    <p
                      className={cn(
                        "font-pixel text-[10px] mb-1",
                        isCompleted ? "text-neon-orange" : "text-white/25"
                      )}
                    >
                      {node.date}
                    </p>
                    <p
                      className={cn(
                        "text-sm font-medium mb-1",
                        isCompleted ? "text-white" : "text-white/40"
                      )}
                    >
                      {node.title}
                    </p>
                    <p
                      className={cn(
                        "text-xs leading-relaxed",
                        isCompleted ? "text-muted-foreground" : "text-white/20"
                      )}
                    >
                      {node.description}
                    </p>
                  </div>

                  {/* Desktop: only right-side nodes */}
                  <div className="hidden md:block">
                    {node.side === "right" && (
                      <div className="max-w-xs">
                        <p
                          className={cn(
                            "font-pixel text-[10px] mb-1",
                            isCompleted ? "text-neon-orange" : "text-white/25"
                          )}
                        >
                          {node.date}
                        </p>
                        <p
                          className={cn(
                            "text-sm font-medium mb-1",
                            isCompleted ? "text-white" : "text-white/40"
                          )}
                        >
                          {node.title}
                        </p>
                        <p
                          className={cn(
                            "text-xs leading-relaxed",
                            isCompleted ? "text-muted-foreground" : "text-white/20"
                          )}
                        >
                          {node.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      })}

      {/* Bottom arrow */}
      <div className="flex justify-start md:justify-center pb-4">
        <div className="ml-[14px] md:ml-0">
          <ChevronDown className="size-4 text-white/30" />
        </div>
      </div>
    </div>
  );
}
