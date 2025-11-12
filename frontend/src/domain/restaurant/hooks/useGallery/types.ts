import type { Gallery } from '../../types';

export interface UseGalleryOptions {
  category?: string;
}

export interface UseGalleryReturn {
  gallery: Gallery | null;
  isLoading: boolean;
  error: Error | null;
  refetch: () => void;
}
