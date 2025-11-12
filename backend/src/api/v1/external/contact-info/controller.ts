import { Request, Response, NextFunction } from 'express';
import { successResponse, errorResponse } from '@/utils/response';
import { contactInfoGet } from '@/services/contactInfo';

/**
 * @api {get} /external/contact-info Get Contact Information
 * @apiName GetContactInfo
 * @apiGroup ContactInfo
 * @apiVersion 1.0.0
 *
 * @apiDescription Retrieves complete contact information including phone, email, WhatsApp and social media
 *
 * @apiSuccess {Object} contactInfo Contact information
 * @apiSuccess {Array} socialMedia Social media links
 *
 * @apiError {String} ServerError Internal server error
 */
export async function getHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const data = await contactInfoGet();
    res.json(successResponse(data));
  } catch (error: any) {
    console.error('Error retrieving contact info:', error);
    res.status(500).json(errorResponse('Failed to retrieve contact information', 'SERVER_ERROR'));
  }
}
