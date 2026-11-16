import { Box, Card, CardContent, Container, Grid, Stack, Typography } from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import ContactForm from "@/src/components/site/ContactForm";
import FadeInOnView from "@/src/components/ui/FadeInOnView";
import MediaImage from "@/src/components/ui/MediaImage";
import { getSiteData } from "@/src/content/site-content";
import { readLocale } from "@/src/lib/locale";

export default async function ContactPage({ params }: PageProps<"/[locale]/contact">) {
  const locale = await readLocale(params);
  const { copy } = getSiteData(locale);

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 3, md: 6 } }}>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 5 }}>
          <Stack spacing={3}>
            <FadeInOnView>
              <Card
                sx={{
                  borderRadius: 3,
                  background:
                    "linear-gradient(145deg, rgba(13,110,253,0.14) 0%, rgba(0,168,150,0.14) 100%)",
                }}
              >
                <CardContent>
                  <Stack spacing={2}>
                    <Typography variant="h1" sx={{ fontSize: { xs: "2rem", md: "2.4rem" } }}>
                      {copy.contact.title}
                    </Typography>
                    <Typography color="text.secondary">{copy.contact.subtitle}</Typography>
                    <Stack spacing={1.2} sx={{ mt: 1 }}>
                      {copy.contact.bullets.map((bullet) => (
                        <Stack
                          key={bullet}
                          direction="row"
                          spacing={1}
                          sx={{ alignItems: "flex-start" }}
                        >
                          <CheckCircleRoundedIcon fontSize="small" color="primary" />
                          <Typography variant="body2">{bullet}</Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </FadeInOnView>

            <FadeInOnView delayMs={120}>
              <Card sx={{ borderRadius: 3, overflow: "hidden" }}>
                <MediaImage
                  src="/media/contact-map.svg"
                  alt={copy.contact.mapCaption}
                  height={{ xs: 200, md: 240 }}
                  sizes="(max-width: 900px) 100vw, 420px"
                  radius={0}
                />
                <Box sx={{ px: 2, py: 1.5 }}>
                  <Typography variant="caption" color="text.secondary">
                    {copy.contact.mapCaption}
                  </Typography>
                </Box>
              </Card>
            </FadeInOnView>
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, md: 7 }}>
          <FadeInOnView delayMs={80}>
            <ContactForm locale={locale} />
          </FadeInOnView>
        </Grid>
      </Grid>
    </Container>
  );
}
