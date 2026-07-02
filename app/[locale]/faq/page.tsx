import { Accordion, AccordionDetails, AccordionSummary, Container, Stack, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { getSiteData } from "@/src/content/site-content";
import { readLocale } from "@/src/lib/locale";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function FaqPage({ params }: PageProps) {
  const locale = await readLocale(params);
  const siteData = getSiteData(locale);

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Stack spacing={2}>
        <Typography variant="h2">{siteData.copy.faq.title}</Typography>

        {siteData.copy.faq.items.map((item) => (
          <Accordion key={item.question}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography sx={{ fontWeight: 600 }}>{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="text.secondary">{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Stack>
    </Container>
  );
}

