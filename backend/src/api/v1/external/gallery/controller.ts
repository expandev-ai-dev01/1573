import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { successResponse, errorResponse } from '@/utils/response';
import { galleryGet } from '@/services/gallery';

const querySchema = z.object({
  category: z.string().max(50).optional(),
});

/**
 * @api {get} /external/gallery Get Gallery Photos
 * @apiName GetGallery
 * @apiGroup Gallery
 * @apiVersion 1.0.0
 *
 * @apiDescription Retrieves gallery photos with optional category filtering
 *
 * @apiParam {String} [category] Optional category filter
 *
 * @apiSuccess {Array} photos Gallery photos
 *
 * @apiError {String} ValidationError Invalid query parameters
 * @apiError {String} ServerError Internal server error
 */
export async function getHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const validated = querySchema.parse(req.query);
    const data = await galleryGet(validated.category);
    res.json(successResponse(data));
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      res
        .status(400)
        .json(errorResponse('Invalid query parameters', 'VALIDATION_ERROR', error.errors));
    } else {
      console.error('Error retrieving gallery:', error);
      res.status(500).json(errorResponse('Failed to retrieve gallery', 'SERVER_ERROR'));
    }
  }
}
