import { Github, Linkedin, Instagram } from "lucide-react";
import { profile } from "@/data/profile";

export function Footer() {
  const { contact } = profile;

  return (
    <footer className="border-t border-card-border py-6 mt-auto">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-pixel text-[8px] text-neon-blue">
            {"<"}Yaroslav Fedorov{">"}
          </span>
        </p>

        <div className="flex items-center gap-4">
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-neon-blue transition-colors"
          >
            <Github className="size-4" />
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-neon-blue transition-colors"
          >
            <Linkedin className="size-4" />
          </a>
          <a
            href={contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-neon-pink transition-colors"
          >
            <Instagram className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
