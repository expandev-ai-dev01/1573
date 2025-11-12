import { Router } from 'express';
import v1Routes from '@/routes/v1';

const router = Router();

/**
 * @summary API Version routing
 * @description Main router configuration for API versioning
 *
 * Version 1 (current stable)
 */
router.use('/v1', v1Routes);

/**
 * @summary Future versions can be added here
 * @example
 * router.use('/v2', v2Routes);
 */

export default router;
