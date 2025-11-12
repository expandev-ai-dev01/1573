import type { OperatingHours } from '../../types';

export interface UseOperatingHoursReturn {
  operatingHours: OperatingHours | null;
  isLoading: boolean;
  error: Error | null;
  refetch: () => void;
}
