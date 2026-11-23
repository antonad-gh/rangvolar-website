# Website PT. Rangrang Volar Sinergi (Rangvolar)

Website korporat statis berbasis **Astro**, dibangun dari desain **Opsi A — Corporate Trust** (tema terang:
navy + biru), dengan aksen warna yang diadaptasi dari logo perusahaan (hijau, oranye, coklat, biru-ungu).
Logo asli klien tersedia dalam tiga varian: `logo-transparent.png` (header), `logo-white.png` (footer),
dan `favicon-logo.png`.

## URL publik (GitHub Pages)

**https://antonad-gh.github.io/rangvolar-website/**

Repository: https://github.com/antonad-gh/rangvolar-website

Situs di-deploy dari branch `gh-pages` yang berisi hasil build `dist/`.
Branch `main` berisi source code Astro.

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
  data/content.ts  ★ SEMUA TEKS SITUS — satu-satunya file yang perlu diedit untuk mengubah tulisan
  layouts/      BaseLayout.astro (meta SEO, font, CSS global)
  pages/        index, about, team, services, portfolio, contact
  styles/       global.css (design system + responsif)
public/
  images/       Foto bebas lisensi (Unsplash) yang sudah diunduh lokal
  favicon.svg
docs/
  PERENCANAAN.md  Rencana kerja dan detail desain
  NARASI.md       Draf naskah (ARSIP — bukan sumber teks situs; edit content.ts)
  mockups/        Mockup A & B dalam bentuk HTML
```

## Kontribusi foto

Foto dokumentasi di `public/images/` berasal dari [Unsplash](https://unsplash.com/license)
(lisensi gratis untuk penggunaan komersial, tanpa atribusi wajib). Foto hero kabel
(`pexels-cookiecutter-19166565.jpg`) berasal dari [Pexels](https://www.pexels.com/license/)
(juga bebas lisensi); versi web yang sudah dikompres ada di `hero-cabling.jpg` (279 KB).
Ikon-ikon antarmuka dibuat sebagai SVG — bebas lisensi.

## Mengubah teks situs (PENTING)

**Semua tulisan yang tampil di website ada di satu file: `src/data/content.ts`.**
Tidak perlu membuka file halaman satu per satu. Cukup edit nilai di file itu, lalu build ulang.

Bagian-bagian di dalam `content.ts`:

| Bagian | Berisi |
|---|---|
| `company` | Nama perusahaan, alamat, telepon, fax, email, jam operasional, tagline |
| `nav`, `header` | Label menu & tombol header |
| `home` | Hero, ticker, judul layanan, "Mengapa Kami", portofolio di Home |
| `about` | Profil, visi, misi, nilai perusahaan |
| `teamPage` | Judul halaman Tim & tombol CTA |
| `servicesPage` | Judul halaman Layanan & 4 langkah alur kerja |
| `portfolioPage` | Judul halaman Portofolio |
| `contactPage` | Judul, label form, pesan error, pesan sukses |
| `footerContent`, `stats`, `defaultCta` | Footer, angka statistik, CTA bawaan |
| `services`, `projects`, `team`, `values` | Isi layanan, proyek, anggota tim, nilai |

Data kontak sudah diisi: Jl. Puri Kartika Baru No.18 Sudimara Selatan · 021-7329074 · info@rangvolar.com.

### Membuat teks menjadi dua baris (enter / CR)

Ada **dua cara**, tergantung jenis field-nya:

**1. Field teks biasa** (contoh: `company.contact.address`, deskripsi, judul tanpa akhiran `Html`):
Ganti tanda kutip satu `'` dengan **backtick** `` ` ``, lalu tekan **Enter** di tempat yang ingin dipotong:

```ts
address: `Jl. Puri Kartika Baru No.18
Sudimara Selatan`,
```

Alternatifnya, tetap pakai tanda kutip satu dan tulis `\n`:

```ts
address: 'Jl. Puri Kartika Baru No.18\nSudimara Selatan',
```

Baris baru sudah didukung oleh CSS (`white-space: pre-line`), jadi langsung tampil di bawahnya.

**2. Field berakhiran `Html`** (contoh: `titleHtml`, `descriptionHtml`, `paragraphsHtml`):
Pakai tag HTML `<br />` di dalam teks:

```ts
titleHtml: 'Satu Mitra untuk Semua<br />Kebutuhan Infrastruktur',
```

> Catatan: mengetik `<br />` pada field teks **biasa** akan tampil sebagai tulisan `<br />`, bukan baris baru.
> Sebalumnya, menekan Enter pada field `...Html` juga tetap berfungsi, tetapi `<br />` lebih aman.

### Masih berupa placeholder

Cari `[ISI: ...]` di `src/data/content.ts` untuk mengganti:
- `about.visionMission.vision` dan `.mission` — visi & misi resmi
- `team` — nama 8 anggota tim (peran & deskripsi sudah diisi, tinggal ganti namanya)

Formulir kontak juga masih perlu dihubungkan ke backend/layanan email (lihat bagian di bawah).

### Formulir kontak

Formulir saat ini memvalidasi input di sisi klien dan menampilkan pesan sukses.
Sebelum dipublikasikan, hubungkan ke backend atau layanan seperti Formspree / Web3Forms /
Netlify Forms. Titik integrasi ditandai dengan komentar `TODO` di `src/pages/contact.astro`.

## Update situs di GitHub Pages

Setiap kali ada perubahan source:

```bash
npm run build
# lalu salin isi folder dist/ ke branch gh-pages dan push
```

Ringkasnya: build → copy `dist/*` ke working directory branch `gh-pages` → commit → push.
GitHub Pages akan otomatis memperbarui situs dalam beberapa menit.

**Penting:** file `.nojekyll` harus tetap ada di root `gh-pages` (sudah otomatis ikut dari `public/`).
Tanpa file ini, Jekyll mengabaikan folder `_astro` sehingga CSS/JS tidak termuat.

## Domain sendiri

Jika sudah ingin memakai `www.rangvolar.com`:

1. Tambahkan file `public/CNAME` berisi `www.rangvolar.com`.
2. Ubah `site` di `astro.config.mjs` menjadi `https://www.rangvolar.com` dan `base: '/'`.
3. Buat record DNS CNAME di pengaturan domain pointing ke `antonad-gh.github.io`.
4. Build ulang dan push ke `gh-pages`.

Sebelum itu, canonical URL dan Open Graph mengarah ke URL GitHub Pages.
