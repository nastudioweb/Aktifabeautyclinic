import React, { useState } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '../data/gallery';
import { Sparkles, Eye, X, ZoomIn } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  const filters = [
    { key: 'all', label: 'Semua Foto' },
    { key: 'treatment', label: 'Treatment & Facial' },
    { key: 'alat', label: 'Alat & Teknologi' },
    { key: 'klinik', label: 'Suasana & Ruangan' },
    { key: 'konsultasi', label: 'Konsultasi Dokter' },
  ];

  const filteredItems =
    selectedFilter === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedFilter);

  return (
    <section id="galeri" className="py-14 sm:py-20 bg-gradient-to-b from-white to-pink-50/40 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-semibold mb-2.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Dokumentasi & Suasana Nyata</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Galeri Layanan & Fasilitas Klinik
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-slate-600">
            Intip suasana tenang, peralatan berstandar medis, dan proses perawatan estetik di Aktifa Beauty Clinic.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-8">
          {filters.map((f) => {
            const isActive = selectedFilter === f.key;
            return (
              <button
                key={f.key}
                onClick={() => setSelectedFilter(f.key)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition cursor-pointer ${
                  isActive
                    ? 'bg-pink-600 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:text-pink-600 border border-slate-200 hover:border-pink-200'
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              className="group relative rounded-2xl overflow-hidden bg-pink-100 shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer border border-pink-100/60 aspect-4/3 sm:aspect-square flex flex-col justify-end"
            >
              <img
                src={item.imageUrl}
                onError={(e) => {
                  if (item.fallbackUrl) {
                    (e.currentTarget as HTMLImageElement).src = item.fallbackUrl;
                  }
                }}
                alt={item.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="relative p-4 text-white z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <span className="text-[10px] font-bold uppercase tracking-wider text-pink-300 bg-pink-900/60 backdrop-blur-xs px-2 py-0.5 rounded-full inline-block mb-1.5">
                  {item.category === 'treatment'
                    ? 'Treatment'
                    : item.category === 'alat'
                    ? 'Alat Medis'
                    : item.category === 'klinik'
                    ? 'Fasilitas'
                    : 'Konsultasi'}
                </span>
                <h4 className="text-sm font-bold text-white line-clamp-1">
                  {item.title}
                </h4>
                <p className="text-[11px] text-pink-100/80 line-clamp-2 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.description}
                </p>
              </div>

              {/* Zoom icon hint */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox */}
        {activeImage && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setActiveImage(null)}
          >
            <div
              className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-16/10 bg-slate-900">
                <img
                  src={activeImage.imageUrl}
                  onError={(e) => {
                    if (activeImage.fallbackUrl) {
                      (e.currentTarget as HTMLImageElement).src = activeImage.fallbackUrl;
                    }
                  }}
                  alt={activeImage.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setActiveImage(null)}
                  className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition"
                  aria-label="Tutup foto"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6">
                <span className="text-xs font-semibold uppercase text-pink-600 tracking-wider">
                  Aktifa Beauty Clinic
                </span>
                <h3 className="font-serif text-lg font-bold text-slate-900 mt-1">
                  {activeImage.title}
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {activeImage.description}
                </p>
                <div className="mt-5 flex justify-end">
                  <button
                    onClick={() => setActiveImage(null)}
                    className="px-4 py-2 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
