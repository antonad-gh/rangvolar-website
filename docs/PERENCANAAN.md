# Perencanaan Website — PT. Rangrang Volar Sinergi (Rangvolar)

**Situs:** https://www.rangvolar.com/ (saat ini *under construction*)  
**Perusahaan:** PT. Rangrang Volar Sinergi  
**Bidang:** Pekerjaan pembangunan & pemasangan infrastruktur jaringan komputer (fiber optic, Structured Cabling System), CCTV, access control / access door, serta manajemen dan integrasi pembangunan ruang data center.

---

## 1. Tujuan Website

- Menggantikan halaman *under construction* menjadi website korporat yang profesional dan informatif.
- Menampilkan keahlian, layanan, portofolio proyek, dan sumber daya manusia (team) perusahaan.
- Meningkatkan kepercayaan calon klien (B2B: gedung perkantoran, pabrik, rumah sakit, kampus, dll).
- Menyediakan jalur kontak yang jelas untuk permintaan penawaran / konsultasi.

## 2. Target Audiens

| Audiens | Kebutuhan |
|---|---|
| Facility / IT Manager perusahaan | Vendor pemasangan kabel & jaringan yang berpengalaman |
| Kontraktor / developer gedung | Subkontraktor infrastruktur low-voltage & data center |
| Pemerintah / BUMN / institusi | Penyedia jasa dengan legalitas & track record jelas |
| Calon mitra strategis | Informasi kapabilitas & cakupan layanan |

## 3. Struktur Halaman (Sesuai Menu Existing)

1. **Home** — Hero, ringkasan layanan, statistic perusahaan, CTA.
2. **About** — Profil PT. Rangrang Volar Sinergi, visi & misi, nilai perusahaan.
3. **Team** — Sumber daya manusia / teknisi bersertifikat (foto + peran).
4. **Services** — 6 layanan utama:
   - Pemasangan kabel jaringan komputer dalam gedung (Structured Cabling System)
   - Pemasangan jaringan CCTV & access control / access door
   - Pemasangan kabel fiber optic (indoor & outdoor)
   - Pemasangan instalasi listrik, panel listrik & UPS
   - Perencanaan & pembangunan ruang data center
   - Sistem integrasi & kelengkapan data center
5. **Portfolio** — Dokumentasi proyek yang telah dikerjakan (gambar + deskripsi + klien).
6. **Contact** — Formulir kontak, alamat, telepon, email, jam operasional, dan lokasi.

## 4. Dua Usulan Desain (Mockup)

### Opsi A — "Corporate Trust" (Profesional & Terang)
- **Kesan:** Bersih, korporat, mudah dipercaya, cocok untuk klien B2B & instansi pemerintah.
- **Warna:** Navy (`#0A1F44`), Biru electric (`#0B84FF`), Putih (`#FFFFFF`), Abu muda (`#F4F7FB`).
- **Tipografi:** Sans-serif modern (mis. Inter / Plus Jakarta Sans), judul tebal.
- **Layout Home:** Header sticky → Hero full-width dengan foto fiber optic/data center + overlay gelap → badan "Solusi Infrastruktur Jaringan & Data Center" + CTA → strip statistik → grid 6 kartu layanan dengan ikon → bagian "Mengapa Kami" → preview portofolio → CTA kontak → footer.
- **Kelebihan:** Terlihat resmi dan rapi, kontras tinggi, informatif.

### Opsi B — "Tech Edge" (Modern & Dinamis)
- **Kesan:** Teknologi, dinamis, berani, menonjolkan sisi teknis & integrasi.
- **Warna:** Dark slate (`#0F172A`), Orange/Amber (`#F59E0B`), Putih, Abu (`#94A3B8`).
- **Tipografi:** Sans-serif geometric (mis. Sora / Manrope), headline besar dengan aksen warna.
- **Layout Home:** Header gelap → Hero split (teks kiri + ilustrasi jaringan/data center kanan) → ticker layanan → kartu layanan bergaya "kode/teknis" → band statistik angka besar → showcase proyek bergaya katalog → CTA dengan latar aksen → footer gelap.
- **Kelebihan:** Lebih memorable, modern, menonjolkan identitas teknis perusahaan.

> Silakan pilih salah satu desain (A atau B) sebelum pembangunan dimulai.

## 5. Rencana Implementasi (Astro)

- **Framework:** Astro (static site generation) — cepat, SEO-friendly, cocok untuk website korporat.
- **Styling:** CSS vanilla / scoped Astro (tanpa framework JS berat).
- **Gambar:** Ilustrasi & foto bebas lisensi (Unsplash / Pexels / sumber CC0).
- **Struktur:**
  ```
  src/
    layouts/BaseLayout.astro
    components/Header.astro, Footer.astro, ServiceCard.astro, ...
    pages/index.astro, about.astro, team.astro, services.astro, portfolio.astro, contact.astro
    styles/global.css
  public/images/...
  ```
- **Fitur:**
  - Responsive (mobile, tablet, desktop)
  - SEO metadata (title, description, og tags)
  - Form kontak (client-side validasi; siap dihubungkan ke backend/email)
  - Smooth scroll & animasi ringan

## 6. Tahapan Pengerjaan

1. ✅ Riset & perencanaan (dokumen ini)
2. ⬜ Pembuatan 2 mockup visual (Opsi A & Opsi B)
3. ⬜ **Menunggu pilihan desain dari klien**
4. ⬜ Inisialisasi proyek Astro & styling sistem desain
5. ⬜ Pembuatan 6 halaman + komponen
6. ⬜ Pengisian narasi & gambar ilustrasi bebas lisensi
7. ✅ Testing responsif & build final (`npm run build`)

---

## 7. Hasil Akhir (Update)

- **Desain terpilih:** Awalnya Opsi B — Tech Edge, kemudian **diganti ke Opsi A — Corporate Trust (tema terang)**
  sesuai permintaan klien: latar putih/biru muda, aksen navy (`#0A1F44`) dan biru (`#0B84FF`).
- **Logo:** Memakai file logo asli klien (`public/images/logo.png`) dalam tiga varian:
  `logo-transparent.png` untuk header terang, `logo-white.png` untuk footer gelap, dan `favicon-logo.png`.
  Warna logo (hijau, oranye, coklat, biru-ungu) tetap dipakai sebagai aksen pendukung.
- **Mockup:** Karena kredit image generation tidak mencukupi, mockup dibuat dalam bentuk HTML/CSS
  (`docs/mockups/opsi-a-corporate-trust.html`, `opsi-b-tech-edge.html`, dan `index.html`).
- **Situs final:** Astro, 6 halaman, responsif, SEO metadata, formulir kontak dengan validasi,
  foto bebas lisensi yang disimpan lokal di `public/images/`, serta ilustrasi/ikon SVG buatan sendiri.
- **Status build:** Berhasil — 6 halaman ter-generate, tanpa error konsol.
- **Sebelum publikasi:** Lengkapi placeholder `[ISI: ...]` dan hubungkan formulir kontak ke backend/layanan email.
  Rincian ada di `README.md`.
