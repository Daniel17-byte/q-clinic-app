import { Card, CardContent, Container, Stack, Typography } from "@mui/material";
import { getSiteData } from "@/src/content/site-content";
import { readLocale } from "@/src/lib/locale";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function AboutPage({ params }: PageProps) {
  const locale = await readLocale(params);
  const siteData = getSiteData(locale);

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Stack spacing={3}>
        <Typography variant="h2">{siteData.copy.about.title}</Typography>
        <Typography color="text.secondary">{siteData.copy.about.lead}</Typography>

        <Card>
          <CardContent>
            <Stack spacing={2}>
              {siteData.copy.about.paragraphs.map((paragraph) => (
                <Typography key={paragraph} color="text.secondary">
                  {paragraph}
                </Typography>
              ))}
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </Container>
  );
}

