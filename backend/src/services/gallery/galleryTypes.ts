/**
 * @interface GalleryPhoto
 * @description Gallery photo entity
 *
 * @property {number} idGalleryPhoto - Photo identifier
 * @property {string} title - Photo title
 * @property {string} description - Photo description
 * @property {string} imageUrl - Full image URL
 * @property {string} thumbnailUrl - Thumbnail image URL
 * @property {string | null} category - Photo category
 * @property {number} displayOrder - Display order
 */
export interface GalleryPhoto {
  idGalleryPhoto: number;
  title: string;
  description: string;
  imageUrl: string;
  thumbnailUrl: string;
  category: string | null;
  displayOrder: number;
}
