import { href } from '../utils/path';

export interface Service {
  id: string;
  number: string;
  category: string;
  icon: string;
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
