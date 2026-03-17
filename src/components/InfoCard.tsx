import type { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface InfoCardProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export function InfoCard({ title, children, className }: InfoCardProps) {
  return (
    <Card
      className={cn(
        "bg-card-bg border-card-border transition-all duration-300 hover:scale-105 hover:border-glow-blue cursor-default",
        className
      )}
    >
      <CardHeader className="pb-2">
        <CardTitle className="font-pixel text-[10px] text-neon-blue glow-blue">
          {"<"}
          {title}
          {">"}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
        {children}
      </CardContent>
    </Card>
  );
}
