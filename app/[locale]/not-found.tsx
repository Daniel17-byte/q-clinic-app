import { Button, Container, Stack, Typography } from "@mui/material";

export default function LocaleNotFoundPage() {
  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Stack spacing={2} sx={{ alignItems: "flex-start" }}>
        <Typography variant="h3">Page not found</Typography>
        <Typography color="text.secondary">
          This route does not exist in the current template.
        </Typography>
        <Button href="/ro" variant="contained">
          Back to home
        </Button>
      </Stack>
    </Container>
  );
}

