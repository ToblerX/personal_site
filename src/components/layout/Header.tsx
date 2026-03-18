import { Link, NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

export function Header() {
  return (
    <header className="w-full sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-card-border">
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
                isActive
                  ? "text-neon-pink glow-pink"
                  : "text-muted-foreground"
              )
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/#projects"
            className={({ isActive }) =>
              cn(
                "font-pixel text-[10px] transition-all duration-300 hover:glow-pink",
                isActive
                  ? "text-neon-pink glow-pink"
                  : "text-muted-foreground"
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
