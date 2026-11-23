# Website PT. Rangrang Volar Sinergi (Rangvolar)

Website korporat statis berbasis **Astro**, dibangun dari desain **Opsi A — Corporate Trust** (tema terang:
navy + biru), dengan aksen warna yang diadaptasi dari logo perusahaan (hijau, oranye, coklat, biru-ungu).
Logo asli klien tersedia dalam tiga varian: `logo-transparent.png` (header), `logo-white.png` (footer),
dan `favicon-logo.png`.

## Menjalankan proyek

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # menghasilkan folder dist/
npm run preview    # pratinjau hasil build
```

## Struktur

```
src/
  components/   Header, Footer, BrandLogo, Icon, ServiceCard, dll.
  data/site.ts  Data layanan, portofolio, tim, dan nilai perusahaan
  layouts/      BaseLayout.astro (meta SEO, font, CSS global)
  pages/        index, about, team, services, portfolio, contact
  styles/       global.css (design system + responsif)
public/
  images/       Foto bebas lisensi (Unsplash) yang sudah diunduh lokal
  favicon.svg
docs/
  PERENCANAAN.md  Rencana kerja dan detail desain
  NARASI.md       Draf naskah konten
  mockups/        Mockup A & B dalam bentuk HTML
```

## Kontribusi foto

Foto dokumentasi di `public/images/` berasal dari [Unsplash](https://unsplash.com/license)
(lisensi gratis untuk penggunaan komersial, tanpa atribusi wajib).
Ilustrasi jaringan pada halaman Home serta ikon dibuat sebagai SVG — bebas lisensi.

## Yang masih perlu dilengkapi sebelum publikasi

Terdapat placeholder bertanda `[ISI: ...]` pada beberapa file. Silakan ganti dengan data resmi:

- `src/data/site.ts` — judul/nama proyek portofolio dan nama anggota tim
- `src/components/Footer.astro` — alamat, telepon, email
- `src/pages/about.astro` — visi dan misi perusahaan
- `src/pages/contact.astro` — alamat, telepon, email, dan integrasi backend formulir
- `src/data/site.ts` — angka statistik (tahun pengalaman, jumlah proyek, dll.) pada `StatBand.astro`

### Formulir kontak

Formulir saat ini memvalidasi input di sisi klien dan menampilkan pesan sukses.
Sebelum dipublikasikan, hubungkan ke backend atau layanan seperti Formspree / Web3Forms /
Netlify Forms. Titik integrasi ditandai dengan komentar `TODO` di `src/pages/contact.astro`.

## Domain

`astro.config.mjs` sudah disetel ke `https://www.rangvolar.com` untuk canonical URL dan metadata Open Graph.
