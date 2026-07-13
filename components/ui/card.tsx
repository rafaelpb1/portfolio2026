import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "card-gradient-border rounded-xl text-card-foreground p-6 shadow-sm",
        className
      )}
      {...props}
    />
  );
}
