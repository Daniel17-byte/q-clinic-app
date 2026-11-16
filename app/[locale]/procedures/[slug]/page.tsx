import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import BeforeAfterSlider from "@/src/components/ui/BeforeAfterSlider";
import FadeInOnView from "@/src/components/ui/FadeInOnView";
import MediaImage from "@/src/components/ui/MediaImage";
import { isSupportedLocale, supportedLocales, type Locale } from "@/src/config/locales";
import { getSiteData } from "@/src/content/site-content";

type ProcedurePageProps = PageProps<"/[locale]/procedures/[slug]">;

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

export async function generateMetadata({ params }: ProcedurePageProps): Promise<Metadata> {
  const { locale: localeRaw, slug } = await params;
  if (!isSupportedLocale(localeRaw)) {
    return {};
  }

  const procedure = findProcedure(localeRaw, slug);

  if (!procedure) {
    return {};
  }

  return {
    title: procedure.title,
    description: procedure.intro,
  };
}

export default async function ProcedureDetailsPage({ params }: ProcedurePageProps) {
  const { locale: localeRaw, slug } = await params;

  if (!isSupportedLocale(localeRaw)) {
    notFound();
  }

  const locale = localeRaw;
  const { copy } = getSiteData(locale);
  const procedure = findProcedure(locale, slug);

  if (!procedure) {
    notFound();
  }

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 3, md: 6 } }}>
      <Stack spacing={3.5}>
        <FadeInOnView>
          <MediaImage
            src={procedure.heroImage}
            alt={`${procedure.title} - ${copy.brand}`}
            height={{ xs: 240, md: 360 }}
            sizes="(max-width: 1200px) 100vw, 1152px"
            preload
            radius={4}
            sx={{ boxShadow: "0 18px 40px rgba(13,110,253,0.17)" }}
            overlay={
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  p: { xs: 2, md: 3.5 },
                  color: "#fff",
                  background:
                    "linear-gradient(0deg, rgba(8,24,45,.65) 0%, rgba(8,24,45,.2) 50%, rgba(8,24,45,0) 100%)",
                }}
              >
                <Typography variant="overline" sx={{ letterSpacing: 1 }}>
                  {procedure.category}
                </Typography>
                <Typography variant="h1" sx={{ fontSize: { xs: "1.8rem", md: "2.6rem" } }}>
                  {procedure.title}
                </Typography>
              </Box>
            }
          />
        </FadeInOnView>

        <FadeInOnView delayMs={60}>
          <Typography color="text.secondary" sx={{ maxWidth: 820 }}>
            {procedure.intro}
          </Typography>
        </FadeInOnView>

        <FadeInOnView delayMs={120}>
          <Grid container spacing={2.2}>
            <Grid size={{ xs: 12, md: 8 }}>
              <Card sx={{ borderRadius: 3, height: "100%" }}>
                <CardContent>
                  <Typography variant="h6">{copy.labels.aboutProcedure}</Typography>
                  {procedure.description.map((paragraph) => (
                    <Typography
                      key={paragraph}
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 2 }}
                    >
                      {paragraph}
                    </Typography>
                  ))}
                </CardContent>
              </Card>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Card sx={{ borderRadius: 3, height: "100%" }}>
                <CardContent>
                  <Typography variant="subtitle1">{copy.labels.quickFacts}</Typography>
                  <List dense>
                    <ListItem disablePadding>
                      <ListItemText primary={`${copy.labels.from}: ${procedure.priceFrom}`} />
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemText primary={`${copy.labels.recovery}: ${procedure.recovery}`} />
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
              <Typography variant="h6">{copy.labels.included}</Typography>
              <List>
                {procedure.highlights.map((highlight) => (
                  <ListItem key={highlight} disablePadding sx={{ alignItems: "flex-start" }}>
                    <ListItemIcon sx={{ minWidth: 34, mt: 0.6 }}>
                      <CheckCircleRoundedIcon fontSize="small" color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={highlight} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </FadeInOnView>

        <FadeInOnView delayMs={180}>
          <Card sx={{ borderRadius: 3 }}>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2.5 }}>
                {copy.journey.title}
              </Typography>
              <Grid container spacing={2.5}>
                {copy.journey.steps.map((step, index) => (
                  <Grid key={step.title} size={{ xs: 12, sm: 6, md: 2.4 }}>
                    <Stack spacing={1}>
                      <Box
                        sx={{
                          width: 34,
                          height: 34,
                          borderRadius: "50%",
                          display: "grid",
                          placeItems: "center",
                          fontWeight: 700,
                          color: "primary.main",
                          backgroundColor: "rgba(13,110,253,0.1)",
                        }}
                      >
                        {index + 1}
                      </Box>
                      <Typography variant="subtitle2">{step.title}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {step.text}
                      </Typography>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </FadeInOnView>

        <FadeInOnView delayMs={200}>
          <Card
            sx={{
              borderRadius: 3,
              background:
                "linear-gradient(135deg, rgba(13,110,253,.1) 0%, rgba(0,168,150,.08) 100%)",
            }}
          >
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>
                {copy.labels.beforeAfter}
              </Typography>
              <BeforeAfterSlider
                beforeSrc={procedure.beforeAfter.before}
                afterSrc={procedure.beforeAfter.after}
                beforeLabel={copy.labels.before}
                afterLabel={copy.labels.after}
                subject={procedure.title}
                hint={copy.labels.sliderHint}
                height={{ xs: 280, md: 420 }}
                sizes="(max-width: 1200px) 100vw, 1100px"
              />
            </CardContent>
          </Card>
        </FadeInOnView>

        <FadeInOnView delayMs={240}>
          <Card sx={{ borderRadius: 3 }}>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>
                {copy.labels.gallery}
              </Typography>
              <Grid container spacing={2}>
                {procedure.gallery.map((imageSrc, index) => (
                  <Grid key={imageSrc} size={{ xs: 12, sm: 4 }}>
                    <MediaImage
                      src={imageSrc}
                      alt={`${procedure.title} - ${copy.labels.gallery} ${index + 1}`}
                      height={210}
                      sizes="(max-width: 900px) 100vw, 33vw"
                      radius={2.5}
                      zoomOnHover
                      sx={{ boxShadow: "0 12px 25px rgba(6,24,44,.12)" }}
                    />
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </FadeInOnView>

        <FadeInOnView delayMs={280}>
          <Card
            sx={{
              borderRadius: 3,
              background:
                "linear-gradient(125deg, rgba(13,110,253,0.1) 0%, rgba(0,168,150,0.1) 100%)",
            }}
          >
            <CardContent>
              <Typography variant="h5">{copy.home.ctaTitle}</Typography>
              <Typography color="text.secondary" sx={{ mt: 1, mb: 2 }}>
                {copy.home.ctaText}
              </Typography>
              <Button
                href={`/${locale}/contact`}
                variant="contained"
                sx={{
                  borderRadius: 999,
                  px: 3,
                  background: "linear-gradient(135deg, #0d6efd 0%, #00a896 100%)",
                }}
              >
                {copy.hero.ctaPrimary}
              </Button>
            </CardContent>
          </Card>
        </FadeInOnView>
      </Stack>
    </Container>
  );
}
