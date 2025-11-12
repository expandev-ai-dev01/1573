import type { LocationSectionProps } from './types';

export const LocationSection = ({ locationInfo }: LocationSectionProps) => {
  if (!locationInfo) return null;

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${locationInfo.latitude},${locationInfo.longitude}`;
  const wazeUrl = `https://waze.com/ul?ll=${locationInfo.latitude},${locationInfo.longitude}&navigate=yes`;

  return (
    <section id="location" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-8">Nossa Localização</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">Endereço</h3>
              <p className="text-gray-700 mb-4">{locationInfo.address}</p>

              {locationInfo.parkingInfo && (
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Estacionamento</h4>
                  <p className="text-gray-600 text-sm">{locationInfo.parkingInfo}</p>
                </div>
              )}

              {locationInfo.transportInfo && (
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Transporte Público</h4>
                  <p className="text-gray-600 text-sm">{locationInfo.transportInfo}</p>
                </div>
              )}

              <div className="flex gap-3 mt-6">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-center"
                >
                  Abrir no Google Maps
                </a>
                <a
                  href={wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-cyan-500 text-white px-4 py-2 rounded-md hover:bg-cyan-600 transition-colors text-center"
                >
                  Abrir no Waze
                </a>
              </div>
            </div>
          </div>

          <div className="h-96 lg:h-auto">
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${locationInfo.latitude},${locationInfo.longitude}&zoom=${locationInfo.mapZoom}`}
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '0.5rem' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do Restaurante"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
