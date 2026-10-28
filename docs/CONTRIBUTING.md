# Contributing

Install from the repository root and keep changes within the assigned areas. Do not commit `.env` files or secrets. Update API contracts when a request/response changes.

## Ownership

- **Akindu** — core backend, authentication, team registration backend, and shared backend integration. Start in `server/src/routes/auth.routes.js`, `server/src/controllers/auth.controller.js`, and `server/src/middleware/`.
- **Rihaz** — admin dashboard, event settings, payment approvals, and admin event controls. Start in `client/src/pages/admin/`, `client/src/api/admin.js`, and `server/src/routes/admin.routes.js`.
- **Thanish** — team dashboard, member management, payment slip upload, and payment status. Start in `client/src/pages/team/`, `client/src/api/team.js`, and `server/src/routes/team.routes.js`.
- **Yuwandhi** — public landing page, cyberpunk UI, countdown, and agenda. Start in `client/src/pages/Home.jsx`, `client/src/components/event/`, and `client/src/data/eventContent.js`.
- **Tharushi** — game submission frontend/backend and submission restrictions. Start in `client/src/pages/team/SubmissionPage.jsx` and the submission endpoints in `server/src/routes/team.routes.js`.

Keep shared schemas in `server/src/models/` stable and coordinate cross-owner changes before merging.
