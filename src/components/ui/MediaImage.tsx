import Image from "next/image";
import { Box } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";
import type { ReactNode } from "react";

type MediaImageProps = {
  src: string;
  alt: string;
  /** Fixed frame height; when omitted the frame keeps `ratio`. */
  height?: number | string | Record<string, number | string>;
  ratio?: string;
  sizes?: string;
  /** Fetch eagerly - use it only for the LCP image of a page. */
  preload?: boolean;
  zoomOnHover?: boolean;
  radius?: number;
  /** Rendered on top of the image, inside the frame. */
  overlay?: ReactNode;
  sx?: SxProps<Theme>;
};

/**
 * Image frame used across the site: keeps the layout stable while the image
 * loads and hides the next/image plumbing (fill + object-fit + sizes).
 * Local SVG placeholders skip the optimizer; real photos dropped in later are
 * optimized without touching the call sites.
 */
export default function MediaImage({
  src,
  alt,
  height,
  ratio = "3 / 2",
  sizes = "(max-width: 900px) 100vw, 50vw",
  preload = false,
  zoomOnHover = false,
  radius = 3,
  overlay,
  sx,
}: MediaImageProps) {
  return (
    <Box
      sx={[
        {
          position: "relative",
          overflow: "hidden",
          borderRadius: radius,
          backgroundColor: "rgba(13,110,253,0.06)",
          ...(height ? { height } : { aspectRatio: ratio }),
          ...(zoomOnHover && {
            "&:hover img": { transform: "scale(1.06)" },
          }),
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        preload={preload}
        unoptimized={src.endsWith(".svg")}
        style={{ objectFit: "cover", transition: "transform .45s ease" }}
      />
      {overlay}
    </Box>
  );
}
