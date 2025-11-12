import type { Menu } from '../../types';

export interface UseMenuReturn {
  menu: Menu | null;
  isLoading: boolean;
  error: Error | null;
  refetch: () => void;
}
