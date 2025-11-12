import { Router } from 'express';
import * as restaurantInfoController from '@/api/v1/external/restaurant-info/controller';
import * as contactInfoController from '@/api/v1/external/contact-info/controller';
import * as locationInfoController from '@/api/v1/external/location-info/controller';
import * as operatingHoursController from '@/api/v1/external/operating-hours/controller';
import * as menuController from '@/api/v1/external/menu/controller';
import * as galleryController from '@/api/v1/external/gallery/controller';

const router = Router();

/**
 * @summary External (public) API routes
 * @description Routes accessible without authentication
 */

/**
 * @summary Restaurant information routes
 */
router.get('/restaurant-info', restaurantInfoController.getHandler);

/**
 * @summary Contact information routes
 */
router.get('/contact-info', contactInfoController.getHandler);

/**
 * @summary Location information routes
 */
router.get('/location-info', locationInfoController.getHandler);

/**
 * @summary Operating hours routes
 */
router.get('/operating-hours', operatingHoursController.getHandler);

/**
 * @summary Menu routes
 */
router.get('/menu', menuController.getHandler);

/**
 * @summary Gallery routes
 */
router.get('/gallery', galleryController.getHandler);

export default router;
