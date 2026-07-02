import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { readLocale } from "@/src/lib/locale";
import { getSiteData } from "@/src/content/site-content";
import FadeInOnView from "@/src/components/ui/FadeInOnView";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function LocaleHomePage({ params }: PageProps) {
  const locale = await readLocale(params);
  const siteData = getSiteData(locale);

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 3, md: 6 } }}>
      <Stack spacing={{ xs: 4, md: 6 }}>
        <FadeInOnView>
          <Box
            sx={{
              position: "relative",
              p: { xs: 2.5, md: 4 },
              borderRadius: 4,
              background:
                "linear-gradient(130deg, rgba(13,110,253,0.12) 0%, rgba(0,168,150,0.12) 100%)",
              overflow: "hidden",
              "&::before": {
                content: '""',
                position: "absolute",
                width: 280,
                height: 280,
                top: -120,
                right: -80,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.45)",
                filter: "blur(6px)",
              },
            }}
          >
            <Chip label={siteData.copy.brand} color="primary" />
            <Typography variant="h1" sx={{ mt: 2, maxWidth: 900, fontSize: { xs: "2rem", md: "2.9rem" }, position: "relative" }}>
              {siteData.copy.hero.title}
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mt: 2, maxWidth: 880, fontSize: { xs: "1rem", md: "1.15rem" }, position: "relative" }}>
              {siteData.copy.hero.subtitle}
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={1.5}
              sx={{ mt: 3, position: "relative", maxWidth: { xs: "100%", sm: "max-content" } }}
            >
              <Button
                href={`/${locale}/contact`}
                variant="contained"
                size="large"
                sx={{
                  borderRadius: 999,
                  px: 3,
                  background: "linear-gradient(135deg, #0d6efd 0%, #00a896 100%)",
                  boxShadow: "0 10px 24px rgba(13,110,253,0.32)",
                  "&:hover": { boxShadow: "0 14px 30px rgba(13,110,253,0.4)" },
                }}
              >
                {siteData.copy.hero.ctaPrimary}
              </Button>
              <Button href={`/${locale}/procedures`} variant="outlined" size="large" sx={{ borderRadius: 999, px: 3 }}>
                {siteData.copy.hero.ctaSecondary}
              </Button>
            </Stack>
          </Box>
        </FadeInOnView>

        <FadeInOnView delayMs={60}>
        <Box>
          <Typography variant="h2" sx={{ mb: 1 }}>
            {siteData.copy.home.proceduresTitle}
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 3 }}>
            {siteData.copy.home.proceduresSubtitle}
          </Typography>

          <Grid container spacing={2.2}>
            {siteData.procedures.map((procedure) => (
              <Grid key={procedure.slug} size={{ xs: 12, md: 4 }}>
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 3,
                    overflow: "hidden",
                    transition: "transform 0.25s ease, box-shadow 0.25s ease",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0 18px 34px rgba(13,110,253,0.16)",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={procedure.heroImage}
                    alt={`${procedure.title} placeholder`}
                    sx={{
                      width: "100%",
                      height: 180,
                      objectFit: "cover",
                      transition: "transform .35s ease",
                      "&:hover": { transform: "scale(1.05)" },
                    }}
                  />
                  <CardContent>
                    <Stack spacing={1.5}>
                      <Chip label={procedure.category} size="small" />
                      <Typography variant="h6">{procedure.title}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {procedure.intro}
                      </Typography>
                      <Typography variant="body2">From {procedure.priceFrom}</Typography>
                      <Button href={`/${locale}/procedures/${procedure.slug}`} sx={{ width: "fit-content" }}>
                        Details
                      </Button>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
        </FadeInOnView>

        <FadeInOnView delayMs={120}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card sx={{ height: "100%", borderRadius: 3 }}>
              <CardContent>
                <Typography variant="h5">{siteData.copy.home.trustTitle}</Typography>
                <Typography color="text.secondary" sx={{ mt: 1 }}>
                  {siteData.copy.home.trustText}
                </Typography>
                <Stack spacing={1} sx={{ mt: 2 }}>
                  {siteData.copy.home.trustItems.map((item) => (
                    <Typography key={item} variant="body2">
                      - {item}
                    </Typography>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Card sx={{ height: "100%", borderRadius: 3 }}>
              <CardContent>
                <Typography variant="h5">{siteData.copy.home.testimonialTitle}</Typography>
                <Stack spacing={2} sx={{ mt: 2 }}>
                  {siteData.testimonials.map((item) => (
                    <Box key={item.name}>
                      <Typography variant="subtitle2">
                        {item.name} - {item.procedure}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.quote}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        </FadeInOnView>

        <FadeInOnView delayMs={180}>
          <Card
            sx={{
              borderRadius: 3,
              background:
                "linear-gradient(125deg, rgba(13,110,253,0.1) 0%, rgba(0,168,150,0.1) 100%)",
              boxShadow: "0 16px 34px rgba(13,110,253,0.14)",
            }}
          >
            <CardContent>
              <Typography variant="h5">{siteData.copy.home.ctaTitle}</Typography>
              <Typography color="text.secondary" sx={{ mt: 1, mb: 2 }}>
                {siteData.copy.home.ctaText}
              </Typography>
              <Button
                href={`/${locale}/contact`}
                variant="contained"
                sx={{ borderRadius: 999, px: 3, background: "linear-gradient(135deg, #0d6efd 0%, #00a896 100%)" }}
              >
                {siteData.copy.hero.ctaPrimary}
              </Button>
            </CardContent>
          </Card>
        </FadeInOnView>
      </Stack>
    </Container>
  );
}

