import { Router } from 'express';
const router = Router();
for (const [method, path] of [['get', '/summary'], ['get', '/registrations'], ['patch', '/registrations/:id/review'], ['get', '/registrations/:id/slip'], ['get', '/settings'], ['patch', '/settings'], ['get', '/submissions']]) router[method](path, (_req, res) => res.status(501).json({ success: false, error: { code: 'NOT_IMPLEMENTED', message: 'Admin features are not implemented yet.' } }));
export default router;
