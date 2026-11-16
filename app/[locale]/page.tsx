import Image from "next/image";
import {
  Avatar,
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
import { getSiteData, partnerBadges } from "@/src/content/site-content";
import BeforeAfterSlider from "@/src/components/ui/BeforeAfterSlider";
import FadeInOnView from "@/src/components/ui/FadeInOnView";
import MediaImage from "@/src/components/ui/MediaImage";

export default async function LocaleHomePage({ params }: PageProps<"/[locale]">) {
  const locale = await readLocale(params);
  const siteData = getSiteData(locale);
  const { copy } = siteData;

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
            <Grid container spacing={{ xs: 3, md: 4 }} sx={{ alignItems: "center" }}>
              <Grid size={{ xs: 12, md: 7 }}>
                <Chip label={copy.brand} color="primary" />
                <Typography
                  variant="h1"
                  sx={{ mt: 2, fontSize: { xs: "2rem", md: "2.9rem" }, position: "relative" }}
                >
                  {copy.hero.title}
                </Typography>
                <Typography
                  variant="h6"
                  color="text.secondary"
                  sx={{ mt: 2, fontSize: { xs: "1rem", md: "1.15rem" }, position: "relative" }}
                >
                  {copy.hero.subtitle}
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
                    {copy.hero.ctaPrimary}
                  </Button>
                  <Button
                    href={`/${locale}/procedures`}
                    variant="outlined"
                    size="large"
                    sx={{ borderRadius: 999, px: 3 }}
                  >
                    {copy.hero.ctaSecondary}
                  </Button>
                </Stack>
              </Grid>

              <Grid size={{ xs: 12, md: 5 }}>
                <Box sx={{ position: "relative" }}>
                  <MediaImage
                    src="/media/home-hero.svg"
                    alt={`${copy.brand} - ${copy.hero.title}`}
                    ratio="4 / 3"
                    sizes="(max-width: 900px) 100vw, 420px"
                    preload
                    radius={4}
                    sx={{ boxShadow: "0 20px 44px rgba(13,110,253,0.22)" }}
                  />
                  <Card
                    sx={{
                      position: "absolute",
                      left: { xs: 12, md: -24 },
                      bottom: { xs: -18, md: -24 },
                      maxWidth: 230,
                      borderRadius: 3,
                      boxShadow: "0 14px 30px rgba(6,24,44,.18)",
                    }}
                  >
                    <CardContent sx={{ py: 1.5, "&:last-child": { pb: 1.5 } }}>
                      <Typography variant="subtitle2">{copy.hero.badgeTitle}</Typography>
                      <Typography variant="caption" color="text.secondary">
                        {copy.hero.badgeText}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </FadeInOnView>

        <FadeInOnView delayMs={40}>
          <Stack spacing={1.5} sx={{ alignItems: "center" }}>
            <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: 1 }}>
              {copy.home.badgesTitle}
            </Typography>
            <Stack
              direction="row"
              spacing={{ xs: 2, md: 4 }}
              sx={{ flexWrap: "wrap", justifyContent: "center", rowGap: 2, opacity: 0.75 }}
            >
              {partnerBadges.map((badge) => (
                <Image
                  key={badge}
                  src={badge}
                  alt=""
                  width={160}
                  height={60}
                  unoptimized
                  style={{ height: 46, width: "auto" }}
                />
              ))}
            </Stack>
          </Stack>
        </FadeInOnView>

        <FadeInOnView delayMs={60}>
          <Box>
            <Typography variant="h2" sx={{ mb: 1 }}>
              {copy.home.proceduresTitle}
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 3 }}>
              {copy.home.proceduresSubtitle}
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
                    <MediaImage
                      src={procedure.heroImage}
                      alt={`${procedure.title} - ${copy.brand}`}
                      height={180}
                      sizes="(max-width: 900px) 100vw, 33vw"
                      radius={0}
                      zoomOnHover
                    />
                    <CardContent>
                      <Stack spacing={1.5}>
                        <Chip
                          label={procedure.category}
                          size="small"
                          sx={{ alignSelf: "flex-start" }}
                        />
                        <Typography variant="h6">{procedure.title}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {procedure.intro}
                        </Typography>
                        <Typography variant="body2">
                          {copy.labels.from} {procedure.priceFrom}
                        </Typography>
                        <Button
                          href={`/${locale}/procedures/${procedure.slug}`}
                          sx={{ width: "fit-content" }}
                        >
                          {copy.labels.details}
                        </Button>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </FadeInOnView>

        <FadeInOnView delayMs={80}>
          <Box>
            <Typography variant="h2" sx={{ mb: 1 }}>
              {copy.home.beforeAfterTitle}
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 3 }}>
              {copy.home.beforeAfterText}
            </Typography>

            <Grid container spacing={2.2}>
              {siteData.procedures.map((procedure) => (
                <Grid key={procedure.slug} size={{ xs: 12, md: 4 }}>
                  <Stack spacing={1}>
                    <BeforeAfterSlider
                      beforeSrc={procedure.beforeAfter.before}
                      afterSrc={procedure.beforeAfter.after}
                      beforeLabel={copy.labels.before}
                      afterLabel={copy.labels.after}
                      subject={procedure.title}
                      height={{ xs: 220, md: 260 }}
                    />
                    <Typography variant="subtitle2">{procedure.title}</Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Box>
        </FadeInOnView>

        <FadeInOnView delayMs={100}>
          <Box>
            <Typography variant="h2" sx={{ mb: 1 }}>
              {copy.home.clinicTitle}
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 3 }}>
              {copy.home.clinicText}
            </Typography>

            <Grid container spacing={2.2}>
              {copy.home.clinicMedia.map((item) => (
                <Grid key={item.src} size={{ xs: 12, sm: 4 }}>
                  <MediaImage
                    src={item.src}
                    alt={item.caption}
                    height={{ xs: 200, md: 230 }}
                    sizes="(max-width: 900px) 100vw, 33vw"
                    zoomOnHover
                    overlay={
                      <Box
                        sx={{
                          position: "absolute",
                          inset: 0,
                          display: "flex",
                          alignItems: "flex-end",
                          p: 1.5,
                          background:
                            "linear-gradient(0deg, rgba(8,24,45,.62) 0%, rgba(8,24,45,0) 60%)",
                        }}
                      >
                        <Typography variant="subtitle2" sx={{ color: "#fff" }}>
                          {item.caption}
                        </Typography>
                      </Box>
                    }
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </FadeInOnView>

        <FadeInOnView delayMs={120}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card sx={{ height: "100%", borderRadius: 3, overflow: "hidden" }}>
                <MediaImage
                  src="/media/about-team.svg"
                  alt={copy.home.trustTitle}
                  height={160}
                  sizes="(max-width: 900px) 100vw, 50vw"
                  radius={0}
                />
                <CardContent>
                  <Typography variant="h5">{copy.home.trustTitle}</Typography>
                  <Typography color="text.secondary" sx={{ mt: 1 }}>
                    {copy.home.trustText}
                  </Typography>
                  <Stack spacing={1} sx={{ mt: 2 }}>
                    {copy.home.trustItems.map((item) => (
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
                  <Typography variant="h5">{copy.home.testimonialTitle}</Typography>
                  <Stack spacing={2} sx={{ mt: 2 }}>
                    {siteData.testimonials.map((item) => (
                      <Stack
                        key={item.name}
                        direction="row"
                        spacing={1.5}
                        sx={{ alignItems: "flex-start" }}
                      >
                        <Avatar src={item.avatar} alt="" sx={{ width: 48, height: 48 }} />
                        <Box>
                          <Typography variant="subtitle2">
                            {item.name} - {item.procedure}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {item.quote}
                          </Typography>
                        </Box>
                      </Stack>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </FadeInOnView>

        <FadeInOnView delayMs={140}>
          <Card
            sx={{
              borderRadius: 3,
              background:
                "linear-gradient(125deg, rgba(13,110,253,0.1) 0%, rgba(0,168,150,0.1) 100%)",
              boxShadow: "0 16px 34px rgba(13,110,253,0.14)",
            }}
          >
            <Grid container>
              <Grid size={{ xs: 12, md: 7 }}>
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
              </Grid>
              <Grid size={{ xs: 12, md: 5 }}>
                <MediaImage
                  src="/media/clinic-city.svg"
                  alt={copy.home.ctaTitle}
                  height={{ xs: 180, md: "100%" }}
                  sizes="(max-width: 900px) 100vw, 40vw"
                  radius={0}
                  sx={{ minHeight: { md: 220 } }}
                />
              </Grid>
            </Grid>
          </Card>
        </FadeInOnView>
      </Stack>
    </Container>
  );
}
