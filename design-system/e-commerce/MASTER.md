# Design System: Premium E-commerce (ShopNow)

## Pattern: Product-Centric + Social Proof

**Conversion Focus:** Product discovery with trust signals and frictionless checkout

### Layout Structure
- **Hero Carousel:** 720px height on desktop, autoplay with pause-on-hover, thumbnail indicators
- **Category Rail:** Horizontal scrollable category filters, sticky on scroll
- **Product Grid:** Responsive masonry/grid layout (4-col desktop, 3-col tablet, 2-col mobile)
- **Product Detail:** Split-screen layout with image gallery (desktop), stacked (mobile)
- **Cart:** Two-column layout with order summary sticky sidebar
- **Checkout:** Three-step vertical stepper (Shipping → Payment → Confirmation)
- **Thank You:** Centered success card with order timeline

---

## Style: Luxury Minimal (Premium E-commerce)

**Keywords:** Clean luxury, sophisticated whitespace, premium materials, refined shadows, subtle animations, trust

**Best For:** High-end e-commerce, luxury goods, premium lifestyle brands

### Color Palette

| Role | Light Mode | Dark Mode |
|------|-----------|-----------|
| Primary | `#2563eb` (Royal Blue) | `#60a5fa` (Soft Blue) |
| Secondary | `#7c3aed` (Violet) | `#8b5cf6` (Purple) |
| Accent | `#f59e0b` (Amber) | `#fbbf24` (Gold) |
| Success | `#10b981` (Emerald) | `#34d399` (Mint) |
| Danger | `#ef4444` (Red) | `#f87171` (Soft Red) |
| Background | `#f8fafc` (Cool Gray 50) | `#0f172a` (Navy 900) |
| Surface | `#ffffff` (White) | `#1e293b` (Navy 800) |
| Surface Glass | `rgba(255,255,255,0.7)` | `rgba(15,23,42,0.75)` |
| Border | `rgba(226,232,240,0.8)` | `rgba(255,255,255,0.08)` |
| Text Primary | `#0f172a` (Navy 900) | `#f1f5f9` (Gray 50) |
| Text Secondary | `#475569` (Gray 600) | `#94a3b8` (Gray 400) |
| Text Disabled | `#94a3b8` (Gray 400) | `#64748b` (Gray 500) |

### Typography

**Primary Font:** `Inter` (System: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto)
**Accent Font:** `Playfair Display` (for headings and luxury elements)

| Element | Size | Weight | Line Height | Letter Spacing |
|---------|------|--------|-------------|----------------|
| Display XL (Hero) | 4rem / 3.2rem / 2.4rem | 900 | 1.1 | -0.03em |
| Display LG (Section) | 2.5rem / 2rem / 1.75rem | 800 | 1.15 | -0.02em |
| Heading 1 (Product) | 2.25rem / 1.75rem / 1.5rem | 700 | 1.2 | -0.02em |
| Heading 2 (Card) | 1.25rem | 700 | 1.3 | -0.01em |
| Body (Primary) | 1rem / 0.95rem | 500 | 1.6 | normal |
| Small (Labels) | 0.875rem | 600 | 1.4 | normal |
| Caption | 0.8rem / 0.75rem | 500 | 1.4 | normal |

### Spacing Scale
Base unit: 4px (0.25rem)

```
xs:  0.25rem (4px)
sm:  0.5rem  (8px)
md:  0.75rem (12px)
lg:  1rem    (16px)
xl:  1.25rem (20px)
2xl: 1.5rem  (24px)
3xl: 1.75rem (28px)
4xl: 2rem    (32px)
5xl: 2.5rem  (40px)
6xl: 3rem    (48px)
7xl: 3.5rem  (56px)
8xl: 4rem    (64px)
```

### Border Radius Scale

| Size | Value | Usage |
|------|-------|-------|
| sm | 6px | Tags, small elements |
| md | 10px | Form inputs, cards |
| lg | 14px | Buttons, category pills |
| xl | 18px | Product cards |
| 2xl | 22px | Modal dialogs |
| 3xl | 28px | Product detail container |
| 4xl | 32px | Hero sections, section wrappers |

### Shadows (Subtle Depth)

| Name | Light Mode | Dark Mode |
|------|-----------|-----------|
| xs | `0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.03)` | `0 1px 3px rgba(0,0,0,0.3)` |
| sm | `0 2px 8px rgba(0,0,0,0.05), 0 1px 3px rgba(0,0,0,0.04)` | `0 2px 8px rgba(0,0,0,0.35)` |
| md | `0 4px 14px -2px rgba(0,0,0,0.06), 0 2px 6px rgba(0,0,0,0.03)` | `0 4px 14px -2px rgba(0,0,0,0.4)` |
| lg | `0 10px 30px -10px rgba(0,0,0,0.08), 0 4px 14px rgba(0,0,0,0.04)` | `0 10px 30px -10px rgba(0,0,0,0.5)` |
| xl | `0 15px 40px -10px rgba(0,0,0,0.1), 0 6px 20px rgba(0,0,0,0.05)` | `0 15px 40px -10px rgba(0,0,0,0.6)` |
| 2xl | `0 25px 60px -15px rgba(0,0,0,0.15), 0 8px 30px rgba(0,0,0,0.08)` | `0 25px 60px -15px rgba(0,0,0,0.7)` |
| 3xl | `0 35px 70px -20px rgba(0,0,0,0.2), 0 12px 40px rgba(0,0,0,0.1)` | `0 35px 70px -20px rgba(0,0,0,0.8)` |

### Effects & Animations

**Glass Morphism:**
- Light: `rgba(255, 255, 255, 0.7) + backdrop-blur(20px) + border rgba(226, 232, 240, 0.8)`
- Dark: `rgba(15, 23, 42, 0.75) + backdrop-blur(20px) + border rgba(255, 255, 255, 0.08)`

**Transitions:**
- Fast: `150ms cubic-bezier(0.4, 0, 0.2, 1)` (micro-interactions)
- Standard: `250ms cubic-bezier(0.4, 0, 0.2, 1)` (UI state changes)
- Emphasis: `350ms cubic-bezier(0.16, 1, 0.3, 1)` (card hover, modal)

**Hover Lifts:**
- Cards: `transform: translateY(-4px) + shadow increase`
- Buttons: `transform: translateY(-2px) + scale(1.03)`

### Accessibility Requirements
- Minimum contrast ratio: 4.5:1 (text), 3:1 (UI elements)
- Focus visible: 2px solid `#3b82f6` with offset
- Touch targets: minimum 44×44px
- Prefers-reduced-motion supported

### Grid System
- Container max-width: 1400px (desktop), 768px (tablet), 360px (mobile)
- Gutters: 2rem (desktop), 1.5rem (tablet), 1rem (mobile)
- Product grid: 4-col (≥1200px), 3-col (≥768px), 2-col (≥480px), 1-col (<480px)

### Iconography
- **Library:** Lucide React (primary), React Icons (social)
- **Sizes:** 16px (micro), 18px (small), 20px (default), 22px (large), 24px+ (display)

### Pre-Delivery Checklist
- [ ] No emojis as icons (use SVG: Lucide/React Icons)
- [ ] cursor-pointer on all clickable elements
- [ ] Interaction timing follows platform, component, and user preference
- [ ] Light mode: text contrast 4.5:1 minimum
- [ ] Focus states visible for keyboard navigation
- [ ] prefers-reduced-motion respected
- [ ] Text, chips, and badges reflow without clipping or broken labels
- [ ] Responsive at 375px, 768px, 1024px, 1440px

---

## Component Specifications

### Button Variants

| Variant | Background | Text | Border | Hover |
|---------|-----------|------|--------|-------|
| Primary | Gradient blue | White | None | Scale + shadow increase |
| Secondary | Transparent | Primary | 1px solid primary/20 | Background primary/10 |
| Tertiary | Transparent | Text | None | Background gray/5 |
| Ghost | Transparent | Text | None | Background gray/5 |
| Glass | Glass morphism | Text | Glass border | Border color change |

### Card Variants

| Variant | Background | Border | Shadow | Hover |
|---------|-----------|--------|--------|-------|
| Product | Glass/surface | Glass border | Subtle depth | Lift + border accent |
| Content | Surface | Subtle border | None | None |
| Interactive | Surface | Subtle border | Subtle | Border color + lift |

### Form Elements
- Input height: 42px (mobile), 44px (desktop)
- Label font weight: 600, positioned above input
- Focus ring: 3px offset ring with 15% opacity
- Error state: `#ef4444` border + error message below
- Disabled state: 40% opacity + not-allowed cursor
