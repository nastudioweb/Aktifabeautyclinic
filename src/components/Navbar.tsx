import React, { useState, useEffect } from 'react';
import { AktifaLogo } from './AktifaLogo';
import { CLINIC_INFO } from '../data/clinicInfo';
import {
  Phone,
  Calendar,
  Clock,
  MapPin,
  Star,
  Menu,
  X,
  MessageCircle,
} from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (treatmentName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Beranda', href: '#hero' },
    { label: 'Layanan & Harga', href: '#layanan' },
    { label: 'Galeri Klinik', href: '#galeri' },
    { label: 'Ulasan Pasien (5.0★)', href: '#ulasan' },
    { label: 'Fasilitas & Lokasi', href: '#lokasi' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Banner Bar for Trust & Operating Hours */}
      <div className="bg-gradient-to-r from-pink-600 via-rose-500 to-pink-600 text-white text-xs py-1.5 px-4 shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 font-medium">
              <MapPin className="w-3.5 h-3.5 text-pink-200" />
              Medan Satria, Kota Bekasi
            </span>
            <span className="hidden sm:inline-block text-pink-200">•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-pink-200" />
              Buka Setiap Hari: 09.00 - 17.00 WIB
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#ulasan"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#ulasan');
              }}
              className="flex items-center gap-1 bg-white/20 hover:bg-white/30 backdrop-blur-xs px-2 py-0.5 rounded-full text-[11px] font-semibold transition"
            >
              <Star className="w-3 h-3 fill-amber-300 text-amber-300" />
              <span>5.0 (374 Ulasan Google)</span>
            </a>
            <a
              href={CLINIC_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1 hover:text-pink-100 font-medium transition"
            >
              <Phone className="w-3 h-3" />
              <span>{CLINIC_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5'
            : 'bg-white py-3.5 border-b border-pink-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            className="flex items-center cursor-pointer group"
          >
            <AktifaLogo size={46} showText={true} />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-sm font-medium text-slate-700 hover:text-pink-600 transition relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-pink-500 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={CLINIC_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition shadow-xs"
              title="Chat langsung via WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-emerald-500 text-emerald-500" />
              <span>Tanya WhatsApp</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 shadow-md shadow-pink-200 hover:shadow-lg hover:shadow-pink-300 transition-all active:scale-95 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Reservasi Online</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenBooking()}
              className="sm:hidden inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-pink-500 hover:bg-pink-600 shadow-xs"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Booking</span>
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-pink-600 hover:bg-pink-50 transition"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-pink-600" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-pink-100 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top duration-200">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:text-pink-600 hover:bg-pink-50 transition"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 border-t border-pink-100 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold text-white bg-gradient-to-r from-pink-500 to-rose-500 shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Form Reservasi Online</span>
              </button>

              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                <span>Hubungi via WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
