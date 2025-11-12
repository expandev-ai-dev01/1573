import { Request, Response, NextFunction } from 'express';
import { successResponse, errorResponse } from '@/utils/response';
import { restaurantInfoGet } from '@/services/restaurantInfo';

/**
 * @api {get} /external/restaurant-info Get Restaurant Information
 * @apiName GetRestaurantInfo
 * @apiGroup RestaurantInfo
 * @apiVersion 1.0.0
 *
 * @apiDescription Retrieves complete restaurant information including branding and about section
 *
 * @apiSuccess {Number} idRestaurantInfo Restaurant info identifier
 * @apiSuccess {String} name Restaurant name
 * @apiSuccess {String} slogan Restaurant slogan
 * @apiSuccess {String} logoUrl Logo image URL
 * @apiSuccess {String} bannerImageUrl Banner image URL
 * @apiSuccess {String} aboutText About section text
 * @apiSuccess {String} aboutImageUrl About section image URL
 *
 * @apiError {String} ServerError Internal server error
 */
export async function getHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const data = await restaurantInfoGet();
    res.json(successResponse(data));
  } catch (error: any) {
    console.error('Error retrieving restaurant info:', error);
    res
      .status(500)
      .json(errorResponse('Failed to retrieve restaurant information', 'SERVER_ERROR'));
  }
}
