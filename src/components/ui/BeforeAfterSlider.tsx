"use client";

import { useCallback, useRef, useState } from "react";
import type { KeyboardEvent, PointerEvent } from "react";
import Image from "next/image";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import { Box, Chip, Typography } from "@mui/material";

type BeforeAfterSliderProps = {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel: string;
  afterLabel: string;
  /** Describes the subject, e.g. the procedure title. Used to build alt text. */
  subject: string;
  hint?: string;
  height?: number | Record<string, number>;
  sizes?: string;
};

const clamp = (value: number) => Math.min(100, Math.max(0, value));

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeLabel,
  afterLabel,
  subject,
  hint,
  height = { xs: 240, md: 320 },
  sizes = "(max-width: 900px) 100vw, 33vw",
}: BeforeAfterSliderProps) {
  const frameRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const moveTo = useCallback((clientX: number) => {
    const frame = frameRef.current;
    if (!frame) {
      return;
    }

    const bounds = frame.getBoundingClientRect();
    setPosition(clamp(((clientX - bounds.left) / bounds.width) * 100));
  }, []);

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    setIsDragging(true);
    moveTo(event.clientX);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (isDragging) {
      moveTo(event.clientX);
    }
  };

  const stopDragging = (event: PointerEvent<HTMLDivElement>) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    setIsDragging(false);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const step = event.shiftKey ? 10 : 4;

    if (event.key === "ArrowLeft") {
      setPosition((current) => clamp(current - step));
    } else if (event.key === "ArrowRight") {
      setPosition((current) => clamp(current + step));
    } else if (event.key === "Home") {
      setPosition(0);
    } else if (event.key === "End") {
      setPosition(100);
    } else {
      return;
    }

    event.preventDefault();
  };

  return (
    <Box>
      <Box
        ref={frameRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={stopDragging}
        onPointerCancel={stopDragging}
        sx={{
          position: "relative",
          height,
          borderRadius: 3,
          overflow: "hidden",
          touchAction: "none",
          cursor: isDragging ? "grabbing" : "ew-resize",
          userSelect: "none",
          boxShadow: "0 14px 30px rgba(6,24,44,.14)",
        }}
      >
        <Image
          src={afterSrc}
          alt={`${subject} - ${afterLabel}`}
          fill
          sizes={sizes}
          unoptimized={afterSrc.endsWith(".svg")}
          draggable={false}
          style={{ objectFit: "cover" }}
        />

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            clipPath: `inset(0 ${100 - position}% 0 0)`,
          }}
        >
          <Image
            src={beforeSrc}
            alt={`${subject} - ${beforeLabel}`}
            fill
            sizes={sizes}
            unoptimized={beforeSrc.endsWith(".svg")}
            draggable={false}
            style={{ objectFit: "cover" }}
          />
        </Box>

        <Chip
          label={beforeLabel}
          size="small"
          sx={{
            position: "absolute",
            top: 12,
            left: 12,
            backgroundColor: "rgba(8,24,45,.62)",
            color: "#fff",
            opacity: position > 14 ? 1 : 0,
            transition: "opacity .2s ease",
          }}
        />
        <Chip
          label={afterLabel}
          size="small"
          sx={{
            position: "absolute",
            top: 12,
            right: 12,
            backgroundColor: "rgba(13,110,253,.82)",
            color: "#fff",
            opacity: position < 86 ? 1 : 0,
            transition: "opacity .2s ease",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: `${position}%`,
            width: 3,
            backgroundColor: "rgba(255,255,255,.9)",
            transform: "translateX(-50%)",
            pointerEvents: "none",
          }}
        />

        <Box
          role="slider"
          tabIndex={0}
          aria-label={`${subject}: ${beforeLabel} / ${afterLabel}`}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(position)}
          aria-valuetext={`${Math.round(position)}% ${beforeLabel}`}
          onKeyDown={handleKeyDown}
          sx={{
            position: "absolute",
            top: "50%",
            left: `${position}%`,
            transform: "translate(-50%, -50%)",
            width: 44,
            height: 44,
            borderRadius: "50%",
            display: "grid",
            placeItems: "center",
            color: "primary.main",
            backgroundColor: "#fff",
            boxShadow: "0 8px 18px rgba(6,24,44,.3)",
            cursor: "grab",
            "&:focus-visible": {
              outline: "3px solid",
              outlineColor: "primary.main",
              outlineOffset: 2,
            },
          }}
        >
          <CompareArrowsIcon fontSize="small" />
        </Box>
      </Box>

      {hint ? (
        <Typography variant="caption" color="text.secondary" sx={{ display: "block", mt: 1 }}>
          {hint}
        </Typography>
      ) : null}
    </Box>
  );
}
