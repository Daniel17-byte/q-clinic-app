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
- `app/[locale]/layout.tsx` is the root layout, so `<html lang>` follows the active locale
- Root route redirects to `/ro` (`redirects()` in `next.config.ts`)
- Shared MUI shell and navigation in `src/components/site/LocaleShell.tsx`
- Theme and MUI App Router integration in `src/theme/ThemeRegistry.tsx` and `src/theme/theme.ts`
- Centralized dummy content in `src/content/site-content.ts`
- Dummy contact form in `src/components/site/ContactForm.tsx` (local success state only)
- Image frames in `src/components/ui/MediaImage.tsx` (next/image + fixed aspect) and the
  draggable comparison in `src/components/ui/BeforeAfterSlider.tsx`

## Routes

- `/{locale}` - homepage
- `/{locale}/procedures` - procedure list
- `/{locale}/procedures/{slug}` - procedure detail template
- `/{locale}/about`
- `/{locale}/faq`
- `/{locale}/contact`

## Replace dummy data

Update text and labels in `src/content/site-content.ts`.

Replace visual placeholders in `public/media/`, keeping the file names:

- `home-hero`, `about-hero`, `procedures-banner`, `clinic-city`, `faq-support`, `contact-map` - page imagery
- `{dental,hair,bbl}-hero` and `{dental,hair,bbl}-gallery-{1,2,3}` - procedure imagery
- `{dental,hair,bbl}-{before,after}` - pairs shown in the before/after slider
- `about-{facility,team,city}`, `avatar-{1..4}`, `badge-{1..4}` - sections, testimonials, accreditations

Placeholders are SVG and skip the image optimizer; real photos (jpg/png/webp) are optimized
automatically by `MediaImage`.

## Validation

```bash
npm run lint
npm run build
```
