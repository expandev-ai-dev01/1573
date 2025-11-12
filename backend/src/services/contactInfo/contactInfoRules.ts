import { dbRequest, ExpectedReturn, IRecordSet } from '@/utils/database';
import {
  ContactInfo,
  SocialMedia,
  ContactInfoResponse,
} from '@/services/contactInfo/contactInfoTypes';

/**
 * @summary
 * Retrieves contact information and social media links from database
 *
 * @function contactInfoGet
 * @module contactInfo
 *
 * @returns {Promise<ContactInfoResponse>} Contact information with social media
 *
 * @throws {DatabaseError} When database operation fails
 */
export async function contactInfoGet(): Promise<ContactInfoResponse> {
  const results = (await dbRequest(
    '[functional].[spContactInfoGet]',
    {},
    ExpectedReturn.Multi
  )) as IRecordSet<any>[];

  const contactInfo: ContactInfo = results[0][0];
  const socialMedia: SocialMedia[] = results[1];

  return {
    contactInfo,
    socialMedia,
  };
}
