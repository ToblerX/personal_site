import { useState, useRef, useCallback, useEffect, type RefObject } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";
import { TechBadge } from "@/components/TechBadge";
import { mainSkills, extraCategories, type SkillCategory } from "@/data/skills";

interface OverlayPos {
  top?: number;
  bottom?: number;
  left: number;
  width: number;
}

function computeOverlayPosition(
  buttonEl: HTMLElement,
  gridEl: HTMLElement
): OverlayPos {
  const rect = buttonEl.getBoundingClientRect();
  const gridRect = gridEl.getBoundingClientRect();
  const vh = window.innerHeight;
  const gap = 8;

  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  const gridCx = gridRect.left + gridRect.width / 2;
  const gridCy = gridRect.top + gridRect.height / 2;

  const isLeft = cx < gridCx;
  const isTop = cy < gridCy;

  // Horizontal: match the button's column
  const left = isLeft ? gridRect.left : gridCx + gap / 2;
  const width = (gridRect.width - gap) / 2;

  // Vertical: top-row opens above the grid, bottom-row opens below the grid
  if (isTop) {
    const bottom = vh - gridRect.top + gap;
    return { bottom, left, width };
  } else {
    return { top: gridRect.bottom + gap, left, width };
  }
}

function SkillsOverlay({
  category,
  position,
  onMouseEnter,
  onMouseLeave,
  visible,
}: {
  category: SkillCategory;
  position: OverlayPos;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  visible: boolean;
}) {
  return createPortal(
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={cn(
        "fixed rounded-xl border-2 border-neon-blue border-glow-blue bg-card-bg px-6 py-5 transition-opacity duration-150",
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
      style={{
        ...(position.top != null ? { top: position.top } : {}),
        ...(position.bottom != null ? { bottom: position.bottom } : {}),
        left: position.left,
        width: position.width,
        zIndex: 9999,
      }}
    >
      <h4 className="font-pixel text-[9px] text-neon-blue glow-blue mb-4">
        {"<"}EXTRA SKILLS: {category.label}{">"}
      </h4>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <TechBadge key={skill} name={skill} variant={category.color} />
        ))}
      </div>
    </div>,
    document.body
  );
}

export function SkillsSection() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [overlayPos, setOverlayPos] = useState<OverlayPos | null>(null);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);

  const buttonRefs = useRef<Record<string, RefObject<HTMLButtonElement | null>>>({});
  // Ensure refs exist for each category
  for (const cat of extraCategories) {
    if (!buttonRefs.current[cat.label]) {
      buttonRefs.current[cat.label] = { current: null };
    }
  }

  const clearCloseTimer = useCallback(() => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
  }, []);

  const close = useCallback(() => {
    setOverlayVisible(false);
    // Let the fade-out finish before removing
    setTimeout(() => setHoveredCategory(null), 150);
  }, []);

  const handleButtonEnter = useCallback(
    (label: string) => {
      clearCloseTimer();
      const ref = buttonRefs.current[label];
      if (ref?.current && gridRef.current) {
        setOverlayPos(computeOverlayPosition(ref.current, gridRef.current));
      }
      setHoveredCategory(label);
      // Small delay so the DOM renders before we fade in
      requestAnimationFrame(() => setOverlayVisible(true));
    },
    [clearCloseTimer]
  );

  const handleButtonLeave = useCallback(() => {
    clearCloseTimer();
    closeTimeout.current = setTimeout(close, 150);
  }, [clearCloseTimer, close]);

  const handleOverlayEnter = useCallback(() => {
    clearCloseTimer();
  }, [clearCloseTimer]);

  const handleOverlayLeave = useCallback(() => {
    close();
  }, [close]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeout.current) clearTimeout(closeTimeout.current);
    };
  }, []);

  const activeCategory = extraCategories.find((c) => c.label === hoveredCategory);

  return (
    <>
      {/* ── Desktop ── */}
      <div className="hidden md:flex md:flex-col md:justify-evenly md:h-full">
        {/* Main skills — always visible */}
        <div className="flex flex-wrap gap-2">
          {mainSkills.map((skill) => (
            <TechBadge key={skill} name={skill} variant="blue" />
          ))}
        </div>

        {/* Extra skills heading */}
        <p className="font-pixel text-[8px] text-neon-purple glow-purple">
          {"<"}EXTRA SKILLS{">"}
        </p>

        {/* Category buttons — 2×2 grid */}
        <div ref={gridRef} className="grid grid-cols-2 gap-2">
          {extraCategories.map((cat) => {
            const isActive = hoveredCategory === cat.label;
            return (
              <button
                key={cat.label}
                type="button"
                ref={buttonRefs.current[cat.label] as RefObject<HTMLButtonElement>}
                onMouseEnter={() => handleButtonEnter(cat.label)}
                onMouseLeave={handleButtonLeave}
                className={cn(
                  "px-4 py-2 rounded-lg border-2 font-pixel text-[8px] cursor-default transition-all duration-200 text-left",
                  isActive
                    ? "border-neon-blue border-glow-blue text-neon-blue glow-blue"
                    : "border-neon-purple border-glow-purple text-neon-purple glow-purple"
                )}
              >
                {"<"}{cat.label}{">"}
              </button>
            );
          })}
        </div>

        {/* Overlay portal */}
        {activeCategory && overlayPos && (
          <SkillsOverlay
            category={activeCategory}
            position={overlayPos}
            onMouseEnter={handleOverlayEnter}
            onMouseLeave={handleOverlayLeave}
            visible={overlayVisible}
          />
        )}
      </div>

      {/* ── Mobile — all expanded inline ── */}
      <div className="md:hidden space-y-4">
        <div className="flex flex-wrap gap-2 justify-center">
          {mainSkills.map((skill) => (
            <TechBadge key={skill} name={skill} variant="blue" />
          ))}
        </div>

        {extraCategories.map((cat) => (
          <div key={cat.label}>
            <p className="font-pixel text-[8px] text-neon-blue glow-blue mb-2 text-center">
              {"<"}{cat.label}{">"}
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {cat.skills.map((skill) => (
                <TechBadge key={skill} name={skill} variant={cat.color} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
