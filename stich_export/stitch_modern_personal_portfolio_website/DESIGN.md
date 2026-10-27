---
name: Luminous Modern Portfolio
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#434655'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#0058be'
  on-secondary: '#ffffff'
  secondary-container: '#2170e4'
  on-secondary-container: '#fefcff'
  tertiary: '#0d46d1'
  on-tertiary: '#ffffff'
  tertiary-container: '#3761ea'
  on-tertiary-container: '#efefff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#dce1ff'
  tertiary-fixed-dim: '#b7c4ff'
  on-tertiary-fixed: '#001551'
  on-tertiary-fixed-variant: '#0039b5'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 30px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: 0em
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0.005em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.04em
  caption:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.01em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system expresses a refined, architectural minimalism engineered for senior creative technologists, product designers, and engineers. The visual narrative communicates quiet authority, craft precision, and effortless technological mastery.

The interface prioritizes breathing room, deliberate typography, and high-clarity structural relationships. Interaction models lean into fluid, subtle micro-elevations rather than theatrical animations, signaling thoughtful engineering and sophisticated visual taste.

## Colors

The palette is anchored by a high-clarity white foundation paired with cool structural slates and radiant sapphire blue accents.

### Color Tokens & Roles

- **Canvas & Surfaces:**
  - Base canvas: `#ffffff` (pure white, primary canvas depth)
  - Surface subtle: `#f8fafc` (slate-50, section alternating fills, code containers)
  - Surface elevated: `#f1f5f9` (slate-100, chip fills, subtle borders, divider tracks)
  - Surface card: `#ffffff` (with hairline stroke)

- **Typography & Structural Slates:**
  - Text primary: `#0f172a` (slate-900, headline weights, core contrast)
  - Text secondary: `#334155` (slate-700, running prose, long-form project case studies)
  - Text muted: `#64748b` (slate-500, metadata, timestamps, captions, secondary tags)
  - Border hairline: `rgba(15, 23, 42, 0.08)` (subtle structural separation)
  - Border active: `rgba(37, 99, 235, 0.35)` (hover state accent stroke)

- **Accent Hierarchy:**
  - Primary accent: `#2563eb` (electric royal blue, primary CTAs, active indicators)
  - Accent hover: `#1d4ed8` (deep royal blue, hover and pressed states)
  - Accent soft: `rgba(37, 99, 235, 0.08)` (pill tag backgrounds, badge highlights)
  - Focus ring: `rgba(59, 130, 246, 0.4)` (3px soft focus perimeter)

## Typography

The type system relies entirely on Plus Jakarta Sans to maintain geometric purity, modern character, and exceptional legibility across both dense portfolio metrics and expressive headlines.

- **Headlines:** Display and H1 elements utilize negative tracking (`-0.02em` to `-0.03em`) and structured line heights to feel sculpted, editorial, and commanding.
- **Body Prose:** Body text values utilize relaxed line heights (`1.6x` to `1.7x` the font size) to optimize readability in long-form project case studies and role retrospective blocks.
- **Labels & Overlines:** Overline labels and technical badges employ increased letter spacing (`0.04em`) with uppercase transforms and semi-bold weighting (`600`) to anchor scanning paths.

## Layout & Spacing

The layout is built on a responsive 12-column grid capped at a maximum width of `1200px` to maintain optimal viewing angles on large monitors without letterboxing or over-stretching content blocks.

### Breakpoints & Adaptations
- **Desktop (1024px and above):** 12 columns, `1.5rem` (24px) gutters, and `3rem` (48px) page margins. Content showcases asymmetric two-column splits (e.g., 5-column sticky bio/index paired with a 7-column project stream).
- **Tablet (768px – 1023px):** 8 columns, `1.25rem` (20px) gutters, and `2rem` (32px) margins. Case studies transition to stacked or alternating 4-column blocks.
- **Mobile (Below 768px):** 4 columns, `1rem` (16px) gutters, and `1.25rem` (20px) margins. All columns collapse cleanly to single-column vertical flows with full-bleed cards and compact top navigation.

Vertical rhythm adheres strictly to an 8px baseline framework (`8px`, `16px`, `24px`, `40px`, `64px`, `96px`), ensuring consistent and predictable section pacing throughout the entire scroll journey.

## Elevation & Depth

Visual hierarchy employs a fusion of razor-thin structural borders and ambient diffusion shadows. Surfaces rely on tonal clarity rather than dense opacity.

### Depth Hierarchy
- **Level 0 (Flat Canvas):** `#ffffff` background with zero elevation.
- **Level 1 (Resting Component):** Card and container components sit flush on the canvas, bounded by a 1px solid hairline border: `rgba(15, 23, 42, 0.08)`. Shadow is barely perceptible: `0 1px 3px rgba(15, 23, 42, 0.03), 0 1px 2px rgba(15, 23, 42, 0.02)`.
- **Level 2 (Hover & Focus States):** Upon hover, cards lift subtly (`transform: translateY(-3px)`) while expanding ambient blue-tinted shadows: `0 12px 28px -6px rgba(15, 23, 42, 0.08), 0 6px 14px -4px rgba(37, 99, 235, 0.06)`. The border transitions to `rgba(37, 99, 235, 0.25)`.
- **Level 3 (Floating Overlays / Modals / Sticky Navigation):** Background uses a translucent white treatment (`rgba(255, 255, 255, 0.85)`) with a `backdrop-filter: blur(12px) -webkit-backdrop-filter: blur(12px)` and a subtle under-stroke: `border-bottom: 1px solid rgba(15, 23, 42, 0.06)`. Shadows are long and feather-soft: `0 20px 35px -8px rgba(15, 23, 42, 0.07)`.

## Shapes

The interface embraces a unified `0.5rem` (8px) geometric curvature for baseline controls, escalating to `1rem` (16px) for cards and modals to feel organic yet architecturally disciplined.

### Curvature Tokens
- **Standard (`0.5rem` / 8px):** Buttons, input fields, inline interactive tags, dropdown menus.
- **Large (`1rem` / 16px):** Project cards, spotlight media frames, testimonial surfaces.
- **Pill (`9999px`):** Status badges, availability indicators, category filter chips, and primary contact action buttons.

## Components

### Buttons
- **Primary Action:** Solid `#2563eb` fill, text `#ffffff`, height 44px, padding `0 1.5rem`, rounded-full (pill). Hover transitions to `#1d4ed8` with shadow `0 6px 16px -2px rgba(37, 99, 235, 0.35)`.
- **Secondary / Outline:** Background `#ffffff`, border `1px solid rgba(15, 23, 42, 0.12)`, text `#0f172a`. Hover transitions to background `#f8fafc` and border `rgba(15, 23, 42, 0.24)`.
- **Ghost Action:** Background transparent, text `#334155`. Hover transitions to text `#2563eb` and background `#f1f5f9`.

### Badges & Status Indicators
- **Category Chips:** Background `#f1f5f9`, text `#334155`, font `12px`, weight `600`, padding `4px 10px`, rounded-full.
- **Accent Badges:** Background `rgba(37, 99, 235, 0.08)`, text `#2563eb`, border `1px solid rgba(37, 99, 235, 0.18)`, rounded-full.
- **Availability Pill:** Features an inline pulsating green node (`#10b981`), background `#ffffff`, border `1px solid rgba(15, 23, 42, 0.08)`, padding `6px 14px`, text `#0f172a`.

### Cards & Project Showcases
- **Project Card:** White canvas (`#ffffff`), `16px` border-radius, hairline stroke `1px solid rgba(15, 23, 42, 0.08)`, inner padding `24px` to `32px`. Image containers within cards feature an inner border (`1px solid rgba(0,0,0,0.04)`) and `10px` radius. Hover engages a smooth 240ms cubic-bezier translation (`translateY(-3px)`) and elevates with soft sapphire ambient shading.
- **Metrics / Stat Cards:** Background `#f8fafc`, padding `20px`, subtle border, displaying large numerical data in `#0f172a` with label captioning in `#64748b`.

### Form Inputs & Contact Fields
- **Input & Textarea:** Background `#ffffff`, border `1px solid rgba(15, 23, 42, 0.12)`, height 46px (inputs), padding `0 16px`, text `#0f172a`, placeholder `#94a3b8`. 
- **Focus State:** Border color `#2563eb`, outline `none`, ring `3px solid rgba(59, 130, 246, 0.18)`.

### Lists & Experience Timelines
- **Timeline Item:** Connected by an off-center vertical line (`1px solid #e2e8f0`). Nodes are `8px` circles filled with `#2563eb` resting in an `#ffffff` ring with a `2px` hairline border. Typography breaks out role title (`#0f172a`, semi-bold), company name (`#334155`), and tenure (`#64748b`, caption style).