/**
 * @interface MenuCategory
 * @description Menu category entity
 *
 * @property {number} idMenuCategory - Category identifier
 * @property {string} name - Category name
 * @property {string} description - Category description
 * @property {number} displayOrder - Display order
 */
export interface MenuCategory {
  idMenuCategory: number;
  name: string;
  description: string;
  displayOrder: number;
}

/**
 * @interface MenuItem
 * @description Menu item entity
 *
 * @property {number} idMenuItem - Item identifier
 * @property {number} idMenuCategory - Category identifier
 * @property {string} name - Item name
 * @property {string} description - Item description
 * @property {number} price - Item price
 * @property {string | null} imageUrl - Item image URL
 * @property {boolean} available - Availability flag
 * @property {boolean} chefRecommendation - Chef recommendation flag
 * @property {number} displayOrder - Display order
 */
export interface MenuItem {
  idMenuItem: number;
  idMenuCategory: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string | null;
  available: boolean;
  chefRecommendation: boolean;
  displayOrder: number;
}

/**
 * @interface MenuResponse
 * @description Combined menu response
 *
 * @property {MenuCategory[]} categories - Menu categories
 * @property {MenuItem[]} items - Menu items
 */
export interface MenuResponse {
  categories: MenuCategory[];
  items: MenuItem[];
}
