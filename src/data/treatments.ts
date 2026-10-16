export interface Treatment {
  id: string;
  name: string;
  category: string;
  categoryKey: string;
  price: string;
  priceNum: number;
  duration?: string;
  procedure?: string;
  description: string;
  options?: string[];
  isPopular?: boolean;
  badge?: string;
  targetConcerns?: string[];
  technology?: string;
}

export const TREATMENT_CATEGORIES = [
  { key: 'all', label: 'Semua Treatment' },
  { key: 'facial', label: 'Facial Treatment' },
  { key: 'pollogen', label: 'Oxygeneo & Pollogen' },
  { key: 'laser-ipl', label: 'Laser & IPL' },
  { key: 'skinbooster', label: 'Skinbooster & Injeksi' },
  { key: 'contouring', label: 'Face Contouring & RF' },
  { key: 'ultraformer', label: 'Ultraformer III (MMFU)' },
  { key: 'peeling-light', label: 'Peeling & Omega Light' },
  { key: 'roller-scar', label: 'Roller & Microneedle' },
  { key: 'hair-removal', label: 'Hair Removal' },
  { key: 'body-slimming', label: 'Body Contouring & Clatuu' },
  { key: 'cauter-thread', label: 'Cauter & Threadlift' },
];

export const TREATMENTS: Treatment[] = [
  // --- FACIAL TREATMENT (Page 2) ---
  {
    id: 'radiance-exclusive-facial',
    name: 'Radiance Exclusive Facial',
    category: 'Facial Treatment',
    categoryKey: 'facial',
    price: 'Rp 300.000',
    priceNum: 300000,
    duration: '90 menit',
    procedure: 'Cleansing - Scrub - Comedo Extraction - Massage - Mask - Serum - Sunscreen',
    description: 'Facial menyeluruh untuk membersihkan komedo, menenangkan kulit, dan mengembalikan kesegaran alami wajah dengan pilihan serum sesuai kebutuhan kulit Anda.',
    options: ['White Pearl Radiance Facial', 'Collagen Radiance Facial', 'Soothing Radiance Facial', 'Vitamin C Radiance Facial'],
    isPopular: true,
    badge: 'Favorit',
    targetConcerns: ['Komedo', 'Kulit Kusam', 'Kering', 'Relaksasi']
  },
  {
    id: 'essence-infusion-facial',
    name: 'Essence Infusion Facial',
    category: 'Facial Treatment',
    categoryKey: 'facial',
    price: 'Rp 350.000',
    priceNum: 350000,
    duration: '90 menit',
    procedure: 'Cleansing - Scrub - Comedo Extraction - Massage - Mask - Serum - Omega Light - Sunscreen',
    description: 'Perawatan facial lengkap dikombinasikan dengan penetrasi essence mendalam serta terapi Omega Light untuk hasil kulit lebih kenyal, glowing, dan cerah merona.',
    options: ['Brightening Milky Essence', 'Purifying Essence', 'Calming Essence'],
    isPopular: true,
    targetConcerns: ['Kusam', 'Minyak Berlebih', 'Kemerahan']
  },
  {
    id: 'glowing-facial',
    name: 'Glowing Facial',
    category: 'Facial Treatment',
    categoryKey: 'facial',
    price: 'Rp 500.000',
    priceNum: 500000,
    duration: '90 menit',
    procedure: 'Cleansing - Scrub - Comedo Extraction - Massage - Mask - Serum - Sunscreen',
    description: 'Facial intensif yang diformulasikan khusus untuk memberikan efek glowing instan, menyamarkan pori-pori besar, dan meratakan tekstur kulit.',
    options: ['Flawless Skin', 'Anti Aging', 'Acne'],
    isPopular: true,
    badge: 'Best Seller',
    targetConcerns: ['Glowing', 'Penuaan Dini', 'Jerawat Aktif']
  },
  {
    id: 'new-luxury-gold-facial-24k',
    name: 'New Luxury Gold Facial 24K',
    category: 'Facial Treatment',
    categoryKey: 'facial',
    price: 'Rp 850.000',
    priceNum: 850000,
    duration: '90 menit',
    procedure: 'Cleansing - Scrub - Comedo Extraction - Massage - Totok Wajah - Gold Mask - Sunscreen',
    description: 'Perawatan mewah berbahan partikel emas murni 24K berkhasiat antioksidan tinggi, mengencangkan kulit, meremajakan sel kulit mati, dan memberi kilau awet muda.',
    isPopular: true,
    badge: 'Luxury Treatment',
    targetConcerns: ['Anti-Aging', 'Kerutan Halus', 'Kulit Kendur']
  },
  {
    id: 'korean-oxyglow-facial',
    name: 'Korean Oxyglow Facial with Oxygenceuticals',
    category: 'Facial Treatment',
    categoryKey: 'facial',
    price: 'Rp 850.000',
    priceNum: 850000,
    duration: '75 menit',
    technology: 'Oxygenceuticals Korea',
    description: 'Korean Oxygen Facial premium dengan serangkaian Oxygenceuticals asli Korea. Bermanfaat mencerahkan, menghaluskan, melembapkan, menutrisi serta menyamarkan garis halus.',
    isPopular: true,
    badge: 'Korean Glass Skin',
    targetConcerns: ['Kulit Kering', 'Garis Halus', 'Glass Skin']
  },
  {
    id: 'athena-elite-therapy',
    name: 'Athena Elite Therapy',
    category: 'Facial Treatment',
    categoryKey: 'facial',
    price: 'Rp 650.000',
    priceNum: 650000,
    duration: '60 menit',
    description: 'Mengangkat sel kulit mati secara lembut, mengurangi kerutan halus, menghaluskan kulit, merangsang pembentukan kolagen alami, dan efektif mengurangi hiperpigmentasi.',
    targetConcerns: ['Hiperpigmentasi', 'Kerutan', 'Tekstur Kasar']
  },
  {
    id: 'totok-wajah-masker',
    name: 'Totok Wajah + Masker',
    category: 'Facial Treatment',
    categoryKey: 'facial',
    price: 'Rp 150.000',
    priceNum: 150000,
    duration: '30 menit',
    procedure: 'Cleansing - Massage - Mask - Sunscreen',
    description: 'Stimulasi titik akupresur wajah untuk memperlancar sirkulasi darah, meredakan ketegangan otot wajah, mencerahkan rona wajah, dan memberi sensasi relaksasi mendalam.',
    targetConcerns: ['Lelah', 'Stres', 'Sirkulasi Darah']
  },
  {
    id: 'totok-wajah',
    name: 'Totok Wajah Express',
    category: 'Facial Treatment',
    categoryKey: 'facial',
    price: 'Rp 100.000',
    priceNum: 100000,
    duration: '20 menit',
    procedure: 'Cleansing - Massage Totok Wajah - Sunscreen',
    description: 'Perawatan totok wajah singkat untuk kesegaran instan di sela-sela kesibukan Anda.',
    targetConcerns: ['Relaksasi Cepat']
  },

  // --- OXYGENEO & GENEO (Page 3) ---
  {
    id: 'oxygeneo-by-pollogen',
    name: 'Oxygeneo by Pollogen',
    category: 'Oxygeneo & Pollogen',
    categoryKey: 'pollogen',
    price: 'Rp 1.000.000',
    priceNum: 1000000,
    technology: 'Pollogen Medical Geneo',
    duration: '60 menit',
    description: 'Super facial dengan alat medis khusus dari Pollogen yang mampu mengangkat sel kulit mati (eksfoliasi), menutrisi kulit secara mendalam, membersihkan pori-pori, dan melancarkan aliran darah wajah.',
    isPopular: true,
    badge: 'Super Facial',
    targetConcerns: ['Kusam', 'Pori-Pori Tersumbat', 'Sirkulasi Oksigen']
  },
  {
    id: 'oxypod-geneo-pollogen',
    name: 'Oxypod Geneo Pollogen',
    category: 'Oxygeneo & Pollogen',
    categoryKey: 'pollogen',
    price: 'Rp 1.500.000',
    priceNum: 1500000,
    technology: 'Pollogen Oxypod Series',
    duration: '60 - 75 menit',
    description: 'Super facial next level dengan kapsul Oxypod khusus dari Pollogen. Mengangkat sel kulit mati, menutrisi pori-pori terdalam, dan melancarkan aliran darah oksigenasi kulit.',
    options: ['Balance Series (untuk kulit berjerawat/berminyak)', 'Revive Series (untuk peremajaan kulit & elastisitas)'],
    badge: 'Next Level Facial',
    targetConcerns: ['Jerawat Bandel', 'Aging', 'Detoksifikasi']
  },

  // --- OMEGA LIGHT & PEELING (Page 3) ---
  {
    id: 'omega-light-skin-rejuvenating',
    name: 'Omega Light Skin Rejuvenating',
    category: 'Peeling & Omega Light',
    categoryKey: 'peeling-light',
    price: 'Rp 130.000',
    priceNum: 130000,
    duration: '30 menit',
    procedure: 'Cleansing - Treatment Omega Light - Masker',
    description: 'Terapi photo-biomodulation cahaya LED untuk merangsang fibroblas kolagen, mempercepat regenerasi sel kulit, dan mengembalikan kekencangan kulit.',
    targetConcerns: ['Kulit Lelah', 'Regenerasi Sel']
  },
  {
    id: 'omega-light-acne-stress',
    name: 'Omega Light Acne Stress Control',
    category: 'Peeling & Omega Light',
    categoryKey: 'peeling-light',
    price: 'Rp 250.000',
    priceNum: 250000,
    duration: '30 menit',
    procedure: 'Cleansing - Treatment Omega Light - Masker',
    description: 'Terapi gelombang cahaya biru-merah khusus untuk membunuh bakteri P. acnes, meredakan inflamasi jerawat meradang, dan menenangkan kulit kemerahan.',
    targetConcerns: ['Jerawat Meradang', 'Bakteri Jerawat', 'Kemerahan']
  },
  {
    id: 'peeling-acne',
    name: 'Peeling Acne',
    category: 'Peeling & Omega Light',
    categoryKey: 'peeling-light',
    price: 'Rp 300.000',
    priceNum: 300000,
    duration: '15 - 30 menit',
    procedure: 'Cleansing - Peeling Treatment',
    description: 'Eksfoliasi kimiawi medis untuk membersihkan sebum berlebih hingga ke dalam pori, mengeringkan jerawat aktif, dan memudarkan bekas noda jerawat.',
    targetConcerns: ['Jerawat', 'Komedo', 'Minyak']
  },
  {
    id: 'peeling-radiance',
    name: 'Peeling Radiance',
    category: 'Peeling & Omega Light',
    categoryKey: 'peeling-light',
    price: 'Rp 300.000',
    priceNum: 300000,
    duration: '15 - 30 menit',
    procedure: 'Cleansing - Peeling Treatment',
    description: 'Eksfoliasi lembut untuk mengikis lapisan kulit mati kusam, meratakan warna kulit tidak merata, dan memudarkan flek hitam ringan.',
    targetConcerns: ['Kulit Belang', 'Flek Ringan', 'Kusam']
  },
  {
    id: 'body-peeling',
    name: 'Body Peeling (Area Tubuh)',
    category: 'Peeling & Omega Light',
    categoryKey: 'peeling-light',
    price: 'Mulai Rp 300.000',
    priceNum: 300000,
    duration: '30 menit',
    description: 'Eksfoliasi untuk area tubuh seperti punggung, lipatan ketiak, atau leher agar kulit tubuh lebih halus, bersih dari jerawat punggung, dan cerah bebas daki.',
    targetConcerns: ['Jerawat Punggung', 'Lipatan Gelap']
  },

  // --- ROLLER THERAPY & MICRONEEDLE (Page 3 & Page 5) ---
  {
    id: 'roller-lifting-scar',
    name: 'Roller Lifting Scar',
    category: 'Roller & Microneedle',
    categoryKey: 'roller-scar',
    price: 'Rp 750.000',
    priceNum: 750000,
    procedure: 'Cleansing - Anestesi - Meso/Roller - Masker',
    description: 'Prosedur dermaroller/meso dengan memasukkan serum regeneratif untuk meratakan tekstur bopeng bekas jerawat (scar), merangsang serat kolagen baru, dan mengencangkan pori-pori.',
    targetConcerns: ['Bopeng Bekas Jerawat', 'Scar', 'Pori Besar']
  },
  {
    id: 'roller-dna-salmon',
    name: 'Roller DNA Salmon',
    category: 'Roller & Microneedle',
    categoryKey: 'roller-scar',
    price: 'Rp 750.000',
    priceNum: 750000,
    procedure: 'Cleansing - Anestesi - Meso/Roller DNA Salmon - Masker',
    description: 'Kombinasi roller microneedle dengan ekstrak polynucleotide DNA Salmon murni untuk memperbaiki skin barrier, menutrisi sel kulit rusak, dan memulihkan elastisitas.',
    isPopular: true,
    badge: 'Viral Treatment',
    targetConcerns: ['Skin Barrier Rusak', 'Pori Besar', 'Kulit Kering']
  },
  {
    id: 'roller-ha-glass-skin',
    name: 'Roller HA Glass Skin',
    category: 'Roller & Microneedle',
    categoryKey: 'roller-scar',
    price: 'Rp 750.000',
    priceNum: 750000,
    procedure: 'Cleansing - Anestesi - Meso/Roller Hyaluronic Acid - Masker',
    description: 'Injeksi mikro Hyaluronic Acid murni ke lapisan dermis untuk mengembalikan kelembapan maksimal kulit, efek glowing kenyal, dan menyamarkan garis halus.',
    targetConcerns: ['Kulit Dehidrasi', 'Garis Halus', 'Kusam']
  },
  {
    id: 'roller-acne',
    name: 'Roller Acne Treatment',
    category: 'Roller & Microneedle',
    categoryKey: 'roller-scar',
    price: 'Rp 750.000 /cc',
    priceNum: 750000,
    procedure: 'Cleansing - Anestesi - Meso/Roller Anti-Acne - Masker',
    description: 'Pemasukan serum anti-bakteri dan anti-inflamasi langsung ke sumber jerawat untuk menghentikan peradangan dan mencegah pembentukan bopeng baru.',
    targetConcerns: ['Jerawat Meradang', 'Pencegahan Bopeng']
  },
  {
    id: 'microneedle-voluderm',
    name: 'Microneedle Voluderm by Pollogen Legend',
    category: 'Roller & Microneedle',
    categoryKey: 'roller-scar',
    price: 'Rp 3.500.000',
    priceNum: 3500000,
    technology: 'Pollogen Legend Voluderm',
    description: 'Prosedur microneedle medis berbasis Radio Frequency berenergi tinggi yang bertujuan mengisi volume dan memberi efek plumping alami pada kulit wajah yang sudah kendur atau berkerut.',
    badge: 'Advanced Medical',
    targetConcerns: ['Kulit Kendur', 'Kerutan Dalam', 'Plumping']
  },
  {
    id: 'microneedle-trifractional',
    name: 'Microneedle Trifractional by Pollogen Legend',
    category: 'Roller & Microneedle',
    categoryKey: 'roller-scar',
    price: 'Rp 3.500.000',
    priceNum: 3500000,
    technology: 'Pollogen Legend Trifractional',
    description: 'Prosedur kecantikan fractional yang bertujuan mengembalikan tekstur kulit dan memicu sintesis kolagen masif. Ditujukan khusus untuk scar/bopeng menahun, pori-pori besar, ataupun stretchmark.',
    targetConcerns: ['Bopeng Berat', 'Stretchmark', 'Tekstur Rusak']
  },

  // --- SKINBOOSTER & INJEKSI (Page 4 & 6) ---
  {
    id: 'pearl-dna-salmon-booster',
    name: 'Pearl DNA Salmon Skinbooster',
    category: 'Skinbooster & Injeksi',
    categoryKey: 'skinbooster',
    price: 'Rp 1.000.000',
    priceNum: 1000000,
    duration: '90 menit',
    procedure: 'Cleansing - Anestesi - Skinbooster Micro-Injection - Masker',
    description: 'Skinbooster DNA Salmon berkualitas tinggi yang meregenerasi struktur kulit dari dalam, meningkatkan elastisitas, dan memberikan efek glowing cerah bercahaya.',
    isPopular: true,
    badge: 'Best Value Skinbooster',
    targetConcerns: ['Aging', 'Kusam', 'Skin Barrier', 'Kering']
  },
  {
    id: 'cellbooster-glow-lift-shape',
    name: 'Cellbooster (Glow / Lift / Shape)',
    category: 'Skinbooster & Injeksi',
    categoryKey: 'skinbooster',
    price: 'Rp 4.000.000 /vial',
    priceNum: 4000000,
    duration: '90 menit',
    procedure: 'Cleansing - Anestesi - Skinbooster - Masker',
    description: 'Swiss patented injectable skinbooster dengan asam hialuronat terstabilkan, asam amino, dan vitamin. Memberikan perbaikan instan pada kelembapan kulit, efek lifting, dan kontur wajah.',
    options: ['Cellbooster GLOW (kulit bercahaya & atasi hiperpigmentasi)', 'Cellbooster LIFT (mengencangkan & redakan garis halus)', 'Cellbooster SHAPE (mengurangi lemak lokal & perbaiki kontur)'],
    badge: 'Premium Swiss Quality',
    targetConcerns: ['Lifting', 'Kulit Kendur', 'Flek Berat']
  },
  {
    id: 'brightening-klardie-r',
    name: 'Brightening Klardie R+',
    category: 'Skinbooster & Injeksi',
    categoryKey: 'skinbooster',
    price: 'Rp 3.000.000 /3cc',
    priceNum: 3000000,
    duration: '90 menit',
    procedure: 'Cleansing - Anestesi - Skinbooster - Masker',
    description: 'Formulasi pencerah intensif Korea dengan peptide bio-aktif untuk mengatasi melasma, flek bandel, dan warna kulit kusam secara cepat dan aman.',
    targetConcerns: ['Melasma', 'Flek Hitam', 'Tone Kulit Gelap']
  },
  {
    id: 'exosome-booster',
    name: 'Exosome Booster',
    category: 'Skinbooster & Injeksi',
    categoryKey: 'skinbooster',
    price: 'Rp 2.500.000 /cc',
    priceNum: 2500000,
    duration: '90 menit',
    procedure: 'Cleansing - Anestesi - Skinbooster - Masker',
    description: 'Teknologi stem-cell exosome paling mutakhir di dunia estetika. Mengandung miliaran partikel nano aktif faktor pertumbuhan yang mempercepat perbaikan seluler dan peremajaan total.',
    badge: 'Next-Gen Regenerative',
    targetConcerns: ['Anti-Aging Menyeluruh', 'Scar', 'Kulit Sensitif']
  },
  {
    id: 'acne-cure-booster',
    name: 'Acne Cure Booster',
    category: 'Skinbooster & Injeksi',
    categoryKey: 'skinbooster',
    price: 'Rp 700.000 /cc',
    priceNum: 700000,
    duration: '90 menit',
    procedure: 'Cleansing - Anestesi - Skinbooster - Masker',
    description: 'Injeksi booster penuntas jerawat yang menekan kelenjar minyak berlebih, membunuh bakteri penyebab jerawat, dan meredakan peradangan kistik.',
    targetConcerns: ['Jerawat Parah', 'Kelenjar Minyak Berlebih']
  },
  {
    id: 'collagen-stimulator-aesplla',
    name: 'Collagen Stimulator with AESPLLA',
    category: 'Skinbooster & Injeksi',
    categoryKey: 'skinbooster',
    price: 'Rp 2.000.000 /cc',
    priceNum: 2000000,
    description: 'Membantu merangsang produksi kolagen alami tubuh secara bertahap dan tahan lama. Sangat bermanfaat untuk mengisi area wajah yang cekung/kosong, mengurangi masalah kantung mata, dan membuat kulit tampak plumpy awet muda.',
    targetConcerns: ['Kantung Mata Cekung', 'Pipi Cekung', 'Kehilangan Volume Wajah']
  },
  {
    id: 'prp-vampire-treatment',
    name: 'PRP (Platelet-Rich Plasma)',
    category: 'Skinbooster & Injeksi',
    categoryKey: 'skinbooster',
    price: 'Rp 1.000.000',
    priceNum: 1000000,
    duration: '75 menit',
    description: 'Perawatan alami menggunakan plasma darah sendiri yang kaya akan growth factor untuk meremajakan sel kulit, memudarkan bekas jerawat, serta merangsang pertumbuhan kolagen baru.',
    targetConcerns: ['Bekas Jerawat', 'Peremajaan Alami', 'Tekstur Kulit']
  },
  {
    id: 'botox-standard',
    name: 'Botox Allergan / Standard',
    category: 'Skinbooster & Injeksi',
    categoryKey: 'skinbooster',
    price: 'Rp 50.000 / unit',
    priceNum: 50000,
    description: 'Injeksi relaksasi otot untuk menyamarkan kerutan dinamis di dahi, kerutan sudut mata (crow’s feet), garis senyum, dan meniruskan rahang (masseter).',
    targetConcerns: ['Kerutan Dahi', 'Crow’s Feet', 'Tirus Rahang']
  },
  {
    id: 'botox-eropa',
    name: 'Botox Eropa Premium',
    category: 'Skinbooster & Injeksi',
    categoryKey: 'skinbooster',
    price: 'Rp 100.000 / unit',
    priceNum: 100000,
    description: 'Botox grade premium dari Eropa dengan presisi tinggi dan hasil relaksasi otot yang sangat natural tanpa rasa kaku.',
    badge: 'European Grade',
    targetConcerns: ['Kerutan Ekspresi', 'Rahang V-Shape']
  },

  // --- FACE CONTOURING & RF (Page 4) ---
  {
    id: 'rf-by-pollogen',
    name: 'RF (Radio Frequency) by Pollogen',
    category: 'Face Contouring & RF',
    categoryKey: 'contouring',
    price: 'Rp 350.000',
    priceNum: 350000,
    duration: '30 menit',
    procedure: 'Cleansing - RF - Masker',
    description: 'Prosedur kecantikan dengan gelombang radio frequency yang berfungsi untuk merangsang kolagen, mengencangkan kulit wajah, menyamarkan garis halus dan meniruskan wajah.',
    isPopular: true,
    targetConcerns: ['Kulit Kendur', 'Garis Halus', 'Pipi Chubby']
  },
  {
    id: 'rf-dma-pollogen-legend',
    name: 'RF & DMA by Pollogen Legend',
    category: 'Face Contouring & RF',
    categoryKey: 'contouring',
    price: 'Rp 950.000',
    priceNum: 950000,
    duration: '50 menit',
    procedure: 'Cleansing - RF - DMA (Dynamic Muscle Activation) - Masker',
    technology: 'Pollogen Legend Trilipo + DMA',
    description: 'Kombinasi canggih RF dan DMA (stimulasi otot dinamis) untuk merangsang kolagen, meniruskan wajah, merangsang otot wajah, serta mengencangkan kulit secara signifikan.',
    badge: 'Best Contouring',
    targetConcerns: ['Pipi Kendur', 'Rahang Kurang Tegas', 'Kerutan']
  },
  {
    id: 'rf-double-chin-neck',
    name: 'RF Double Chin + Neck by Pollogen Legend',
    category: 'Face Contouring & RF',
    categoryKey: 'contouring',
    price: 'Rp 600.000',
    priceNum: 600000,
    duration: '20 menit',
    description: 'Fokus pengencangan area dagu berlipat (double chin) dan leher untuk mengikis lemak lokal dan mempertegas jawline.',
    targetConcerns: ['Double Chin', 'Leher Kendur']
  },
  {
    id: 'rf-eyes-pollogen-legend',
    name: 'RF Eyes by Pollogen Legend',
    category: 'Face Contouring & RF',
    categoryKey: 'contouring',
    price: 'Rp 500.000',
    priceNum: 500000,
    duration: '20 menit',
    description: 'Pengencangan area sekitar mata untuk mengurangi kantung mata, mata panda, dan kerutan halus di sudut mata.',
    targetConcerns: ['Kantung Mata', 'Mata Panda', 'Kerutan Mata']
  },
  {
    id: 'rf-vshape-pollogen-legend',
    name: 'RF V-Shape by Pollogen Legend',
    category: 'Face Contouring & RF',
    categoryKey: 'contouring',
    price: 'Rp 500.000',
    priceNum: 500000,
    duration: '30 menit',
    description: 'Treatment kontur wajah terfokus untuk membentuk siluet wajah V-Shape yang ramping dan proporsional.',
    targetConcerns: ['Pipi Bulat', 'V-Shape']
  },

  // --- ULTRAFORMER III (Page 5) ---
  {
    id: 'ultraformer-full-face',
    name: 'Ultraformer III - Full Face',
    category: 'Ultraformer III (MMFU)',
    categoryKey: 'ultraformer',
    price: 'Rp 6.000.000',
    priceNum: 6000000,
    technology: 'Ultraformer III MMFU (HIFU Generasi Terbaru)',
    description: 'Tindakan kecantikan non-bedah untuk mengencangkan dan mengangkat kulit wajah secara maksimal, mengurangi kerutan, dan merangsang kolagen dengan teknologi Micro & Macro Focused Ultrasound.',
    badge: 'Golden Standard Lifting',
    isPopular: true,
    targetConcerns: ['Penuaan Kulit', 'Kendur Menyeluruh', 'Non-Surgical Facelift']
  },
  {
    id: 'ultraformer-v-shape-lower',
    name: 'Ultraformer III - V-Shape (Lower Face)',
    category: 'Ultraformer III (MMFU)',
    categoryKey: 'ultraformer',
    price: 'Rp 4.000.000',
    priceNum: 4000000,
    description: 'Fokus lifting pada area pipi bawah, jawline, dan garis tawa untuk menciptakan profil wajah tirus kencang.',
    targetConcerns: ['Pipi Kendur', 'Jowls', 'Garis Senyum']
  },
  {
    id: 'ultraformer-upper-face',
    name: 'Ultraformer III - Upper Face (Dahi & Area Mata)',
    category: 'Ultraformer III (MMFU)',
    categoryKey: 'ultraformer',
    price: 'Rp 2.000.000',
    priceNum: 2000000,
    description: 'Mengangkat kelopak mata yang turun, menyamarkan kerutan dahi, dan meremajakan area seputar mata.',
    targetConcerns: ['Dahi Kerut', 'Alis Turun']
  },
  {
    id: 'ultraformer-full-foxy-eyes',
    name: 'Ultraformer III - Full Foxy Eyes',
    category: 'Ultraformer III (MMFU)',
    categoryKey: 'ultraformer',
    price: 'Rp 2.000.000',
    priceNum: 2000000,
    description: 'Teknik ultrasound khusus untuk mengangkat sudut mata bagian luar guna menghasilkan efek mata foxy lifted yang segar.',
    targetConcerns: ['Foxy Eyes', 'Mata Mengantuk']
  },
  {
    id: 'ultraformer-eyebrow-lift',
    name: 'Ultraformer III - Eyebrow Lift',
    category: 'Ultraformer III (MMFU)',
    categoryKey: 'ultraformer',
    price: 'Rp 1.000.000',
    priceNum: 1000000,
    description: 'Mengangkat alis secara presisi tanpa sayatan atau jarum suntik.',
    targetConcerns: ['Alis Turun']
  },
  {
    id: 'ultraformer-eyebag-reducer',
    name: 'Ultraformer III - Eyebag Reducer',
    category: 'Ultraformer III (MMFU)',
    categoryKey: 'ultraformer',
    price: 'Rp 1.500.000',
    priceNum: 1500000,
    description: 'Mengencangkan jaringan penopang kantung mata bawah dan mengurangi tampilan bengkak/kendur.',
    targetConcerns: ['Kantung Mata Besar']
  },
  {
    id: 'ultraformer-smilelines-reducer',
    name: 'Ultraformer III - Smilelines Reducer',
    category: 'Ultraformer III (MMFU)',
    categoryKey: 'ultraformer',
    price: 'Rp 1.000.000',
    priceNum: 1000000,
    description: 'Mengurangi kedalaman garis senyum (nasolabial fold) agar wajah tampak lebih muda dan berenergi.',
    targetConcerns: ['Garis Senyum Dalam']
  },
  {
    id: 'ultraformer-rejuve-neck',
    name: 'Ultraformer III - Rejuve Neck',
    category: 'Ultraformer III (MMFU)',
    categoryKey: 'ultraformer',
    price: 'Rp 3.000.000',
    priceNum: 3000000,
    description: 'Menghaluskan kerutan kalung di leher dan mengencangkan kulit leher yang mulai kendor.',
    targetConcerns: ['Leher Berkerut', 'Kulit Kendur']
  },
  {
    id: 'ultraformer-double-chin-reducer',
    name: 'Ultraformer III - Double Chin Reducer',
    category: 'Ultraformer III (MMFU)',
    categoryKey: 'ultraformer',
    price: 'Rp 1.500.000',
    priceNum: 1500000,
    description: 'Penghancuran lemak submental sekaligus pengencangan kulit dagu ganda dengan cartridge khusus.',
    targetConcerns: ['Dagu Berlipat']
  },
  {
    id: 'ultraformer-body',
    name: 'Ultraformer III - Body Lifting (Lengan / Braline / Paha)',
    category: 'Ultraformer III (MMFU)',
    categoryKey: 'ultraformer',
    price: 'Mulai Rp 3.000.000',
    priceNum: 3000000,
    options: ['Breast Lifting (Rp 3.000.000)', 'Braline Fat (Rp 3.000.000)', 'Lengan Atas (Rp 5.000.000)', 'Paha (Rp 5.000.000)'],
    description: 'Macro focused ultrasound bertenaga tinggi untuk membakar lemak tubuh yang membandel dan mengencangkan kulit tubuh.',
    targetConcerns: ['Gelambir Lengan', 'Lemak Bra', 'Paha Lembek']
  },

  // --- LASER & IPL (Page 6) ---
  {
    id: 'pico-laser-flek',
    name: 'Pico Laser (Flek & Melasma)',
    category: 'Laser & IPL',
    categoryKey: 'laser-ipl',
    price: 'Rp 800.000',
    priceNum: 800000,
    duration: '45 menit',
    procedure: 'Cleansing - Laser Gel - Pico Laser - Masker - Sunscreen',
    technology: 'Picosecond Laser Technology',
    description: 'Laser berkecepatan picodetik yang memecah partikel pigmen flek hitam dan melasma menjadi partikel debu halus tanpa merusak jaringan kulit sekitarnya.',
    isPopular: true,
    badge: 'Laser Unggulan',
    targetConcerns: ['Flek Hitam', 'Melasma', 'Tanda Lahir', 'Noda Hitam']
  },
  {
    id: 'black-rejuve-laser-blackdoll',
    name: 'Black Rejuve Laser / Blackdoll',
    category: 'Laser & IPL',
    categoryKey: 'laser-ipl',
    price: 'Rp 800.000',
    priceNum: 800000,
    duration: '45 menit',
    procedure: 'Cleansing - Carbon Cream - Laser Shoot - Masker - Sunscreen',
    description: 'Laser peremajaan kulit menggunakan lotion karbon medis. Membersihkan komedo dan minyak sampai ke dasar pori, mengecilkan pori-pori, dan membuat kulit tampak glowing bersih seketika.',
    isPopular: true,
    badge: 'Best Seller',
    targetConcerns: ['Pori Besar', 'Kulit Berminyak', 'Kusam']
  },
  {
    id: 'ipl-rejuv',
    name: 'IPL Rejuvenation',
    category: 'Laser & IPL',
    categoryKey: 'laser-ipl',
    price: 'Rp 500.000',
    priceNum: 500000,
    duration: '45 menit',
    procedure: 'Cleansing - Laser Gel - IPL - Masker - Sunscreen',
    description: 'Prosedur cahaya intensif terukur untuk peremajaan kulit, merangsang kolagen, mengencangkan kulit halus, dan memulihkan vitalitas rona wajah.',
    targetConcerns: ['Peremajaan', 'Mencerahkan']
  },
  {
    id: 'ipl-acne',
    name: 'IPL Acne',
    category: 'Laser & IPL',
    categoryKey: 'laser-ipl',
    price: 'Rp 500.000',
    priceNum: 500000,
    duration: '45 menit',
    procedure: 'Cleansing - Laser Gel - IPL - Masker - Sunscreen',
    description: 'Gelombang cahaya khusus yang membunuh bakteri P. acnes, meredakan jerawat meradang, dan mengendalikan produksi minyak berlebih.',
    targetConcerns: ['Jerawat Meradang', 'Minyak Berlebih']
  },
  {
    id: 'ipl-flek',
    name: 'IPL Flek & Pigmentasi',
    category: 'Laser & IPL',
    categoryKey: 'laser-ipl',
    price: 'Rp 500.000',
    priceNum: 500000,
    duration: '45 menit',
    description: 'Menargetkan pigmen melanin abnormal untuk memudarkan bintik hitam, noda bekas jerawat, dan meratakan warna kulit.',
    targetConcerns: ['Flek Ringan', 'Bintik Hitam']
  },
  {
    id: 'ipl-telangiectasia',
    name: 'IPL Telangi (Urat Merah)',
    category: 'Laser & IPL',
    categoryKey: 'laser-ipl',
    price: 'Rp 500.000',
    priceNum: 500000,
    duration: '45 menit',
    description: 'Menyasar pembuluh darah kapiler halus (spider veins) yang terlihat di permukaan kulit wajah agar memudar secara bertahap.',
    targetConcerns: ['Spider Veins', 'Urat Merah di Wajah']
  },
  {
    id: 'ipl-ketiak',
    name: 'IPL Ketiak (Underarm Brightening)',
    category: 'Laser & IPL',
    categoryKey: 'laser-ipl',
    price: 'Rp 500.000',
    priceNum: 500000,
    description: 'Mencerahkan area lipatan ketiak yang gelap sekaligus menghambat pertumbuhan folikel bulu baru.',
    targetConcerns: ['Ketiak Hitam', 'Bulu Ketiak']
  },
  {
    id: 'tattoo-removal-laser',
    name: 'Tattoo Removal Laser',
    category: 'Laser & IPL',
    categoryKey: 'laser-ipl',
    price: 'Rp 100.000 /cm',
    priceNum: 100000,
    description: 'Laser medis khusus penghapus pigmen tato permanen dengan minimal rasa sakit dan hasil bertahap yang bersih.',
    targetConcerns: ['Hapus Tato']
  },

  // --- HAIR REMOVAL (Page 6) ---
  {
    id: 'hair-removal-ketiak',
    name: 'Hair Removal Ketiak (Underarm)',
    category: 'Hair Removal',
    categoryKey: 'hair-removal',
    price: 'Rp 500.000',
    priceNum: 500000,
    duration: '30 menit',
    procedure: 'Cleansing - Laser Gel - Laser Hair Removal',
    description: 'Menghilangkan bulu ketiak secara permanen tanpa rasa sakit, membuat kulit ketiak lebih mulus dan bebas bau tak sedap.',
    isPopular: true,
    targetConcerns: ['Bulu Ketiak', 'Chicken Skin']
  },
  {
    id: 'hair-removal-tangan',
    name: 'Hair Removal Tangan (Arms)',
    category: 'Hair Removal',
    categoryKey: 'hair-removal',
    price: 'Rp 500.000',
    priceNum: 500000,
    duration: '30 menit',
    description: 'Perawatan laser penghilang bulu halus maupun tebal pada area lengan tangan secara menyeluruh.',
    targetConcerns: ['Bulu Lengan']
  },
  {
    id: 'hair-removal-kaki',
    name: 'Hair Removal Kaki (Legs)',
    category: 'Hair Removal',
    categoryKey: 'hair-removal',
    price: 'Rp 500.000',
    priceNum: 500000,
    duration: '40 menit',
    description: 'Menghilangkan bulu kaki hingga ke akar rambut sehingga kulit kaki terasa lebih mulus dan lembut.',
    targetConcerns: ['Bulu Kaki']
  },
  {
    id: 'hair-removal-brazilian',
    name: 'Hair Removal Brazilian',
    category: 'Hair Removal',
    categoryKey: 'hair-removal',
    price: 'Rp 350.000',
    priceNum: 350000,
    duration: '30 menit',
    description: 'Perawatan higienis area sensitif dengan privasi terjamin, dikerjakan terapis profesional dan teliti.',
    targetConcerns: ['Kebersihan Intim']
  },
  {
    id: 'paket-5x-hair-removal',
    name: 'Paket 5x Hair Removal Hemat',
    category: 'Hair Removal',
    categoryKey: 'hair-removal',
    price: 'Rp 1.500.000',
    priceNum: 1500000,
    badge: 'Paket Hemat Diskon',
    description: 'Paket 5 sesi perawatan hair removal untuk hasil bebas bulu permanen dengan harga yang jauh lebih hemat.',
    targetConcerns: ['Perawatan Jangka Panjang']
  },
  {
    id: 'paket-5x-brightening-laser',
    name: 'Paket 5x Brightening Laser + FREE IPL Hair Removal',
    category: 'Hair Removal',
    categoryKey: 'hair-removal',
    price: 'Rp 2.000.000',
    priceNum: 2000000,
    badge: 'Special Promo + Free Gift',
    isPopular: true,
    description: 'Paket bundling eksklusif 5 sesi laser pencerah wajah plus BONUS GRATIS IPL Hair Removal. Solusi lengkap kulit cerah dan mulus bebas bulu!',
    targetConcerns: ['Promo Spesial', 'Pencerah Wajah']
  },

  // --- BODY CONTOURING & CLATUU ALPHA (Page 7) ---
  {
    id: 'clatuu-alpha-fat-freezing',
    name: 'CLATUU ALPHA (Fat Freezing / Cryolipolysis)',
    category: 'Body Contouring & Clatuu',
    categoryKey: 'body-slimming',
    price: 'Rp 3.000.000 /cup',
    priceNum: 3000000,
    technology: 'CLATUU Alpha 360 Surround Cooling',
    description: 'Tindakan medis non-bedah untuk mengurangi timbunan lemak berlebih dengan cara membekukan sel lemak hingga mati (apoptosis) dan dibuang secara alami melalui proses metabolisme tubuh.',
    badge: 'Fat Freezing Medis',
    isPopular: true,
    targetConcerns: ['Lemak Perut', 'Lemak Paha', 'Lemak Pinggang']
  },
  {
    id: 'rf-dma-abdomen',
    name: 'RF & DMA Abdomen (Perut Buncit)',
    category: 'Body Contouring & Clatuu',
    categoryKey: 'body-slimming',
    price: 'Rp 1.200.000',
    priceNum: 1200000,
    duration: '30 - 45 menit',
    description: 'Pengencangan dinding perut yang kendur (misal pasca melahirkan) sekaligus pembakaran lemak visceral ringan dengan teknologi Pollogen Legend.',
    targetConcerns: ['Perut Kendur', 'Perut Buncit']
  },
  {
    id: 'rf-dma-paha',
    name: 'RF & DMA Paha (Full Thigh)',
    category: 'Body Contouring & Clatuu',
    categoryKey: 'body-slimming',
    price: 'Rp 1.500.000',
    priceNum: 1500000,
    duration: '40 menit',
    description: 'Mengencangkan kulit paha, menyamarkan selulit, dan memadatkan jaringan otot paha.',
    options: ['RF & DMA Paha Depan (20 menit - Rp 800.000)', 'RF & DMA Paha Belakang (20 menit - Rp 800.000)'],
    targetConcerns: ['Selulit', 'Paha Besar']
  },
  {
    id: 'rf-dma-pantat',
    name: 'RF & DMA Pantat (Buttock Lifting)',
    category: 'Body Contouring & Clatuu',
    categoryKey: 'body-slimming',
    price: 'Rp 800.000',
    priceNum: 800000,
    duration: '30 menit',
    description: 'Mengangkat area bokong yang turun dan memperbaiki elastisitas jaringan kulit.',
    targetConcerns: ['Bokong Kendur']
  },
  {
    id: 'rf-dma-lengan',
    name: 'RF & DMA Lengan (Arms Firming)',
    category: 'Body Contouring & Clatuu',
    categoryKey: 'body-slimming',
    price: 'Rp 800.000',
    priceNum: 800000,
    duration: '30 menit',
    description: 'Mengencangkan lengan yang bergelambir dan merangsang serabut kolagen baru.',
    targetConcerns: ['Lengan Bergelambir']
  },
  {
    id: 'rf-bra-fold-back',
    name: 'RF Bra Fold & Back Flank',
    category: 'Body Contouring & Clatuu',
    categoryKey: 'body-slimming',
    price: 'Rp 850.000',
    priceNum: 850000,
    duration: '10 - 15 menit',
    description: 'Mengurangi lipatan lemak di area tali bra punggung samping.',
    targetConcerns: ['Lemak Bra Belakang']
  },
  {
    id: 'rf-mata-paket-3x',
    name: 'Paket 3x RF Mata Hemat',
    category: 'Body Contouring & Clatuu',
    categoryKey: 'body-slimming',
    price: 'Rp 1.000.000',
    priceNum: 1000000,
    badge: 'Hemat Rp 500rb',
    description: 'Paket 3 kali perawatan RF mata untuk hasil maksimal memudarkan kantung mata dan mata lelah.',
    targetConcerns: ['Kantung Mata Kronis']
  },

  // --- CAUTER & THREADLIFT (Page 4 & 5) ---
  {
    id: 'cauter-full-face',
    name: 'Cauter Full Face',
    category: 'Cauter & Threadlift',
    categoryKey: 'cauter-thread',
    price: 'Rp 500.000',
    priceNum: 500000,
    description: 'Prosedur elektrokauter medis untuk mematikan dan menghilangkan jaringan yang timbul di permukaan kulit wajah seperti milia, kutil (veruka), skin tag, dan keratosis seboroik.',
    isPopular: true,
    badge: 'Sangat Populer',
    targetConcerns: ['Milia', 'Kutil Wajah', 'Skin Tag', 'Bintik Timbul']
  },
  {
    id: 'cauter-leher',
    name: 'Cauter Leher',
    category: 'Cauter & Threadlift',
    categoryKey: 'cauter-thread',
    price: 'Rp 500.000',
    priceNum: 500000,
    description: 'Pembersihan bintik timbul atau skin tag pada seluruh area leher agar kulit kembali halus mulus.',
    targetConcerns: ['Skin Tag Leher', 'Bintik Leher']
  },
  {
    id: 'cauter-per-titik',
    name: 'Cauter Per Titik (Satuan)',
    category: 'Cauter & Threadlift',
    categoryKey: 'cauter-thread',
    price: 'Mulai Rp 50.000 / titik',
    priceNum: 50000,
    options: ['Kecil: Rp 50.000 / titik', 'Sedang: Rp 150.000 / titik', 'Besar: Rp 300.000 / titik'],
    description: 'Penghilangan milia, kutil, atau tahi lalat timbul yang dihitung satuan sesuai ukuran.',
    targetConcerns: ['Milia Satuan', 'Kutil Tunggal']
  },
  {
    id: 'mono-threadlift',
    name: 'Mono Threadlift (Tanam Benang Rejuv)',
    category: 'Cauter & Threadlift',
    categoryKey: 'cauter-thread',
    price: 'Rp 100.000 / benang',
    priceNum: 100000,
    duration: '60 menit',
    procedure: 'Cleansing – Anestesi – Thread lift',
    description: 'Tanam benang PDO halus yang memicu kolagenogenesis, memperbaiki elastisitas kulit yang kendur, dan meremajakan tekstur kulit.',
    targetConcerns: ['Kulit Kendur', 'Kolagen Alami']
  },
  {
    id: 'premium-molding-threadlift',
    name: 'Premium Molding Threadlift (Tarik Benang V-Shape)',
    category: 'Cauter & Threadlift',
    categoryKey: 'cauter-thread',
    price: 'Rp 1.000.000 / benang',
    priceNum: 1000000,
    duration: '60 menit',
    procedure: 'Cleansing – Anestesi – Thread lift',
    description: 'Benang gerigi molding berdaya tarik tinggi untuk mengangkat pipi kendur, menegaskan garis rahang, dan membentuk wajah tirus V-Shape secara instan.',
    badge: 'Instant Lifting',
    targetConcerns: ['Pipi Kendur Parah', 'Instant Facelift']
  }
];
