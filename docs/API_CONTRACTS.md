# API contracts

All JSON responses use `{ "success": true, "data": {} }`. Errors use `{ "success": false, "error": { "code": "ERROR_CODE", "message": "Human-readable error" } }`. Session-authenticated requests send the HTTP-only session cookie. IDs are MongoDB IDs and dates are ISO-8601 strings.

| Method and path | Request fields | Expected data | Auth | Owner |
|---|---|---|---|---|
| GET `/api/public/settings` | None | Event settings, milestones, and effective public modes | Public | Yuwandhi |
| POST `/api/auth/register` | `email`, `password`, `team` (`name`, `leaderName`, `leaderEmail`, `members`) | Created user/team summary | Public | Akindu |
| POST `/api/auth/login` | `email`, `password` | Authenticated user summary | Public | Akindu |
| POST `/api/auth/logout` | None | `data: { loggedOut: true }` | Session | Akindu |
| GET `/api/auth/me` | None | Current user and team summary | Session | Akindu |
| GET `/api/team/me` | None | Team and registration summary | Team session | Thanish |
| PATCH `/api/team/me` | Editable team name/member fields | Updated team | Team session | Thanish |
| POST `/api/team/payment` | Multipart `reference`, `date`, `slip` | Registration/payment status | Team session | Thanish |
| GET `/api/team/submission` | None | Submission or null | Team session | Tharushi |
| PUT `/api/team/submission` | `title`, `description`, `repoUrl`, `playableUrl`, `videoUrl` | Saved submission | Team session | Tharushi |
| GET `/api/admin/summary` | None | Counts and event summary | Admin session | Rihaz |
| GET `/api/admin/registrations` | Optional status/filter query | Registration list with team details | Admin session | Rihaz |
| PATCH `/api/admin/registrations/:id/review` | `status`, optional `rejectionReason` | Reviewed registration | Admin session | Rihaz |
| GET `/api/admin/registrations/:id/slip` | None | Slip download/redirect response | Admin session | Rihaz |
| GET `/api/admin/settings` | None | Current EventSettings | Admin session | Rihaz |
| PATCH `/api/admin/settings` | `milestones`, `registrationMode`, `submissionMode` | Updated EventSettings | Admin session | Rihaz |
| GET `/api/admin/submissions` | Optional query filters | Submission list with team details | Admin session | Rihaz |

The listed request fields map to the five Mongoose models. Exact validation and error codes should be added by the responsible developer without changing the response envelope. Until implemented, route placeholders return `501 NOT_IMPLEMENTED`.
