export function PixelInProgress() {
  return (
    <span
      className="inline-flex items-center gap-1 font-pixel text-[6px] text-neon-orange glow-orange uppercase tracking-widest"
      title="In progress"
    >
      {/* Pixel circulating arrows icon – 16x16 grid, animated spin */}
      <svg
        width="14"
        height="14"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 animate-spin"
        style={{ animationDuration: "3s" }}
      >
        {/* Top arrow: curves from right-top going left, with arrowhead pointing right */}
        {/* Arrow body - top arc */}
        <rect x="5" y="2" width="1" height="1" fill="currentColor" />
        <rect x="6" y="2" width="1" height="1" fill="currentColor" />
        <rect x="7" y="2" width="1" height="1" fill="currentColor" />
        <rect x="8" y="2" width="1" height="1" fill="currentColor" />
        <rect x="9" y="2" width="1" height="1" fill="currentColor" />
        <rect x="4" y="3" width="1" height="1" fill="currentColor" />
        <rect x="10" y="3" width="1" height="1" fill="currentColor" />
        <rect x="3" y="4" width="1" height="1" fill="currentColor" />
        <rect x="11" y="4" width="1" height="1" fill="currentColor" />
        <rect x="3" y="5" width="1" height="1" fill="currentColor" />
        <rect x="12" y="5" width="1" height="1" fill="currentColor" />
        <rect x="3" y="6" width="1" height="1" fill="currentColor" />
        {/* Top arrowhead pointing right */}
        <rect x="10" y="1" width="1" height="1" fill="currentColor" />
        <rect x="11" y="2" width="1" height="1" fill="currentColor" />
        <rect x="12" y="3" width="1" height="1" fill="currentColor" />
        <rect x="11" y="4" width="1" height="1" fill="currentColor" />
        <rect x="10" y="5" width="1" height="1" fill="currentColor" />

        {/* Bottom arrow: curves from left-bottom going right, with arrowhead pointing left */}
        {/* Arrow body - bottom arc */}
        <rect x="7" y="13" width="1" height="1" fill="currentColor" />
        <rect x="8" y="13" width="1" height="1" fill="currentColor" />
        <rect x="9" y="13" width="1" height="1" fill="currentColor" />
        <rect x="10" y="13" width="1" height="1" fill="currentColor" />
        <rect x="6" y="13" width="1" height="1" fill="currentColor" />
        <rect x="11" y="12" width="1" height="1" fill="currentColor" />
        <rect x="5" y="12" width="1" height="1" fill="currentColor" />
        <rect x="12" y="11" width="1" height="1" fill="currentColor" />
        <rect x="4" y="11" width="1" height="1" fill="currentColor" />
        <rect x="12" y="10" width="1" height="1" fill="currentColor" />
        <rect x="3" y="10" width="1" height="1" fill="currentColor" />
        <rect x="12" y="9" width="1" height="1" fill="currentColor" />
        {/* Bottom arrowhead pointing left */}
        <rect x="5" y="14" width="1" height="1" fill="currentColor" />
        <rect x="4" y="13" width="1" height="1" fill="currentColor" />
        <rect x="3" y="12" width="1" height="1" fill="currentColor" />
        <rect x="4" y="11" width="1" height="1" fill="currentColor" />
        <rect x="5" y="10" width="1" height="1" fill="currentColor" />
      </svg>
    </span>
  );
}
