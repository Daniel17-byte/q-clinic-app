import { Box, Button, Card, CardContent, Chip, Container, Grid, Stack, Typography } from "@mui/material";
import FadeInOnView from "@/src/components/ui/FadeInOnView";
import MediaImage from "@/src/components/ui/MediaImage";
import { readLocale } from "@/src/lib/locale";
import { getSiteData } from "@/src/content/site-content";

export default async function ProceduresPage({ params }: PageProps<"/[locale]/procedures">) {
  const locale = await readLocale(params);
  const siteData = getSiteData(locale);
  const { copy } = siteData;

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 3, md: 6 } }}>
      <FadeInOnView>
        <MediaImage
          src="/media/procedures-banner.svg"
          alt={copy.navigation.procedures}
          height={{ xs: 220, md: 300 }}
          sizes="(max-width: 1200px) 100vw, 1152px"
          preload
          radius={4}
          sx={{ mb: 4, boxShadow: "0 16px 38px rgba(13,110,253,0.18)" }}
          overlay={
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                p: { xs: 2.5, md: 4 },
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                background:
                  "linear-gradient(0deg, rgba(8,24,45,.68) 0%, rgba(8,24,45,.15) 70%, rgba(8,24,45,0) 100%)",
                color: "#fff",
              }}
            >
              <Typography variant="h2">{copy.navigation.procedures}</Typography>
              <Typography sx={{ mt: 1.2, maxWidth: 760, color: "rgba(255,255,255,.88)" }}>
                {copy.procedures.lead}
              </Typography>
            </Box>
          }
        />
      </FadeInOnView>

      <FadeInOnView delayMs={80}>
        <Grid container spacing={2.5}>
          {siteData.procedures.map((procedure) => (
            <Grid key={procedure.slug} size={{ xs: 12, md: 4 }}>
              <Card
                sx={{
                  height: "100%",
                  borderRadius: 3,
                  overflow: "hidden",
                  transition: "transform .25s ease, box-shadow .25s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 18px 34px rgba(13,110,253,0.18)",
                  },
                }}
              >
                <MediaImage
                  src={procedure.heroImage}
                  alt={`${procedure.title} - ${copy.brand}`}
                  height={220}
                  sizes="(max-width: 900px) 100vw, 33vw"
                  radius={0}
                  zoomOnHover
                />
                <CardContent>
                  <Stack spacing={1.5}>
                    <Chip
                      label={procedure.category}
                      size="small"
                      color="primary"
                      sx={{ alignSelf: "flex-start" }}
                    />
                    <Typography variant="h6">{procedure.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {procedure.intro}
                    </Typography>
                    <Box>
                      <Typography variant="body2">
                        {copy.labels.from} {procedure.priceFrom}
                      </Typography>
                      <Typography variant="body2">
                        {copy.labels.recovery}: {procedure.recovery}
                      </Typography>
                    </Box>
                    <Button
                      href={`/${locale}/procedures/${procedure.slug}`}
                      variant="outlined"
                      sx={{ borderRadius: 999 }}
                    >
                      {copy.labels.details}
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </FadeInOnView>
    </Container>
  );
}
