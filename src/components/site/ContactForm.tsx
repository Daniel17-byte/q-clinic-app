"use client";

import { useMemo, useState } from "react";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  MenuItem,
  Stack,
  TextField,
} from "@mui/material";
import type { Locale } from "@/src/config/locales";
import { getSiteData } from "@/src/content/site-content";

type ContactFormProps = {
  locale: Locale;
};

export default function ContactForm({ locale }: ContactFormProps) {
  const siteData = useMemo(() => getSiteData(locale), [locale]);
  const [submitted, setSubmitted] = useState(false);

  const inputSx = {
    "& .MuiOutlinedInput-root": {
      borderRadius: 2,
      transition: "box-shadow 0.2s ease, transform 0.2s ease",
      "&.Mui-focused": {
        boxShadow: "0 0 0 4px rgba(13,110,253,0.12)",
      },
    },
  };

  return (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: "0 10px 28px rgba(6,24,44,0.09)",
        background: "linear-gradient(180deg, #ffffff 0%, #f9fcff 100%)",
      }}
    >
      <CardContent>
        <Box
          component="form"
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
          }}
        >
          <Stack spacing={2}>
            {submitted ? <Alert severity="success">{siteData.copy.contact.successMessage}</Alert> : null}

            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextField
                label={siteData.copy.contact.fields.fullName}
                name="fullName"
                required
                fullWidth
                sx={inputSx}
              />

              <TextField
                label={siteData.copy.contact.fields.phone}
                name="phone"
                fullWidth
                sx={inputSx}
              />
            </Stack>

            <TextField
              label={siteData.copy.contact.fields.email}
              type="email"
              name="email"
              required
              fullWidth
              sx={inputSx}
            />

            <TextField
              select
              label={siteData.copy.contact.fields.procedure}
              name="procedure"
              required
              fullWidth
              defaultValue={siteData.procedures[0]?.slug ?? ""}
              sx={inputSx}
            >
              {siteData.procedures.map((procedure) => (
                <MenuItem key={procedure.slug} value={procedure.slug}>
                  {procedure.title}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              label={siteData.copy.contact.fields.message}
              name="message"
              multiline
              minRows={4}
              fullWidth
              sx={inputSx}
            />

            <FormControlLabel
              control={<Checkbox required />}
              label={siteData.copy.contact.fields.consent}
            />

            <Button
              type="submit"
              variant="contained"
              size="large"
              endIcon={<SendRoundedIcon />}
              sx={{
                borderRadius: 999,
                py: 1.2,
                background: "linear-gradient(135deg, #0d6efd 0%, #00a896 100%)",
                boxShadow: "0 12px 24px rgba(13,110,253,0.28)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 16px 28px rgba(13,110,253,0.34)",
                },
              }}
            >
              {siteData.copy.contact.fields.submit}
            </Button>
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
}

