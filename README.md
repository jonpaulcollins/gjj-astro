# Guildford Jiu Jitsu — Astro Rebuild

This is a headless rebuild of the GJJ site: real content pulled directly from
the current GHL AI Studio preview (clone-of-guildford-3.vibepreview.com) on
2026-07-28, rebuilt in Astro so pages are server-rendered at build time —
no client-side rendering gap, so Google and AI crawlers (GEO) see full
content and metadata on the very first crawl.

## IMPORTANT: I could not run or test-build this project myself

The sandbox this was built in blocks npm registry access, so `npm install`
and `astro build` have not been run or verified here. The code follows
standard, well-documented Astro conventions, but **you must run it locally
(or hand it to a developer / Claude Code session with npm access) and fix
whatever comes up** before treating this as launch-ready. Do not assume it
is bug-free just because it was written carefully — verify it the same way
we verified the GHL build: by actually loading the pages and checking the
real output.

## Setup

```bash
npm install
npm run dev       # http://localhost:4321
npm run build      # outputs static HTML to ./dist
npm run preview    # serve the built ./dist locally
```

## What's real vs. placeholder

**Real, pulled directly from the live GHL preview site:**
- All page copy: Home, Timetable, Classes, FAQ, Memberships
- All 8 Google reviews, pull quotes, 5 student testimonials
- All 10 FAQ questions and answers
- Coach bios (Mauricio Gomes, Jon Collins)
- Membership tiers, pricing (£65 adults / £55 kids), plan comparison
- Contact details, social handles, address
- Programme descriptions (Adult Foundations, No-Gi, Juniors, Teens, Women's, Competition)

**Placeholders — need real content/assets before launch:**
- All photography (gallery, hero background, coach photos) — currently
  colored placeholder blocks with captions, marked `TODO` in the source
- GHL free-trial form embed — `src/pages/index.astro`, `#free-trial` section
- GHL calendar/timetable widget embed — `src/pages/timetable.astro`
- WhatsApp number — verify in `src/data/site.ts` (currently +44 7575 572021,
  pulled from the live site's footer)
- Privacy Policy and Child Protection Policy full text — currently stub
  pages with TODO notes, in `src/pages/privacy-policy.astro` and
  `src/pages/child-protection-policy.astro`
- The 7 "View Details" programme sub-pages on /classes (Foundations, All
  Levels, Women's, Kids, Private Tuition, Sparring, Visitors) open modals
  on the live site that weren't captured in full — currently just link to
  /timetable, which has equivalent programme summaries

## GHL integration

Nothing about your CRM/automations changes. Forms and the calendar widget
embed via the standard GHL embed snippet (iframe or script tag from your
GHL sub-account) — paste them into the placeholder divs marked
`GHL ... Embed Placeholder` in the source. Submissions still flow into
your GJJ pipeline exactly as planned in the original migration.

## Why Astro instead of GHL AI Studio for the public site

GHL AI Studio confirmed (via their own support team) that AI Studio sites
are fully client-side rendered with no SSR/prerendering support — meaning
crawlers (Google, ChatGPT, Perplexity) see an empty HTML shell until
JavaScript executes, and indexing can be very slow as a result. Astro
generates real, complete HTML at build time: typically 95-100 on Google
PageSpeed vs. AI Studio's 20-45, and no dependency on a client-side
rendering step succeeding for a crawler to see your content.

## SEO/schema implementation

`src/components/SEO.astro` renders title, meta description, canonical URL,
Open Graph tags and JSON-LD schema directly into the static HTML at build
time. Every page has:
- Unique title + meta description (matching the intent, not verbatim copy,
  of the equivalent Wix page — see prior migration notes)
- Self-referencing canonical tag
- BreadcrumbList schema on inner pages
- WebSite + LocalBusiness + AggregateRating schema on the homepage
- FAQPage schema on /faq, generated directly from the real FAQ content

## Domain / canonical note

`astro.config.mjs` sets `site: 'https://guildfordbjj.com'` (no www). Confirm
which is the actual primary domain (www vs. non-www) before launch — this
was flagged as unresolved during the GHL build and applies here too.


Deploy pipeline verified 2026-08-18.

Deploy pipeline verified 2026-08-18.
