# Arkham Advisory website specification

## 1. Project summary

Build a full redesign of the Arkham Advisory website as a **fast, static Astro site** deployed on GitHub Pages, with a visual system derived from the approved **Option B** logo direction.

The site must feel like:

- a serious boutique advisory practice
- intellectually sharp and editorial
- calm, premium, and atmospheric
- Lovecraft-adjacent in tone, but never theatrical
- more “where the map runs out” than “dark fantasy”
- clearly **not Batman-coded**

This specification is intended for an implementation agent that will design and build the new site.

---

## 2. Core objective

The new site must do four things immediately:

1. explain what Arkham Advisory does
2. show who it is for
3. project a distinctive and credible identity
4. convert the right visitors into contact

The current blog and the new visual identity should be treated as strengths.  
The site should feel like the professional front door for the same universe as Arkham Times, while still being clearly an advisory business website.

---

## 3. Primary constraints

### Must-have constraints

- static website
- Astro-based
- deployable on GitHub Pages
- minimal JavaScript
- excellent performance
- dark-mode-first visual identity
- responsive from mobile to large desktop
- easy to update by editing Markdown / content collections
- implementation should work even without a CMS

### Design constraints

- no startup gradients
- no glassmorphism
- no glossy SaaS clichés
- no comic-book styling
- no horror-poster styling
- no dense visual clutter
- no fake parchment / Halloween effects
- no overuse of tentacles or occult symbols

---

## 4. Success criteria

The final site should feel like:

**Senior judgment under uncertainty.**

Visitors should understand that Arkham Advisory helps organisations make consequential decisions in:

- data platforms
- architecture
- AI and agentic systems
- technical due diligence
- transformation / delivery confidence

The site should feel:

- premium
- precise
- literate
- memorable
- credible
- calm

---

## 5. Final creative direction

## 5.1 Brand idea

Arkham is a metaphor for the point where familiar explanations stop being enough.

The brand should express:

- hidden structure
- navigation under uncertainty
- signal in the fog
- strategic depth
- modern systems with older forces underneath them

The approved identity direction is the **monogram-based system**:
a serif capital **A**, a restrained tentacle curve, and faint compass / astrolabe geometry.

## 5.2 Emotional tone

The site should feel like:

- midnight navigation
- editorial intelligence
- coastal fog, not haunted house
- architecture with mythic depth
- technology with old-world gravity

## 5.3 Non-goals

Do not make it feel like:

- cybersecurity cosplay
- a fantasy game site
- a generic management consultancy
- a horror-themed novelty brand
- a personal blog first and business second

---

## 6. Brand system

## 6.1 Approved logo direction

Use **Option B** as the basis of the identity system.

Core elements:

- a serif capital `A`
- a single elegant tentacle sweep
- subtle suckers as a secondary detail
- faint circular geometry behind the monogram
- large spaced serif `ARKHAM`
- smaller secondary `ADVISORY`
- dark ink-green / ivory / moss palette

## 6.2 Logo system to implement

The implementation agent must support these variants:

### Primary stacked logo
Use for:
- homepage hero
- about page
- contact page
- footer on large screens
- presentations if needed

Preferred asset:
- `assets/logos/arkham-primary-dark.png`
- alternate: `assets/logos/arkham-primary-light.png`

### Horizontal logo
Use for:
- main header / navbar
- document mastheads
- slide headers
- constrained horizontal spaces

Preferred asset:
- `assets/logos/arkham-horizontal-dark.png`
- alternate:
  - `assets/logos/arkham-horizontal-dark-2400x800.png`

### Monogram / icon
Use for:
- favicon
- mobile header
- social avatar
- app-like badge
- small responsive placements

Preferred asset:
- `assets/logos/arkham-monogram-dark.png`
- alternate: `assets/logos/arkham-monogram-light.png`

## 6.3 Logo implementation rule

For the first implementation, raster assets are acceptable.

For the final polish phase, the implementation agent should recreate the logo in **SVG** using the raster assets as references, preserving:

- proportions
- typographic feel
- tentacle sweep
- circular geometry
- spacing hierarchy

## 6.4 Logo usage rules

- always preserve generous negative space
- do not place the logo over noisy imagery without a dark overlay
- do not add glow or shadow effects to the logo
- do not stretch or re-color arbitrarily
- avoid using the stacked logo in tiny spaces
- use monogram for anything under ~96 px visual height
- avoid adding new runes, glyphs, or extra tentacles

## 6.5 Clearspace rule

Use a minimum clearspace equal to the width of the inner stroke of the monogram `A` around the full lockup.  
If that is hard to implement precisely, use:

- `24px` minimum clearspace on mobile
- `32px` minimum clearspace on desktop
- `48px+` in hero and footer placements

## 6.6 Minimum sizes

Recommended minimum display sizes:

### Stacked logo
- mobile: `min-width 160px`
- desktop: `220px–320px`

### Horizontal logo
- mobile header: `140px`
- desktop header: `220px–320px`

### Monogram
- favicon source: `512x512`
- avatar/social: `400x400` or `1024x1024`
- tiny UI usage: prefer simplified SVG redraw if rendered below `24px`

---

## 7. Color system

Base the palette on the approved brand board and approved assets.

## 7.1 Primary palette

### Ink Green
- `#0F1A17`
- main background
- header / footer
- dark surfaces

### Ivory
- `#F2EFE6`
- primary text on dark surfaces
- logo foreground
- headline color on dark backgrounds

### Moss
- `#465348`
- secondary accent
- supporting strokes
- subtle dividers
- icon details

### Sage
- `#9BA695`
- secondary text
- fine geometry
- muted decorative lines
- hover accents on dark surfaces

### Charcoal
- `#2B312E`
- layered surfaces
- elevated cards
- borders on dark panels

## 7.2 Extended neutrals

The implementation agent may derive a few supporting tokens from the above:

- `--bg-deep`
- `--bg-panel`
- `--bg-soft`
- `--text-primary`
- `--text-secondary`
- `--border-subtle`
- `--accent-moss`
- `--accent-sage`

## 7.3 CSS token recommendation

```css
:root {
  --arkham-ink: #0F1A17;
  --arkham-ivory: #F2EFE6;
  --arkham-moss: #465348;
  --arkham-sage: #9BA695;
  --arkham-charcoal: #2B312E;

  --bg-body: var(--arkham-ink);
  --bg-panel: #131d1a;
  --bg-panel-2: #18231f;

  --text-primary: var(--arkham-ivory);
  --text-secondary: #C8C4B8;
  --text-muted: #A7AB9D;

  --border-subtle: rgba(155, 166, 149, 0.22);
  --border-strong: rgba(155, 166, 149, 0.36);

  --accent-primary: var(--arkham-sage);
  --accent-secondary: var(--arkham-moss);

  --shadow-soft: 0 10px 30px rgba(0, 0, 0, 0.22);
  --shadow-deep: 0 24px 60px rgba(0, 0, 0, 0.35);
}
```

## 7.4 Light surfaces

The site should stay dark-first, but individual cards, downloadable materials, or alternate logo placements can use a warm-light surface:

- background: `#F2EFE6` or slightly warmer
- text: Ink Green / Charcoal
- use the light logo assets on these surfaces

---

## 8. Typography

## 8.1 Typographic mood

Typography must do most of the heavy lifting.

The system should feel:

- editorial
- elegant
- calm
- legible
- premium

## 8.2 Recommended implementation fonts

Use this pairing unless the implementation agent has a stronger visual reason:

### Display / heading / brand-support font
- `Cinzel`
- use for hero headings, select page titles, and premium section intros
- do **not** use for long paragraphs

### UI / body font
- `Inter`
- use for body text, navigation, buttons, metadata, form labels, supporting copy

Optional alternatives if the agent wants to test:
- Display: `Cormorant Garamond`, `Marcellus`, or `Fraunces`
- Sans: `Manrope`, `IBM Plex Sans`, or `Source Sans 3`

Important:
- the **logo itself should remain an image or SVG**, not live text
- headings can use the display family, but body content must remain highly readable

## 8.3 Typographic scale recommendation

```text
Hero display: 56–72px desktop / 36–44px mobile
Section heading: 32–40px desktop / 24–30px mobile
Card title: 20–24px
Body large: 19–21px
Body standard: 16–18px
Meta / eyebrow / labels: 12–14px
```

## 8.4 Typographic behavior

- use tight heading spacing
- use generous paragraph spacing
- avoid fully justified text
- keep line length to ~60–75 characters for primary reading blocks
- use letterspacing selectively, especially in small uppercase labels
- reserve all-caps for micro-labels and certain secondary navigation only

---

## 9. Spacing, radius, and layout rhythm

## 9.1 Layout principle

The site should feel spacious and composed, not dense.

Use a strong editorial grid:

- generous outer gutters
- vertical rhythm between sections
- content max-widths that favor readability
- cards aligned to a clean modular grid

## 9.2 Recommended tokens

```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 24px;
--space-6: 32px;
--space-7: 48px;
--space-8: 64px;
--space-9: 96px;
--space-10: 128px;

--radius-sm: 10px;
--radius-md: 16px;
--radius-lg: 24px;
--radius-xl: 32px;
```

## 9.3 Page widths

Recommended:

- site max width: `1280px`
- text content max width: `720px`
- wide section content: `1200px`
- hero inner width: `1120px`

---

## 10. Motion and interaction

Motion should be extremely restrained.

## 10.1 Motion style

Use:

- slow fades
- slight upward reveals
- soft hover transitions
- subtle parallax only if nearly imperceptible
- background texture drift only if performance-safe

Do not use:

- springy bouncy motion
- flashy transforms
- continuous decorative animation
- gimmicky cursor effects

## 10.2 Recommended timings

- hover: `160ms–220ms`
- section reveal: `280ms–420ms`
- modal/drawer if any: `240ms–320ms`

---

## 11. Imagery system

## 11.1 Approved imagery philosophy

Imagery should support the editorial atmosphere, not overpower the business signal.

Approved visual ingredients:

- coastline / cliff / lighthouse ambiguity
- cartographic contours
- compass / astrolabe geometry
- fog, depth, horizon
- signal-like linework
- distant structures
- subdued eldritch references

## 11.2 Use of the hero artwork

Preferred hero artwork:
- `assets/hero/arkham-hero-1920x1080.webp`
- fallback:
  - `assets/hero/arkham-hero-1920x1080.png`
  - `assets/hero/arkham-hero-key-art.png`

Use it:
- in the homepage hero background or right-side visual block
- with strong dark overlay
- behind copy only if the text remains extremely legible

Do not:
- place body copy directly over the brightest region
- crop away all horizon lines
- let the image become wallpaper noise

## 11.3 Use of the OG banner

Preferred OG asset:
- `assets/social/arkham-og-1200x630.png`
- optional higher-res version:
  - `assets/social/arkham-og-1600x840.png`

## 11.4 Atmospheric background motifs

Allow the implementation agent to create CSS / SVG overlays inspired by:

- contour lines
- radial circles
- faint crosshairs
- subtle signal points

These should be very low-contrast and optional.

---

## 12. Information architecture

## 12.1 Primary pages

Build these pages first:

- `/` — Home
- `/advisory/`
- `/about/`
- `/writing/`
- `/contact/`
- `/404/`

Optional but sensible later:
- `/work/`
- `/speaking/`
- `/legal/`

## 12.2 Main navigation

Desktop nav should include:

- Home
- Advisory
- About
- Writing
- Contact

Primary CTA in header:
- `Work with me`
or
- `Get in touch`

## 12.3 Footer

Footer should include:

- logo or monogram
- short brand statement
- navigation repeat
- contact link
- link to Arkham Times
- social links if desired
- space for legal / company details

Because this is a French company, the implementation should leave room for legal/company identifiers in footer or legal page, but the exact wording should be validated separately.

---

## 13. Page-by-page specification

## 13.1 Home page

### Goal
Explain the offer, establish mood, show depth, and drive contact.

### Section order

#### 1. Hero
Required content:
- main heading
- subheading
- primary CTA
- secondary CTA
- optional hero art / background motif

Recommended copy direction:
- Heading: `Senior advisory for organisations making consequential decisions in data, AI, and transformation.`
- Supporting line:
  `Arkham Advisory helps leaders think clearly when platforms are shifting, AI capabilities are outrunning policy, and transformation decisions carry real operational weight.`

CTAs:
- `Work with me`
- `Read the field notes`

#### 2. What I advise on
A 3–4 card or 2x2 grid:

- Architecture and platform strategy
- AI and agentic systems
- Technical due diligence
- Transformation counsel

Each item should have:
- title
- 2–3 sentence description
- optional link to `/advisory/`

#### 3. How I work
Short editorial block:
- small number of engagements
- direct advice, not canned frameworks
- architecture + delivery + organisational reality considered together
- high signal, senior-level judgment

This section can be:
- left text + right quote
- or a simple two-column statement block

#### 4. Selected writing
Curated feed from Arkham Times or local curation collection.

Display:
- 3 featured essays on desktop
- 1–2 on mobile initially

Each card should include:
- title
- short description
- topic label
- outbound link or internal curated detail page

#### 5. Why Arkham
Short brand philosophy block.
Keep it concise and elegant.

#### 6. Final CTA
A simple closing section:
- `If the decisions in front of you are consequential enough to justify senior external judgment, let’s talk.`

### Home page layout behavior

Desktop:
- hero may be split: copy left, visual right
- supporting sections should alternate between wide text and structured cards

Mobile:
- stack everything
- keep hero copy first
- use monogram or small key art crop rather than oversized dense imagery

---

## 13.2 Advisory page

### Goal
Make the offer concrete.

### Structure

#### Intro
Short paragraph explaining that Arkham Advisory works on consequential technical and transformation decisions.

#### Service sections
Create four sections:

1. Architecture and platform strategy
2. AI strategy and agentic systems
3. Technical due diligence
4. Transformation counsel

Each section should include:
- short description
- what this is for
- example situations
- likely outputs or outcomes

Example output framing:
- independent strategic review
- architecture decision support
- leadership workshop
- platform direction assessment
- delivery confidence review

#### Engagement formats
Suggested formats:
- advisory retainer
- focused assessment
- strategic review
- workshop / deep dive

#### CTA
Invite the right kind of contact.

### Visual behavior

The Advisory page should be more structured and less atmospheric than the homepage.  
Use cards, section separators, muted background panels, and strong typography.

---

## 13.3 About page

### Goal
Build trust and explain the person behind the practice.

### Structure

#### Intro / biography
A concise professional profile focused on:
- architecture
- engineering judgment
- data platforms
- transformation
- AI / emerging systems

#### Working style
Describe how you think and operate:
- direct
- analytical
- calm under ambiguity
- practical rather than abstract
- value-aware, not just technically pure

#### Why this practice exists
Explain that many organisations do not primarily lack technology; they lack clarity at the boundary between architecture, delivery, and value.

#### Why Arkham
Reinforce the meaning of the name briefly.

#### Closing CTA
Encourage contact.

### Visual behavior

Use:
- a quieter page than home
- monogram or subtle seal motif
- a pull quote or philosophy block
- optional small hero image crop

---

## 13.4 Writing page

### Goal
Bridge the advisory practice to the editorial work.

### Structure

#### Intro
Briefly explain that Arkham Times is where the field notes live.

#### Topic groups
Suggested groups:
- Data Platform
- AI
- Transformation
- Engineering / Architecture

#### Featured articles
Show curated articles with:
- title
- summary
- category
- date if useful
- outbound link or local mirrored teaser page

#### CTA
Link to the full publication or archive.

### Visual behavior

This page can feel slightly more editorial than the rest of the site, but must still remain part of the same brand system.

---

## 13.5 Contact page

### Goal
Reduce friction and encourage serious enquiries.

### Structure

#### Intro
Explain who should get in touch.

#### Contact methods
At minimum:
- email
- LinkedIn or another professional channel if desired

A simple mailto link is acceptable for first version.

#### Fit guidance
Explain what kinds of conversations are a good fit:
- architecture / platform direction
- AI and agentic decisions
- major transformation steering
- due diligence / independent review

#### Optional note
Mention that Arkham Advisory works with a limited number of engagements at a time.

### Visual behavior

Keep it minimal.
Do not overbuild forms unless needed.

---

## 13.6 404 page

### Goal
Stay on-brand.

Suggested line:
`The map runs out here.`

Include:
- short explanation
- return home CTA
- subtle monogram or atmospheric background

---

## 14. Component inventory

The implementation agent should create reusable components for:

- `SiteHeader`
- `SiteFooter`
- `HeroSection`
- `SectionIntro`
- `ServiceGrid`
- `ServiceCard`
- `WritingGrid`
- `WritingCard`
- `QuoteBlock`
- `BrandNote`
- `CTASection`
- `ContactMethods`
- `PageHero`
- `DividerOrnament`
- `BackgroundMotif`
- `LogoLockup`
- `MonogramBadge`

Optional:
- `TopicPill`
- `CalloutPanel`
- `StatelessContactForm` (only if needed)

---

## 15. Astro content model

## 15.1 Recommended content folders

```text
src/
  components/
  layouts/
  pages/
  content/
    pages/
      home.md
      advisory.md
      about.md
      writing.md
      contact.md
    services/
      architecture-platform.md
      ai-agentic.md
      due-diligence.md
      transformation-counsel.md
    writing/
      modern-data-platform.md
      technical-value-assurance.md
      ...
  styles/
public/
  images/
```

## 15.2 Content collections suggestion

Use Astro content collections for:

- `services`
- `writing`
- optional `featured` or `case-notes`

### Suggested fields for `writing`

```ts
title
description
category
publishedAt
featured
externalUrl
image
```

### Suggested fields for `services`

```ts
title
slug
summary
intro
useCases[]
outcomes[]
order
```

---

## 16. Implementation approach

## 16.1 Stack

Recommended:

- Astro
- Tailwind CSS
- Astro content collections
- image optimization where practical
- minimal client-side JavaScript only where useful

## 16.2 GitHub Pages notes

The implementation should support:

- custom domain deployment
- static export
- GitHub Actions deployment

If a custom domain is used at the root, keep the site config aligned accordingly.  
Avoid any architecture that requires server-side runtime.

## 16.3 Image handling

Put final approved assets into `public/images/brand/...`.

Suggested structure:

```text
public/images/brand/
  logos/
  social/
  hero/
  reference/
```

Use:
- `.png` for direct use when necessary
- `.webp` for hero and large decorative imagery
- `.svg` for final logo redraw when available

---

## 17. Accessibility requirements

Accessibility is non-negotiable.

## 17.1 Color and contrast

- all text must meet accessible contrast targets
- do not use moss / sage for body copy on dark backgrounds if contrast is weak
- reserve muted green tones for secondary text, metadata, or fine linework

## 17.2 Semantic structure

- use correct heading hierarchy
- keep nav landmarks and footer landmarks clear
- buttons and links must be distinct
- do not hide important content inside decorative effects

## 17.3 Motion accessibility

- respect `prefers-reduced-motion`
- motion must degrade cleanly to none

## 17.4 Keyboard and focus

- all nav elements accessible by keyboard
- visible focus states
- links clearly identifiable

---

## 18. Performance requirements

Target a very fast site.

## 18.1 Goals

- fast first render
- very low JS payload
- optimized imagery
- no blocking visual gimmicks

## 18.2 Specific implementation guidance

- keep hero imagery compressed
- prefer WebP for large atmospheric visuals
- use PNG only where crisp logo rendering matters
- lazy-load non-critical images
- do not animate huge background layers on scroll
- avoid unnecessary dependencies

---

## 19. SEO and metadata

## 19.1 Site-level metadata

Set:

- site title
- default description
- canonical URL
- OG image
- favicon / app icons

Recommended default description:
`Senior advisory for organisations making consequential decisions in data, AI, and transformation.`

## 19.2 Page-level metadata

Each page should have:
- unique title
- unique meta description
- social image fallback
- canonical path

## 19.3 Recommended OG asset

Use:
- `assets/social/arkham-og-1200x630.png`

Fallback:
- `assets/social/arkham-og-banner.png`

---

## 20. Suggested copy framework

The implementation agent may use this as the initial copy direction.

## 20.1 Hero

**Heading**  
Senior advisory for organisations making consequential decisions in data, AI, and transformation.

**Subheading**  
Arkham Advisory helps leaders think clearly when platforms are shifting, AI capabilities are outrunning policy, and transformation decisions carry real operational weight.

**Primary CTA**  
Work with me

**Secondary CTA**  
Read the field notes

## 20.2 Why Arkham

The name comes from Lovecraft’s Arkham: a place where familiar explanations stop being enough, and older, more demanding realities begin to show through. That felt closer to modern technology than the usual language of disruption. The map runs out. Judgment matters.

## 20.3 Closing CTA

If the decisions in front of you are consequential enough to justify senior external judgment, let’s talk.

---

## 21. Asset inventory included in this package

## 21.1 Reference

- `assets/reference/original-brand-art-reference.png`

## 21.2 Approved / implementation assets

- `assets/logos/arkham-primary-dark.png`
- `assets/logos/arkham-primary-light.png`
- `assets/logos/arkham-horizontal-dark.png`
- `assets/logos/arkham-horizontal-dark-2400x800.png`
- `assets/logos/arkham-monogram-dark.png`
- `assets/logos/arkham-monogram-light.png`
- `assets/logos/arkham-brand-board.png`

## 21.3 Social and hero assets

- `assets/social/arkham-og-banner.png`
- `assets/social/arkham-og-1200x630.png`
- `assets/social/arkham-og-1600x840.png`
- `assets/social/arkham-square-social-1200.png`
- `assets/hero/arkham-hero-key-art.png`
- `assets/hero/arkham-hero-1920x1080.png`
- `assets/hero/arkham-hero-1920x1080.webp`
- `assets/hero/arkham-hero-1600x900.png`

## 21.4 Derived favicon assets

- `assets/derived/favicon-dark-512.png`
- `assets/derived/favicon-dark-192.png`
- `assets/derived/favicon-dark-180.png`
- `assets/derived/favicon-dark-64.png`
- `assets/derived/favicon-dark-32.png`
- `assets/derived/favicon-dark-16.png`
- `assets/derived/favicon-light-512.png`
- `assets/derived/favicon-light-192.png`
- `assets/derived/favicon-light-180.png`
- `assets/derived/favicon-light-64.png`
- `assets/derived/favicon-light-32.png`
- `assets/derived/favicon-light-16.png`

## 21.5 Concept exploration assets

- `assets/concepts/option-b-concept-board.png`
- `assets/concepts/proposition-a-seal.png`
- `assets/concepts/proposition-c-sigil.png`

## 21.6 Raw generated references

All raw generated variants are included in:
- `assets/raw-generated/`

These are for inspiration and fallback reference only.

---

## 22. Implementation rules for the agent

The implementation agent must:

- treat the approved monogram system as the single brand direction
- prioritize readability and performance over effects
- use the imagery as atmosphere, not decoration overload
- keep the site content-led
- preserve the premium editorial tone
- avoid adding new themes or lore not already implied here

The implementation agent should:

- redraw the final logo in SVG if possible
- build a small, reusable design system
- keep content in Markdown or content collections
- create a maintainable GitHub Pages deployment flow

The implementation agent must not:

- turn the site into a thematic art piece at the expense of business clarity
- overuse tentacles, symbols, or background overlays
- add unnecessary JS frameworks
- bury the contact path

---

## 23. Acceptance checklist

The redesign is successful if all of the following are true:

- the site is static and deploys cleanly to GitHub Pages
- the site looks premium on desktop and mobile
- the approved logo system is used consistently
- the homepage clearly explains the offer
- the advisory page clearly structures the services
- the writing page supports thought leadership credibly
- the contact page is simple and effective
- the site remains performant
- typography and spacing feel intentional
- the visual language is unmistakably Arkham, but not gimmicky

---

## 24. Recommended first build order

1. set up Astro project and GitHub Pages deployment
2. add global layout, fonts, tokens, and header/footer
3. add approved logo assets and favicon assets
4. build homepage hero and core service sections
5. build advisory, about, writing, and contact pages
6. add social metadata and OG assets
7. optimize imagery and responsive behavior
8. replace raster logo with SVG redraw if available
9. final QA for performance, accessibility, and tone

---

## 25. Final note

This site should feel like:

**a serious advisory practice with an editorial mind and a mythic edge.**

Not a consultancy template.  
Not a fandom reference.  
Not a dark-theme gimmick.

It should feel like a calm signal when the map runs out.
