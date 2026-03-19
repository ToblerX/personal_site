import { useEffect, useState } from "react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className={`fixed bottom-1/4 right-40 z-50 text-neon-blue transition-all duration-300 hover:opacity-80 cursor-pointer ${
        visible
          ? "opacity-100 scale-100 animate-[pop-in_0.4s_cubic-bezier(0.34,1.56,0.64,1)]"
          : "opacity-0 scale-0 pointer-events-none"
      }`}
    >
      <svg
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ filter: "drop-shadow(0 0 6px rgba(0,191,255,0.5))" }}
      >
        {/* Pixel circle border */}
        {/* Top edge */}
        <rect x="8"  y="0" width="2" height="2" fill="currentColor" />
        <rect x="10" y="0" width="2" height="2" fill="currentColor" />
        <rect x="12" y="0" width="2" height="2" fill="currentColor" />
        <rect x="14" y="0" width="2" height="2" fill="currentColor" />
        {/* Top-right corner */}
        <rect x="16" y="2" width="2" height="2" fill="currentColor" />
        <rect x="18" y="4" width="2" height="2" fill="currentColor" />
        {/* Right edge */}
        <rect x="20" y="6" width="2" height="2" fill="currentColor" />
        <rect x="22" y="8" width="2" height="2" fill="currentColor" />
        <rect x="22" y="10" width="2" height="2" fill="currentColor" />
        <rect x="22" y="12" width="2" height="2" fill="currentColor" />
        <rect x="22" y="14" width="2" height="2" fill="currentColor" />
        <rect x="20" y="16" width="2" height="2" fill="currentColor" />
        {/* Bottom-right corner */}
        <rect x="18" y="18" width="2" height="2" fill="currentColor" />
        <rect x="16" y="20" width="2" height="2" fill="currentColor" />
        {/* Bottom edge */}
        <rect x="14" y="22" width="2" height="2" fill="currentColor" />
        <rect x="12" y="22" width="2" height="2" fill="currentColor" />
        <rect x="10" y="22" width="2" height="2" fill="currentColor" />
        <rect x="8"  y="22" width="2" height="2" fill="currentColor" />
        {/* Bottom-left corner */}
        <rect x="6"  y="20" width="2" height="2" fill="currentColor" />
        <rect x="4"  y="18" width="2" height="2" fill="currentColor" />
        {/* Left edge */}
        <rect x="2"  y="16" width="2" height="2" fill="currentColor" />
        <rect x="0"  y="14" width="2" height="2" fill="currentColor" />
        <rect x="0"  y="12" width="2" height="2" fill="currentColor" />
        <rect x="0"  y="10" width="2" height="2" fill="currentColor" />
        <rect x="0"  y="8"  width="2" height="2" fill="currentColor" />
        <rect x="2"  y="6"  width="2" height="2" fill="currentColor" />
        {/* Top-left corner */}
        <rect x="4"  y="4"  width="2" height="2" fill="currentColor" />
        <rect x="6"  y="2"  width="2" height="2" fill="currentColor" />

        {/* Thick pixel arrow-up */}
        {/* Arrow tip */}
        <rect x="11" y="6"  width="2" height="2" fill="currentColor" />
        {/* Second row */}
        <rect x="9"  y="8"  width="2" height="2" fill="currentColor" />
        <rect x="11" y="8"  width="2" height="2" fill="currentColor" />
        <rect x="13" y="8"  width="2" height="2" fill="currentColor" />
        {/* Third row - wings */}
        <rect x="7"  y="10" width="2" height="2" fill="currentColor" />
        <rect x="11" y="10" width="2" height="2" fill="currentColor" />
        <rect x="15" y="10" width="2" height="2" fill="currentColor" />
        {/* Stem */}
        <rect x="11" y="12" width="2" height="2" fill="currentColor" />
        <rect x="11" y="14" width="2" height="2" fill="currentColor" />
        <rect x="11" y="16" width="2" height="2" fill="currentColor" />
      </svg>
    </button>
  );
}
