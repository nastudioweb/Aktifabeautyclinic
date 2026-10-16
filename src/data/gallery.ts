export interface GalleryItem {
  id: string;
  title: string;
  category: 'treatment' | 'alat' | 'klinik' | 'konsultasi';
  imageUrl: string;
  fallbackUrl?: string;
  description: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Oxygeneo by Pollogen & Oxygen Facial',
    category: 'treatment',
    imageUrl: './assets/gallery-oxygeneo.jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80',
    description: 'Prosedur oksigenasi sel kulit wajah menggunakan alat khusus Pollogen untuk angkat sel kulit mati dan melancarkan sirkulasi.',
  },
  {
    id: 'gal-2',
    title: 'Konsultasi Kulit dengan Dokter Berpengalaman',
    category: 'konsultasi',
    imageUrl: './assets/gallery-konsultasi.jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80',
    description: 'Pemeriksaan kondisi kulit wajah secara detail dan ramah untuk menentukan penanganan perawatan yang paling tepat.',
  },
  {
    id: 'gal-3',
    title: 'Pico Laser & IPL Skin Rejuvenation',
    category: 'treatment',
    imageUrl: './assets/gallery-laser.jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1000&q=80',
    description: 'Teknologi laser berkecepatan tinggi untuk menyamarkan flek hitam, mengecilkan pori, dan merangsang kolagen baru.',
  },
  {
    id: 'gal-4',
    title: 'Ruang Tindakan Bersih, Steril & Nyaman',
    category: 'klinik',
    imageUrl: './assets/gallery-klinik.jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80',
    description: 'Ruang perawatan ber-AC yang sejuk, privat, dan berstandar higienis tinggi demi ketenangan dan privasi pasien.',
  },
  {
    id: 'gal-5',
    title: 'Luxury Gold Mask 24K Treatment',
    category: 'treatment',
    imageUrl: './assets/gallery-gold-facial.jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80',
    description: 'Masker emas murni 24K untuk mengunci kelembapan, mengencangkan kulit, dan memberikan kilau glowing instan.',
  },
  {
    id: 'gal-6',
    title: 'Teknologi Canggih Pollogen Legend & Clatuu Alpha',
    category: 'alat',
    imageUrl: './assets/gallery-alat-pollogen.jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80',
    description: 'Peralatan berlisensi resmi untuk face contouring, microneedle, dan fat freezing (cryolipolysis).',
  },
  {
    id: 'gal-7',
    title: 'Ruang Tunggu Santai & Kids Friendly',
    category: 'klinik',
    imageUrl: './assets/gallery-kids-friendly.jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&w=1000&q=80',
    description: 'Suasana santai dan ramah keluarga sehingga Bunda dapat membawa anak dengan nyaman saat berkunjung.',
  },
  {
    id: 'gal-8',
    title: 'Skinbooster DNA Salmon & Micro-Infusion',
    category: 'treatment',
    imageUrl: './assets/gallery-skinbooster.jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1000&q=80',
    description: 'Injeksi mikro nutrisi murni untuk memperkuat skin barrier, memperbaiki bopeng, dan hidrasi maksimal.',
  },
];
