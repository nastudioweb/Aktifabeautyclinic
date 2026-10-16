export interface ClinicFacility {
  name: string;
  description: string;
  icon: string;
}

export const CLINIC_INFO = {
  name: 'AKTIFA BEAUTY CLINIC',
  tagline: 'Klinik Perawatan Kulit & Kecantikan Terpercaya di Bekasi',
  description:
    'Aktifa Beauty Clinic menghadirkan perawatan kulit wajah dan tubuh dengan teknologi terkini berstandar medis, ditangani oleh dokter berpengalaman serta terapis ramah. Dapatkan kulit sehat, bersih, dan glowing bercahaya.',
  phone: '0812-8399-3824',
  whatsappRaw: '6281283993824',
  whatsappUrl: 'https://wa.me/6281283993824',
  rating: 5.0,
  totalReviews: 374,
  address:
    'Jl. Komp. Griya Harapan Permai No.8A Blok A3, RT.004/RW.032, Pejuang, Kecamatan Medan Satria, Kota Bks, Jawa Barat 17131',
  plusCode: 'RX8J+46 Pejuang, Kota Bks, Jawa Barat',
  mapsEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.52187313886!2d106.9831!3d-6.1947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698be906666667%3A0x123456789!2sGriya+Harapan+Permai!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid',
  mapsDirectUrl:
    'https://maps.google.com/?q=Aktifa+Beauty+Bekasi+Jl.+Komp.+Griya+Harapan+Permai+No.8A+Blok+A3+Pejuang+Medan+Satria',
  hours: 'Buka Setiap Hari: 09.00 - 17.00 WIB',
  openStatus: 'Buka · Tutup pukul 17.00 WIB',
  social: {
    instagram: 'https://www.instagram.com/aktifabeauty/',
    instagramHandle: '@aktifabeauty',
    tiktok: 'https://www.tiktok.com/@aktifabeauty',
    tiktokHandle: '@aktifabeauty',
  },
  facilities: [
    {
      title: 'Tempat Parkir Gratis',
      desc: 'Area parkir mobil dan motor yang luas, aman, dan tanpa biaya parkir.',
      icon: 'Car',
    },
    {
      title: 'Kids Friendly',
      desc: 'Ruang tunggu nyaman dan ramah anak, bisa menunggu di dalam ruang tindakan.',
      icon: 'Baby',
    },
    {
      title: 'Pembayaran Fleksibel',
      desc: 'Menerima Kartu Debit, Kartu Kredit, QRIS, dan Pembayaran Seluler NFC.',
      icon: 'CreditCard',
    },
    {
      title: 'Perlu Janji Temu (Reservasi)',
      desc: 'Sistem booking terjadwal agar Anda tidak perlu mengantre lama.',
      icon: 'CalendarCheck',
    },
    {
      title: 'Toilet Bersih & Wangi',
      desc: 'Fasilitas sanitasi terjaga higienis demi kenyamanan seluruh pasien.',
      icon: 'Sparkles',
    },
    {
      title: 'Ruangan Sejuk Ber-AC',
      desc: 'Suasana klinik yang tenang, privat, dan relaksasi maksimal.',
      icon: 'Wind',
    },
  ],
};
