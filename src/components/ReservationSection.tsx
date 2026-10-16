import React, { useState, useEffect } from 'react';
import { TREATMENTS, Treatment } from '../data/treatments';
import { CLINIC_INFO } from '../data/clinicInfo';
import {
  Calendar as CalendarIcon,
  Clock,
  User,
  Phone,
  Sparkles,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  HeartHandshake,
  MapPin,
  HelpCircle,
} from 'lucide-react';

interface ReservationSectionProps {
  selectedTreatment?: Treatment | null;
  onClearSelectedTreatment?: () => void;
}

export const ReservationSection: React.FC<ReservationSectionProps> = ({
  selectedTreatment,
  onClearSelectedTreatment,
}) => {
  // Form State
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('10:00');
  const [treatmentId, setTreatmentId] = useState<string>('konsultasi-dokter');
  const [patientStatus, setPatientStatus] = useState<'baru' | 'lama'>('baru');
  const [concerns, setConcerns] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingCode, setBookingCode] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // Default date to tomorrow if not set
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const dd = String(tomorrow.getDate()).padStart(2, '0');
    setDate(`${yyyy}-${mm}-${dd}`);
  }, []);

  // Update selected treatment from props if clicked in catalog
  useEffect(() => {
    if (selectedTreatment) {
      setTreatmentId(selectedTreatment.id);
      // Scroll to reservation
      const el = document.getElementById('reservasi');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [selectedTreatment]);

  const timeSlots = [
    '09:00 WIB',
    '10:00 WIB',
    '11:00 WIB',
    '12:30 WIB',
    '13:30 WIB',
    '14:30 WIB',
    '15:30 WIB',
    '16:00 WIB',
  ];

  // Find currently selected treatment object
  const currentTreatment =
    treatmentId === 'konsultasi-dokter'
      ? {
          name: 'Konsultasi Kulit dengan Dokter (Free)',
          price: 'Gratis Konsultasi',
          category: 'Konsultasi Medis',
        }
      : TREATMENTS.find((t) => t.id === treatmentId) || {
          name: 'Konsultasi Dokter Dahulu',
          price: 'Menyesuaikan Rekomendasi Dokter',
          category: 'Konsultasi Kulit',
        };

  // Generate formatted WhatsApp message text
  const generateWhatsAppMessage = () => {
    const formattedDate = date
      ? new Date(date).toLocaleDateString('id-ID', {
          weekday: 'long',
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })
      : 'Segera disesuaikan';

    const message = `Halo Aktifa Beauty Clinic, saya ingin melakukan reservasi janji temu:

👤 *Nama Pasien:* ${fullName || '[Nama Lengkap]'}
📱 *No. WhatsApp:* ${phoneNumber || '[Nomor WA]'}
📅 *Tanggal Janji:* ${formattedDate}
⏰ *Pilihan Jam:* ${timeSlot}
💆‍♀️ *Treatment Pilihan:* ${currentTreatment.name} (${currentTreatment.price})
🏷️ *Status Pasien:* ${patientStatus === 'baru' ? 'Pasien Baru' : 'Pasien Lama / Perawatan Rutin'}
📝 *Keluhan / Catatan Kulit:* ${concerns || 'Ingin konsultasi langsung dengan dokter'}

Mohon informasi ketersediaan jadwalnya. Terima kasih banyak!`;

    return message;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!fullName.trim()) {
      setErrorMsg('Mohon masukkan nama lengkap Anda.');
      return;
    }
    if (!phoneNumber.trim()) {
      setErrorMsg('Mohon masukkan nomor WhatsApp yang aktif.');
      return;
    }
    if (!date) {
      setErrorMsg('Mohon tentukan tanggal kunjungan Anda.');
      return;
    }

    const randomId =
      'AKT-' + Math.floor(1000 + Math.random() * 9000);
    setBookingCode(randomId);
    setIsSubmitted(true);

    const waText = encodeURIComponent(generateWhatsAppMessage());
    const waUrl = `https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${waText}`;

    // Open WhatsApp in new tab
    window.open(waUrl, '_blank');
  };

  return (
    <section id="reservasi" className="py-14 sm:py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title & Description */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-semibold mb-2.5">
            <CalendarIcon className="w-3.5 h-3.5" />
            <span>Sistem Reservasi Online Terjadwal</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Booking Janji Temu Mudah & Cepat
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-slate-600">
            Klinik kami menerapkan sistem janji temu agar Anda tidak perlu mengantre lama. 
            Isi formulir di bawah ini dan konfirmasi langsung tersambung ke WhatsApp resmi Aktifa Beauty.
          </p>
        </div>

        {/* Reservation Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-pink-100 p-6 sm:p-8 shadow-sm">
            {errorMsg && (
              <div className="mb-5 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Row 1: Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Nama Lengkap Pasien *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Contoh: Dewi Maharani"
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-100 text-sm text-slate-800 outline-none transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Nomor WhatsApp / HP *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="08xxxxxxxxxx"
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-100 text-sm text-slate-800 outline-none transition"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Pilihan Tanggal Kunjungan *
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-100 text-sm text-slate-800 outline-none transition"
                    />
                  </div>
                  <span className="text-[11px] text-slate-400 mt-1 block">
                    Klinik buka setiap hari (09.00 - 17.00 WIB)
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Pilihan Jam Kedatangan *
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <select
                      value={timeSlot}
                      onChange={(e) => setTimeSlot(e.target.value)}
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-100 text-sm text-slate-800 outline-none transition bg-white"
                    >
                      {timeSlots.map((ts) => (
                        <option key={ts} value={ts}>
                          {ts}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Row 3: Treatment Selection */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Pilih Jenis Treatment / Perawatan *
                  </label>
                  {onClearSelectedTreatment && selectedTreatment && (
                    <button
                      type="button"
                      onClick={onClearSelectedTreatment}
                      className="text-[11px] text-pink-600 hover:text-pink-700 underline"
                    >
                      Ganti Pilihan
                    </button>
                  )}
                </div>

                <div className="relative">
                  <select
                    value={treatmentId}
                    onChange={(e) => setTreatmentId(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-100 text-sm text-slate-800 outline-none transition bg-white"
                  >
                    <option value="konsultasi-dokter">
                      🩺 Belum Tahu / Konsultasi Dokter Dahulu (Gratis)
                    </option>
                    <optgroup label="✨ Facial Treatments">
                      {TREATMENTS.filter((t) => t.categoryKey === 'facial').map(
                        (t) => (
                          <option key={t.id} value={t.id}>
                            {t.name} — {t.price}
                          </option>
                        )
                      )}
                    </optgroup>
                    <optgroup label="💧 Oxygeneo & Pollogen">
                      {TREATMENTS.filter((t) => t.categoryKey === 'pollogen').map(
                        (t) => (
                          <option key={t.id} value={t.id}>
                            {t.name} — {t.price}
                          </option>
                        )
                      )}
                    </optgroup>
                    <optgroup label="⚡ Laser & IPL">
                      {TREATMENTS.filter((t) => t.categoryKey === 'laser-ipl').map(
                        (t) => (
                          <option key={t.id} value={t.id}>
                            {t.name} — {t.price}
                          </option>
                        )
                      )}
                    </optgroup>
                    <optgroup label="💉 Skinbooster & Injeksi">
                      {TREATMENTS.filter((t) => t.categoryKey === 'skinbooster').map(
                        (t) => (
                          <option key={t.id} value={t.id}>
                            {t.name} — {t.price}
                          </option>
                        )
                      )}
                    </optgroup>
                    <optgroup label="🌟 Face Contouring & RF">
                      {TREATMENTS.filter((t) => t.categoryKey === 'contouring').map(
                        (t) => (
                          <option key={t.id} value={t.id}>
                            {t.name} — {t.price}
                          </option>
                        )
                      )}
                    </optgroup>
                    <optgroup label="👑 Ultraformer III (MMFU Lifting)">
                      {TREATMENTS.filter((t) => t.categoryKey === 'ultraformer').map(
                        (t) => (
                          <option key={t.id} value={t.id}>
                            {t.name} — {t.price}
                          </option>
                        )
                      )}
                    </optgroup>
                    <optgroup label="🌿 Peeling & Omega Light">
                      {TREATMENTS.filter(
                        (t) => t.categoryKey === 'peeling-light'
                      ).map((t) => (
                        <option key={t.id} value={t.id}>
                          {t.name} — {t.price}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="✨ Roller & Microneedle Scar">
                      {TREATMENTS.filter((t) => t.categoryKey === 'roller-scar').map(
                        (t) => (
                          <option key={t.id} value={t.id}>
                            {t.name} — {t.price}
                          </option>
                        )
                      )}
                    </optgroup>
                    <optgroup label="🌸 Hair Removal">
                      {TREATMENTS.filter(
                        (t) => t.categoryKey === 'hair-removal'
                      ).map((t) => (
                        <option key={t.id} value={t.id}>
                          {t.name} — {t.price}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="❄️ Clatuu Alpha & Body Slimming">
                      {TREATMENTS.filter(
                        (t) => t.categoryKey === 'body-slimming'
                      ).map((t) => (
                        <option key={t.id} value={t.id}>
                          {t.name} — {t.price}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="📍 Cauter & Tanam Benang">
                      {TREATMENTS.filter(
                        (t) => t.categoryKey === 'cauter-thread'
                      ).map((t) => (
                        <option key={t.id} value={t.id}>
                          {t.name} — {t.price}
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </div>
              </div>

              {/* Row 4: Status Pasien (Baru / Pernah) */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Status Kunjungan
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPatientStatus('baru')}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border transition text-center cursor-pointer ${
                      patientStatus === 'baru'
                        ? 'border-pink-500 bg-pink-50 text-pink-700 shadow-xs'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    Pasien Baru (Pertama Kali)
                  </button>
                  <button
                    type="button"
                    onClick={() => setPatientStatus('lama')}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border transition text-center cursor-pointer ${
                      patientStatus === 'lama'
                        ? 'border-pink-500 bg-pink-50 text-pink-700 shadow-xs'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    Pasien Lama (Perawatan Lanjutan)
                  </button>
                </div>
              </div>

              {/* Row 5: Notes & Skin Concerns */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Keluhan Kulit / Catatan Tambahan (Opsional)
                </label>
                <textarea
                  rows={2}
                  value={concerns}
                  onChange={(e) => setConcerns(e.target.value)}
                  placeholder="Contoh: Kulit sedang bruntusan di dahi, ada flek hitam tipis di pipi, dan ingin sekalian bawa anak..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-100 text-sm text-slate-800 outline-none transition"
                />
              </div>

              {/* Submit CTA Button */}
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-2xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-md shadow-emerald-200 transition-all flex items-center justify-center gap-2.5 active:scale-98 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-white text-emerald-500" />
                <span>Kirim Reservasi ke WhatsApp Klinik ({CLINIC_INFO.phone})</span>
              </button>

              <p className="text-[11px] text-center text-slate-400">
                Pesan WhatsApp akan terbuka otomatis dengan format reservasi yang rapi. Staf klinik kami akan membalas cepat untuk konfirmasi slot.
              </p>
            </form>
          </div>

          {/* Right Column: Live Booking Summary Preview & Clinic Guarantees */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Live WhatsApp Message Preview Card */}
            <div className="bg-slate-900 text-white rounded-3xl p-5 sm:p-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/20 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-semibold text-emerald-300">
                    Format Pesan WhatsApp Otomatis
                  </span>
                </div>
                <span className="text-[10px] text-slate-400">
                  Aktifa Beauty Clinic
                </span>
              </div>

              {/* Chat Bubble simulation */}
              <div className="bg-emerald-950/70 border border-emerald-800/60 rounded-2xl p-4 text-xs font-mono text-emerald-100 whitespace-pre-wrap leading-relaxed">
                {generateWhatsAppMessage()}
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span>Tujuan: 0812-8399-3824</span>
                <span className="text-emerald-400 font-semibold">Tersambung Langsung</span>
              </div>
            </div>

            {/* If Form was submitted, show instant confirmation */}
            {isSubmitted && (
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 animate-in fade-in duration-300">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-emerald-800">
                      Pesan WhatsApp Berhasil Dibuka!
                    </h4>
                    <p className="text-xs text-emerald-700 mt-1">
                      Nomor Referensi Booking Anda:{' '}
                      <strong className="font-mono bg-emerald-100 px-1.5 py-0.5 rounded">
                        {bookingCode}
                      </strong>
                    </p>
                    <p className="text-[11px] text-emerald-600 mt-1">
                      Silakan tekan tombol <strong>Kirim</strong> di aplikasi WhatsApp Anda untuk mengirimkan data ke admin klinik.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Patient Tips & Clinic Amenities info */}
            <div className="bg-pink-50/60 rounded-2xl border border-pink-100 p-5 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-pink-800 flex items-center gap-1.5">
                <HeartHandshake className="w-4 h-4 text-pink-600" />
                Informasi Penting Kedatangan
              </h4>
              
              <ul className="text-xs text-slate-600 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-pink-500 shrink-0 mt-0.5" />
                  <span>Harap hadir <strong>10 menit sebelum jam janji</strong> untuk proses registrasi & relaksasi.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-pink-500 shrink-0 mt-0.5" />
                  <span><strong>Kids Friendly:</strong> Pasien yang membawa anak dapat menunggu dengan santai di dalam ruangan.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-pink-500 shrink-0 mt-0.5" />
                  <span><strong>Parkir Gratis:</strong> Bebas biaya parkir kendaraan roda 2 dan roda 4.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-pink-500 shrink-0 mt-0.5" />
                  <span>Pembayaran dapat dilakukan setelah tindakan selesai (Debit, Kredit, QRIS, Tunai).</span>
                </li>
              </ul>

              <div className="pt-2 border-t border-pink-200/60 flex items-center gap-2 text-[11px] text-pink-700 font-medium">
                <MapPin className="w-3.5 h-3.5" />
                <span>Griya Harapan Permai No.8A Blok A3, Medan Satria Bekasi</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
