import { publicClient } from '@/core/lib/api';
import type {
  RestaurantInfo,
  ContactInfo,
  LocationInfo,
  OperatingHours,
  Menu,
  Gallery,
} from '../types';

export const restaurantService = {
  async getRestaurantInfo(): Promise<RestaurantInfo> {
    const response = await publicClient.get('/restaurant-info');
    return response.data.data;
  },

  async getContactInfo(): Promise<ContactInfo> {
    const response = await publicClient.get('/contact-info');
    return response.data.data;
  },

  async getLocationInfo(): Promise<LocationInfo> {
    const response = await publicClient.get('/location-info');
    return response.data.data;
  },

  async getOperatingHours(): Promise<OperatingHours> {
    const response = await publicClient.get('/operating-hours');
    return response.data.data;
  },

  async getMenu(): Promise<Menu> {
    const response = await publicClient.get('/menu');
    return response.data.data;
  },

  async getGallery(category?: string): Promise<Gallery> {
    const response = await publicClient.get('/gallery', {
      params: category ? { category } : undefined,
    });
    return response.data.data;
  },
};
