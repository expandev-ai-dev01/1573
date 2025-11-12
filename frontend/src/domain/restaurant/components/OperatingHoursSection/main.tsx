import { useMemo } from 'react';
import type { OperatingHoursSectionProps } from './types';

export const OperatingHoursSection = ({ operatingHours }: OperatingHoursSectionProps) => {
  const today = useMemo(() => {
    const days = [
      'Domingo',
      'Segunda-feira',
      'Terça-feira',
      'Quarta-feira',
      'Quinta-feira',
      'Sexta-feira',
      'Sábado',
    ];
    return days[new Date().getDay()];
  }, []);

  if (!operatingHours) return null;

  return (
    <section id="hours" className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-8">Horários de Funcionamento</h2>

        <div className="bg-gray-50 rounded-lg shadow-md p-6">
          <div className="space-y-3">
            {operatingHours.weeklyHours.map((hour) => (
              <div
                key={hour.dayOfWeek}
                className={`flex justify-between items-center p-3 rounded ${
                  hour.dayOfWeek === today ? 'bg-red-100 font-semibold' : 'bg-white'
                }`}
              >
                <span className="text-gray-800">{hour.dayOfWeek}</span>
                <span className="text-gray-700">
                  {hour.isClosed ? (
                    <span className="text-red-600">Fechado</span>
                  ) : (
                    `${hour.openTime} - ${hour.closeTime}`
                  )}
                </span>
              </div>
            ))}
          </div>

          {operatingHours.specialHours && operatingHours.specialHours.length > 0 && (
            <div className="mt-6 pt-6 border-t border-gray-300">
              <h3 className="text-lg font-semibold mb-4">Horários Especiais</h3>
              <div className="space-y-2">
                {operatingHours.specialHours.map((special, index) => (
                  <div key={index} className="flex justify-between items-center text-sm">
                    <span className="text-gray-700">
                      {special.date}
                      {special.description && ` - ${special.description}`}
                    </span>
                    <span className="text-gray-600">
                      {special.openTime} - {special.closeTime}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
