import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Box, Card, CardContent, Container, Grid, List, ListItem, ListItemText, Stack, Typography } from "@mui/material";
import FadeInOnView from "@/src/components/ui/FadeInOnView";
import { isSupportedLocale, supportedLocales, type Locale } from "@/src/config/locales";
import { getSiteData } from "@/src/content/site-content";

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  return supportedLocales.flatMap((locale) =>
    getSiteData(locale).procedures.map((procedure) => ({
      locale,
      slug: procedure.slug,
    })),
  );
}

function findProcedure(locale: Locale, slug: string) {
  return getSiteData(locale).procedures.find((procedure) => procedure.slug === slug);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeRaw, slug } = await params;
  if (!supportedLocales.includes(localeRaw as Locale)) {
    return {};
  }

  const locale = localeRaw as Locale;
  const procedure = findProcedure(locale, slug);

  if (!procedure) {
    return {};
  }

  return {
    title: procedure.title,
    description: procedure.intro,
  };
}

export default async function ProcedureDetailsPage({ params }: PageProps) {
  const { locale: localeRaw, slug } = await params;

  if (!isSupportedLocale(localeRaw)) {
    notFound();
  }

  const locale = localeRaw as Locale;
  const procedure = findProcedure(locale, slug);

  const labels =
    locale === "ro"
      ? {
          quickFacts: "Detalii rapide",
          template: "Blocuri template (lorem ipsum)",
          included: "Ce este inclus",
          from: "De la",
          recovery: "Recuperare",
          gallery: "Galerie procedura",
          beforeAfter: "Inainte / Dupa",
        }
      : locale === "tr"
        ? {
            quickFacts: "Hizli bilgiler",
            template: "Template bolumleri (lorem ipsum)",
            included: "Neler dahil",
            from: "Baslangic",
            recovery: "Iyilesme",
            gallery: "Prosedur galerisi",
            beforeAfter: "Once / Sonra",
          }
        : {
            quickFacts: "Quick facts",
            template: "Template blocks (lorem ipsum)",
            included: "What is included",
            from: "From",
            recovery: "Recovery",
            gallery: "Procedure gallery",
            beforeAfter: "Before / After",
          };

  if (!procedure) {
    notFound();
  }

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 3, md: 6 } }}>
      <Stack spacing={3.5}>
        <FadeInOnView>
          <Box
            sx={{
              borderRadius: 4,
              overflow: "hidden",
              boxShadow: "0 18px 40px rgba(13,110,253,0.17)",
              position: "relative",
            }}
          >
            <Box
              component="img"
              src={procedure.heroImage}
              alt={`${procedure.title} hero placeholder`}
              sx={{ width: "100%", height: { xs: 240, md: 360 }, objectFit: "cover" }}
            />
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(0deg, rgba(8,24,45,.6) 0%, rgba(8,24,45,.2) 50%, rgba(8,24,45,0) 100%)",
              }}
            />
            <Box sx={{ position: "absolute", left: { xs: 16, md: 30 }, bottom: { xs: 14, md: 24 }, color: "#fff" }}>
              <Typography variant="overline" sx={{ letterSpacing: 1 }}>
                {procedure.category}
              </Typography>
              <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.6rem" } }}>
                {procedure.title}
              </Typography>
            </Box>
          </Box>
        </FadeInOnView>

        <FadeInOnView delayMs={60}>
        <Box>
          <Typography variant="overline" color="primary">
            {procedure.category}
          </Typography>
          <Typography variant="h2">{procedure.title}</Typography>
          <Typography color="text.secondary" sx={{ mt: 1 }}>
            {procedure.intro}
          </Typography>
        </Box>
        </FadeInOnView>

        <FadeInOnView delayMs={120}>
        <Grid container spacing={2.2}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Card sx={{ borderRadius: 3 }}>
              <CardContent>
                <Typography variant="h6">{labels.template}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus mollis interdum. Sed posuere consectetur est at lobortis.
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                  Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Card sx={{ borderRadius: 3 }}>
              <CardContent>
                <Typography variant="subtitle1">{labels.quickFacts}</Typography>
                <List dense>
                  <ListItem disablePadding>
                    <ListItemText primary={`${labels.from}: ${procedure.priceFrom}`} />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemText primary={`${labels.recovery}: ${procedure.recovery}`} />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        </FadeInOnView>

        <FadeInOnView delayMs={160}>
        <Card sx={{ borderRadius: 3 }}>
          <CardContent>
            <Typography variant="h6">{labels.included}</Typography>
            <List>
              {procedure.highlights.map((highlight) => (
                <ListItem key={highlight} disablePadding>
                  <ListItemText primary={highlight} />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
        </FadeInOnView>

        <FadeInOnView delayMs={200}>
        <Card sx={{ borderRadius: 3 }}>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2 }}>
              {labels.gallery}
            </Typography>
            <Grid container spacing={2}>
              {procedure.gallery.map((imageSrc, index) => (
                <Grid key={`${imageSrc}-${index}`} size={{ xs: 12, sm: 4 }}>
                  <Box
                    sx={{
                      overflow: "hidden",
                      borderRadius: 2.5,
                      boxShadow: "0 12px 25px rgba(6,24,44,.12)",
                    }}
                  >
                    <Box
                      component="img"
                      src={imageSrc}
                      alt={`${procedure.title} gallery ${index + 1}`}
                      sx={{
                        width: "100%",
                        height: 210,
                        objectFit: "cover",
                        transition: "transform .3s ease",
                        "&:hover": { transform: "scale(1.05)" },
                      }}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
        </FadeInOnView>

        <FadeInOnView delayMs={240}>
          <Card
            sx={{
              borderRadius: 3,
              background:
                "linear-gradient(135deg, rgba(13,110,253,.1) 0%, rgba(0,168,150,.08) 100%)",
            }}
          >
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>
                {labels.beforeAfter}
              </Typography>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Box sx={{ overflow: "hidden", borderRadius: 2.5 }}>
                    <Box
                      component="img"
                      src={procedure.beforeAfter.before}
                      alt={`${procedure.title} before`}
                      sx={{ width: "100%", height: { xs: 220, md: 260 }, objectFit: "cover" }}
                    />
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Box sx={{ overflow: "hidden", borderRadius: 2.5 }}>
                    <Box
                      component="img"
                      src={procedure.beforeAfter.after}
                      alt={`${procedure.title} after`}
                      sx={{ width: "100%", height: { xs: 220, md: 260 }, objectFit: "cover" }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </FadeInOnView>
      </Stack>
    </Container>
  );
}


