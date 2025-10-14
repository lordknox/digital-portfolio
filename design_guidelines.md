# Design Guidelines: Blockchain & Finance Digital Portfolio

## Design Approach: Reference-Based (Modern Tech Portfolio)

**Primary Inspiration**: Linear (modern tech aesthetic) + Stripe (professional sophistication) + Coinbase (blockchain credibility)

**Rationale**: Portfolio sites in the tech/finance sector require both visual impact to capture attention and functional clarity to communicate expertise. The blockchain theme demands a cutting-edge, futuristic feel while maintaining professional credibility.

**Core Principles**:
- Tech-forward professionalism over flashy trends
- Clear information hierarchy for resume content
- Subtle blockchain-inspired visual elements (gradients, geometric patterns)
- Credible and trustworthy presentation

## Color Palette

**Dark Mode Primary** (default):
- Background: 222 25% 8% (deep charcoal)
- Surface: 222 20% 12% (elevated dark)
- Text Primary: 0 0% 95%
- Text Secondary: 0 0% 65%

**Brand Colors**:
- Primary: 217 91% 60% (cyber blue - for CTAs, links)
- Accent: 270 75% 65% (tech purple - for highlights, gradients)
- Success: 158 64% 52% (blockchain green - for positive metrics)

**Gradients**:
- Hero/Feature backgrounds: Linear gradient from 217 91% 60% to 270 75% 65%
- Card accents: Subtle radial gradients with 10-15% opacity

## Typography

**Fonts** (Google Fonts CDN):
- Headings: 'Inter' (weights: 600, 700, 800)
- Body: 'Inter' (weights: 400, 500)
- Code/Technical: 'JetBrains Mono' (weight: 400)

**Scale**:
- H1 (Hero): text-6xl md:text-7xl font-bold tracking-tight
- H2 (Section): text-4xl md:text-5xl font-bold
- H3 (Subsection): text-2xl md:text-3xl font-semibold
- Body: text-base md:text-lg leading-relaxed
- Caption: text-sm text-secondary

## Layout System

**Spacing Primitives**: Tailwind units of 4, 6, 8, 12, 16, 20 (p-4, gap-8, py-20 etc.)

**Container Strategy**:
- Full-width sections with max-w-7xl inner containers
- Content max-width: max-w-6xl for text-heavy sections
- Cards/Components: Consistent p-6 or p-8 padding

**Grid System**:
- Projects: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
- Skills: grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4
- Timeline: Single column with decorative connector line

## Component Library

**Navigation**:
- Sticky header with backdrop blur (bg-background/80 backdrop-blur-lg)
- Logo + horizontal nav links on desktop, hamburger on mobile
- Smooth scroll-to-section behavior

**Hero Section** (100vh):
- Full-width with gradient overlay
- Large hero image (professional workspace/blockchain visualization)
- Centered content: Name (text-6xl), tagline, dual CTAs
- Social links (LinkedIn, Instagram) with icons
- Scroll indicator at bottom

**Project Cards**:
- Elevated surface (bg-surface border border-border/20)
- Hover: subtle lift transform and border glow
- Image preview + title + tech stack tags + description
- "View Details" link with arrow icon

**Skills Grid**:
- Icon + label format
- Grouped by category (Technical/Finance)
- Subtle hover states with scale transform

**Experience Timeline**:
- Left-aligned content with vertical connector line
- Company logo circles on timeline
- Role, duration, bullet achievements
- Alternating card backgrounds for visual rhythm

**Resume Download CTA**:
- Prominent button with gradient background
- Icon (download) + "Download CV" text
- Hover: gradient shift animation

**Contact Section**:
- Two-column: Contact form (left) + Info/Social (right)
- Form fields with subtle border focus states
- LinkedIn/Instagram links with branded colors

**Footer**:
- Minimal: Copyright + quick links + social icons
- Subtle top border separator

## Images

**Hero Image**: Professional workspace with dual monitors showing blockchain charts/code, or abstract blockchain network visualization. Full-width background with dark overlay (40% opacity) to maintain text readability.

**Project Thumbnails**: Dashboard screenshots, smart contract interfaces, financial charts, DeFi platform mockups. Use 16:9 aspect ratio for consistency.

**About Section**: Professional headshot or abstract geometric pattern representing blockchain technology.

## Animations

**Minimal, purposeful only**:
- Fade-in on scroll for sections (using Intersection Observer)
- Smooth page transitions between sections
- Hover states: subtle scale (1.02) and border glow
- NO complex scroll-triggered animations or parallax effects

## Accessibility

- High contrast text (WCAG AAA where possible)
- Focus visible states on all interactive elements
- Semantic HTML structure for screen readers
- Alt text for all images
- Skip-to-content link for keyboard navigation