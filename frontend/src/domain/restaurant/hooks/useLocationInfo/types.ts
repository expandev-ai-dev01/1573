import type { LocationInfo } from '../../types';

export interface UseLocationInfoReturn {
  locationInfo: LocationInfo | null;
  isLoading: boolean;
  error: Error | null;
  refetch: () => void;
}
