"use client";

import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box, Fab, Stack } from "@mui/material";
import type { Locale } from "@/src/config/locales";

type FloatingContactButtonProps = {
  locale: Locale;
};

const labelsByLocale: Record<Locale, { call: string; whatsapp: string }> = {
  ro: {
    call: "Suna acum",
    whatsapp: "WhatsApp",
  },
  en: {
    call: "Call now",
    whatsapp: "WhatsApp",
  },
  tr: {
    call: "Hemen ara",
    whatsapp: "WhatsApp",
  },
};

export default function FloatingContactButton({ locale }: FloatingContactButtonProps) {
  const labels = labelsByLocale[locale];

  return (
    <Box
      sx={{
        position: "fixed",
        right: 16,
        bottom: 18,
        zIndex: 1400,
        display: { xs: "block", md: "none" },
      }}
    >
      <Stack spacing={1.2}>
        <Fab
          variant="extended"
          size="small"
          component="a"
          href="https://wa.me/905000000000"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={labels.whatsapp}
          sx={{
            backgroundColor: "#25D366",
            color: "#fff",
            px: 1.8,
            boxShadow: "0 12px 24px rgba(37,211,102,.34)",
            transition: "transform .2s ease, box-shadow .2s ease",
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: "0 16px 28px rgba(37,211,102,.42)",
              backgroundColor: "#20b95b",
            },
          }}
        >
          <WhatsAppIcon sx={{ mr: 0.8 }} fontSize="small" />
          {labels.whatsapp}
        </Fab>

        <Fab
          variant="extended"
          size="small"
          component="a"
          href="tel:+905000000000"
          aria-label={labels.call}
          sx={{
            background: "linear-gradient(135deg, #0d6efd 0%, #00a896 100%)",
            color: "#fff",
            px: 1.8,
            boxShadow: "0 12px 24px rgba(13,110,253,.34)",
            transition: "transform .2s ease, box-shadow .2s ease",
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: "0 16px 30px rgba(13,110,253,.44)",
            },
          }}
        >
          <PhoneInTalkIcon sx={{ mr: 0.8 }} fontSize="small" />
          {labels.call}
        </Fab>
      </Stack>
    </Box>
  );
}

