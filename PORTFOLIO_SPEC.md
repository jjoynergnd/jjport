# JJPORT Portfolio Specification

## Positioning

**Technology & AI Transformation Leader**

## Approved homepage copy

**Headline:** Making complex problems simpler.

**Supporting statement:** I work at the intersection of business, technology and execution—helping organizations understand what's not working, identify practical solutions and turn those ideas into meaningful improvements.

## Problem-solving framework

Understand → Simplify → Evaluate → Solve → Validate → Scale

## Editorial principles

- Grounded, approachable, practical.
- No exaggerated accomplishments.
- No context-free numerical achievement banners.
- Clearly distinguish individual contributions from organizational outcomes.
- Focus on business problems, decisions and solutions.
- Do not invent project details, metrics, testimonials or technical capabilities.
- Protect employer and client confidentiality.

## Page architecture

| Route | Purpose | Current stage |
| --- | --- | --- |
| `/` | Complete responsive homepage with approved copy and six sections | Implemented |
| `/work/digital-lending` | PNC PPP digital lending case study | Implemented |
| `/work/document-modernization` | PNC document-management modernization case study | Implemented |
| `/work/operating-model` | U.S. Steel PMO / Center of Excellence redesign case study | Implemented |
| `/projects/front-office-simulation` | Front office simulation project | Placeholder |

Homepage sections, in order:

1. Hero
2. Selected Work
3. My Approach
4. What I'm Building
5. About
6. Contact

The shared layout provides a header, primary navigation, main landmark, footer, and mobile menu. Unknown paths show a simple 404 page.

## Design standards

- Predominantly white background; charcoal text; restrained teal accent.
- Modern sans-serif typography, generous whitespace, subtle neutral borders and dividers.
- Mobile-first layout with a navigation breakpoint at 48rem.
- Reusable CSS tokens for color, typography, spacing, border, widths, and breakpoint reference live in `src/styles.css`.
- Semantic landmarks, visible focus styles, skip link, responsive navigation, and reduced-motion support.
- Section layout adapts from a single column to a two-column heading/content layout; the approach progression uses one, two, then three columns as space permits.
- No dark full-page backgrounds, heavy gradients, generic stock photography, oversized decorative cards, or excessive animation.

## Homepage implementation notes

- Selected Work summaries use only the supplied facts. The PPP loan and lending totals describe the broader program, not an individual contribution.
- The NFL simulator is presented as active R&D. The homepage does not identify unverified areas as completed functionality; the detail page will separate implemented work from plans once confirmed.
- The screenshot area is reserved for an authentic image.
- Email, LinkedIn, and résumé destinations are configured in `src/config/site.ts`. All are currently unset. Add only verified destinations, and provide a real PDF in `public/` before enabling the résumé link.
- The simulator detail page remains a placeholder.

## Enterprise case studies

- The three narratives live in `src/content/caseStudies.ts` and use one shared `CaseStudyPage` presentation component.
- Each page covers the challenge, context, Jeremy's role, decisions, delivered work, and a takeaway. Page-specific browser titles and descriptions are set on navigation.
- PPP lending figures are attributed to the broader PNC operation. The document-management migration is described separately from the unrelated 9,000+ user loan-origination migration.
- Case-study navigation returns to Selected Work and links to the next story where applicable.

## Technology decisions

- React, TypeScript, and Vite for a lightweight client application.
- React Router for the five requested routes and a fallback page.
- Plain CSS for tokens and styling; no component library or Tailwind.
- ESLint for code quality, Vitest and React Testing Library for route verification.
- Static front end only. No backend, database, API server, authentication, or CMS.

## Future implementation stages

1. Add verified contact destinations and a real résumé PDF when available.
2. Develop the front office simulation project page using verified feature status and plans.
3. Add authentic project imagery and refine metadata as real assets become available.
