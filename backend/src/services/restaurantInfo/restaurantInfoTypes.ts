/**
 * @interface RestaurantInfo
 * @description Restaurant information entity
 *
 * @property {number} idRestaurantInfo - Restaurant info identifier
 * @property {string} name - Restaurant name
 * @property {string | null} slogan - Restaurant slogan
 * @property {string} logoUrl - Logo image URL
 * @property {string} bannerImageUrl - Banner image URL
 * @property {string} aboutText - About section text
 * @property {string | null} aboutImageUrl - About section image URL
 */
export interface RestaurantInfo {
  idRestaurantInfo: number;
  name: string;
  slogan: string | null;
  logoUrl: string;
  bannerImageUrl: string;
  aboutText: string;
  aboutImageUrl: string | null;
}
