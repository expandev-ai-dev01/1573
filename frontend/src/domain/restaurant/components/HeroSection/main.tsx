import type { HeroSectionProps } from './types';

export const HeroSection = ({ restaurantInfo }: HeroSectionProps) => {
  if (!restaurantInfo) return null;

  return (
    <section className="relative h-screen w-full">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${restaurantInfo.bannerImageUrl})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        <img src={restaurantInfo.logoUrl} alt={restaurantInfo.name} className="h-32 w-auto mb-6" />
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">{restaurantInfo.name}</h1>
        {restaurantInfo.slogan && (
          <p className="text-xl md:text-2xl text-center max-w-2xl">{restaurantInfo.slogan}</p>
        )}
      </div>
    </section>
  );
};
