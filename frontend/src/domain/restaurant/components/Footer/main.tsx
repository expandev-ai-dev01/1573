import type { FooterProps } from './types';

export const Footer = ({ restaurantInfo }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {restaurantInfo?.logoUrl && (
              <img src={restaurantInfo.logoUrl} alt={restaurantInfo.name} className="h-12 w-auto" />
            )}
            <div>
              <p className="font-semibold">{restaurantInfo?.name}</p>
              {restaurantInfo?.slogan && (
                <p className="text-sm text-gray-400">{restaurantInfo.slogan}</p>
              )}
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-gray-400">
              © {currentYear} {restaurantInfo?.name}. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
