import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export function Header() {
  const { pathname } = useLocation();
  const isProjectsSection = pathname.startsWith("/projects");

  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      // Only hide/show on mobile (<768px)
      if (window.innerWidth < 768) {
        setHidden(y > lastY.current && y > 56);
      } else {
        setHidden(false);
      }
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "w-full sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-card-border transition-transform duration-300",
        hidden && "-translate-y-full"
      )}
    >
      <div className="w-full max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link
          to="/"
          className="font-pixel text-[10px] text-neon-blue glow-blue hover:opacity-80 transition-opacity"
        >
          {"<YF/>"}
        </Link>

        <nav className="flex items-center gap-6">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              cn(
                "font-pixel text-[10px] transition-all duration-300 hover:glow-pink",
                isActive || isProjectsSection
                  ? "text-neon-pink glow-pink"
                  : "text-muted-foreground"
              )
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className={() =>
              cn(
                "font-pixel text-[10px] transition-all duration-300 hover:glow-pink",
                "text-neon-pink glow-pink"
              )
            }
          >
            Projects
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
