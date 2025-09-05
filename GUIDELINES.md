# Classic H



eritage Website Development Guidelines
> For a Distinguished Chauffeur Service

## Project Overview
This document outlines the comprehensive development guidelines for our classic chauffeur service website. The project emphasizes timeless elegance, sophistication, and heritage while maintaining modern web development best practices.

## Tech Stack
- Next.js with TypeScript
- TailwindCSS for styling
- Headless UI for accessible components
- Next.js Image for optimization
- Google Fonts (Playfair Display, Source Serif Pro, Lora)

## Design Philosophy

### Core Principles
- **Less is More**: Every element must serve a purpose
- **Timeless over Trendy**: Avoid fleeting design fads
- **Quality over Quantity**: Focus on craftsmanship in every detail
- **Sophistication through Restraint**: Let content breathe

### Typography System

#### Primary Typefaces
```typescript
// Configured in layout.tsx
const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-source',
})

const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lora',
})
```

#### Typography Guidelines
- Hierarchy: Clear distinction between H1, H2, H3
- Line Height: 1.4-1.6 for optimal readability
- Letter Spacing: Slight tracking on headings for elegance
- Font Sizes: Generous but not overwhelming (16px+ for body)

### Color Palette

#### Primary Colors
```typescript
// Configured in tailwind.config.ts
colors: {
  navy: '#1a2332',    // tradition and trust
  cream: '#f8f6f2',   // sophisticated background
  gold: '#d4af37',    // luxury accents
  charcoal: '#2c2c2c' // elegant text
}
```

#### Secondary Colors
```typescript
colors: {
  'warm-grey': '#6b6b6b', // secondary text
  // Pure white (#ffffff) available through Tailwind defaults
}
```

#### Usage Rules
- Use color intentionally, not decoratively
- Maintain high contrast for accessibility (4.5:1 minimum)
- Gold/brass only for special elements (buttons, borders, icons)

### Layout & Spacing

#### Grid System
- 12-column grid for flexibility
- Consistent margins: 80px+ on desktop, 20px mobile
- Vertical rhythm: Use consistent spacing units (8px, 16px, 24px, 32px)

```typescript
// Container Component Usage
<Container className="py-24">
  <div className="max-w-3xl">
    {/* Content */}
  </div>
</Container>
```

#### Responsive Design
- Mobile-first approach
- Breakpoints: 768px, 1024px, 1440px
- Touch targets: Minimum 44px for mobile interactions

### Component Guidelines

#### Button Component
```typescript
// Usage examples
<Button size="lg">Book Your Journey</Button>
<Button variant="secondary" size="lg">Learn More</Button>
```

Properties:
- Variants: 'primary' | 'secondary'
- Sizes: 'default' | 'sm' | 'lg'
- Accessible focus states
- Hover animations

#### Container Component
```typescript
// Usage example
<Container className="py-24">
  {/* Content */}
</Container>
```

Properties:
- Max-width: 1200px
- Responsive padding
- Centered alignment

### Visual Elements

#### Photography Style
- High-quality, professional images of the Rover P5B
- Muted, classic color grading
- Focus on craftsmanship details
- Lifestyle shots showing service in elegant contexts

#### Iconography
- Minimal line icons
- Consistent stroke width (2px)
- Heritage-inspired elements

#### Borders & Lines
- Subtle borders: 1px solid lines in muted tones
- Tasteful dividers
- Rounded corners: 2-4px for classical look

### Content Strategy

#### Tone of Voice
- Sophisticated but approachable
- Professional without being stiff
- Heritage-focused storytelling
- Emphasis on craftsmanship and tradition

#### Content Hierarchy
1. Hero Statement
2. Service Overview
3. Heritage Story
4. Fleet Details
5. Contact & Booking

### Technical Best Practices

#### Performance
- Image optimization through Next.js Image
- Lazy loading implementation
- CSS/JS minification
- Font loading optimization

#### SEO Fundamentals
- Semantic HTML structure
- Meta descriptions
- Alt text for images
- Schema markup for local business

#### Accessibility
- WCAG 2.1 AA compliance
- Keyboard navigation
- Screen reader compatibility
- Focus indicators

#### Code Quality
- Clean, semantic HTML
- Tailwind for styling
- Mobile-first CSS
- Progressive enhancement

### Animation & Interactions

#### Subtle Elegance
- Gentle hover effects
- Smooth transitions (300ms ease-in-out)
- Minimal animations
- Purposeful parallax

#### Micro-interactions
- Button hover states
- Form feedback
- Loading states

### Development Workflow

#### Getting Started
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

#### File Structure
```
src/
├── app/
│   ├── layout.tsx    # Root layout with fonts
│   ├── page.tsx      # Homepage
│   └── globals.css   # Global styles
├── components/
│   └── ui/
│       ├── button.tsx    # Button component
│       └── container.tsx # Container component
└── utils/
    └── cn.ts         # Class merging utility
```

### Quality Checklist

#### Before Launch
- [ ] All images optimized and properly sized
- [ ] Content reviewed for tone and accuracy
- [ ] Cross-browser testing
- [ ] Mobile responsiveness verified
- [ ] Loading speed under 3 seconds
- [ ] Accessibility audit completed
- [ ] SEO meta tags implemented
- [ ] Contact forms tested
- [ ] Analytics tracking set up

## Maintenance

### Regular Updates
- Keep dependencies updated
- Monitor performance metrics
- Update content regularly
- Review analytics data

### Support
For questions or support, refer to the project documentation or contact the development team.
