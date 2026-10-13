# Homepage - E-commerce Premium Revamp

## Page-Specific Overrides (extends MASTER.md)

### Hero Carousel
- Height: 720px (desktop), 480px (tablet), 360px (mobile)
- Aspect ratio: 21:9
- Overlay gradient: `linear-gradient(135deg, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0.4) 45%, transparent 100%)`
- Content max-width: 700px (desktop), 600px (tablet), 100% (mobile)
- CTA button: Primary gradient, icon-right, hover scale + shadow

### Perks Strip
- 4-card grid on desktop (300px min), 2-card on tablet, 1-card on mobile
- Icon container: 56×56px, rounded-xl, gradient background
- Animation: Subtle float on hover (translateY(-2px))

### Product Grid Section
- Container padding: 4rem 2rem (desktop), 2.5rem 1rem (tablet), 1.5rem (mobile)
- Grid gap: 2rem (desktop), 1.5rem (tablet), 1rem (mobile)
- Section header: Space between layout with count badge

### Category Filter Rail
- Position: Sticky top below header
- Z-index: 950
- Background: Glass morphism (matches surface)
- Padding: 1.25rem
- Gap between categories: 10px
- Scroll snap: x (each category snaps to start)

### Newsletter Section
- Positioned after product grid
- Full-width gradient background with animated pulse
- Input height: 52px (desktop), 46px (mobile)
- Button: Full-width on mobile, inline on desktop

## Premium UI Elements to Add

### 1. Back to Top Button Enhancement
- Smooth scroll animation (800ms ease-in-out)
- Progress indicator around button
- Shows after 30% scroll depth

### 2. Smart Empty States
- Cart empty: Illustration + empathetic message + CTA button
- Search empty: Search suggestions + trending products

### 3. Loading States
- Skeletons with shimmer gradient
- Product card skeletons: 6 items (2 rows of 3 on desktop)
- Carousel skeleton: Blurred placeholder with loading bar

### 4. Social Proof Elements
- Trust badges (verified checkout, secure payment)
- Live visitor counter
- Recent purchases notification
- Rating distribution widget

### 5. Search Enhancement
- Instant search results dropdown
- Category filter tabs in search
- Recent searches history
- Trending searches suggestions
