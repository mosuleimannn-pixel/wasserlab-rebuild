# WASSERLAB REBUILD - PROJECT BRIEF

## 🎯 MISSION
Rebuild wasserlab.com as the MOST INSANE water purification website in existence.
Dark theme. Framer Motion everywhere. Premium feel. Apple-level polish.

## 🏢 CLIENT
**Wasserlab** - Spanish water purification systems manufacturer
- 25+ years experience
- Lab, hospital & industrial equipment
- ISO 9001 & 14001 certified

## 📊 CONTENT STRUCTURE

### Pages Required
1. **Homepage** - Hero + Products + Sectors + CTA
2. **Empresa** (About) - Company story
3. **Equipos** (Products) - Product catalog with categories
4. **Sectores** (Industries) - 8 industry verticals
5. **Contacto** - Contact form + Map
6. **Presupuesto** - Quote request form

### Products (4 Categories)
1. Sobremesa Gama Básica (3 products)
2. Sobremesa Gama Plus (7 products)
3. Alimentación Analizadores Clínicos (3 products)
4. Gama Alta Producción (4 products)

### Water Types
- Tipo I: Agua Ultrapura (Ultrapure)
- Tipo II: Agua Pura (Pure)
- Tipo III: Agua Osmotizada (Osmosis)

## 🎨 DESIGN DIRECTION

### Theme: "Liquid Precision"
- **Dark base** with water-blue accents
- **Glass morphism** effects
- **Particle systems** (water molecules)
- **Fluid animations** everywhere
- **3D product showcases**

### Color Palette
```css
--bg-primary: #0a0a0f;      /* Near black */
--bg-secondary: #12121a;    /* Dark blue-black */
--accent-primary: #00d4ff;  /* Cyan/Water blue */
--accent-secondary: #0066ff; /* Deep blue */
--accent-glow: #00ffff;     /* Neon cyan */
--text-primary: #ffffff;
--text-secondary: #94a3b8;
--gradient-water: linear-gradient(135deg, #00d4ff 0%, #0066ff 50%, #00ffaa 100%);
```

### Typography
- Headlines: Inter/Outfit - Bold, tight tracking
- Body: Inter - Clean, readable
- Accents: Monospace for specs/data

### Animation Principles
1. **Entrance**: Stagger children, fade up
2. **Scroll**: Parallax, reveal on scroll
3. **Hover**: Scale, glow, magnetic effect
4. **Transitions**: Smooth page transitions
5. **Background**: Floating particles, gradient shifts

## 🛠 TECH STACK

```
Framework:     Next.js 14+ (App Router)
Styling:       Tailwind CSS + Custom CSS
Animation:     Framer Motion
UI:            Custom components (no shadcn - too generic)
Icons:         Lucide React
3D (optional): Three.js / React Three Fiber
Fonts:         next/font (Inter, Outfit)
```

## 📁 PROJECT STRUCTURE

```
wasserlab-rebuild/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx           # Homepage
│   │   ├── empresa/page.tsx
│   │   ├── equipos/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── sectores/page.tsx
│   │   └── contacto/page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Navigation.tsx
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── ProductShowcase.tsx
│   │   │   ├── SectorGrid.tsx
│   │   │   └── CTASection.tsx
│   │   ├── products/
│   │   │   ├── ProductCard.tsx
│   │   │   ├── ProductGallery.tsx
│   │   │   └── SpecsTable.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── GlowText.tsx
│   │       └── ParticleBackground.tsx
│   ├── lib/
│   │   ├── animations.ts
│   │   └── utils.ts
│   └── data/
│       └── products.ts
├── public/
│   └── images/
├── tailwind.config.ts
└── package.json
```

## ✅ QUALITY REQUIREMENTS

- [ ] Mobile-first responsive
- [ ] Lighthouse score 90+
- [ ] Smooth 60fps animations
- [ ] Accessible (WCAG AA)
- [ ] SEO optimized
- [ ] Multi-language ready (ES/EN)
