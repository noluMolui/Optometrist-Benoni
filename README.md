# Benoni Optometrist Landing Page

A professional, conversion-focused landing page for a local optometry practice in Benoni.

This project is designed to communicate trust, clarity, and accessibility while presenting essential business information for prospective patients.

## Project Purpose

The website provides a complete first-touch digital experience for patients who are looking for:

- Core services and treatment information
- Business credibility and trust signals
- Operating hours and contact details
- Clear appointment call-to-action pathways

## Key Features

- Polished hero section with strong visual hierarchy and primary booking CTA
- Comprehensive service overview using icon-supported cards
- About section with value proposition and differentiators
- Patient testimonial section for social proof
- FAQ section addressing common patient questions
- Contact and booking section with address, phone, and email
- Responsive layout optimized for mobile, tablet, and desktop
- Semantic, accessible markup and keyboard-focus states

## Technology Stack

- React 19 (JavaScript)
- Vite 8
- Tailwind CSS 3
- Lucide React icons
- ESLint 10 (flat config)

## Information Architecture

The landing page includes the following business-critical sections:

1. Header / Navigation
2. Hero
3. Services
4. About
5. Testimonials
6. Frequently Asked Questions
7. Contact & Booking
8. Footer

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Installation

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

Local development URL:

```text
http://localhost:5173/
```

### Lint the Codebase

```bash
npm run lint
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```text
.
├── public/
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Layout.jsx
│   │   ├── Main.jsx
│   │   └── Navbar.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── eslint.config.js
├── index.html
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## Design & Content Notes

- Brand direction: fresh, calm, and professional (green + blue palette)
- Writing style: patient-friendly, reassuring, and clear
- Content strategy: emphasize trust, accessibility, and practical booking actions

## Accessibility Considerations

- Semantic sectioning and landmark elements
- High-contrast text and action colors
- Visible focus indicators for keyboard users
- Readable spacing and line lengths for improved scanning

## Deployment

This is a static front-end application and can be deployed to any modern static hosting platform, including:

- Vercel
- Netlify
- Cloudflare Pages
- GitHub Pages (with appropriate Vite base configuration)

Recommended deployment flow:

1. Run `npm run build`
2. Publish the generated `dist/` directory

## Recommended Next Enhancements

- Connect booking CTAs to a live booking workflow (Calendly, custom form, or WhatsApp)
- Replace placeholder business details with production contact information
- Add consent-aware analytics (for campaign and conversion tracking)
- Add legal pages (Privacy Policy, Terms, POPIA compliance notice)

## Maintenance Guidelines

- Keep all business details synchronized with real operating information
- Update testimonials and FAQ entries periodically
- Review page performance and accessibility after major content updates

