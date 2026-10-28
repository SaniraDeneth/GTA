import { Router } from 'express';
const router = Router();
router.get('/settings', (_req, res) => res.status(501).json({ success: false, error: { code: 'NOT_IMPLEMENTED', message: 'Public settings are not implemented yet.' } }));
export default router;
