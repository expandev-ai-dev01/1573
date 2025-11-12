import { dbRequest, ExpectedReturn, IRecordSet } from '@/utils/database';
import { MenuCategory, MenuItem, MenuResponse } from '@/services/menu/menuTypes';

/**
 * @summary
 * Retrieves complete menu with categories and items
 *
 * @function menuGet
 * @module menu
 *
 * @returns {Promise<MenuResponse>} Menu categories with items
 *
 * @throws {DatabaseError} When database operation fails
 */
export async function menuGet(): Promise<MenuResponse> {
  const results = (await dbRequest(
    '[functional].[spMenuGet]',
    {},
    ExpectedReturn.Multi
  )) as IRecordSet<any>[];

  const categories: MenuCategory[] = results[0];
  const items: MenuItem[] = results[1];

  return {
    categories,
    items,
  };
}
