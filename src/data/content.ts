/**
 * ============================================================================
 * PUSAT KONTEN SITUS — SEMUA TEKS ADA DI FILE INI
 * ============================================================================
 * Untuk mengubah tulisan yang tampil di website, cukup edit nilai di bawah.
 * Teks dengan tag HTML (mis. <br />, <strong>) akan dirender sebagai HTML.
 * Tip: gunakan pencarian (Ctrl+F) untuk langsung menemukan bagian yang dicari.
 * ============================================================================
 */

import { href } from '../utils/path';

/* -------------------------------------------------------------------------- */
/* 1. IDENTITAS & KONTAK PERUSAHAAN                                           */
/* -------------------------------------------------------------------------- */
export const company = {
  name: 'PT. Rangrang Volar Sinergi',
  description:
    'PT. Rangrang Volar Sinergi menyediakan jasa pemasangan kabel jaringan komputer, fiber optic, CCTV, access control, instalasi listrik, dan pembangunan data center.',
  tagline: 'INFRASTRUCTURE · SECURITY · DATACENTER',
  contact: {
    // Boleh pakai tanda backtick (`) lalu tekan Enter untuk memotong baris.
    address: 'Jl. Puri Kartika Baru No.18\nSudimara Selatan, Ciledug\nKota Tangerang, Banten 15151',
    phone: '021-7329074',
    fax: '021-7329074',
    email: 'info@rangvolar.com',
    hours: 'Senin–Jumat, 08.00–17.00 WIB',
    hoursExtra: 'Sabtu: sesuai jadwal proyek',
  },
};

/* -------------------------------------------------------------------------- */
/* 2. NAVIGASI                                                                 */
/* -------------------------------------------------------------------------- */
export const nav = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/team', label: 'Team' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
  // MENU TEMPORER: hapus baris ini setelah tidak diperlukan.
  { href: '/mockups/index.html', label: 'Opsi Desain', newTab: true },
];

export const header = {
  ctaLabel: 'Konsultasi Gratis',
  menuLabel: 'Buka menu',
};

/* -------------------------------------------------------------------------- */
/* 3. HALAMAN HOME                                                             */
/* -------------------------------------------------------------------------- */
export const home = {
  hero: {
    eyebrow: 'INFRASTRUCTURE.SECURITY.DATACENTER',
    titleHtml: 'Membangun <span class="accent">Infrastruktur Digital</span> Anda',
    description:
      'PT. Rangrang Volar Sinergi menghadirkan solusi pembangunan dan pemasangan infrastruktur jaringan komputer, fiber optic, sistem keamanan, hingga data center yang kokoh, aman, dan siap mendukung operasional bisnis Anda.',
    ctaPrimary: 'Lihat Layanan Kami',
    ctaSecondary: 'Konsultasi Gratis',
  },
  ticker: [
    'STRUCTURED CABLING',
    'FIBER OPTIC',
    'CCTV & ACCESS CONTROL',
    'INSTALASI LISTRIK & UPS',
    'DATA CENTER',
  ],
  services: {
    eyebrow: '// LAYANAN KAMI',
    titleHtml: 'Satu Mitra untuk Semua<br />Kebutuhan Infrastruktur',
    description:
      'Kami menangani setiap tahap pengerjaan — dari perencanaan, instalasi, integrasi, hingga dokumentasi akhir.',
  },
  why: {
    eyebrow: '// MENGAPA MEMILIH KAMI',
    title: 'Partner yang Andal untuk Setiap Proyek',
    descriptionHtml:
      'Didukung oleh <strong>sumber daya manusia yang memadai</strong> dan pengalaman kerja yang luas di lapangan, kami memastikan setiap instalasi dikerjakan dengan rapi, aman, dan siap digunakan untuk jangka panjang.',
    points: [
      'Tim teknisi berpengalaman di bidang cabling, fiber optic, dan data center',
      'Pengerjaan sesuai standar dan ketepatan waktu yang disepakati',
      'Dokumentasi dan labeling yang rapi untuk kemudahan perawatan',
      'Pendampingan dari perencanaan hingga serah terima proyek',
    ],
    chipValue: '100%',
    chipTextHtml: 'Komitmen pada kualitas<br />setiap pengerjaan',
    cta: 'Kenali Kami Lebih Lanjut',
  },
  portfolio: {
    eyebrow: '// PORTOFOLIO',
    title: 'Hasil Karya di Lapangan',
    description:
      'Dokumentasi sebagian proyek yang telah kami selesaikan untuk berbagai sektor industri.',
    cta: 'Lihat Semua Proyek',
  },
};

/* -------------------------------------------------------------------------- */
/* 4. HALAMAN ABOUT                                                            */
/* -------------------------------------------------------------------------- */
export const about = {
  seoTitle: 'Tentang Kami — PT. Rangrang Volar Sinergi',
  seoDescription:
    'Profil PT. Rangrang Volar Sinergi, mitra pembangunan dan pemasangan infrastruktur jaringan komputer, fiber optic, dan data center.',
  hero: {
    eyebrow: '// TENTANG KAMI',
    title: 'Tentang PT. Rangrang Volar Sinergi',
    description:
      'Kami adalah mitra terpercaya dalam pembangunan dan pemasangan infrastruktur jaringan komputer, sistem keamanan, serta integrasi ruang data center.',
    current: 'About',
  },
  profile: {
    eyebrow: '// PROFIL PERUSAHAAN',
    title: 'Membangun Fondasi Digital yang Andal',
    paragraphsHtml: [
      'PT. Rangrang Volar Sinergi bergerak di bidang pekerjaan pembangunan dan pemasangan infrastruktur jaringan komputer. Kami menangani kebutuhan konektivitas dan keamanan fisik mulai dari <strong>Structured Cabling System</strong>, jaringan fiber optic di dalam maupun di luar ruangan, pemasangan CCTV dan access control, instalasi listrik serta panel dan UPS, hingga manajemen dan integrasi pembangunan ruang data center.',
      'Didukung oleh sumber daya manusia yang memadai dan pengalaman kerja yang luas di lapangan, kami berkomitmen mengerjakan setiap proyek dengan standar kualitas, ketepatan waktu, dan keselamatan kerja yang tinggi. Setiap instalasi dirancang agar mudah dipelihara, scalable, dan siap mengikuti perkembangan teknologi.',
    ],
  },
  visionMission: {
    eyebrow: '// VISI & MISI',
    title: 'Arah dan Komitmen Kami',
    description: 'Landasan yang memandu setiap pekerjaan yang kami lakukan.',
    visionLabel: 'Visi',
    vision: '[ISI: Visi resmi perusahaan — silakan ganti dengan pernyataan visi yang telah disetujui.]',
    missionLabel: 'Misi',
    mission: '[ISI: Misi resmi perusahaan — silakan ganti dengan pernyataan misi yang telah disetujui.]',
  },
  values: {
    eyebrow: '// NILAI PERUSAHAAN',
    title: 'Nilai yang Kami Junjung Tinggi',
    description: 'Prinsip yang menjadi pedoman dalam setiap proses pengerjaan dan pelayanan kami.',
  },
};

/* -------------------------------------------------------------------------- */
/* 5. HALAMAN TEAM                                                             */
/* -------------------------------------------------------------------------- */
export const teamPage = {
  seoTitle: 'Tim Kami — PT. Rangrang Volar Sinergi',
  seoDescription:
    'Tim teknisi dan tenaga ahli PT. Rangrang Volar Sinergi di bidang jaringan, fiber optic, keamanan, kelistrikan, dan data center.',
  hero: {
    eyebrow: '// TIM KAMI',
    title: 'Orang di Balik Setiap Instalasi',
    description:
      'Kami memadukan keahlian di bidang cabling, fiber optic, sistem keamanan, kelistrikan, dan data center untuk memastikan setiap pekerjaan selesai dengan baik.',
    current: 'Team',
  },
  intro: {
    eyebrow: '// SUMBER DAYA MANUSIA',
    title: 'Tim yang Berpengalaman di Lapangan',
    description:
      'Data nama dan foto berikut masih berupa placeholder. Silakan ganti dengan data tim sebenarnya sebelum publikasi.',
  },
  cta: {
    title: 'Butuh Tenaga Ahli untuk Proyek Anda?',
    description:
      'Tim kami siap terjun ke lokasi untuk membantu perencanaan, pemasangan, dan integrasi sistem infrastruktur Anda.',
    button: 'Hubungi Tim Kami',
  },
  finalCta: {
    titleHtml: 'Mari Bekerja Sama Membangun <span class="accent">Infrastruktur yang Andal</span>',
    description:
      'Ceritakan lingkup pekerjaan Anda, dan kami akan menyiapkan tim yang sesuai dengan kebutuhan proyek.',
    button: 'Konsultasi Proyek',
  },
};

/* -------------------------------------------------------------------------- */
/* 6. HALAMAN SERVICES                                                         */
/* -------------------------------------------------------------------------- */
export const servicesPage = {
  seoTitle: 'Layanan — PT. Rangrang Volar Sinergi',
  seoDescription:
    'Layanan pemasangan kabel jaringan, fiber optic, CCTV dan access control, instalasi listrik serta UPS, dan pembangunan data center.',
  hero: {
    eyebrow: '// LAYANAN KAMI',
    title: 'Solusi Lengkap untuk Infrastruktur Anda',
    description:
      'Dari sistem kabel terstruktur hingga integrasi data center, kami menangani setiap tahap pengerjaan dengan standar kualitas dan ketepatan waktu.',
    current: 'Services',
  },
  steps: [
    { title: 'Konsultasi', description: 'Mendiskusikan kebutuhan, kondisi lokasi, dan lingkup pekerjaan yang diinginkan.' },
    { title: 'Perencanaan', description: 'Menyiapkan desain, material, jadwal, dan estimasi biaya sesuai kebutuhan.' },
    { title: 'Pemasangan', description: 'Melaksanakan instalasi lapangan dengan mengutamakan kerapian dan keselamatan.' },
    { title: 'Serah Terima', description: 'Pengujian, dokumentasi as-built, dan pendampingan hingga sistem siap digunakan.' },
  ],
  process: {
    eyebrow: '// ALUR KERJA',
    title: 'Proses Pengerjaan yang Terarah',
    description: 'Setiap proyek kami jalani melalui tahapan yang jelas agar hasil sesuai dengan harapan.',
  },
  cta: {
    titleHtml: 'Diskusikan Kebutuhan <span class="accent">Layanan Anda</span>',
    description: 'Kami siap membantu menentukan solusi yang paling sesuai dengan kebutuhan dan kondisi lapangan Anda.',
    button: 'Minta Penawaran',
  },
};

/* -------------------------------------------------------------------------- */
/* 7. HALAMAN PORTFOLIO                                                        */
/* -------------------------------------------------------------------------- */
export const portfolioPage = {
  seoTitle: 'Portofolio — PT. Rangrang Volar Sinergi',
  seoDescription:
    'Dokumentasi proyek pemasangan jaringan, fiber optic, CCTV, instalasi listrik, dan data center yang telah dikerjakan PT. Rangrang Volar Sinergi.',
  hero: {
    eyebrow: '// PORTOFOLIO',
    title: 'Proyek yang Telah Kami Kerjakan',
    description:
      'Setiap proyek adalah bukti komitmen kami dalam menghadirkan infrastruktur yang andal. Berikut adalah sebagian dari pekerjaan yang telah kami selesaikan.',
    current: 'Portfolio',
  },
  intro: {
    eyebrow: '// DOKUMENTASI PROYEK',
    title: 'Hasil Karya di Berbagai Sektor',
    description:
      'Judul, kategori, dan tahun pada kartu berikut masih berupa contoh. Silakan ganti dengan data proyek sebenarnya dan foto dokumentasi lapangan.',
  },
  cta: {
    titleHtml: 'Proyek Anda Berikutnya Bisa Menjadi <span class="accent">Bagian dari Karya Kami</span>',
    description: 'Hubungi kami untuk mendiskusikan kebutuhan proyek Anda dan mendapatkan penawaran yang sesuai.',
    button: 'Mulai Diskusi',
  },
};

/* -------------------------------------------------------------------------- */
/* 8. HALAMAN CONTACT                                                          */
/* -------------------------------------------------------------------------- */
export const contactPage = {
  seoTitle: 'Kontak — PT. Rangrang Volar Sinergi',
  seoDescription:
    'Hubungi PT. Rangrang Volar Sinergi untuk konsultasi dan penawaran pemasangan infrastruktur jaringan, fiber optic, CCTV, dan data center.',
  hero: {
    eyebrow: '// HUBUNGI KAMI',
    title: 'Mari Diskusikan Proyek Anda',
    description:
      'Ceritakan kebutuhan infrastruktur Anda. Tim kami siap memberikan konsultasi dan penawaran sesuai lingkup pekerjaan.',
    current: 'Contact',
  },
  intro: {
    eyebrow: '// INFORMASI KONTAK',
    title: 'Kami Siap Membantu',
    description:
      'Untuk konsultasi awal, silakan hubungi kami melalui formulir atau kanal kontak berikut.',
    labels: {
      address: 'Alamat Kantor',
      phone: 'Telepon / Fax',
      email: 'Email',
      hours: 'Jam Operasional',
    },
  },
  form: {
    successMessage: 'Terima kasih! Pesan Anda telah tercatat. Tim kami akan menghubungi Anda segera.',
    fields: {
      nama: { label: 'Nama Lengkap', placeholder: 'Nama Anda', error: 'Nama wajib diisi.' },
      perusahaan: { label: 'Perusahaan / Instansi', placeholder: 'Nama perusahaan', error: 'Perusahaan wajib diisi.' },
      email: { label: 'Email', placeholder: 'nama@perusahaan.com', error: 'Alamat email tidak valid.' },
      telepon: { label: 'Telepon / WhatsApp', placeholder: '08xxxxxxxxxx', error: 'Nomor telepon wajib diisi.' },
      layanan: { label: 'Jenis Layanan', placeholder: 'Pilih layanan', error: 'Silakan pilih jenis layanan.' },
      pesan: {
        label: 'Pesan / Deskripsi Kebutuhan',
        placeholder: 'Ceritakan lingkup pekerjaan, lokasi, dan kebutuhan Anda...',
        error: 'Pesan wajib diisi.',
      },
    },
    otherOption: 'Lainnya / konsultasi umum',
    submitLabel: 'Kirim Pesan',
    note: 'Dengan mengirim formulir ini, Anda setuju untuk dihubungi oleh tim kami terkait penawaran layanan.',
  },
};

/* -------------------------------------------------------------------------- */
/* 9. FOOTER, STATISTIK & CTA                                                  */
/* -------------------------------------------------------------------------- */
export const footerContent = {
  description:
    'PT. Rangrang Volar Sinergi bergerak di bidang pembangunan dan pemasangan infrastruktur jaringan komputer, fiber optic, CCTV & access control, instalasi listrik, serta integrasi ruang data center.',
  navHeading: 'Navigasi',
  servicesHeading: 'Layanan',
  contactHeading: 'Hubungi Kami',
  copyright: 'Seluruh hak dilindungi.',
  serviceLinks: [
    { label: 'Structured Cabling', id: 'structured-cabling' },
    { label: 'Fiber Optic', id: 'fiber-optic' },
    { label: 'CCTV & Access Control', id: 'cctv-access' },
    { label: 'Listrik & UPS', id: 'listrik-ups' },
    { label: 'Data Center', id: 'data-center' },
    { label: 'Sistem Integrasi', id: 'integrasi' },
  ],
};

export const stats = [
  { value: '10+', label: 'Tahun Pengalaman' },
  { value: '150+', label: 'Proyek Selesai' },
  { value: '40+', label: 'Tenaga Ahli' },
  { value: '20+', label: 'Kota Dijangkau' },
];

export const defaultCta = {
  titleHtml: 'Siap Membangun <span class="accent">Infrastruktur Digital</span> Bersama Kami?',
  description:
    'Ceritakan kebutuhan proyek Anda. Tim kami siap memberikan konsultasi dan penawaran sesuai lingkup pekerjaan — dari perencanaan hingga serah terima.',
  button: 'Hubungi Tim Kami',
};

/* -------------------------------------------------------------------------- */
/* 10. DATA LAYANAN, PORTOFOLIO, TIM & NILAI                                  */
/* -------------------------------------------------------------------------- */
export interface Service {
  id: string;
  number: string;
  category: string;
  icon: string;
  navLabel: string;
  title: string;
  short: string;
  description: string;
  points: string[];
}

export const services: Service[] = [
  {
    id: 'structured-cabling',
    number: '01',
    category: 'CABLING',
    icon: 'cabling',
    navLabel: 'Structured Cabling',
    title: 'Pemasangan Kabel Jaringan (Structured Cabling System)',
    short: 'Pemasangan kabel jaringan komputer di dalam gedung, dari desain jalur hingga pengujian koneksi.',
    description:
      'Kami merancang dan memasang sistem kabel terstruktur untuk kebutuhan data dan voice di dalam gedung. Pekerjaan meliputi penentuan jalur kabel, pemasangan rack, patch panel, face plate, pengelolaan kabel, serta pengujian dan dokumentasi setiap titik koneksi.',
    points: [
      'Desain jalur kabel dan layout rack sesuai kebutuhan gedung',
      'Pemasangan kabel UTP/STP, patch panel, dan face plate',
      'Labeling, dokumentasi, dan pengujian setiap port',
    ],
  },
  {
    id: 'fiber-optic',
    number: '02',
    category: 'FIBER',
    icon: 'fiber',
    navLabel: 'Fiber Optic',
    title: 'Pemasangan Kabel Fiber Optic (Indoor & Outdoor)',
    short: 'Instalasi fiber optic di dalam maupun di luar ruangan, termasuk splicing dan pengujian link.',
    description:
      'Layanan instalasi kabel fiber optic untuk konektivitas jarak jauh dan bandwidth tinggi. Kami menangani penarikan kabel indoor dan outdoor, penyambungan (splicing), terminasi konektor, hingga pengujian kualitas link untuk memastikan performa jaringan optimal.',
    points: [
      'Penarikan kabel fiber optic indoor dan outdoor',
      'Splicing, terminasi, dan pemasangan optical distribution frame',
      'Pengujian loss dan sertifikasi kualitas link',
    ],
  },
  {
    id: 'cctv-access',
    number: '03',
    category: 'SECURITY',
    icon: 'cctv',
    navLabel: 'CCTV & Access Control',
    title: 'Jaringan CCTV & Access Control / Access Door',
    short: 'Pemasangan sistem pengawasan video dan kontrol akses pintu untuk keamanan area kerja.',
    description:
      'Kami membangun sistem keamanan fisik yang terintegrasi, meliputi pemasangan kamera CCTV, network video recorder, konfigurasi monitoring, serta pemasangan access control dan access door. Sistem dirancang agar mudah dipantau dan dikembangkan di kemudian hari.',
    points: [
      'Pemasangan kamera CCTV dan sistem perekaman',
      'Integrasi access control, access door, dan pencatatan akses',
      'Konfigurasi jaringan dan monitoring remote',
    ],
  },
  {
    id: 'listrik-ups',
    number: '04',
    category: 'POWER',
    icon: 'power',
    navLabel: 'Listrik & UPS',
    title: 'Instalasi Listrik, Panel Listrik & UPS',
    short: 'Pemasangan instalasi listrik, panel distribusi, dan UPS untuk suplai daya yang stabil.',
    description:
      'Kami menyediakan jasa instalasi listrik untuk kebutuhan operasional dan infrastruktur IT, termasuk pemasangan panel listrik, kabel power, grounding, dan sistem UPS. Pekerjaan dilakukan dengan memperhatikan keselamatan kerja dan standar instalasi yang berlaku.',
    points: [
      'Instalasi listrik dan panel distribusi',
      'Pemasangan sistem UPS dan manajemen daya',
      'Grounding dan pemeriksaan keselamatan instalasi',
    ],
  },
  {
    id: 'data-center',
    number: '05',
    category: 'DATACENTER',
    icon: 'datacenter',
    navLabel: 'Data Center',
    title: 'Perencanaan & Pembangunan Ruang Data Center',
    short: 'Pendampingan perencanaan hingga pembangunan ruang data center dan kelengkapannya.',
    description:
      'Kami mendampingi perencanaan dan pembangunan ruang data center, mulai dari tata letak rack, sistem pendingin, pengelolaan kabel, hingga kelengkapan pendukung seperti raised floor dan pencahayaan. Tujuannya menghasilkan ruang yang rapi, aman, dan mudah dipelihara.',
    points: [
      'Perencanaan layout rack dan sirkulasi ruangan',
      'Sistem pendingin, kabel management, dan dokumentasi',
      'Kelengkapan data center sesuai kebutuhan operasional',
    ],
  },
  {
    id: 'integrasi',
    number: '06',
    category: 'INTEGRATION',
    icon: 'integration',
    navLabel: 'Sistem Integrasi',
    title: 'Sistem Integrasi & Kelengkapan Data Center',
    short: 'Integrasi berbagai sistem menjadi satu kesatuan yang mudah dikelola dan scalable.',
    description:
      'Kami mengintegrasikan sistem jaringan, keamanan, kelistrikan, dan data center menjadi satu kesatuan yang mudah dikelola. Layanan ini juga mencakup kerapian kabel, labeling, dokumentasi as-built, serta optimasi terhadap infrastruktur yang sudah ada.',
    points: [
      'Integrasi antar sistem jaringan dan keamanan',
      'Dokumentasi as-built dan labeling yang konsisten',
      'Optimasi dan pendampingan infrastruktur existing',
    ],
  },
];

export interface Project {
  title: string;
  category: string;
  year: string;
  description: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: 'Gedung Kantor Korporat',
    category: 'STRUCTURED CABLING',
    year: '2025',
    description: 'Pemasangan sistem kabel terstruktur dan jaringan CCTV untuk area kerja multi-lantai.',
    image: href('/images/office-cabling.jpg'),
  },
  {
    title: 'Fasilitas Industri Manufaktur',
    category: 'FIBER OPTIC',
    year: '2025',
    description: 'Penarikan kabel fiber optic outdoor dan terminasi antar gedung produksi.',
    image: href('/images/factory.jpg'),
  },
  {
    title: 'Ruang Data Center Institusi',
    category: 'DATA CENTER',
    year: '2024',
    description: 'Perencanaan layout rack, kabel management, dan integrasi sistem pendingin.',
    image: href('/images/data-center.jpg'),
  },
  {
    title: 'Kampus Pendidikan',
    category: 'CCTV & ACCESS CONTROL',
    year: '2024',
    description: 'Pemasangan kamera pengawas dan access door di area gerbang dan gedung kuliah.',
    image: href('/images/campus.jpg'),
  },
  {
    title: 'Gedung Perkantoran Bersama',
    category: 'INSTALASI LISTRIK & UPS',
    year: '2024',
    description: 'Pemasangan panel listrik dan sistem UPS untuk mendukung peralatan IT tenant.',
    image: href('/images/office-building.jpg'),
  },
  {
    title: 'Fasilitas Kesehatan',
    category: 'SISTEM INTEGRASI',
    year: '2023',
    description: 'Integrasi jaringan, keamanan, dan dokumentasi as-built untuk area operasional.',
    image: href('/images/hospital.jpg'),
  },
];

export interface Member {
  name: string;
  role: string;
  note: string;
}

export const team: Member[] = [
  { name: '[ISI: Nama]', role: 'PROJECT MANAGER', note: 'Mengawasi perencanaan dan pelaksanaan proyek dari awal hingga serah terima.' },
  { name: '[ISI: Nama]', role: 'LEAD NETWORK ENGINEER', note: 'Bertanggung jawab atas desain dan implementasi jaringan serta sistem kabel.' },
  { name: '[ISI: Nama]', role: 'FIBER OPTIC SPECIALIST', note: 'Menangani penarikan, splicing, dan pengujian koneksi fiber optic.' },
  { name: '[ISI: Nama]', role: 'SECURITY SYSTEM ENGINEER', note: 'Fokus pada pemasangan dan konfigurasi CCTV serta access control.' },
  { name: '[ISI: Nama]', role: 'DATA CENTER SPECIALIST', note: 'Menangani layout rack, pendingin, dan integrasi ruang data center.' },
  { name: '[ISI: Nama]', role: 'ELECTRICAL TECHNICIAN', note: 'Melaksanakan instalasi listrik, panel, dan sistem pendukung daya.' },
  { name: '[ISI: Nama]', role: 'FIELD TECHNICIAN', note: 'Melaksanakan pemasangan lapangan dan dokumentasi pekerjaan.' },
  { name: '[ISI: Nama]', role: 'DRAFTER & DOCUMENTATION', note: 'Menyiapkan gambar kerja dan dokumentasi as-built proyek.' },
];

export const values = [
  { icon: 'shield', title: 'Kualitas', description: 'Pengerjaan yang rapi dan sesuai standar pada setiap detail instalasi.' },
  { icon: 'clock', title: 'Ketepatan Waktu', description: 'Komitmen menyelesaikan pekerjaan sesuai jadwal yang disepakati.' },
  { icon: 'users', title: 'Sumber Daya Manusia', description: 'Tim teknisi dan tenaga ahli yang berpengalaman di bidangnya.' },
  { icon: 'layers', title: 'Keberlanjutan', description: 'Solusi yang mudah dipelihara dan siap dikembangkan di masa depan.' },
];
