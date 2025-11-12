import { Request, Response, NextFunction } from 'express';
import { successResponse, errorResponse } from '@/utils/response';
import { locationInfoGet } from '@/services/locationInfo';

/**
 * @api {get} /external/location-info Get Location Information
 * @apiName GetLocationInfo
 * @apiGroup LocationInfo
 * @apiVersion 1.0.0
 *
 * @apiDescription Retrieves complete location information including address, coordinates and additional details
 *
 * @apiSuccess {Number} idLocationInfo Location info identifier
 * @apiSuccess {String} address Complete address
 * @apiSuccess {Number} latitude Latitude coordinate
 * @apiSuccess {Number} longitude Longitude coordinate
 * @apiSuccess {Number} mapZoom Map zoom level
 * @apiSuccess {String} parkingInfo Parking information
 * @apiSuccess {String} transportInfo Transport information
 *
 * @apiError {String} ServerError Internal server error
 */
export async function getHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const data = await locationInfoGet();
    res.json(successResponse(data));
  } catch (error: any) {
    console.error('Error retrieving location info:', error);
    res.status(500).json(errorResponse('Failed to retrieve location information', 'SERVER_ERROR'));
  }
}
