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
| `/` | Homepage with approved hero and concise previews | Implemented |
| `/work` | Overview of three enterprise case studies | Implemented |
| `/approach` | Six-stage problem-solving framework | Implemented |
| `/about` | Approved About narrative | Implemented |
| `/contact` | Approved Contact copy and verified links when configured | Implemented |
| `/work/digital-lending` | PNC PPP digital lending case study | Implemented |
| `/work/document-modernization` | PNC document-management modernization case study | Implemented |
| `/work/operating-model` | U.S. Steel PMO / Center of Excellence redesign case study | Implemented |
| `/projects/front-office-simulation` | Independent front-office simulation R&D | Implemented |

Homepage sections, in order:

1. Hero
2. Selected Work preview
3. My Approach preview
4. What I'm Building preview
5. About and Contact links

The shared layout provides a header, path-based primary navigation, main landmark, footer, and mobile menu. Primary navigation uses React Router without hash jumps or full page reloads. Route changes, including history navigation, reset scroll to the top. Unknown paths show a simple 404 page.

## Design standards

- Predominantly white background; near-black charcoal body text, readable dark-slate supporting text, muted metadata, and a restrained teal accent.
- Light cool-gray surfaces (`#F3F6F7`), fine borders, and restrained shadows create section boundaries. Selective charcoal panels highlight the About principle and case-study takeaways.
- Modern sans-serif typography with a compact, breathable rhythm. Page introductions start roughly 32–52px below the header on desktop; content uses the available container width instead of narrow centered columns.
- Work panels separate the problem, individual contribution, and context, with a clear detail-page affordance and teal hover/focus outline.
- Mobile-first layout with a navigation breakpoint at 48rem.
- Reusable CSS tokens for color, typography, spacing, border, widths, and breakpoint reference live in `src/styles.css`.
- Semantic landmarks, visible focus styles, skip link, responsive navigation, and reduced-motion support.
- Page layouts vary by purpose: a balanced homepage hero, structured Work panels, connected Approach stages, an editorial About layout, and a wider case-study narrative grid.
- No dark full-page backgrounds, heavy gradients, generic stock photography, oversized decorative cards, or excessive animation.

## Homepage implementation notes

- Selected Work summaries use only the supplied facts. The PPP loan and lending totals describe the broader program, not an individual contribution.
- The NFL simulator is presented as active R&D. Neither page identifies unverified areas as completed functionality; the domain-level status still needs confirmation.
- The screenshot area is reserved for an authentic image.
- Email, LinkedIn, and résumé destinations are configured in `src/config/site.ts`. All are currently unset. Add only verified destinations, and provide a real PDF in `public/` before enabling the résumé link.
- The simulator detail page follows the same typography-first language and links back to Home.
- Contact links render only when destinations are configured; the unconfigured page displays approved copy without a developer-facing placeholder.

## Independent product R&D page

- Covers the problem, foundation-first product approach, six product domains, iterative development process, verified technology stack, and the practices the work exercises.
- The project uses React, TypeScript, Node.js, database-backed application architecture, and Codex and Claude as development aids. No deployment, user, usage, or performance claims are made.
- Domain-level implemented versus planned status has not been supplied. The page labels these as areas of development rather than finished features; add specific status only after verification.
- AI-assisted development is distinguished from AI behavior in the simulation. A real application screenshot can replace the reserved image area later.

## Enterprise case studies

- The three narratives live in `src/content/caseStudies.ts` and use one shared `CaseStudyPage` presentation component. The redesign adds category and context details, a wide structured narrative, and a restrained takeaway panel while preserving the underlying facts and qualifications.
- Each page covers the challenge, context, Jeremy's role, decisions, delivered work, and a takeaway. Page-specific browser titles and descriptions are set on navigation.
- PPP lending figures are attributed to the broader PNC operation. The document-management migration is described separately from the unrelated 9,000+ user loan-origination migration.
- Case-study navigation returns to the Work overview and links to the next story where applicable.

## Technology decisions

- React, TypeScript, and Vite for a lightweight client application.
- React Router for five primary routes, four detail routes, and a fallback page.
- Plain CSS for tokens and styling; no component library or Tailwind.
- ESLint for code quality, Vitest and React Testing Library for route verification.
- Static front end only. No backend, database, API server, authentication, or CMS.

## Future implementation stages

1. Add verified contact destinations and a real résumé PDF when available.
2. Verify which simulator domain capabilities are implemented and which are planned, then update the project page.
3. Add authentic project imagery as real assets become available.

## Refinement and launch readiness

- Home, Work, Approach, case-study, About, and Contact spacing uses a compact, readable rhythm while retaining the white editorial layout and wide case-study narrative.
- Contact supports verified email, LinkedIn, and résumé destinations through `src/config/site.ts`. All three values remain unset; adding verified destinations and a real résumé PDF is a launch blocker.
- The digital-lending page expands Paycheck Protection Program (PPP) at its first visible use. The homepage preview and Work overview also expand the term at first mention.
