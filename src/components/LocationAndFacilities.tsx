import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/clinicInfo';
import {
  MapPin,
  Clock,
  Car,
  Baby,
  CreditCard,
  CalendarCheck,
  Sparkles,
  Wind,
  Navigation,
  Copy,
  Check,
  Share2,
  ExternalLink,
  Instagram,
  Phone,
} from 'lucide-react';

export const LocationAndFacilities: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(CLINIC_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const facilitiesList = [
    {
      title: 'Tempat Parkir Gratis',
      desc: 'Area parkir mobil dan motor luas, aman, dan tanpa biaya parkir.',
      icon: Car,
      tag: 'Bebas Parkir',
    },
    {
      title: 'Kids Friendly',
      desc: 'Bunda tenang membawa anak karena tersedia ruang tunggu santai di dalam.',
      icon: Baby,
      tag: 'Ramah Keluarga',
    },
    {
      title: 'Pembayaran Lengkap',
      desc: 'Menerima Kartu Debit, Kartu Kredit, QRIS, dan Pembayaran Seluler dengan NFC.',
      icon: CreditCard,
      tag: 'Cashless Ready',
    },
    {
      title: 'Perlu Janji Temu',
      desc: 'Sistem reservasi terjadwal agar waktu Anda efisien tanpa menunggu lama.',
      icon: CalendarCheck,
      tag: 'Minim Antre',
    },
    {
      title: 'Toilet Bersih & Higienis',
      desc: 'Sanitasi terawat prima dan wangi untuk kenyamanan setiap pasien.',
      icon: Sparkles,
      tag: 'Steril & Bersih',
    },
    {
      title: 'Ruangan Sejuk Ber-AC',
      desc: 'Suasana klinik yang tenang, privat, dan relaksasi maksimal selama tindakan.',
      icon: Wind,
      tag: 'Nyaman & Privat',
    },
  ];

  return (
    <section id="lokasi" className="py-14 sm:py-20 bg-slate-50/60 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-semibold mb-2.5">
            <MapPin className="w-3.5 h-3.5" />
            <span>Lokasi Strategis & Fasilitas Nyaman</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Kunjungi Aktifa Beauty Clinic Bekasi
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-slate-600">
            Akses mudah di kawasan Medan Satria Bekasi dengan fasilitas lengkap untuk kenyamanan perawatan Anda.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {facilitiesList.map((fac, idx) => {
            const Icon = fac.icon;
            return (
              <div
                key={idx}
                className="bg-white p-5 rounded-2xl border border-pink-100 shadow-xs hover:shadow-md transition-shadow flex items-start gap-3.5"
              >
                <div className="w-10 h-10 rounded-xl bg-pink-100/70 text-pink-600 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-sm font-bold text-slate-900">
                      {fac.title}
                    </h4>
                    <span className="text-[10px] font-semibold text-pink-700 bg-pink-50 px-2 py-0.2 rounded-full border border-pink-100">
                      {fac.tag}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {fac.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Map & Address Card Container */}
        <div className="bg-white rounded-3xl border border-pink-100 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left: Address details & hours */}
            <div className="lg:col-span-6 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                    {CLINIC_INFO.openStatus}
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
                  Aktifa Beauty Clinic
                </h3>

                {/* Address block */}
                <div className="p-4 rounded-2xl bg-pink-50/50 border border-pink-100 space-y-2">
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <MapPin className="w-4 h-4 text-pink-600 shrink-0 mt-0.5" />
                    <p className="leading-relaxed font-medium">
                      {CLINIC_INFO.address}
                    </p>
                  </div>

                  <div className="text-[11px] text-slate-500 pl-6 flex items-center gap-2">
                    <span>Plus Code: <strong>{CLINIC_INFO.plusCode}</strong></span>
                  </div>
                </div>

                {/* Operating hours table */}
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-slate-700 font-semibold">
                    <Clock className="w-4 h-4 text-pink-600" />
                    <span>Jam Operasional Layanan:</span>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 space-y-1.5 text-slate-600">
                    <div className="flex justify-between font-medium">
                      <span>Senin — Jumat</span>
                      <span className="text-slate-800">09.00 - 17.00 WIB</span>
                    </div>
                    <div className="flex justify-between font-medium">
                      <span>Sabtu & Minggu</span>
                      <span className="text-slate-800">09.00 - 17.00 WIB</span>
                    </div>
                  </div>
                </div>

                {/* Payment Methods Badges */}
                <div className="space-y-1.5">
                  <span className="text-xs font-semibold text-slate-700 block">
                    Metode Pembayaran Tersedia:
                  </span>
                  <div className="flex flex-wrap gap-1.5 text-xs">
                    <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 font-medium">
                      💳 Kartu Debit
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 font-medium">
                      💳 Kartu Kredit
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 font-medium">
                      📱 QRIS / Seluler NFC
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 font-medium">
                      💵 Tunai (Cash)
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2.5">
                <a
                  href={CLINIC_INFO.mapsDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-pink-600 hover:bg-pink-700 shadow-xs transition"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Petunjuk Arah Google Maps</span>
                </a>

                <button
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-1.5 py-2.5 px-3.5 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-pink-50 hover:text-pink-600 border border-slate-200 transition"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700">Tersalin</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Salin Alamat</span>
                    </>
                  )}
                </button>
              </div>

            </div>

            {/* Right: Map Embed / Visual preview */}
            <div className="lg:col-span-6 bg-slate-100 min-h-[340px] sm:min-h-[420px] relative">
              <iframe
                title="Peta Lokasi Aktifa Beauty Clinic"
                src="https://maps.google.com/maps?q=Jl.%20Komp.%20Griya%20Harapan%20Permai%20No.8A%20Blok%20A3,%20Pejuang,%20Kecamatan%20Medan%20Satria,%20Kota%20Bekasi&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[340px] sm:min-h-[420px]"
              />

              {/* Float Map overlay button */}
              <div className="absolute bottom-3 left-3 right-3 sm:right-auto bg-white/95 backdrop-blur-md p-2.5 rounded-xl shadow-md border border-pink-100 text-xs flex items-center justify-between sm:justify-start gap-3">
                <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-pink-600" />
                  Medan Satria, Kota Bekasi
                </span>
                <a
                  href={CLINIC_INFO.mapsDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:text-pink-700 font-bold underline"
                >
                  Buka Rute Navigasi
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
