export interface RestaurantInfo {
  idRestaurantInfo: number;
  name: string;
  slogan: string;
  logoUrl: string;
  bannerImageUrl: string;
  aboutText: string;
  aboutImageUrl: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  whatsapp?: string;
  socialMedia: SocialMedia[];
}

export interface SocialMedia {
  name: string;
  url: string;
  icon: string;
}

export interface LocationInfo {
  idLocationInfo: number;
  address: string;
  latitude: number;
  longitude: number;
  mapZoom: number;
  parkingInfo?: string;
  transportInfo?: string;
}

export interface OperatingHours {
  weeklyHours: WeeklyHour[];
  specialHours: SpecialHour[];
}

export interface WeeklyHour {
  dayOfWeek: string;
  openTime: string;
  closeTime: string;
  isClosed: boolean;
}

export interface SpecialHour {
  date: string;
  openTime: string;
  closeTime: string;
  description?: string;
}

export interface Menu {
  categories: MenuCategory[];
  items: MenuItem[];
}

export interface MenuCategory {
  idMenuCategory: number;
  name: string;
  displayOrder: number;
}

export interface MenuItem {
  idMenuItem: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  categoryId: number;
  isChefRecommendation: boolean;
  isAvailable: boolean;
}

export interface Gallery {
  photos: GalleryPhoto[];
}

export interface GalleryPhoto {
  idGalleryPhoto: number;
  title: string;
  description?: string;
  imageUrl: string;
  category?: string;
  displayOrder: number;
}
