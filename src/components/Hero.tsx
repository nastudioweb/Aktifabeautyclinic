import React from 'react';
import { CLINIC_INFO } from '../data/clinicInfo';
import {
  Calendar,
  Sparkles,
  Star,
  CheckCircle2,
  Clock,
  MapPin,
  ShieldCheck,
  Heart,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onExplorePricelist: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExplorePricelist }) => {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-pink-50/60 via-white to-pink-50/30 pt-6 pb-14 sm:pt-10 sm:pb-20">
      {/* Subtle decorative circles & floral blur background */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-pink-200/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-rose-100/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Trust badge pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-100/80 border border-pink-200 text-pink-700 text-xs sm:text-sm font-medium shadow-xs">
              <span className="flex items-center gap-1 font-bold text-amber-500">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                5.0 Rating Sempurna
              </span>
              <span className="text-pink-300">•</span>
              <span>374+ Ulasan Asli Pasien Google Maps</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl/tight font-extrabold text-slate-900 tracking-tight">
              Pancarkan Kulit Sehat, Cerah &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-500 to-pink-500">
                Glowing Alami
              </span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Klinik perawatan kulit terpercaya di Medan Satria, Bekasi. Hadir dengan 
              teknologi estetika modern, suasana tenang yang nyaman & kids friendly, 
              serta konsultasi dokter yang ramah dan solutif untuk segala keluhan kulit Anda.
            </p>

            {/* Key Value Propositions */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 py-2 max-w-xl mx-auto lg:mx-0 text-left">
              <div className="flex items-start gap-2 p-2.5 rounded-xl bg-white border border-pink-100 shadow-xs">
                <ShieldCheck className="w-4 h-4 text-pink-600 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <p className="font-semibold text-slate-800">Alat Standar Medis</p>
                  <p className="text-slate-500 text-[11px]">Pollogen, Clatuu, Pico</p>
                </div>
              </div>

              <div className="flex items-start gap-2 p-2.5 rounded-xl bg-white border border-pink-100 shadow-xs">
                <Heart className="w-4 h-4 text-pink-600 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <p className="font-semibold text-slate-800">Kids Friendly</p>
                  <p className="text-slate-500 text-[11px]">Bunda tenang bawa anak</p>
                </div>
              </div>

              <div className="flex items-start gap-2 p-2.5 rounded-xl bg-white border border-pink-100 shadow-xs col-span-2 sm:col-span-1">
                <Sparkles className="w-4 h-4 text-pink-600 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <p className="font-semibold text-slate-800">Banyak Promo</p>
                  <p className="text-slate-500 text-[11px]">Harga ramah & diskon</p>
                </div>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-sm sm:text-base font-bold text-white bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 hover:from-pink-600 hover:to-rose-600 shadow-lg shadow-pink-200 hover:shadow-xl hover:shadow-pink-300 transition-all transform active:scale-95 cursor-pointer"
              >
                <Calendar className="w-5 h-5" />
                <span>Reservasi Janji Temu</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExplorePricelist}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-sm font-semibold text-pink-700 bg-white hover:bg-pink-50 border border-pink-200 hover:border-pink-300 shadow-xs transition cursor-pointer"
              >
                <span>Lihat Katalog & Daftar Harga</span>
              </button>

              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-full text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                <span>Tanya WA</span>
              </a>
            </div>

            {/* Quick Location & Schedule Note */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-4 text-xs text-slate-500 flex-wrap">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Parkir Gratis Tersedia
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-pink-500" />
                Buka 09.00 - 17.00 WIB
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-pink-500" />
                Griya Harapan Permai
              </span>
            </div>
          </div>

          {/* Right Column: Visual Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative card frame with gold & pink outline matching the brochure */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-pink-300 via-rose-200 to-amber-200 rounded-3xl blur-xs opacity-75" />
              
              <div className="relative bg-white p-3 rounded-2xl shadow-xl border border-pink-100 overflow-hidden">
                
                {/* Main Hero Photo: Medical Oxygen Facial Treatment */}
                <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden bg-pink-100">
                  <img
                    src="./assets/hero-treatment.jpg"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80';
                    }}
                    alt="Facial Treatment di Aktifa Beauty Clinic"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  
                  {/* Floating Promo Tag */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-pink-700 shadow-sm border border-pink-100 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-pink-600" />
                    <span>Free Konsultasi Dokter</span>
                  </div>

                  {/* Caption on image */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-xs font-medium text-pink-200 uppercase tracking-wider">Layanan Unggulan</p>
                    <p className="text-sm font-bold">Oxygeneo by Pollogen & Laser Rejuvenation</p>
                  </div>
                </div>

                {/* Sub cards / Mini Grid */}
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <div className="p-2.5 rounded-xl bg-pink-50/70 border border-pink-100/60 flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-pink-200/80 flex items-center justify-center shrink-0 text-pink-700">
                      <Star className="w-4 h-4 fill-pink-600 text-pink-600" />
                    </div>
                    <div>
                      <p className="text-[11px] text-slate-500 font-medium">Google Review</p>
                      <p className="text-xs font-bold text-slate-800">5.0 / 5.0 (374 Ulasan)</p>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-pink-50/70 border border-pink-100/60 flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-pink-200/80 flex items-center justify-center shrink-0 text-pink-700">
                      <ShieldCheck className="w-4 h-4 text-pink-600" />
                    </div>
                    <div>
                      <p className="text-[11px] text-slate-500 font-medium">Metode Bayar</p>
                      <p className="text-xs font-bold text-slate-800">Debit, QRIS NFC, Tunai</p>
                    </div>
                  </div>
                </div>

                {/* Live quote excerpt from real visitor */}
                <div className="mt-2.5 p-3 rounded-xl bg-white border border-pink-100 text-xs text-slate-700 italic flex items-start gap-2">
                  <span className="text-pink-500 font-serif text-lg leading-none">“</span>
                  <div className="flex-1">
                    <p className="line-clamp-2">
                      Coba pertama kali treatment langsung cocok, suka banget pelayanannya ramah & fast respon. Banyak diskon!
                    </p>
                    <p className="text-[10px] font-semibold text-pink-600 not-italic mt-1">
                      — Dewi Maharani (Pasien Aktifa Beauty)
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
