import { dbRequest, ExpectedReturn } from '@/utils/database';
import { LocationInfo } from '@/services/locationInfo/locationInfoTypes';

/**
 * @summary
 * Retrieves location information from database
 *
 * @function locationInfoGet
 * @module locationInfo
 *
 * @returns {Promise<LocationInfo>} Location information
 *
 * @throws {DatabaseError} When database operation fails
 */
export async function locationInfoGet(): Promise<LocationInfo> {
  const result = await dbRequest('[functional].[spLocationInfoGet]', {}, ExpectedReturn.Single);

  return result;
}
