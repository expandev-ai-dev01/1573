import { useState, useMemo } from 'react';
import type { GallerySectionProps } from './types';

export const GallerySection = ({ gallery }: GallerySectionProps) => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = useMemo(() => {
    if (!gallery?.photos) return [];
    const uniqueCategories = new Set(
      gallery.photos.map((photo) => photo.category).filter((cat): cat is string => !!cat)
    );
    return Array.from(uniqueCategories);
  }, [gallery?.photos]);

  const filteredPhotos = useMemo(() => {
    if (!gallery?.photos) return [];
    if (!selectedCategory) return gallery.photos;
    return gallery.photos.filter((photo) => photo.category === selectedCategory);
  }, [gallery?.photos, selectedCategory]);

  const sortedPhotos = useMemo(() => {
    return [...filteredPhotos].sort((a, b) => a.displayOrder - b.displayOrder);
  }, [filteredPhotos]);

  if (!gallery) return null;

  const handlePhotoClick = (index: number) => {
    setSelectedPhoto(index);
  };

  const handleClose = () => {
    setSelectedPhoto(null);
  };

  const handleNext = () => {
    if (selectedPhoto !== null && selectedPhoto < sortedPhotos.length - 1) {
      setSelectedPhoto(selectedPhoto + 1);
    }
  };

  const handlePrev = () => {
    if (selectedPhoto !== null && selectedPhoto > 0) {
      setSelectedPhoto(selectedPhoto - 1);
    }
  };

  return (
    <section id="gallery" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-8">Conheça Nosso Ambiente</h2>

        {categories.length > 0 && (
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === null
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Todas
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {sortedPhotos.map((photo, index) => (
            <div
              key={photo.idGalleryPhoto}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => handlePhotoClick(index)}
            >
              <img
                src={photo.imageUrl}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity flex items-center justify-center">
                <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-center px-2">
                  {photo.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {selectedPhoto !== null && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={handleClose}
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300"
              aria-label="Fechar"
            >
              ×
            </button>

            {selectedPhoto > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-4 text-white text-4xl hover:text-gray-300"
                aria-label="Anterior"
              >
                ‹
              </button>
            )}

            {selectedPhoto < sortedPhotos.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-4 text-white text-4xl hover:text-gray-300"
                aria-label="Próxima"
              >
                ›
              </button>
            )}

            <div className="max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
              <img
                src={sortedPhotos[selectedPhoto].imageUrl}
                alt={sortedPhotos[selectedPhoto].title}
                className="max-w-full max-h-[80vh] object-contain"
              />
              <p className="text-white text-center mt-4">{sortedPhotos[selectedPhoto].title}</p>
              {sortedPhotos[selectedPhoto].description && (
                <p className="text-gray-300 text-center text-sm mt-2">
                  {sortedPhotos[selectedPhoto].description}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
