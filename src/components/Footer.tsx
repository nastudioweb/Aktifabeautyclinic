import React from 'react';
import { AktifaLogo } from './AktifaLogo';
import { CLINIC_INFO } from '../data/clinicInfo';
import {
  MapPin,
  Phone,
  Clock,
  Instagram,
  Heart,
  Calendar,
  MessageCircle,
  Star,
  ExternalLink,
} from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-14 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand Info & Mission */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-slate-800/80 p-3 rounded-2xl inline-block border border-slate-700">
              <AktifaLogo size={42} showText={true} />
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Aktifa Beauty Clinic adalah klinik perawatan kulit dan kecantikan terpercaya di Medan Satria, Bekasi. 
              Berkomitmen memberikan pelayanan medis estetika berkualitas tinggi dengan harga yang bersahabat dan transparan.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <div className="flex items-center gap-1 text-amber-400 bg-slate-800 px-3 py-1 rounded-full text-xs font-semibold border border-slate-700">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <span>5.0 Rating Sempurna (374 Ulasan Google)</span>
              </div>
            </div>

            {/* Social media links */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={CLINIC_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800 hover:bg-pink-900/40 text-pink-300 border border-slate-700 hover:border-pink-500/50 text-xs transition"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>@aktifabeauty</span>
              </a>

              <a
                href={CLINIC_INFO.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 text-xs transition"
              >
                <span className="font-bold text-[11px]">TikTok:</span>
                <span>@aktifabeauty</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-pink-400">
              Navigasi Cepat
            </h4>
            <ul className="text-xs space-y-2 text-slate-400">
              <li>
                <a href="#hero" className="hover:text-pink-300 transition">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-pink-300 transition">
                  Katalog & Daftar Harga Treatment
                </a>
              </li>
              <li>
                <a href="#reservasi" className="hover:text-pink-300 transition">
                  Formulir Reservasi WhatsApp
                </a>
              </li>
              <li>
                <a href="#galeri" className="hover:text-pink-300 transition">
                  Galeri Foto & Fasilitas
                </a>
              </li>
              <li>
                <a href="#ulasan" className="hover:text-pink-300 transition">
                  Ulasan Pasien Google Maps (5.0★)
                </a>
              </li>
              <li>
                <a href="#lokasi" className="hover:text-pink-300 transition">
                  Lokasi & Petunjuk Arah
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-pink-400">
              Kontak & Alamat
            </h4>

            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  {CLINIC_INFO.address}
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-pink-500 shrink-0" />
                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="hover:text-pink-300 transition font-medium"
                >
                  {CLINIC_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={CLINIC_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 transition font-medium"
                >
                  Chat WhatsApp: {CLINIC_INFO.phone}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
                <p>
                  Buka Setiap Hari: 09.00 - 17.00 WIB
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-pink-600 hover:bg-pink-700 transition flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Buat Janji Temu Sekarang</span>
              </button>
            </div>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p className="text-center md:text-left max-w-2xl">
            *Catatan: Hasil perawatan kulit dapat bervariasi pada setiap individu tergantung kondisi awal kulit dan metabolisme tubuh. Konsultasikan dengan dokter kami untuk hasil yang optimal.
          </p>
          <p className="text-center md:text-right shrink-0">
            © {new Date().getFullYear()} AKTIFA BEAUTY CLINIC BEKASI. Hak cipta dilindungi.
          </p>
        </div>

      </div>
    </footer>
  );
};
