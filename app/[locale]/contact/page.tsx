import { Box, Card, CardContent, Container, Grid, Stack, Typography } from "@mui/material";
import ContactForm from "@/src/components/site/ContactForm";
import { getSiteData } from "@/src/content/site-content";
import { readLocale } from "@/src/lib/locale";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function ContactPage({ params }: PageProps) {
  const locale = await readLocale(params);
  const siteData = getSiteData(locale);

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 3, md: 6 } }}>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 5 }}>
          <Card
            sx={{
              borderRadius: 3,
              height: "100%",
              background:
                "linear-gradient(145deg, rgba(13,110,253,0.14) 0%, rgba(0,168,150,0.14) 100%)",
            }}
          >
            <CardContent>
              <Stack spacing={2}>
                <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "2.4rem" } }}>
                  {siteData.copy.contact.title}
                </Typography>
                <Typography color="text.secondary">{siteData.copy.contact.subtitle}</Typography>
                <Box sx={{ mt: 1 }}>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    - Donec id elit non mi porta gravida at eget metus.
                  </Typography>
                  <Typography variant="body2">
                    - Integer posuere erat a ante venenatis dapibus posuere.
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 7 }}>
          <ContactForm locale={locale} />
        </Grid>
      </Grid>
    </Container>
  );
}

