import type { RestaurantInfo } from '../../types';

export interface UseRestaurantInfoReturn {
  restaurantInfo: RestaurantInfo | null;
  isLoading: boolean;
  error: Error | null;
  refetch: () => void;
}
