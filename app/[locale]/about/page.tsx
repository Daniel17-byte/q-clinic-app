import { Box, Button, Card, CardContent, Container, Grid, Stack, Typography } from "@mui/material";
import FadeInOnView from "@/src/components/ui/FadeInOnView";
import MediaImage from "@/src/components/ui/MediaImage";
import { getSiteData } from "@/src/content/site-content";
import { readLocale } from "@/src/lib/locale";

export default async function AboutPage({ params }: PageProps<"/[locale]/about">) {
  const locale = await readLocale(params);
  const { copy } = getSiteData(locale);

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 3, md: 6 } }}>
      <Stack spacing={{ xs: 3, md: 4 }}>
        <FadeInOnView>
          <MediaImage
            src="/media/about-hero.svg"
            alt={copy.about.title}
            height={{ xs: 220, md: 320 }}
            sizes="(max-width: 1200px) 100vw, 1152px"
            preload
            radius={4}
            sx={{ boxShadow: "0 16px 38px rgba(13,110,253,0.16)" }}
            overlay={
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  p: { xs: 2.5, md: 4 },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  color: "#fff",
                  background:
                    "linear-gradient(0deg, rgba(8,24,45,.66) 0%, rgba(8,24,45,.15) 70%, rgba(8,24,45,0) 100%)",
                }}
              >
                <Typography variant="h1" sx={{ fontSize: { xs: "2rem", md: "2.6rem" } }}>
                  {copy.about.title}
                </Typography>
                <Typography sx={{ mt: 1, maxWidth: 720, color: "rgba(255,255,255,.88)" }}>
                  {copy.about.lead}
                </Typography>
              </Box>
            }
          />
        </FadeInOnView>

        <FadeInOnView delayMs={60}>
          <Card sx={{ borderRadius: 3 }}>
            <CardContent>
              <Stack spacing={2}>
                {copy.about.paragraphs.map((paragraph) => (
                  <Typography key={paragraph} color="text.secondary">
                    {paragraph}
                  </Typography>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </FadeInOnView>

        <FadeInOnView delayMs={120}>
          <Grid container spacing={2.2}>
            {copy.about.media.map((item) => (
              <Grid key={item.src} size={{ xs: 12, sm: 4 }}>
                <Card sx={{ borderRadius: 3, overflow: "hidden", height: "100%" }}>
                  <MediaImage
                    src={item.src}
                    alt={item.caption}
                    height={200}
                    sizes="(max-width: 900px) 100vw, 33vw"
                    radius={0}
                    zoomOnHover
                  />
                  <CardContent>
                    <Typography variant="subtitle2">{item.caption}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </FadeInOnView>

        <FadeInOnView delayMs={160}>
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
