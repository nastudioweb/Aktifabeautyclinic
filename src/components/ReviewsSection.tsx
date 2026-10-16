import React, { useState } from 'react';
import { REVIEWS, REVIEW_CATEGORIES, Review } from '../data/reviews';
import { CLINIC_INFO } from '../data/clinicInfo';
import {
  Star,
  MessageSquare,
  ThumbsUp,
  Share2,
  ExternalLink,
  ShieldCheck,
  Heart,
  Quote,
} from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredReviews =
    activeCategory === 'all'
      ? REVIEWS
      : REVIEWS.filter((r) => r.tag === activeCategory);

  return (
    <section id="ulasan" className="py-14 sm:py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-semibold mb-2.5">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>Google Maps Verified Reviews</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Kepercayaan & Ulasan Pasien Setia
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-slate-600">
            Rating bintang 5.0 dari ratusan pasien nyata yang telah membuktikan kualitas pelayanan, keahlian dokter, dan hasil perawatan kulit di Aktifa Beauty Clinic.
          </p>
        </div>

        {/* Rating Overview Card */}
        <div className="bg-gradient-to-r from-pink-50 via-rose-50/50 to-pink-50 rounded-3xl p-6 sm:p-8 border border-pink-100/80 mb-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Left Score */}
            <div className="md:col-span-4 text-center md:text-left border-b md:border-b-0 md:border-r border-pink-200/60 pb-6 md:pb-0 md:pr-6">
              <span className="text-5xl sm:text-6xl font-black text-slate-900 font-serif">
                5,0
              </span>
              <div className="flex items-center justify-center md:justify-start gap-1 mt-2 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs font-semibold text-slate-600 mt-1">
                Berdasarkan 374 ulasan di Google Maps
              </p>
              <span className="inline-block mt-2 text-[11px] font-bold text-pink-700 bg-pink-100/70 px-2.5 py-0.5 rounded-full">
                Klinik Perawatan Kulit Terfavorit
              </span>
            </div>

            {/* Middle Rating Bars */}
            <div className="md:col-span-5 space-y-1.5 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-3 text-slate-600 font-medium">5</span>
                <div className="flex-1 h-2 rounded-full bg-slate-200 overflow-hidden">
                  <div className="h-full bg-amber-400 rounded-full w-[98%]" />
                </div>
                <span className="w-8 text-right text-slate-500 font-mono">98%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 text-slate-600 font-medium">4</span>
                <div className="flex-1 h-2 rounded-full bg-slate-200 overflow-hidden">
                  <div className="h-full bg-amber-400 rounded-full w-[2%]" />
                </div>
                <span className="w-8 text-right text-slate-500 font-mono">2%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 text-slate-600 font-medium">3</span>
                <div className="flex-1 h-2 rounded-full bg-slate-200 overflow-hidden">
                  <div className="h-full bg-amber-400 rounded-full w-0" />
                </div>
                <span className="w-8 text-right text-slate-500 font-mono">0%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 text-slate-600 font-medium">2</span>
                <div className="flex-1 h-2 rounded-full bg-slate-200 overflow-hidden">
                  <div className="h-full bg-amber-400 rounded-full w-0" />
                </div>
                <span className="w-8 text-right text-slate-500 font-mono">0%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 text-slate-600 font-medium">1</span>
                <div className="flex-1 h-2 rounded-full bg-slate-200 overflow-hidden">
                  <div className="h-full bg-amber-400 rounded-full w-0" />
                </div>
                <span className="w-8 text-right text-slate-500 font-mono">0%</span>
              </div>
            </div>

            {/* Right Action */}
            <div className="md:col-span-3 text-center md:text-right flex flex-col gap-2">
              <a
                href={CLINIC_INFO.mapsDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-bold text-white bg-pink-600 hover:bg-pink-700 shadow-sm transition"
              >
                <span>Buka Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <span className="text-[10px] text-slate-500">
                100% ulasan independen pengunjung
              </span>
            </div>

          </div>
        </div>

        {/* Highlight Quotes Carousel / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          <div className="p-3.5 rounded-2xl bg-pink-50/50 border border-pink-100 flex items-start gap-2.5">
            <Quote className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
            <p className="text-xs font-semibold text-slate-800 italic">
              &quot;Tempat nyaman, staf ramah, kualitas bagus dan dokter sangat membantu&quot;
            </p>
          </div>
          <div className="p-3.5 rounded-2xl bg-pink-50/50 border border-pink-100 flex items-start gap-2.5">
            <Quote className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
            <p className="text-xs font-semibold text-slate-800 italic">
              &quot;Pelayanan baik dan ramah, murah senyum, dpt diskon pula&quot;
            </p>
          </div>
          <div className="p-3.5 rounded-2xl bg-pink-50/50 border border-pink-100 flex items-start gap-2.5">
            <Quote className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
            <p className="text-xs font-semibold text-slate-800 italic">
              &quot;Alhamdulillah, cukup membantu terapi kulit wajah.&quot;
            </p>
          </div>
        </div>

        {/* Filter Chips from Google Maps */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-6 no-scrollbar">
          {REVIEW_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-pink-600 text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-pink-50 text-slate-600 hover:text-pink-600'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-white/30 text-white' : 'bg-slate-200 text-slate-600'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Reviews Cards Masonry / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl border border-pink-100/90 p-5 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Author row */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm ${rev.avatarBg}`}
                    >
                      {rev.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-800">
                        {rev.author}
                      </h4>
                      <div className="flex items-center gap-2 text-[11px] text-slate-400">
                        <span>{rev.date}</span>
                        {rev.reviewCount && <span>• {rev.reviewCount}</span>}
                      </div>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Comment Body */}
                <p className="text-xs text-slate-600 leading-relaxed">
                  {rev.comment}
                </p>
              </div>

              {/* Bottom tag & feedback */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1 text-pink-600 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Pengunjung Terverifikasi
                </span>
                <span className="capitalize text-slate-400 bg-slate-50 px-2 py-0.5 rounded">
                  {rev.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Link to Google */}
        <div className="text-center mt-10">
          <a
            href={CLINIC_INFO.mapsDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-pink-700 bg-pink-50 hover:bg-pink-100 border border-pink-200 transition"
          >
            <span>Lihat Semua 374 Ulasan di Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
