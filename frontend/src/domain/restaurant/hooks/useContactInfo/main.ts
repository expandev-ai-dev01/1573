import { useQuery } from '@tanstack/react-query';
import { restaurantService } from '../../services/restaurantService';
import type { UseContactInfoReturn } from './types';

export const useContactInfo = (): UseContactInfoReturn => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['contact-info'],
    queryFn: () => restaurantService.getContactInfo(),
    staleTime: 10 * 60 * 1000,
  });

  return {
    contactInfo: data || null,
    isLoading,
    error: error as Error | null,
    refetch,
  };
};
