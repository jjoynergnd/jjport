# JJPORT

Jeremy Joyner's professional portfolio. The homepage, three enterprise case studies, and independent product R&D page are implemented.

The primary routes are `/`, `/work`, `/approach`, `/about`, and `/contact`. Case studies and the simulator each have their own detail route. Navigation stays within the React application, and route changes return to the top of the page.

## Local development

```sh
npm install
npm run dev
```

Open the URL printed by Vite. To run checks:

```sh
npm run typecheck
npm run lint
npm test
npm run build
```

See [PORTFOLIO_SPEC.md](PORTFOLIO_SPEC.md) for approved copy, architecture, and editorial standards.

Verified email, LinkedIn, and résumé destinations can be set in `src/config/site.ts`. The résumé link should point to a real PDF placed in `public/`.
