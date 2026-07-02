"use client";

import { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import type { ReactNode } from "react";

type FadeInOnViewProps = {
  children: ReactNode;
  delayMs?: number;
  yOffset?: number;
};

export default function FadeInOnView({
  children,
  delayMs = 0,
  yOffset = 20,
}: FadeInOnViewProps) {
  const [isVisible, setIsVisible] = useState(false);
  const hostRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const target = hostRef.current;
    if (!target) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={hostRef}
      sx={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : `translateY(${yOffset}px)`,
        transition: `opacity 520ms ease ${delayMs}ms, transform 520ms ease ${delayMs}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </Box>
  );
}

