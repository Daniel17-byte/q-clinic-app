import { Box, Button, Card, CardContent, Chip, Container, Grid, Stack, Typography } from "@mui/material";
import FadeInOnView from "@/src/components/ui/FadeInOnView";
import { readLocale } from "@/src/lib/locale";
import { getSiteData } from "@/src/content/site-content";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function ProceduresPage({ params }: PageProps) {
  const locale = await readLocale(params);
  const siteData = getSiteData(locale);

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 3, md: 6 } }}>
      <FadeInOnView>
        <Box
          sx={{
            mb: 4,
            p: { xs: 2.5, md: 4 },
            borderRadius: 4,
            background:
              "linear-gradient(130deg, rgba(13,110,253,0.13) 0%, rgba(0,168,150,0.11) 100%)",
            boxShadow: "0 16px 38px rgba(13,110,253,0.12)",
          }}
        >
          <Typography variant="h2">{siteData.copy.navigation.procedures}</Typography>
          <Typography color="text.secondary" sx={{ mt: 1.2, maxWidth: 760 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id elit non mi porta gravida at eget metus.
          </Typography>
        </Box>
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
              <Box sx={{ overflow: "hidden" }}>
                <Box
                  component="img"
                  src={procedure.heroImage}
                  alt={`${procedure.title} placeholder`}
                  sx={{
                    width: "100%",
                    height: 220,
                    objectFit: "cover",
                    transition: "transform .35s ease",
                    "&:hover": { transform: "scale(1.05)" },
                  }}
                />
              </Box>
              <CardContent>
                <Stack spacing={1.5}>
                  <Chip label={procedure.category} size="small" color="primary" />
                  <Typography variant="h6">{procedure.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {procedure.intro}
                  </Typography>
                  <Box>
                    <Typography variant="body2">From {procedure.priceFrom}</Typography>
                    <Typography variant="body2">Recovery: {procedure.recovery}</Typography>
                  </Box>
                  <Button href={`/${locale}/procedures/${procedure.slug}`} variant="outlined" sx={{ borderRadius: 999 }}>
                    View template page
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

