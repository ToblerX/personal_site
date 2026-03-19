import { useState, useRef, useEffect, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface ExpandableItem {
  id: string;
  title: string;
  preview: string;
  renderExpanded: () => ReactNode;
}

interface ExpandableCardGroupProps {
  items: ExpandableItem[];
  columns?: number;
  /** When true, expanded content appears inside the card itself instead of a separate panel */
  inline?: boolean;
  /** When true, renders compact tab-style buttons without preview text */
  compact?: boolean;
  /** Controls whether the expanded panel appears above or below the cards grid */
  panelPosition?: "above" | "below";
  /** When set, this item is active by default and the last hovered item stays active on mouse leave */
  defaultActiveId?: string;
}

export function ExpandableCardGroup({
  items,
  columns = 4,
  inline = false,
  compact = false,
  panelPosition = "above",
  defaultActiveId,
}: ExpandableCardGroupProps) {
  const [activeId, setActiveId] = useState<string | null>(defaultActiveId ?? null);
  const hoveredItem = items.find((item) => item.id === activeId);

  const gridCols =
    columns === 1
      ? "md:grid-cols-1"
      : columns === 2
        ? "md:grid-cols-2"
        : columns === 3
          ? "md:grid-cols-3"
          : "md:grid-cols-4";

  /* ── Expanded panel for standard (non-compact) mode ── */
  const expandedPanel = !inline && !compact && (
    <div
      className={cn(
        "hidden md:grid overflow-hidden transition-all duration-300 ease-in-out",
        hoveredItem
          ? "grid-rows-[1fr] opacity-100"
          : "grid-rows-[0fr] opacity-0"
      )}
    >
      <div className="overflow-hidden">
        {hoveredItem && (
          <div className="rounded-xl border-2 border-neon-blue border-glow-blue bg-card-bg px-7 py-6">
            <h3 className="font-pixel text-xs text-neon-blue glow-blue mb-4">
              {"<"}
              {hoveredItem.title}
              {">"}
            </h3>
            {hoveredItem.renderExpanded()}
          </div>
        )}
      </div>
    </div>
  );

  /* ── Compact tabbed layout: active tab merges with content panel ── */
  const compactDesktop = compact && (
    <div className="hidden md:block">
      {/* Tab row */}
      <div className="relative z-10 flex items-end gap-3">
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onMouseEnter={() => setActiveId(item.id)}
              onMouseLeave={() => { if (!defaultActiveId) setActiveId(null); }}
              className={cn(
                "flex-1 px-4 py-3 font-pixel text-[10px] text-center cursor-default transition-all duration-200 border-2 border-neon-purple",
                isActive
                  ? "rounded-t-xl border-b-0 bg-card-bg"
                  : "rounded-xl border-glow-purple mb-1"
              )}
              style={isActive ? {
                marginBottom: "-2px",
              } : undefined}
            >
              <span className={cn(
                "transition-all duration-200",
                isActive ? "text-neon-blue glow-blue" : "text-neon-purple glow-purple"
              )}>
                {"<"}{item.title}{">"}
              </span>
            </button>
          );
        })}
      </div>

      {/* Content panel */}
      {hoveredItem && (
        <div className="rounded-b-xl border-2 border-neon-purple border-glow-purple bg-card-bg px-7 py-5 h-[220px] overflow-visible relative">
          {hoveredItem.renderExpanded()}
        </div>
      )}
    </div>
  );

  /* ── Standard (non-compact) cards grid ── */
  const standardDesktop = !compact && (
    <div className={cn("hidden md:grid gap-5", gridCols)}>
      {items.map((item) => {
        const isHovered = activeId === item.id;
        return (
          <div
            key={item.id}
            onMouseEnter={() => setActiveId(item.id)}
            onMouseLeave={() => { if (!defaultActiveId) setActiveId(null); }}
            className={cn(
              "rounded-xl border-2 bg-card-bg px-6 py-5 cursor-default",
              isHovered
                ? "border-neon-blue border-glow-blue"
                : "border-neon-purple border-glow-purple",
              !inline && isHovered && "scale-[1.03]",
              inline && "w-80"
            )}
            style={
              inline
                ? {
                    transition: "border-color 200ms ease, box-shadow 200ms ease",
                  }
                : { transition: "all 300ms ease" }
            }
          >
            <h3
              className={cn(
                "font-pixel text-[10px] mb-4 transition-all duration-200",
                isHovered
                  ? "text-neon-blue glow-blue"
                  : "text-neon-purple glow-purple"
              )}
            >
              {"<"}
              {item.title}
              {">"}
            </h3>

            <p className="text-xs text-muted-foreground line-clamp-2">
              {item.preview}
            </p>

            {/* Inline expanded content */}
            {inline && (
              <div
                className={cn(
                  "grid",
                  isHovered
                    ? "grid-rows-[1fr] opacity-100 mt-4"
                    : "grid-rows-[0fr] opacity-0 mt-0"
                )}
                style={{
                  transition: "grid-template-rows 300ms ease, opacity 250ms ease, margin 200ms ease",
                }}
              >
                <div className="overflow-hidden">
                  {item.renderExpanded()}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );

  return (
    <div className={inline ? "space-y-5" : "space-y-6"}>
      {panelPosition === "above" && expandedPanel}

      {compactDesktop}
      {standardDesktop}

      {panelPosition === "below" && expandedPanel}

      {/* Mobile — collapsible dropdown menus */}
      <div className="md:hidden space-y-3">
        {items.map((item) => (
          <MobileDropdown key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

function MobileDropdown({ item }: { item: ExpandableItem }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (open && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [open]);

  return (
    <div className="rounded-xl border-2 border-neon-purple border-glow-purple bg-card-bg overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-5 py-4"
      >
        <span className={cn(
          "font-pixel text-[10px] transition-colors duration-200",
          open ? "text-neon-blue glow-blue" : "text-neon-purple glow-purple"
        )}>
          {"<"}{item.title}{">"}
        </span>
        <svg
          className={cn(
            "w-4 h-4 transition-transform duration-300",
            open ? "text-neon-blue rotate-180" : "text-neon-purple"
          )}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        className="transition-all duration-300 ease-in-out overflow-hidden"
        style={{ height }}
      >
        <div ref={contentRef} className="px-5 pb-5">
          {item.renderExpanded()}
        </div>
      </div>
    </div>
  );
}
