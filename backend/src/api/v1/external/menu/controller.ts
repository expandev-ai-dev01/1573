import { Request, Response, NextFunction } from 'express';
import { successResponse, errorResponse } from '@/utils/response';
import { menuGet } from '@/services/menu';

/**
 * @api {get} /external/menu Get Menu
 * @apiName GetMenu
 * @apiGroup Menu
 * @apiVersion 1.0.0
 *
 * @apiDescription Retrieves complete menu with categories and items including chef recommendations
 *
 * @apiSuccess {Array} categories Menu categories
 * @apiSuccess {Array} items Menu items
 *
 * @apiError {String} ServerError Internal server error
 */
export async function getHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const data = await menuGet();
    res.json(successResponse(data));
  } catch (error: any) {
    console.error('Error retrieving menu:', error);
    res.status(500).json(errorResponse('Failed to retrieve menu', 'SERVER_ERROR'));
  }
}
