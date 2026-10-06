# Hudmeta

The independent design and development studio of Hudson Myung. A custom Next.js App Router website with an editorial visual system, interactive design/structure composition, concept studies, capability explorer, engineering layers, and an email-based project brief flow.

## Run locally

Requires Node.js 20.9+ and npm.

```sh
npm ci
npm run dev
```

Open http://localhost:3000.

```sh
npm run build       # Optimized production build
npm start           # Serve that build
npm run lint
npm run typecheck
npm run test:e2e     # Chrome installed locally; application must be running
```

To test a production server on another port:

```sh
TEST_BASE_URL=http://localhost:3001 npm run test:e2e
```

## Content and configuration

- `src/lib/site.ts`: studio identity, Hudson's supplied email and phone, optional social links.
- `src/lib/projects.ts`: concept-study copy and project metadata.
- `src/components/`: separate components for each major section.
- `src/app/globals.css`: responsive design system and reduced-motion styles.
- `src/app/work/[slug]/page.tsx`: statically generated study pages.
- `.env.example`: optional environment overrides and production URL.

The name, email, and phone provided for this build are configured. LinkedIn and GitHub links are omitted until verified URLs are supplied.

### Publishing

Set `NEXT_PUBLIC_SITE_URL` to the confirmed production origin, e.g. your own https domain. Rebuild after changing any public environment variable. This enables canonical URLs, sitemap entries, and indexing. Local builds default to `noindex` so an unconfigured preview does not become an indexed site. The root Open Graph image and favicon are generated locally by Next.js.

The application can run on any host supporting Next.js and Node.js. No database or paid service is required. The repository has not been deployed by this build.

### Project enquiries

The form validates the brief, prepares a percent-encoded email addressed to `hudsonmyung@gmail.com`, and lets the visitor open their own email app to review and send. Download and clipboard options work without an email client. Submitting the form does **not** send mail or store personal information. The visitor explicitly sends the email in their mail app. The telephone link uses `tel:+19493030376`.

### Honest placeholders

Forma, Elsewhere, and Index are original, self-initiated presentation concepts, labeled on the home page and individual study pages. They are not claims of client work, production applications, or measured results. Replace them with verified projects when the context file arrives. The testimonial area is explicitly reserved for verified feedback; no quotes, client logos, or results are invented.

The contact form, navigation, hero mode switch, capability accordion, technology details, and internal study routes are functional. Miniature interfaces inside the study artwork are illustrative previews, not separate operational websites.

## Design

**Made with intent.** Warm charcoal, off-white typography, muted olive surfaces, a restrained vermilion accent, and a paper-toned process chapter. Geist and Geist Mono provide the functional type system; Instrument Serif adds a narrow expressive contrast. Fonts are self-hosted by `next/font`. Photography is served locally through `next/image`, with responsive sizes and lazy loading below the fold.

CSS transforms and short transitions provide motion without an animation library. Reduced motion removes animations, transitions, and smooth scrolling. Mobile has a separate composition, a focus-managed navigation dialog, and larger controls.

## Photography

The following Unsplash photographs are used as conceptual project imagery, not as claims of completed architectural or travel work:

- Forma interior: https://images.unsplash.com/photo-1600210492486-724fe5c67fb0
- Elsewhere landscape: https://images.unsplash.com/photo-1464822759023-fed622ff2c3b

## Verification

The Playwright suite covers 375, 390, 430, 768, 1024, and 1440 px, checks for horizontal overflow and browser errors, visits all concept routes, exercises keyboard navigation and reduced motion, and validates the brief's recipient, download, and clipboard behavior. Axe scans check WCAG A/AA rules. These automated checks complement visual browser review and do not replace a full manual accessibility audit.

Screenshots and local performance reports are saved in `artifacts/`; the HTML test report is generated in `playwright-report/`.
# hudmeta
