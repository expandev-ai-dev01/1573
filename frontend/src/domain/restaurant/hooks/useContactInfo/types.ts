import type { ContactInfo } from '../../types';

export interface UseContactInfoReturn {
  contactInfo: ContactInfo | null;
  isLoading: boolean;
  error: Error | null;
  refetch: () => void;
}
