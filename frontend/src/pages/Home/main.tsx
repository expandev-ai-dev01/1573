import { useRestaurantInfo } from '@/domain/restaurant/hooks/useRestaurantInfo';
import { useContactInfo } from '@/domain/restaurant/hooks/useContactInfo';
import { useLocationInfo } from '@/domain/restaurant/hooks/useLocationInfo';
import { useOperatingHours } from '@/domain/restaurant/hooks/useOperatingHours';
import { useMenu } from '@/domain/restaurant/hooks/useMenu';
import { useGallery } from '@/domain/restaurant/hooks/useGallery';
import { Navigation } from '@/domain/restaurant/components/Navigation';
import { HeroSection } from '@/domain/restaurant/components/HeroSection';
import { MenuSection } from '@/domain/restaurant/components/MenuSection';
import { LocationSection } from '@/domain/restaurant/components/LocationSection';
import { OperatingHoursSection } from '@/domain/restaurant/components/OperatingHoursSection';
import { GallerySection } from '@/domain/restaurant/components/GallerySection';
import { AboutSection } from '@/domain/restaurant/components/AboutSection';
import { ContactSection } from '@/domain/restaurant/components/ContactSection';
import { Footer } from '@/domain/restaurant/components/Footer';
import { ScrollToTop } from '@/domain/restaurant/components/ScrollToTop';
import { LoadingSpinner } from '@/core/components/LoadingSpinner';

export const HomePage = () => {
  const { restaurantInfo, isLoading: isLoadingRestaurant } = useRestaurantInfo();
  const { contactInfo, isLoading: isLoadingContact } = useContactInfo();
  const { locationInfo, isLoading: isLoadingLocation } = useLocationInfo();
  const { operatingHours, isLoading: isLoadingHours } = useOperatingHours();
  const { menu, isLoading: isLoadingMenu } = useMenu();
  const { gallery, isLoading: isLoadingGallery } = useGallery();

  const isLoading =
    isLoadingRestaurant ||
    isLoadingContact ||
    isLoadingLocation ||
    isLoadingHours ||
    isLoadingMenu ||
    isLoadingGallery;

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="large" />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation restaurantInfo={restaurantInfo} />
      <HeroSection restaurantInfo={restaurantInfo} />
      <MenuSection menu={menu} />
      <LocationSection locationInfo={locationInfo} />
      <OperatingHoursSection operatingHours={operatingHours} />
      <GallerySection gallery={gallery} />
      <AboutSection restaurantInfo={restaurantInfo} />
      <ContactSection contactInfo={contactInfo} />
      <Footer restaurantInfo={restaurantInfo} />
      <ScrollToTop />
    </div>
  );
};

export default HomePage;
