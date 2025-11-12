import { dbRequest, ExpectedReturn } from '@/utils/database';
import { GalleryPhoto } from '@/services/gallery/galleryTypes';

/**
 * @summary
 * Retrieves gallery photos with optional category filtering
 *
 * @function galleryGet
 * @module gallery
 *
 * @param {string | undefined} category - Optional category filter
 *
 * @returns {Promise<GalleryPhoto[]>} Gallery photos
 *
 * @throws {DatabaseError} When database operation fails
 */
export async function galleryGet(category?: string): Promise<GalleryPhoto[]> {
  const result = await dbRequest(
    '[functional].[spGalleryGet]',
    { category: category || null },
    ExpectedReturn.Multiple
  );

  return result;
}
