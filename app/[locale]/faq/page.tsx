import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FadeInOnView from "@/src/components/ui/FadeInOnView";
import MediaImage from "@/src/components/ui/MediaImage";
import { getSiteData } from "@/src/content/site-content";
import { readLocale } from "@/src/lib/locale";

export default async function FaqPage({ params }: PageProps<"/[locale]/faq">) {
  const locale = await readLocale(params);
  const { copy } = getSiteData(locale);

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 3, md: 6 } }}>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 7 }}>
          <FadeInOnView>
            <Stack spacing={2}>
              <Typography variant="h1" sx={{ fontSize: { xs: "2rem", md: "2.4rem" } }}>
                {copy.faq.title}
              </Typography>

              {copy.faq.items.map((item) => (
                <Accordion key={item.question} sx={{ borderRadius: 2, "&::before": { display: "none" } }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography sx={{ fontWeight: 600 }}>{item.question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography color="text.secondary">{item.answer}</Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Stack>
          </FadeInOnView>
        </Grid>

        <Grid size={{ xs: 12, md: 5 }}>
          <FadeInOnView delayMs={80}>
            <Card sx={{ borderRadius: 3, overflow: "hidden" }}>
              <MediaImage
                src="/media/faq-support.svg"
                alt={copy.faq.supportTitle}
                height={{ xs: 200, md: 240 }}
                sizes="(max-width: 900px) 100vw, 420px"
                radius={0}
              />
              <CardContent>
                <Typography variant="h6">{copy.faq.supportTitle}</Typography>
                <Typography color="text.secondary" sx={{ mt: 1, mb: 2 }}>
                  {copy.faq.supportText}
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
                  {copy.navigation.contact}
                </Button>
              </CardContent>
            </Card>
          </FadeInOnView>
        </Grid>
      </Grid>
    </Container>
  );
}
