import { useQuery } from '@tanstack/react-query';
import { restaurantService } from '../../services/restaurantService';
import type { UseRestaurantInfoReturn } from './types';

export const useRestaurantInfo = (): UseRestaurantInfoReturn => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['restaurant-info'],
    queryFn: () => restaurantService.getRestaurantInfo(),
    staleTime: 10 * 60 * 1000,
  });

  return {
    restaurantInfo: data || null,
    isLoading,
    error: error as Error | null,
    refetch,
  };
};
