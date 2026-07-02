"use client";

import { useMemo, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { usePathname } from "next/navigation";
import type { Locale } from "@/src/config/locales";
import { supportedLocales } from "@/src/config/locales";
import { getSiteData } from "@/src/content/site-content";

type LocaleShellProps = {
  locale: Locale;
  children: React.ReactNode;
};

export default function LocaleShell({ locale, children }: LocaleShellProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { copy } = getSiteData(locale);

  const navItems = useMemo(
    () => [
      { href: `/${locale}`, label: copy.navigation.home },
      { href: `/${locale}/procedures`, label: copy.navigation.procedures },
      { href: `/${locale}/about`, label: copy.navigation.about },
      { href: `/${locale}/faq`, label: copy.navigation.faq },
    ],
    [copy.navigation.about, copy.navigation.faq, copy.navigation.home, copy.navigation.procedures, locale],
  );

  const isActive = (href: string) => {
    if (!pathname) {
      return false;
    }

    return href === `/${locale}` ? pathname === href : pathname.startsWith(href);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background:
          "radial-gradient(1200px 600px at 10% -20%, rgba(13,110,253,0.08), transparent 60%), radial-gradient(800px 500px at 90% 0%, rgba(0,168,150,0.08), transparent 60%), #f8fbff",
      }}
    >
      <AppBar
        position="sticky"
        color="inherit"
        elevation={0}
        sx={{
          borderBottom: "1px solid",
          borderColor: "divider",
          backgroundColor: "rgba(255,255,255,0.82)",
          backdropFilter: "blur(10px)",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: "space-between", gap: 1.5, py: 1 }}>
            <Typography
              variant="h6"
              component="a"
              href={`/${locale}`}
              sx={{ textDecoration: "none", color: "inherit", fontWeight: 800, letterSpacing: 0.2 }}
            >
              {copy.brand}
            </Typography>

            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 0.75, alignItems: "center" }}>
              {navItems.map((item) => (
                <Button
                  key={item.href}
                  href={item.href}
                  color="inherit"
                  variant={isActive(item.href) ? "contained" : "text"}
                  sx={{
                    px: 1.5,
                    py: 0.8,
                    borderRadius: 999,
                    backgroundColor: isActive(item.href) ? "rgba(13,110,253,0.12)" : "transparent",
                    color: isActive(item.href) ? "primary.main" : "text.primary",
                  }}
                >
                  {item.label}
                </Button>
              ))}

              <Button
                href={`/${locale}/contact`}
                variant="contained"
                startIcon={<PhoneInTalkIcon />}
                sx={{
                  borderRadius: 999,
                  px: 2.1,
                  background: "linear-gradient(135deg, #0d6efd 0%, #00a896 100%)",
                  boxShadow: "0 10px 26px rgba(13,110,253,0.28)",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  "&:hover": {
                    transform: "translateY(-1px)",
                    boxShadow: "0 14px 28px rgba(13,110,253,0.34)",
                  },
                }}
              >
                {copy.navigation.contact}
              </Button>
            </Box>

            <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 0.5, ml: { md: 1 } }}>
              {supportedLocales.map((item) => (
                <Button
                  key={item}
                  href={`/${item}`}
                  size="small"
                  variant={item === locale ? "contained" : "text"}
                  sx={{ minWidth: 44, borderRadius: 999 }}
                >
                  {item.toUpperCase()}
                </Button>
              ))}
            </Box>

            <IconButton
              onClick={() => setIsMobileMenuOpen(true)}
              sx={{ display: { xs: "inline-flex", md: "none" } }}
              aria-label="Open menu"
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        slotProps={{ paper: { sx: { width: 300, p: 2 } } }}
      >
        <Stack spacing={1}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            {copy.brand}
          </Typography>
          {navItems.map((item) => (
            <Button
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              variant={isActive(item.href) ? "contained" : "text"}
              sx={{ justifyContent: "flex-start", borderRadius: 2, py: 1.2 }}
            >
              {item.label}
            </Button>
          ))}
          <Button
            href={`/${locale}/contact`}
            variant="contained"
            startIcon={<PhoneInTalkIcon />}
            onClick={() => setIsMobileMenuOpen(false)}
            sx={{
              justifyContent: "flex-start",
              borderRadius: 2,
              py: 1.2,
              background: "linear-gradient(135deg, #0d6efd 0%, #00a896 100%)",
            }}
          >
            {copy.navigation.contact}
          </Button>

          <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
            {supportedLocales.map((item) => (
              <Button key={item} href={`/${item}`} size="small" variant={item === locale ? "contained" : "outlined"}>
                {item.toUpperCase()}
              </Button>
            ))}
          </Stack>
        </Stack>
      </Drawer>

      <Box component="main" sx={{ flex: 1, pb: 1 }}>
        {children}
      </Box>

      <Box
        component="footer"
        sx={{
          borderTop: "1px solid",
          borderColor: "divider",
          py: 3,
          mt: 6,
          backgroundColor: "rgba(255,255,255,0.72)",
          backdropFilter: "blur(8px)",
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="body2" color="text.secondary">
            {copy.footer}
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

