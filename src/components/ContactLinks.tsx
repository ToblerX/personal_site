import { useState, useCallback } from "react";
import { Mail, Linkedin, Github, Instagram, Check, Copy } from "lucide-react";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

export function ContactLinks() {
  const { contact } = profile;

  const links = [
    {
      icon: Mail,
      label: "Email",
      href: `mailto:${contact.email}`,
      display: contact.email,
      external: false,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: contact.linkedin,
      display: "linkedin.com/in/yaroslav-fedorov-3056472b9",
      external: true,
    },
    {
      icon: Github,
      label: "GitHub",
      href: contact.github,
      display: "github.com/ToblerX",
      external: true,
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: contact.instagram,
      display: "instagram.com/yarodevs",
      external: true,
    },
  ];

  const [activeIdx, setActiveIdx] = useState(0);
  const [copied, setCopied] = useState(false);
  const active = links[activeIdx];

  const handleCopyEmail = useCallback(() => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [contact.email]);

  return (
    <div className="flex flex-col h-full">
      {/* Tab buttons row */}
      <div className="grid grid-cols-4 gap-2">
        {links.map((link, idx) => {
          const isActive = idx === activeIdx;
          return (
            <button
              key={link.label}
              type="button"
              onClick={() => setActiveIdx(idx)}
              className={cn(
                "flex items-center justify-center px-3 py-2.5 rounded-lg border-2 transition-all duration-200 cursor-default",
                isActive
                  ? "border-neon-blue border-glow-blue text-neon-blue glow-blue bg-neon-blue/5"
                  : "border-neon-purple/40 text-neon-purple hover:border-neon-purple hover:text-neon-purple"
              )}
            >
              <link.icon className="size-4" />
            </button>
          );
        })}
      </div>

      {/* Display area */}
      <div className="flex-1 flex items-center justify-center mt-4">
        {active.external ? (
          <a
            href={active.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neon-blue text-xs sm:text-sm md:text-xl font-medium hover:text-neon-orange transition-all duration-300 text-center whitespace-nowrap outline-none [text-shadow:0_0_8px_#00bfff,0_0_20px_rgba(0,191,255,0.33)] hover:[text-shadow:0_0_8px_#ff8c00,0_0_20px_rgba(255,140,0,0.33)]"
          >
            {active.display}
          </a>
        ) : (
          <button
            type="button"
            onClick={handleCopyEmail}
            className="flex items-center gap-3 text-neon-blue text-xs sm:text-sm md:text-xl font-medium hover:text-neon-orange transition-all duration-300 text-center whitespace-nowrap outline-none cursor-default [text-shadow:0_0_8px_#00bfff,0_0_20px_rgba(0,191,255,0.33)] hover:[text-shadow:0_0_8px_#ff8c00,0_0_20px_rgba(255,140,0,0.33)]"
          >
            {active.display}
            {copied ? (
              <Check className="size-5 text-green-400 shrink-0" />
            ) : (
              <Copy className="size-5 shrink-0 opacity-50" />
            )}
          </button>
        )}
      </div>
    </div>
  );
}
