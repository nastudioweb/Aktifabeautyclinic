import React, { useState, useMemo } from 'react';
import {
  TREATMENTS,
  TREATMENT_CATEGORIES,
  Treatment,
} from '../data/treatments';
import { CLINIC_INFO } from '../data/clinicInfo';
import {
  Search,
  Sparkles,
  Clock,
  Check,
  Calendar,
  MessageCircle,
  Tag,
  SlidersHorizontal,
  ChevronRight,
  Info,
} from 'lucide-react';

interface PricelistCatalogProps {
  onSelectTreatmentForBooking: (treatment: Treatment) => void;
}

export const PricelistCatalog: React.FC<PricelistCatalogProps> = ({
  onSelectTreatmentForBooking,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeConcernFilter, setActiveConcernFilter] = useState<string>('');

  const quickConcerns = [
    'Semua Keluhan',
    'Jerawat',
    'Kusam',
    'Flek Hitam',
    'Bopeng',
    'Anti-Aging',
    'Milia',
    'Double Chin',
  ];

  // Filtering treatments based on category, search text, and concern tag
  const filteredTreatments = useMemo(() => {
    return TREATMENTS.filter((item) => {
      // Category match
      const matchCategory =
        selectedCategory === 'all' || item.categoryKey === selectedCategory;

      // Concern filter match
      const matchConcern =
        !activeConcernFilter ||
        activeConcernFilter === 'Semua Keluhan' ||
        (item.targetConcerns &&
          item.targetConcerns.some((c) =>
            c.toLowerCase().includes(activeConcernFilter.toLowerCase())
          ));

      // Search query match
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        (item.procedure && item.procedure.toLowerCase().includes(q)) ||
        (item.targetConcerns &&
          item.targetConcerns.some((c) => c.toLowerCase().includes(q)));

      return matchCategory && matchConcern && matchSearch;
    });
  }, [selectedCategory, searchQuery, activeConcernFilter]);

  const handleWhatsAppInquiry = (item: Treatment) => {
    const text = encodeURIComponent(
      `Halo Aktifa Beauty Clinic, saya tertarik dan ingin konsultasi mengenai treatment "${item.name}" (kisaran harga ${item.price}). Apakah ada jadwal tersedia?`
    );
    window.open(`https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${text}`, '_blank');
  };

  return (
    <section id="layanan" className="py-14 sm:py-20 bg-slate-50/50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Katalog Resmi & Pricelist Transparan</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Pilihan Layanan & Daftar Harga Treatment
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Semua perawatan menggunakan bahan medis berkualitas tinggi dan alat berteknologi canggih. 
            Pilih treatment yang sesuai dan Anda dapat langsung melakukan reservasi jadwal via WhatsApp.
          </p>
        </div>

        {/* Search Bar & Quick Filters */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm border border-pink-100 mb-8 space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 text-pink-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari perawatan (contoh: Facial, Oxygeneo, Pico Laser, Cauter, Bopeng, DNA Salmon)..."
              className="w-full pl-11 pr-10 py-3 rounded-xl border border-slate-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-100 text-sm text-slate-800 placeholder-slate-400 transition outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs bg-slate-100 px-2 py-1 rounded-md"
              >
                Reset
              </button>
            )}
          </div>

          {/* Quick Concern Chips */}
          <div className="flex items-center gap-2 flex-wrap text-xs">
            <span className="font-semibold text-slate-500 flex items-center gap-1">
              <SlidersHorizontal className="w-3.5 h-3.5 text-pink-500" />
              Keluhan Kulit:
            </span>
            {quickConcerns.map((concern) => {
              const isActive =
                activeConcernFilter === concern ||
                (!activeConcernFilter && concern === 'Semua Keluhan');
              return (
                <button
                  key={concern}
                  onClick={() =>
                    setActiveConcernFilter(concern === 'Semua Keluhan' ? '' : concern)
                  }
                  className={`px-3 py-1 rounded-full text-xs transition cursor-pointer ${
                    isActive
                      ? 'bg-pink-600 text-white font-medium shadow-xs'
                      : 'bg-slate-100 hover:bg-pink-50 text-slate-600 hover:text-pink-600'
                  }`}
                >
                  {concern}
                </button>
              );
            })}
          </div>

          {/* Category Tabs (Scrollable on Mobile) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 no-scrollbar border-t border-slate-100">
            {TREATMENT_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                    isSelected
                      ? 'bg-pink-500 text-white shadow-xs'
                      : 'bg-white hover:bg-pink-50 text-slate-700 hover:text-pink-600 border border-slate-200 hover:border-pink-200'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-4 px-1">
          <span>
            Menampilkan <strong className="text-slate-800">{filteredTreatments.length}</strong> jenis perawatan
          </span>
          {(selectedCategory !== 'all' || searchQuery || activeConcernFilter) && (
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
                setActiveConcernFilter('');
              }}
              className="text-pink-600 hover:text-pink-700 font-semibold underline underline-offset-2"
            >
              Tampilkan Semua Treatment
            </button>
          )}
        </div>

        {/* Treatments Grid */}
        {filteredTreatments.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredTreatments.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-pink-100/80 hover:border-pink-300 p-5 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  {/* Top tags & badges */}
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="text-[11px] font-semibold tracking-wide text-pink-600 bg-pink-50 px-2.5 py-0.5 rounded-full border border-pink-100">
                      {item.category}
                    </span>

                    {item.badge && (
                      <span className="text-[10px] font-bold text-amber-700 bg-amber-50 border border-amber-200/80 px-2 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Treatment Name */}
                  <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-pink-600 transition">
                    {item.name}
                  </h3>

                  {/* Price Tag */}
                  <div className="mt-2 mb-3 flex items-baseline gap-2">
                    <span className="font-sans text-xl font-extrabold text-pink-600">
                      {item.price}
                    </span>
                    {item.duration && (
                      <span className="text-xs text-slate-500 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        {item.duration}
                      </span>
                    )}
                  </div>

                  {/* Procedure detail if available */}
                  {item.procedure && (
                    <div className="mb-3 p-2 rounded-lg bg-pink-50/50 border border-pink-100/50 text-[11px] text-slate-600">
                      <span className="font-bold text-pink-700 block mb-0.5">Langkah Prosedur:</span>
                      <p className="line-clamp-2">{item.procedure}</p>
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    {item.description}
                  </p>

                  {/* Options variants (if any) */}
                  {item.options && item.options.length > 0 && (
                    <div className="mb-3 space-y-1">
                      <span className="text-[11px] font-medium text-slate-500 block">Pilihan Varian:</span>
                      <div className="flex flex-wrap gap-1">
                        {item.options.map((opt, i) => (
                          <span
                            key={i}
                            className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200"
                          >
                            {opt}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Target concerns tags */}
                  {item.targetConcerns && item.targetConcerns.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-4">
                      {item.targetConcerns.map((tc, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] text-pink-700 bg-pink-50/60 px-1.5 py-0.5 rounded"
                        >
                          #{tc}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom Card Actions */}
                <div className="pt-3 border-t border-slate-100 flex items-center gap-2 mt-auto">
                  <button
                    onClick={() => onSelectTreatmentForBooking(item)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 shadow-xs hover:shadow-sm transition active:scale-95 cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Pilih & Reservasi</span>
                  </button>

                  <button
                    onClick={() => handleWhatsAppInquiry(item)}
                    className="p-2.5 rounded-xl text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition"
                    title="Tanya Dokter / Klinik via WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-pink-100 p-8 max-w-lg mx-auto">
            <Info className="w-10 h-10 text-pink-400 mx-auto mb-3" />
            <h3 className="font-semibold text-slate-800 text-base">
              Perawatan tidak ditemukan
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Tidak ada hasil yang cocok dengan kata kunci &quot;{searchQuery}&quot;. Silakan coba kata kunci lain atau hubungi kami langsung via WhatsApp untuk rekomendasi.
            </p>
            <div className="mt-4 flex items-center justify-center gap-3">
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                  setActiveConcernFilter('');
                }}
                className="px-4 py-2 rounded-full text-xs font-semibold bg-pink-100 text-pink-700 hover:bg-pink-200"
              >
                Lihat Semua Treatment
              </button>
              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100"
              >
                Tanya WhatsApp
              </a>
            </div>
          </div>
        )}

        {/* Note on Free Consultation */}
        <div className="mt-10 p-4 sm:p-5 rounded-2xl bg-white border border-pink-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center shrink-0 text-pink-600">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">
                Bingung memilih perawatan yang cocok untuk kulit Anda?
              </p>
              <p className="text-xs text-slate-500">
                Konsultasikan langsung keluhan Anda dengan dokter kecantikan kami sebelum menentukan tindakan.
              </p>
            </div>
          </div>
          <a
            href={`https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${encodeURIComponent(
              'Halo Dokter Aktifa Beauty Clinic, saya mau konsultasi keluhan kulit wajah saya terlebih dahulu sebelum memilih treatment. Mohon arahannya.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-4 py-2.5 rounded-full text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 transition flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-emerald-500 text-emerald-500" />
            <span>Konsultasi Dokter Gratis via WA</span>
          </a>
        </div>

      </div>
    </section>
  );
};
