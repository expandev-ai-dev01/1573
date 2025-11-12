import { useQuery } from '@tanstack/react-query';
import { restaurantService } from '../../services/restaurantService';
import type { UseOperatingHoursReturn } from './types';

export const useOperatingHours = (): UseOperatingHoursReturn => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['operating-hours'],
    queryFn: () => restaurantService.getOperatingHours(),
    staleTime: 10 * 60 * 1000,
  });

  return {
    operatingHours: data || null,
    isLoading,
    error: error as Error | null,
    refetch,
  };
};
