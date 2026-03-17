import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { ProjectTech } from "@/data/projects";

interface TechAccordionProps {
  techStack: ProjectTech[];
}

export function TechAccordion({ techStack }: TechAccordionProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {techStack.map((tech) => (
        <AccordionItem
          key={tech.name}
          value={tech.name}
          className="border-card-border"
        >
          <AccordionTrigger className="font-pixel text-[10px] text-neon-blue hover:glow-blue transition-all">
            {tech.name}
          </AccordionTrigger>
          <AccordionContent className="text-sm text-muted-foreground">
            {tech.description}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
