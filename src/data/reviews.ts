export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  reviewCount?: string;
  photoCount?: string;
  comment: string;
  highlight?: string;
  tag: 'pelayanan' | 'harga' | 'perawatnya' | 'cream' | 'fasilitas';
  avatarBg: string;
}

export const REVIEW_CATEGORIES = [
  { key: 'all', label: 'Semua Ulasan', count: 374 },
  { key: 'pelayanan', label: 'Pelayanan Ramah', count: 47 },
  { key: 'harga', label: 'Harga & Diskon', count: 16 },
  { key: 'perawatnya', label: 'Perawat & Terapis', count: 9 },
  { key: 'cream', label: 'Cream & Terapi', count: 8 },
  { key: 'fasilitas', label: 'Tempat & Kids Friendly', count: 12 },
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Dewi Maharani',
    rating: 5,
    date: '3 bulan lalu',
    reviewCount: '8 ulasan',
    photoCount: '8 foto',
    comment:
      'Coba pertama kali treatment langsung cocok, suka bgt pelayanannya yg ramah dan fast respon. Banyak diskon dan alhamdulillah cocok untuk kulitku yg lumayan bermasalah, pokoknya bagus👍🏻❤️',
    highlight: 'Coba pertama kali treatment langsung cocok, suka bgt pelayanannya',
    tag: 'pelayanan',
    avatarBg: 'bg-rose-500',
  },
  {
    id: 'rev-2',
    author: 'Adinda Dwi Pangestu',
    rating: 5,
    date: 'sebulan lalu',
    reviewCount: '3 ulasan',
    comment:
      'Coba pertama kali treatment qouter langsung cocok, suka bgt pelayanannya yg ramah dan Banyak diskon☺️ Dokternya ramah dan menjelaskan secara detail👍',
    highlight: 'Dokternya ramah dan menjelaskan secara detail',
    tag: 'harga',
    avatarBg: 'bg-pink-600',
  },
  {
    id: 'rev-3',
    author: 'Uswatun Hasanah',
    rating: 5,
    date: '10 bulan lalu',
    reviewCount: '3 ulasan',
    photoCount: '4 foto',
    comment:
      'Pertama kali Dateng ke klinik ini, disambut dengan sangat ramah sama karyawan kliniknya. Terapisnya juga ramah banget, asik banget diajak ngobrolnya hehe, terimakasih mbak. Lumayan kids friendly, karena aku bawa 2 anak dan ada tempat untuk nunggu di dalem ruang tindakan. Ketemu dokter, masyaallah dokternya cantik dan ramah. Semoga cocok dengan klinik Aktifa biar bisa balik lagi 💞',
    highlight: 'Lumayan kids friendly & dokternya cantik dan ramah',
    tag: 'fasilitas',
    avatarBg: 'bg-pink-500',
  },
  {
    id: 'rev-4',
    author: 'Rina Setiawati',
    rating: 5,
    date: '5 bulan lalu',
    reviewCount: '12 ulasan',
    comment:
      'Tempat nyaman, staf ramah, kualitas bagus dan dokter sangat membantu. Pilihan treatment lengkap dari facial sampai laser, tempat parkir juga gratis dan gampang.',
    highlight: 'Tempat nyaman, staf ramah, kualitas bagus dan dokter sangat membantu',
    tag: 'pelayanan',
    avatarBg: 'bg-rose-600',
  },
  {
    id: 'rev-5',
    author: 'Siti Rahmawati',
    rating: 5,
    date: '2 bulan lalu',
    reviewCount: '5 ulasan',
    comment:
      'Pelayanan baik dan ramah, murah senyum, dpt diskon pula. Ruangannya wangi, alat-alatnya modern dan steril. Nyaman banget perawatan di sini.',
    highlight: 'Pelayanan baik dan ramah, murah senyum, dpt diskon pula',
    tag: 'harga',
    avatarBg: 'bg-pink-700',
  },
  {
    id: 'rev-6',
    author: 'Fitri Handayani',
    rating: 5,
    date: '6 bulan lalu',
    reviewCount: '4 ulasan',
    comment:
      'Alhamdulillah, cukup membantu terapi kulit wajah. Kulit yang tadinya kusam dan bruntusan sekarang jadi lebih glowing dan lembap. Perawatnya teliti dan lembut.',
    highlight: 'Alhamdulillah, cukup membantu terapi kulit wajah',
    tag: 'cream',
    avatarBg: 'bg-rose-400',
  },
  {
    id: 'rev-7',
    author: 'Nuraeni Kartika',
    rating: 5,
    date: '4 bulan lalu',
    reviewCount: '7 ulasan',
    comment:
      'Perawatnya sabar dan telaten pas ekstraksi komedo, ga begitu sakit karena tekniknya halus. Ruang tindakan dingin dan bersih. Bakal langganan terus di Aktifa!',
    highlight: 'Perawatnya sabar dan telaten pas ekstraksi komedo',
    tag: 'perawatnya',
    avatarBg: 'bg-fuchsia-600',
  },
  {
    id: 'rev-8',
    author: 'Tri Wulandari',
    rating: 5,
    date: 'setahun lalu',
    reviewCount: '6 ulasan',
    comment:
      'Tidak bisa pindah ke lain hati kecuali Aktifa beauty! Selalu puas tiap selesai treatment, hasil nyata dan kulit kerasa sehat bernapas.',
    highlight: 'Tidak bisa pindah ke lain hati kecuali Aktifa beauty',
    tag: 'pelayanan',
    avatarBg: 'bg-pink-600',
  },
];
