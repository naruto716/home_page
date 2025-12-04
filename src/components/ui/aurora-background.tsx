"use client";
import { cn } from "@/lib/utils";
import type { ReactNode, HTMLProps } from "react";

interface AuroraBackgroundProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative flex h-full flex-col items-center justify-center bg-zinc-900",
        className,
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={cn(
            "pointer-events-none absolute -inset-[10px] opacity-50 blur-[10px] will-change-transform",
            showRadialGradient && "[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]"
          )}
          style={{
            backgroundImage: `
              repeating-linear-gradient(100deg, #000 0%, #000 7%, transparent 10%, transparent 12%, #000 16%),
              repeating-linear-gradient(100deg, #3b82f6 10%, #a5b4fc 15%, #93c5fd 20%, #ddd6fe 25%, #60a5fa 30%)
            `,
            backgroundSize: "300% 200%",
            backgroundPosition: "50% 50%, 50% 50%",
            animation: "aurora 60s linear infinite",
          }}
        />
      </div>
      {children}
    </div>
  );
};
