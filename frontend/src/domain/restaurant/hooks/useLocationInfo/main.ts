import { useQuery } from '@tanstack/react-query';
import { restaurantService } from '../../services/restaurantService';
import type { UseLocationInfoReturn } from './types';

export const useLocationInfo = (): UseLocationInfoReturn => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['location-info'],
    queryFn: () => restaurantService.getLocationInfo(),
    staleTime: 10 * 60 * 1000,
  });

  return {
    locationInfo: data || null,
    isLoading,
    error: error as Error | null,
    refetch,
  };
};
