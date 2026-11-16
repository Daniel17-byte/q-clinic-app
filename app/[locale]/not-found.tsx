import { Button, Container, Stack, Typography } from "@mui/material";
import { defaultLocale } from "@/src/config/locales";

export default function LocaleNotFoundPage() {
  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Stack spacing={2} sx={{ alignItems: "flex-start" }}>
        <Typography variant="h3">Pagina nu există / Page not found</Typography>
        <Typography color="text.secondary">
          Link-ul pe care l-ai accesat nu duce nicăieri. Scrie-ne și îți trimitem noi
          informația pe care o cauți.
        </Typography>
        <Typography color="text.secondary">
          The link you followed does not lead anywhere. Write to us and we will send you
          what you were looking for.
        </Typography>
        <Stack direction="row" spacing={1.5}>
          <Button href={`/${defaultLocale}`} variant="contained">
            Acasă / Home
          </Button>
          <Button href={`/${defaultLocale}/contact`} variant="outlined">
            Contact
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
