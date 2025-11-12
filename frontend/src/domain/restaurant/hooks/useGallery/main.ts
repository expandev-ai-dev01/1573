import { useQuery } from '@tanstack/react-query';
import { restaurantService } from '../../services/restaurantService';
import type { UseGalleryOptions, UseGalleryReturn } from './types';

export const useGallery = (options: UseGalleryOptions = {}): UseGalleryReturn => {
  const { category } = options;

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['gallery', category],
    queryFn: () => restaurantService.getGallery(category),
    staleTime: 10 * 60 * 1000,
  });

  return {
    gallery: data || null,
    isLoading,
    error: error as Error | null,
    refetch,
  };
};
