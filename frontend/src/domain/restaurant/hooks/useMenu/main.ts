import { useQuery } from '@tanstack/react-query';
import { restaurantService } from '../../services/restaurantService';
import type { UseMenuReturn } from './types';

export const useMenu = (): UseMenuReturn => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['menu'],
    queryFn: () => restaurantService.getMenu(),
    staleTime: 5 * 60 * 1000,
  });

  return {
    menu: data || null,
    isLoading,
    error: error as Error | null,
    refetch,
  };
};
