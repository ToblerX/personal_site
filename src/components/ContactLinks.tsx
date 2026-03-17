import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, Instagram } from "lucide-react";
import { profile } from "@/data/profile";

export function ContactLinks() {
  const { contact } = profile;

  const links = [
    {
      icon: Mail,
      label: "Email",
      href: `mailto:${contact.email}`,
      external: false,
    },
    {
      icon: Phone,
      label: "Phone",
      href: `tel:${contact.phone}`,
      external: false,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: contact.linkedin,
      external: true,
    },
    {
      icon: Github,
      label: "GitHub",
      href: contact.github,
      external: true,
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: contact.instagram,
      external: true,
    },
  ];

  return (
    <div className="flex flex-wrap gap-3">
      {links.map((link) => (
        <Button
          key={link.label}
          variant="outline"
          className="border-neon-blue/40 text-neon-blue hover:border-glow-blue transition-all duration-300 gap-2"
          asChild
        >
          <a
            href={link.href}
            {...(link.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            <link.icon className="size-4" />
            {link.label}
          </a>
        </Button>
      ))}
    </div>
  );
}
