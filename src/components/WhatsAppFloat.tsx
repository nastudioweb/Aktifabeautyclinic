import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/clinicInfo';
import { MessageCircle, X, Send, Sparkles, Clock, Check } from 'lucide-react';
import { AktifaLogo } from './AktifaLogo';

export const WhatsAppFloat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const quickPrompts = [
    'Halo Aktifa Beauty, saya mau tanya promo & diskon treatment bulan ini.',
    'Halo Dokter, saya mau konsultasi keluhan kulit berjerawat & bruntusan.',
    'Halo, apakah masih ada slot reservasi perawatan untuk hari ini/besok?',
    'Halo, mau tanya informasi biaya Cauter dan Microneedle Scar.',
  ];

  const handleSendPrompt = (text: string) => {
    const url = `https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  const handleCustomSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customMsg.trim()) return;
    handleSendPrompt(customMsg);
    setCustomMsg('');
  };

  return (
    <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end">
      {/* Popover Window */}
      {isOpen && (
        <div className="mb-3 w-[calc(100vw-32px)] sm:w-80 bg-white rounded-2xl shadow-2xl border border-pink-100 overflow-hidden animate-in slide-in-from-bottom-5 duration-200">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-pink-600 via-rose-500 to-pink-500 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <AktifaLogo size={36} showText={false} />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border-2 border-white rounded-full" />
              </div>
              <div>
                <h4 className="text-xs font-bold leading-tight">
                  Aktifa Beauty Clinic
                </h4>
                <p className="text-[10px] text-pink-100 flex items-center gap-1">
                  <span>Fast Response</span> • <span>09.00 - 17.00 WIB</span>
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/20 transition"
              aria-label="Tutup popup WhatsApp"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-3.5 bg-pink-50/40 space-y-3 text-xs">
            {/* Bubble message from clinic */}
            <div className="bg-white p-3 rounded-2xl rounded-tl-xs shadow-xs border border-pink-100 text-slate-700 leading-relaxed">
              <p className="font-semibold text-pink-600 mb-1">
                Halo, selamat datang di Aktifa Beauty! 🌸
              </p>
              <p className="text-[11px] text-slate-600">
                Ada yang bisa kami bantu seputar reservasi, konsultasi dokter, atau daftar harga treatment?
              </p>
            </div>

            {/* Quick choices */}
            <div className="space-y-1.5">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Pertanyaan Cepat:
              </span>
              {quickPrompts.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => handleSendPrompt(prompt)}
                  className="w-full text-left p-2 rounded-xl bg-white hover:bg-pink-100/70 border border-pink-100 text-[11px] text-slate-700 hover:text-pink-700 transition flex items-center justify-between gap-1 shadow-2xs"
                >
                  <span className="line-clamp-1">{prompt}</span>
                  <Send className="w-3 h-3 text-pink-400 shrink-0" />
                </button>
              ))}
            </div>

            {/* Custom input */}
            <form onSubmit={handleCustomSend} className="relative pt-1">
              <input
                type="text"
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                placeholder="Tulis pesan pertanyaan..."
                className="w-full pl-3 pr-8 py-2 rounded-xl border border-slate-200 focus:border-pink-500 focus:ring-1 focus:ring-pink-300 text-xs text-slate-800 outline-none bg-white"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-2.5 p-1 text-emerald-600 hover:text-emerald-700 transition"
                title="Kirim ke WhatsApp"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

          {/* Footer note */}
          <div className="bg-slate-50 px-3 py-1.5 text-center text-[10px] text-slate-400 border-t border-slate-100">
            Tersambung ke WhatsApp Resmi: {CLINIC_INFO.phone}
          </div>

        </div>
      )}

      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg shadow-emerald-600/30 hover:shadow-xl transition-all duration-300 active:scale-95 cursor-pointer"
        aria-label="Buka Chat WhatsApp"
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6 fill-white text-emerald-600" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-rose-400 border-2 border-emerald-600 rounded-full animate-ping" />
        </div>
        <div className="text-left hidden sm:block">
          <p className="text-[10px] font-medium leading-none text-emerald-100">Chat WhatsApp</p>
          <p className="text-xs font-bold leading-tight">Fast Response</p>
        </div>
      </button>
    </div>
  );
};
