import { Router } from 'express';
const router = Router();
for (const [method, path] of [['get', '/me'], ['patch', '/me'], ['post', '/payment'], ['get', '/submission'], ['put', '/submission']]) router[method](path, (_req, res) => res.status(501).json({ success: false, error: { code: 'NOT_IMPLEMENTED', message: 'Team features are not implemented yet.' } }));
export default router;
