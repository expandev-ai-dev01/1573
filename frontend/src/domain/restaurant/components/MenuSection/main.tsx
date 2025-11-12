import { useState, useMemo } from 'react';
import type { MenuSectionProps } from './types';

export const MenuSection = ({ menu }: MenuSectionProps) => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const sortedCategories = useMemo(() => {
    if (!menu?.categories) return [];
    return [...menu.categories].sort((a, b) => a.displayOrder - b.displayOrder);
  }, [menu?.categories]);

  const filteredItems = useMemo(() => {
    if (!menu?.items) return [];
    if (selectedCategory === null) return menu.items;
    return menu.items.filter((item) => item.categoryId === selectedCategory);
  }, [menu?.items, selectedCategory]);

  const chefRecommendations = useMemo(() => {
    if (!menu?.items) return [];
    return menu.items.filter((item) => item.isChefRecommendation);
  }, [menu?.items]);

  if (!menu) return null;

  return (
    <section id="menu" className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-4">Nosso Cardápio</h2>

        {chefRecommendations.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center">Recomendações do Chef</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {chefRecommendations.map((item) => (
                <div
                  key={item.idMenuItem}
                  className="bg-yellow-50 rounded-lg overflow-hidden shadow-md"
                >
                  <img src={item.imageUrl} alt={item.name} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h4 className="text-xl font-semibold mb-2">{item.name}</h4>
                    <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                    <p className="text-lg font-bold text-green-600">R$ {item.price.toFixed(2)}</p>
                    {!item.isAvailable && (
                      <p className="text-red-500 text-sm mt-2">Indisponível no momento</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-6 py-2 rounded-full transition-colors ${
              selectedCategory === null
                ? 'bg-red-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Todos
          </button>
          {sortedCategories.map((category) => (
            <button
              key={category.idMenuCategory}
              onClick={() => setSelectedCategory(category.idMenuCategory)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === category.idMenuCategory
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.idMenuItem}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <img src={item.imageUrl} alt={item.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="text-xl font-semibold mb-2">{item.name}</h4>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                <p className="text-lg font-bold text-green-600">R$ {item.price.toFixed(2)}</p>
                {!item.isAvailable && (
                  <p className="text-red-500 text-sm mt-2">Indisponível no momento</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
