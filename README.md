# Q Clinic Template (RO / EN / TR)

Material UI template for a medical travel presentation site, with localized routes and dummy content.

## Quick start

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Current architecture

- App Router with locale segment: `app/[locale]/...`
- Supported locales: `ro`, `en`, `tr`
- Root route redirects to `/ro`
- Shared MUI shell and navigation in `src/components/site/LocaleShell.tsx`
- Theme and MUI App Router integration in `src/theme/ThemeRegistry.tsx` and `src/theme/theme.ts`
- Centralized dummy content in `src/content/site-content.ts`
- Dummy contact form in `src/components/site/ContactForm.tsx` (local success state only)

## Routes

- `/{locale}` - homepage
- `/{locale}/procedures` - procedure list
- `/{locale}/procedures/{slug}` - procedure detail template
- `/{locale}/about`
- `/{locale}/faq`
- `/{locale}/contact`

## Replace dummy data

Update text and labels in `src/content/site-content.ts`.

Replace visual placeholders in `public/media/` (hero images, gallery images, before/after).

## Validation

```bash
npm run lint
```
