import type { AboutSectionProps } from './types';

export const AboutSection = ({ restaurantInfo }: AboutSectionProps) => {
  if (!restaurantInfo) return null;

  return (
    <section id="about" className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-8">Nossa História</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {restaurantInfo.aboutImageUrl && (
            <div className="order-2 lg:order-1">
              <img
                src={restaurantInfo.aboutImageUrl}
                alt="Nossa História"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          )}

          <div className="order-1 lg:order-2">
            <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
              {restaurantInfo.aboutText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
