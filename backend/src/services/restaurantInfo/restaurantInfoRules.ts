import { dbRequest, ExpectedReturn } from '@/utils/database';
import { RestaurantInfo } from '@/services/restaurantInfo/restaurantInfoTypes';

/**
 * @summary
 * Retrieves restaurant information from database
 *
 * @function restaurantInfoGet
 * @module restaurantInfo
 *
 * @returns {Promise<RestaurantInfo>} Restaurant information
 *
 * @throws {DatabaseError} When database operation fails
 */
export async function restaurantInfoGet(): Promise<RestaurantInfo> {
  const result = await dbRequest('[functional].[spRestaurantInfoGet]', {}, ExpectedReturn.Single);

  return result;
}
