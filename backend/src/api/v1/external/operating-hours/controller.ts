import { Request, Response, NextFunction } from 'express';
import { successResponse, errorResponse } from '@/utils/response';
import { operatingHoursGet } from '@/services/operatingHours';

/**
 * @api {get} /external/operating-hours Get Operating Hours
 * @apiName GetOperatingHours
 * @apiGroup OperatingHours
 * @apiVersion 1.0.0
 *
 * @apiDescription Retrieves operating hours including weekly schedule and special dates
 *
 * @apiSuccess {Array} weeklyHours Weekly operating hours
 * @apiSuccess {Array} specialHours Special dates schedule
 *
 * @apiError {String} ServerError Internal server error
 */
export async function getHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const data = await operatingHoursGet();
    res.json(successResponse(data));
  } catch (error: any) {
    console.error('Error retrieving operating hours:', error);
    res.status(500).json(errorResponse('Failed to retrieve operating hours', 'SERVER_ERROR'));
  }
}
