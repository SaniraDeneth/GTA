import { Router } from 'express';
const router = Router();
for (const [method, path] of [['post', '/register'], ['post', '/login'], ['post', '/logout'], ['get', '/me']]) router[method](path, (_req, res) => res.status(501).json({ success: false, error: { code: 'NOT_IMPLEMENTED', message: 'Authentication is not implemented yet.' } }));
export default router;
